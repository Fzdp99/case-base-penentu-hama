const Index = require("./penentu_index");
const Kedekatan = require("../repositorys/data_kedekatan_kriteria");
const KasusHama = require("../repositorys/data_kasus_hama");
const Bobot = require("../repositorys/data_bobot");

module.exports = {
  async main(req) {
    const dataLama = await KasusHama.findAll();
    const bobot = await Bobot.bobotKriteriaTumbuhan();
    const indexDataBaru = await this.penentuIndex(req);
    let hasil = await this.perhitunganData(dataLama, bobot, indexDataBaru);
    hasil.sort(
      (a, b) => b.kedekatan_metode_jaccard - a.kedekatan_metode_jaccard
    );
    hasil = [hasil[0], hasil[1], hasil[2], hasil[3], hasil[4]];
    if (hasil[0].kedekatan_metode_jaccard !== 1) {
      const saveData = {
        ...req,
        hama: hasil[0].hama,
      };
      KasusHama.create(saveData);
    }
    const newData = {
      data_baru: req,
      hasil,
    };
    return newData;
  },

  async perhitunganData(dataLama, bobot, indexDataBaru) {
    var hasilSimilarity = [];
    for (let i = 0; i < dataLama.length; i++) {
      const indexDataLama = await this.penentuIndex(dataLama[i]);
      const nilaiKedekatan = await this.penentuNilaiKedekatan(
        indexDataBaru,
        indexDataLama
      );
      const nilaiSimilarityJ = await this.metode1(nilaiKedekatan, bobot);
      const nilaiSimilarityE = await this.metode2(nilaiKedekatan, bobot);
      const newData = {
        pertumbuhan: dataLama[i].pertumbuhan,
        varietas: dataLama[i].varietas,
        musim: dataLama[i].musim,
        kondisi_daun: dataLama[i].kondisi_daun,
        kondisi_buah: dataLama[i].kondisi_buah,
        kondisi_batang: dataLama[i].kondisi_batang,
        kondisi_anakan: dataLama[i].kondisi_anakan,
        kondisi_fisik: dataLama[i].kondisi_fisik,
        hama: dataLama[i].hama,
        kedekatan_metode_jaccard: nilaiSimilarityJ,
        kedekatan_metode_ecludiean: nilaiSimilarityE,
      };
      hasilSimilarity.push(newData);
    }
    return hasilSimilarity;
  },

  metode2(nilaiKedekatan, bobot) {
    const ecludiean = Math.sqrt(
      Math.pow(nilaiKedekatan.pertumbuhan - bobot.pertumbuhan, 2) +
        Math.pow(nilaiKedekatan.varietas - bobot.varietas, 2) +
        Math.pow(nilaiKedekatan.musim - bobot.musim, 2) +
        Math.pow(nilaiKedekatan.kondisi_daun - bobot.kondisi_daun, 2) +
        Math.pow(nilaiKedekatan.kondisi_buah - bobot.kondisi_buah, 2) +
        Math.pow(nilaiKedekatan.kondisi_batang - bobot.kondisi_batang, 2) +
        Math.pow(nilaiKedekatan.kondisi_anakan - bobot.kondisi_anakan, 2) +
        Math.pow(nilaiKedekatan.kondisi_fisik - bobot.kondisi_fisik, 2)
    );
    return ecludiean;
  },

  async metode1(nilaiKedekatan, bobot) {
    const nilai1 =
      nilaiKedekatan.pertumbuhan * bobot.pertumbuhan +
      nilaiKedekatan.varietas * bobot.varietas +
      nilaiKedekatan.musim * bobot.musim +
      nilaiKedekatan.kondisi_daun * bobot.kondisi_daun +
      nilaiKedekatan.kondisi_buah * bobot.kondisi_buah +
      nilaiKedekatan.kondisi_batang * bobot.kondisi_batang +
      nilaiKedekatan.kondisi_anakan * bobot.kondisi_anakan +
      nilaiKedekatan.kondisi_fisik * bobot.kondisi_fisik;
    const nilai2 =
      bobot.pertumbuhan +
      bobot.varietas +
      bobot.musim +
      bobot.kondisi_daun +
      bobot.kondisi_buah +
      bobot.kondisi_batang +
      bobot.kondisi_anakan +
      bobot.kondisi_fisik;
    return nilai1 / nilai2;
  },

  async penentuIndex(data) {
    const pertumbuhan = await Index.indexPertumbuhan(
      data.pertumbuhan.toLowerCase()
    );
    const varietas = await Index.indexVarietas(data.varietas.toLowerCase());
    const musim = await Index.indexMusim(data.musim.toLowerCase());
    const kondisi_daun = await Index.indexDaun(data.kondisi_daun.toLowerCase());
    const kondisi_buah = await Index.indexBuah(data.kondisi_buah.toLowerCase());
    const kondisi_batang = await Index.indexBatang(
      data.kondisi_batang.toLowerCase()
    );
    const kondisi_anakan = await Index.indexAnakan(
      data.kondisi_anakan.toLowerCase()
    );
    const kondisi_fisik = await Index.indexFisik(
      data.kondisi_fisik.toLowerCase()
    );

    const newData = {
      pertumbuhan,
      varietas,
      musim,
      kondisi_daun,
      kondisi_buah,
      kondisi_batang,
      kondisi_anakan,
      kondisi_fisik,
    };

    return newData;
  },

  async penentuNilaiKedekatan(indexDataBaru, indexDataLama) {
    const pertumbuhan = await Kedekatan.pertumbuhan(
      indexDataBaru.pertumbuhan,
      indexDataLama.pertumbuhan
    );
    const varietas = await Kedekatan.varietas(
      indexDataBaru.varietas,
      indexDataLama.varietas
    );
    const musim = await Kedekatan.musim(
      indexDataBaru.musim,
      indexDataLama.musim
    );
    const kondisi_daun = await Kedekatan.kondisi_daun(
      indexDataBaru.kondisi_daun,
      indexDataLama.kondisi_daun
    );
    const kondisi_buah = await Kedekatan.kondisi_buah(
      indexDataBaru.kondisi_buah,
      indexDataLama.kondisi_buah
    );
    const kondisi_batang = await Kedekatan.kondisi_batang(
      indexDataBaru.kondisi_batang,
      indexDataLama.kondisi_batang
    );
    const kondisi_anakan = await Kedekatan.kondisi_anakan(
      indexDataBaru.kondisi_anakan,
      indexDataLama.kondisi_anakan
    );
    const kondisi_fisik = await Kedekatan.kondisi_fisik(
      indexDataBaru.kondisi_fisik,
      indexDataLama.kondisi_fisik
    );
    return {
      pertumbuhan,
      varietas,
      musim,
      kondisi_daun,
      kondisi_buah,
      kondisi_batang,
      kondisi_anakan,
      kondisi_fisik,
    };
  },
};
