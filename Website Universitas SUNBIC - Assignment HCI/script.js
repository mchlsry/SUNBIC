// registrasi
const forum = document.getElementById('forum_regis')
const nama_lengkap = document.getElementById('nama_lengkap')
const no_telp = document.getElementById('no_telp')
const email = document.getElementById('email')
const pendidikan = document.getElementById('pendidikan')
const asal_sekolah = document.getElementById('asal_sekolah')
const kesalahan = document.getElementById('kesalahan')

forum.addEventListener('submit', (aktivitas) => {
    if(nama_lengkap.value=="" || nama_lengkap.value == null){
        aktivitas.preventDefault()
        kesalahan.innerHTML="Nama lengkap harus diisi"
    }
    else if(no_telp.value=="" || no_telp.value == null){
        aktivitas.preventDefault()
        kesalahan.innerHTML="Nomor telepon harus diisi"
    }
    else if(no_telp.value.length<=9){
        aktivitas.preventDefault()
        kesalahan.innerHTML="Nomor telepon minimal 10 angka"
    }
    else if(email.value=="" || email.value == null){
        aktivitas.preventDefault()
        kesalahan.innerHTML="E-mail harus diisi"
    }
    else if(!email.value.endsWith("@gmail.com") && !email.value.endsWith("@yahoo.co.id")){
        aktivitas.preventDefault()
        kesalahan.innerHTML="E-mail harus @gmail.com atau @yahoo.co.id"
    }
    else if(pendidikan.value=="pilih"){
        aktivitas.preventDefault()
        kesalahan.innerHTML="Pendidikan harus dipilih"
    }
    else if(asal_sekolah.value=="" || asal_sekolah.value == null){
        aktivitas.preventDefault()
        kesalahan.innerHTML="Asal sekolah harus diisi"
    }
    else{
        alert("Forum Anda telah berhasil dikirim")
    }
})
