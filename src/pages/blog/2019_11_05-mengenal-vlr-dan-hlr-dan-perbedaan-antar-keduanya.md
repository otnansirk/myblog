---
date: '2019-11-05 11:38'
path: /mengenal-VLR-dan-HLR-dan-perbedaan-antar-keduanya
thumbnail: /assets/copy-of-learn-1-.png
tags:
  - Belajar Seputar Telekomunikasi
label: Network
author: Kris
---
# **HLR (Home Location Register)**

Masih banyak yang belum tahu apa hubungan **HLR** dengan telekomunikasi / kartu perdana. Bahkan jarang dari kita mendengan kata **HLR** ini. 

Dikutip dari Wikipedia **HLR** adalah  database pusat yang berisi rincian data dan informasi dari setiap pelanggan ponsel  untuk menggunakan jaringan GSM agar disimpan secara permanen. 

HLR hanya digunakan di SIM Card GSM saja tidak di SDMA. 

Jadi setiap pelanggan / pengguna SIM Card selalu menyimpan data / pengenal unix yang dikeluarkan pihak operator untuk berselancar di sebuah jaringan telekomunikasi. pengenal unix ini disebut dengan IMSI (International Mobile Subcriber Identity) yang merupakan kunci utama untuk identity setiap record pada **HLR.** 

**HLR** di SIM Card digunakan untuk membagi wilayah penyebaran SIM Card sesuai dengan penomoran yang digunakan oleh masing-masing operator.

Sebagai contoh nya misalkan kamu membeli perdana INDOSAT M3 dengan nomor awalan 0856254....... . Ini berati nomormu memiliki base domain register yang berada di area YOGYAKARTA. berati nomor INDOSAR M3 dengan awalan 0856254 ditujukan untuk wilayak YOGYAKARTA.

Nah dari **HLR** ini makanya saat kita menggunakan kartu GSM nomor kita terkena roaming, itu karena kita sudah keluar dari base domain register dimana kartu kita berasal.  Tapi tenang saja karena operator sekarang sudah tidak memberlakukan roaming jika masih berada diwilayah indonesia.

# **VLR** **(Visitor Location Register)**

**VLR** adalah data base pelanggan yang bersifat dinamis, karena selalu berubah setiap pelanggan memasuki area tertentu. Data yang tersimpan sebagai **VLR** otomatis akan selalu berubah mengikuti pergerakan pelanggannya. dengan ini memungkinkan untuk memonitor pergerakan dari pelanggan secara terus-menerus dan memungkinkan interkoneksi antar pelanggan yang lain. **VLR** juga masih selalu berhubungan dengan **HLR** sebagai sumber datanya.

Dari sini **VLR** juga berfungsi untuk penyimpana data dan informasi pelanggan tapi dimulai pada saat pelanggan memasuki wilayah yang bernaung dalam **VLR** (itulah kenapa ada istilah yang namanya roaming). Dengan adanya data ini dalam **VLR** memungkinkan kita untuk incoming call dan outgoing call dengan baik.
