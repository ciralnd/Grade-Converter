/*

<!-- Praktikum Pemrograman Web -->
<!-- Cira Alandia -->
<!-- 221051135 // Kelas D -->

Ini adalah file javascript untuk nomor 1

*/

// Fungsi untuk menghitung nilai dan menampilkan predikat berdasarkan nilai
function hitungNilai() {
  // Mengambil nilai dari input dengan id "nilai" dan mengonversi ke tipe float
  let nilai = parseFloat(document.getElementById("nilai").value);

  // Memanggil fungsi hitungPredikat() untuk menghitung predikat berdasarkan nilai
  let predikat = hitungPredikat(nilai);

  // Menampilkan nilai dan predikat di dalam elemen HTML dengan id "nilai-angka" dan "predikat".
  document.getElementById("nilai-angka").innerHTML = nilai;
  document.getElementById("predikat").innerHTML = predikat;
}

// Fungsi untuk menghitung predikat berdasarkan nilai yang diterima sebagai parameter
function hitungPredikat(nilai) {
  // Array objek predikat dengan batas nilai dan predikat yang sesuai
  const predikat = [
      { batas: 90, predikat: "A" },
      { batas: 80, predikat: "B" },
      { batas: 70, predikat: "C" },
      { batas: 60, predikat: "D" },
  ];

  // Melakukan iterasi pada array untuk mencari predikat yang sesuai dengan nilai
  for (let i = 0; i < predikat.length; i++) {
      if (nilai >= predikat[i].batas) {
          return predikat[i].predikat; // Mengembalikan predikat jika nilai lebih besar dari atau sama dengan batas
      }
  }

  return "E"; // Mengembalikan predikat E jika nilai tidak memenuhi batas predikat lainnya
}
