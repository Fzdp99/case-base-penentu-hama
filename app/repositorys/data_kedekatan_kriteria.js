module.exports = {
  musim(index1, index2) {
    const data = [
      [1, 0],
      [0, 1],
    ];
    return data[index1][index2];
  },
  pertumbuhan(index1, index2) {
    const data = [
      [1, 0.9, 0.8, 0.75, 0.6, 0.5, 0.4, 0.3, 0.2, 0.1],
      [0.9, 1, 0.9, 0.8, 0.7, 0.6, 0.5, 0.4, 0.2, 0.1],
      [0.8, 0.9, 1, 0.8, 0.75, 0.75, 0.7, 0.65, 0.6, 0.5],
      [0.75, 0.8, 0.8, 1, 0.75, 0.75, 0.7, 0.7, 0.65, 0.6],
      [0.6, 0.7, 0.75, 0.75, 1, 0.75, 0.75, 0.7, 0.65, 0.6],
      [0.5, 0.6, 0.75, 0.75, 0.75, 1, 0.75, 0.7, 0.6, 0.6],
      [0.4, 0.5, 0.7, 0.7, 0.75, 0.75, 1, 0.75, 0.7, 0.6],
      [0.3, 0.4, 0.65, 0.7, 0.7, 0.7, 0.75, 1, 0.75, 0.7],
      [0.2, 0.2, 0.6, 0.65, 0.65, 0.6, 0.7, 0.75, 1, 0.9],
      [0.1, 0.1, 0.5, 0.6, 0.6, 0.6, 0.6, 0.7, 0.9, 1],
    ];
    return data[index1][index2];
  },
  varietas(index1, index2) {
    const data = [
      [1, 0.9, 0.6, 0.7],
      [0.9, 1, 0.5, 0.6],
      [0.6, 0.5, 1, 0.5],
      [0.7, 0.6, 0.5, 1],
    ];
    return data[index1][index2];
  },
  kondisi_daun(index1, index2) {
    const data = [
      [1, 0.6, 0.55, 0.05],
      [0.6, 1, 0.8, 0.05],
      [0.55, 0.8, 1, 0.05],
      [0.05, 0.05, 0.05, 1],
    ];
    return data[index1][index2];
  },
  kondisi_buah(index1, index2) {
    const data = [
      [1, 0.75, 0.05, 0.2],
      [0.75, 1, 0.05, 0.7],
      [0.05, 0.05, 1, 0.6],
      [0.2, 0.7, 0.6, 1],
    ];
    return data[index1][index2];
  },
  kondisi_batang(index1, index2) {
    const data = [
      [1, 0.7, 0.4],
      [0.7, 1, 0.5],
      [0.4, 0.5, 1],
    ];
    return data[index1][index2];
  },
  kondisi_anakan(index1, index2) {
    const data = [
      [1, 0.6],
      [0.6, 1],
    ];
    return data[index1][index2];
  },
  kondisi_fisik(index1, index2) {
    const data = [
      [1, 0.7],
      [0.7, 1],
    ];
    return data[index1][index2];
  },
  hama_penyerang(index1, index2) {
    const data = [
      [1, 0.1, 0.1, 0.05, 0.05, 0, 0.4, 0.4],
      [0.1, 1, 0.7, 0.65, 0.6, 0, 0.5, 0.6],
      [0.1, 0.7, 1, 0.3, 0.5, 0, 0.4, 0.3],
      [0.05, 0.65, 0.3, 1, 0.7, 0, 0.7, 0.3],
      [0.05, 0.6, 0.5, 0.7, 1, 0, 0.6, 0.5],
      [0, 0, 0, 0, 0, 1, 0, 0],
      [0.4, 0.5, 0.4, 0.7, 0.6, 0, 1, 0.3],
      [0.4, 0.6, 0.3, 0.3, 0.5, 0, 0.3, 1],
    ];
    return data[index1][index2];
  },
  harga_product(index1, index2) {
    const data = [
      [1, 0.8, 0.6, 0.4, 0.2, 0.1],
      [0.8, 1, 0.65, 0.45, 0.3, 0.2],
      [0.6, 0.65, 1, 0.6, 0.4, 0.3],
      [0.4, 0.45, 0.6, 1, 0.7, 0.5],
      [0.2, 0.3, 0.4, 0.7, 1, 0.75],
      [0.1, 0.2, 0.3, 0.5, 0.75, 1],
    ];
    return data[index1][index2];
  },
};
