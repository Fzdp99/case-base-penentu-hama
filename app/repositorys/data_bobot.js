module.exports = {
  bobotKriteriaTumbuhan() {
    const data = {
      pertumbuhan: 0.8,
      varietas: 0.85,
      musim: 0.78,
      kondisi_daun: 0.7,
      kondisi_buah: 0.7,
      kondisi_batang: 0.65,
      kondisi_anakan: 0.75,
      kondisi_fisik: 0.6,
    };
    return data;
  },
  bobotKriteriaHama() {
    const data = {
      hama_penyerang: 0.85,
      harga_pestisida: 0.7,
    };
    return data;
  },
};
