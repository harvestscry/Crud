document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Mencegah pengiriman form secara default

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Validasi username dan password (misalnya, hardcoded untuk contoh ini)
    if (username === 'admin' && password === 'password') {
        sessionStorage.setItem('isLoggedIn', 'true'); // Set status login
        window.location.href = 'index.html'; // Arahkan ke index.html setelah login berhasil
    } else {
        alert('Username atau password salah. Silakan coba lagi.');
    }
});
