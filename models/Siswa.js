const mongoose = require('mongoose')

const SiswaSchema = new mongoose.Schema({
    nis: {
        type: String,
        require: [true, 'Silakan isikan nis'],
        unique: true
    },

    nama: {
        type: String,
        require: [true, 'Silakan isikan nama'],
        
    },

    tgllahir: {
        type: String,
        require: [true, 'Silakan isikan tanggal lahir'],
        
    },

    kelas: {
        type: String,
        require: [true, 'Silakan isikan kelas'],
       
    },

    jurusan: {
        type: String,
        require: [true, 'Silakan isikan jurusan'],
        
    },

    alamat: {
        type: String,
        require: [true, 'Silakan isikan alamat'],
       
    },

    email: {
        type: String,
        required: true,
        unique: true,
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Silakan isi email yang valid']
    }
})

module.exports = mongoose.model('Siswa', SiswaSchema)