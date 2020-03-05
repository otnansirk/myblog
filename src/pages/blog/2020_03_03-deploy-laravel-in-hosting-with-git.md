---
date: '2020-02-28 08:09'
path: /Deploy-laravel-in-hosting-with-GIT
thumbnail: /assets/default-image.png
tags:
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
label: Hosting
author: Kris
---
> **Persiapan**

Pertama pastikan hosting memiliki fitur ssh

masuk hosting dengan SSH

```
ssh usernameMU@domainmu.com -p porthostingmu
```

biasanya postynya **64000**

generate key 

```
ssh-keygen -t ecdsa -C "ISI email mu atau string yang lain untuk penanda ssh key mu"
```

lalu dapatkan ssh key dengan

```
cat .ssh/id_ecdsa.pub
```

setelah itu masukkan key tersebut ke dalam keys yang berada di settingan akun git kalian (e.g. Gitlab atau Github).

setelah itu masuk lagi ke ssh hosting dan clone project yang ada di repository dan jalankan aplikasi seperti biasa.

> **Pointing ke domain.**

Masuk ke cpanel lalu tambahkan domain di menu add adons domain

masukkan nama domain dan jangan lupa dir root nya ke folder project laravel (e.g. namaProject/public).

gunakan /public karena disanalah tempat index.php dari laravel.

> **Setting DNS Zone Manager di akun domain.**

pastikan Host name domain type A ke alamat address cpanel dimana tempat laravel dideploy sebelumnya.

**Pasang ssh_key local ke hosting (_untuk login hosting dengan ssh tanpa password)_** 

generate ssh_key di local komputer dan dapatkan ssh_key caranya sama sperti di atas(_tahap persiapan_).

masuk lagi ke hosting dengan ssh lalu pergi ke folder `.ssh/` dan pastekan ssh_key local ke dalam file `authorized_keys` lalu save.
