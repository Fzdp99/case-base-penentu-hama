const Index = require("./penentu_index");
const Kedekatan = require("../repositorys/data_kedekatan_kriteria");
const KasusPestisida = require("../repositorys/data_kasus_pestisida");
const Bobot = require("../repositorys/data_bobot");

module.exports = {
  async main(req) {
    const dataLama = await KasusPestisida.findAll();
    const bobot = await Bobot.bobotKriteriaHama();
    const indexDataBaru = await this.penentuIndex(req);
    var hasil = await this.perhitunganData(dataLama, bobot, indexDataBaru);
    hasil.sort((a, b) => b.kedekatan - a.kedekatan);
    hasil = [hasil[0], hasil[1], hasil[2], hasil[3], hasil[4]];
    if (hasil[0].kedekatan !== 1) {
      const saveData = {
        ...req,
        pestisida: hasil[0].pestisida,
      };
      KasusPestisida.create(saveData);
    }
    const newData = {
      data_baru: req,
      hasil,
    };
    return newData;
  },

  async penentuIndex(data) {
    const hama = await Index.indexHama(data.hama.toLowerCase());
    const harga = await Index.indexHargaPestisida(data.harga.toLowerCase());
    const newdata = {
      hama,
      harga,
    };
    return newdata;
  },

  async perhitunganData(dataLama, bobot, indexDataBaru) {
    var hasilSimilarity = [];
    for (let i = 0; i < dataLama.length; i++) {
      const indexDataLama = await this.penentuIndex(dataLama[i]);
      const nilaiKedekatan = await this.penentuNilaiKedekatan(
        indexDataBaru,
        indexDataLama
      );
      const nilaiSimilarity = await this.knn(nilaiKedekatan, bobot);
      const newData = {
        hama: dataLama[i].hama,
        harga: dataLama[i].harga,
        pestisida: dataLama[i].pestisida,
        kedekatan: nilaiSimilarity,
      };
      hasilSimilarity.push(newData);
    }
    return hasilSimilarity;
  },

  async penentuNilaiKedekatan(indexDataBaru, indexDataLama) {
    const hama = await Kedekatan.hama_penyerang(
      indexDataBaru.hama,
      indexDataLama.hama
    );
    const harga = await Kedekatan.harga_product(
      indexDataBaru.harga,
      indexDataLama.harga
    );
    return {
      hama,
      harga,
    };
  },

  knn(nilaiKedekatan, bobot) {
    const ecludiean = Math.sqrt(
      Math.pow(nilaiKedekatan.hama - bobot.hama_penyerang, 2) +
        Math.pow(nilaiKedekatan.harga - bobot.harga_pestisida, 2)
    );
    return ecludiean;
  },

  // async perhitunganSimilarity(nilaiKedekatan, bobot) {
  //   const nilai1 =
  //     nilaiKedekatan.hama * bobot.hama_penyerang +
  //     nilaiKedekatan.harga * bobot.harga_pestisida;
  //   const nilai2 = bobot.hama_penyerang + bobot.harga_pestisida;
  //   return nilai1 / nilai2;
  // },
};
