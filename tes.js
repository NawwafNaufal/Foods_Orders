const bcrypt = require('bcrypt');

// Password dan hash yang ingin diverifikasi
const password = 'icha'; // Password yang dimasukkan pengguna
const hash = '$2b$10$g.3uJQQa8WOfQZQqy4iwje8OLbUY9pUP0AeMXztgOCj...'; // Hash dari database

// Periksa apakah password cocok dengan hash
const verifyPassword = async (password, hash) => {
    try {
        const match = await bcrypt.compare(password, hash);
        console.log("Password Match:", match); // true jika cocok, false jika tidak
        return match;
    } catch (error) {
        console.error('Error verifying password:', error);
    }
};

verifyPassword(password, hash);
