// Fungsi menampilkan pesan
function tampilPesan() {
    const hasil = document.getElementById('hasil');
    hasil.innerHTML = "<p>✅ Halo! Ini kode JavaScript yang berfungsi!</p>";
}

// Fungsi menghitung angka 1-10
function hitungAngka() {
    let hasil = document.getElementById('hasil');
    let teks = "<p>🔢 Menghitung: ";
    
    for (let i = 1; i <= 10; i++) {
        teks += i + " ";
    }
    
    teks += "</p>";
    hasil.innerHTML = teks;
}

// Pesan di konsol
console.log("Proyek JavaScript siap digunakan!");
