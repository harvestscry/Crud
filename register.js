// Mendapatkan elemen form pendaftaran
const registerForm = document.getElementById('registerForm');

// Menangani pengiriman form pendaftaran
registerForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Mencegah pengiriman form secara default

    const username = document.getElementById('newUsername').value;
    const password = document.getElementById('newPassword').value;

    // Simpan data pengguna ke Local Storage
    localStorage.setItem('username', username);
    localStorage.setItem('password', password);

    alert('Pendaftaran berhasil! Anda sekarang dapat login.');

    // Redirect ke halaman login
    window.location.href = 'login.html';
});
