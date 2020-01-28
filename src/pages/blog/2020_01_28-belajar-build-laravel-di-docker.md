---
date: '2020-01-28 12:06'
path: /belajar-build-laravel-di-docker
thumbnail: /assets/docker-laravel.png
tags:
  - Belajar Docker
  - Belajar Laravel
  - Belajar Koding
  - Atom Editor
  - Belajar Codeigniter
  - Belajar Jekyll
  - Belajar Flutter
  - Belajar JavaScript
  - Belajar Laravel
  - CI 4 Codeigniter
  - Codeigniter 4
  - Belajar CSS
  - Belajar Git
  - Belajar Slim
  - VS Code Editor
label: Laravel
author: Akarsa
---
Belajar docker yuk . 
nah kali ini aku mau share gimana cara membuat docker file untuk 
laravel. kenapa laravel karena menurutku laravel sudah banyak dikenal sehingga tak perlu lagi kita ulas di tutorial ini,
karena fokus kita ke dockernya saja.

Langsung saja 

buat Dockerfile di root project laravelnya.

setelah itu ketikkan script dibawah kedalam file Dockerfile yang sudah dibuat

```
FROM php:7.2-apache

RUN apt-get update -y && install -y openssl zip unzip git
RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer
RUN docker-php-ext-install pdo mbstring pdo_mysql

WORKDIR /app
COPY . /app
RUN composer install

CMD php artisan serve --host=0.0.0.0 --port=8080
EXPOSE 8080
```

## **Penjelasan** dari kode diatas sebagai berikut :

```
FROM php:7.2-apache
```

artinya kita menggunakan image lain yaitu php versi 7.2 yang sudah include dengan apache didalamnya

```
RUN apt-get update -y && install -y openssl zip unzip git
RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer
RUN docker-php-ext-install pdo mbstring pdo_mysql
```

Baris ini kita menginstall semua yang di butuhkan oleh laravel.
dan menginstall PHP Modulenya

```
WORKDIR /app
COPY . /app
RUN composer install
```

Baris ini mengatur direktori di container, lalu menyalin aplikasi kita ke dalam /app
dan selanjutnya jalankan composer.

```
CMD php artisan serve --host=0.0.0.0 --port=8080
```

Baris ini akan menjalankan image yang sudah kita buat. laravel menggunakan php artisan lalu set port ke 8080

```
EXPOSE 8080
```

Baris ini akan expose port 8080 keluar container sehingga bisa kita gunakan diluar container.

Mungkin kira-kira seperti itu penjelasan dari script di atas.
Selanjutnya kita build imagenya Sebagai berikut : 

```
docker build -t image-laravel-ku .
```

parameter `-t` adalah tag option dari image dan `.` pada akhir baris artinya kita akan build image dari direktori aktif sekarang.
yang nantinya file yang ada akan di copy ke direktori `/app`

Okeee mantap sekarang kita jalankan docker nya dengan `docker run`.

```
docker run -p 8000:8080 image-laravel-ku
```

Sekarang coba akses dari browser dengan url `http://localhost:8080`.

Sudah, seharusnya sampai step ini kalian sudah bisa build laravel dengan docker .
