// Mendapatkan elemen form dan input
const loginForm = document.getElementById('loginForm');
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');

// Menangani pengiriman form
loginForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Mencegah pengiriman form secara default

    const username = usernameInput.value;
    const password = passwordInput.value;

    // Mendapatkan data pengguna dari Local Storage
    const storedUsername = localStorage.getItem('username');
    const storedPassword = localStorage.getItem('password');

    // Validasi username dan password
    if (username === storedUsername && password === storedPassword) {
        alert('Login berhasil!');
        // Redirect ke halaman utama atau dashboard
        window.location.href = 'index.html'; // Ganti dengan halaman yang sesuai
    } else {
        alert('Username atau password salah. Silakan coba lagi.');
    }
});


