module.exports = {
  indexPertumbuhan(data) {
    var pertumbuhan;
    if (data == "t0") {
      pertumbuhan = 0;
    } else if (data == "t1") {
      pertumbuhan = 1;
    } else if (data == "t2") {
      pertumbuhan = 2;
    } else if (data == "t3") {
      pertumbuhan = 3;
    } else if (data == "t4") {
      pertumbuhan = 4;
    } else if (data == "t5") {
      pertumbuhan = 5;
    } else if (data == "t6") {
      pertumbuhan = 6;
    } else if (data == "t7") {
      pertumbuhan = 7;
    } else if (data == "t8") {
      pertumbuhan = 8;
    } else {
      pertumbuhan = 9;
    }
    return pertumbuhan;
  },

  indexVarietas(data) {
    var varietas;
    if (data == "ir-64") {
      varietas = 0;
    } else if (data == "ciherang") {
      varietas = 1;
    } else if (data == "inpari-23") {
      varietas = 2;
    } else {
      varietas = 3;
    }
    return varietas;
  },

  indexMusim(data) {
    var musim;
    if (data == "panas") {
      musim = 0;
    } else {
      musim = 1;
    }
    return musim;
  },

  indexDaun(data) {
    var daun;
    if (data == "normal") {
      daun = 0;
    } else if (data == "kuning") {
      daun = 1;
    } else if (data == "bintik") {
      daun = 2;
    } else {
      daun = 3;
    }
    return daun;
  },

  indexBuah(data) {
    var buah;
    if (data == "normal") {
      buah = 0;
    } else if (data == "bintik") {
      buah = 1;
    } else if (data == "habis") {
      buah = 2;
    } else {
      buah = 3;
    }
    return buah;
  },

  indexBatang(data) {
    var batang;
    if (data == "normal") {
      batang = 0;
    } else if (data == "layu") {
      batang = 1;
    } else {
      batang = 2;
    }
    return batang;
  },

  indexAnakan(data) {
    var anakan;
    if (data == "normal") {
      anakan = 0;
    } else {
      anakan = 1;
    }
    return anakan;
  },

  indexFisik(data) {
    var fisik;
    if (data == "normal") {
      fisik = 0;
    } else {
      fisik = 1;
    }
    return fisik;
  },

  indexHama(data) {
    var hama;
    if (data == "wareng hijau") {
      hama = 0;
    } else if (data == "ulat gerayak") {
      hama = 1;
    } else if (data == "hama putih") {
      hama = 2;
    } else if (data == "walang sangit") {
      hama = 3;
    } else if (data == "tikus") {
      hama = 4;
    } else if (data == "keong emas") {
      hama = 5;
    } else if (data == "penggerek batang") {
      hama = 6;
    } else {
      hama = 7;
    }
    return hama;
  },

  indexHargaPestisida(data) {
    var harga;
    if (data == "hrg1") {
      harga = 0;
    } else if (data == "hrg2") {
      harga = 1;
    } else if (data == "hrg3") {
      harga = 2;
    } else if (data == "hrg4") {
      harga = 3;
    } else if (data == "hrg5") {
      harga = 4;
    } else {
      harga = 5;
    }
    return harga;
  },
};
