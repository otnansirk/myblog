---
date: '2019-10-26 00:26'
path: /belajar-git-untuk-pemula-step-by-step
thumbnail: /assets/learn-3-.png
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
label: GIT
author: Kris
---
Beberapa hari yang lalu saya coba buka-buka repository github dari serior saya
[@akuikialie](https://github.com/akuikialie)
dan saya menemukan kembali E-book yang menjadi dasar saya belajar git dengan judul
`git-pinter`. Dari situ lah tulisan ini tercipta. 😄.

> Hallo, [@akuikialie](https://github.com/akuikialie)<br>
> _Nama aslinya adalah "Achmad Ali Liesmana", Seorang backend developer di salah satu perusahaan Muslim di surabaya._

Enaknya pake git bisa membuat versioning di dalam project kerja kita. dan git tidak juga digunakan untuk versioning source code.
Tapi, juga bisa untuk kalian para `mahasiswa` yang sedang melakukan tugas panjang. seperti `scripsi`. <br>
Misal saja kita membuat laporan di dalam MS-Word, kita bisa memanfaatkan `git` ini untuk versioning scripsi kita,
Jadi tidak perlu takut data hilang, kedelete dll. Karena git akan menyimpan perubahan-perubahan walau hanya satu space saja.

Untuk teori seperti apa itu git ?<br>
Dan lain-lainnya bisa di baca detail di google 😄 atau bisa juga di [git-pinter](https://github.com/akuikialie/git-pinter/blob/master/git-pinter.pdf).(mastahku)

Oke, lanjut kepraktek.
 **Install git**

* _Windows_ <br>
  Dowload git [disini](https://git-scm.com/download/win). setelah itu jalankan file .exe lalu ikuti langkah-langkahnya sampai selesai.
* _Linux_ <br>
  Jalankan perintah berikut
  ```bash
  $ sudo apt update
  $ sudo apt install git
  ```

**Setup git** <br>
    Setelah selesai installnya kita perlu mengatur username dan email yang nantiya akan menjadi identitas
    kita saat melakukan aktivitas pada git.

```bash
$ git config --global user.name "krisnanto"
$ git config --global user.email "krisnantobiyuh@gmail.com"
```

**Menggunakan git**

* _Inisialisasi - membuat repository baru_ <br>
  _git-init_ <br>
  Seblumnya kita masuk dulu ke folder yang akan kita gunakan untuk menyimpan file-file source code kita.

```bash
krisnantobiyuh@kris:~/Document/git-pinter$
```

  Lalu kita inisialisasi folder `git-pinter`

```bash
krisnantobiyuh@kris:~/Document/git-pinter$ git init
```

  Sampai proses ini kita akan melihat `/.git` didalam folder `git-pinter`. menandakan proses `git init` successfuly.

* _Membuat dan melihat perubahan_ <br>
  _git-status_ <br>
  Coba buat kita `first-file.txt` dengan `notepad`. Ketikkan nama kalian di dalamnya.
  ```bash
  Nama : Krisnanto
  ```
    Setelah itu save di folder `git-pinter`.
    Masuk lagi ke terminal dan ketikkan
  ```bash
  krisnantobiyuh@kris:~/Document/git-pinter$ git status
  ```
  Kamu seharusnya akan melihat \`untracked files\`
  Menandakan ada perubahan yang belum kita `add` kedalam index.
* _Menambahkan perubahan kedalam index_ <br>
  _git-add_ <br>
  ```bash
  krisnantobiyuh@kris:~/Document/git-pinter$ git add .
  ```
    Masuk lagi ke terminal dan ketikkan
  ```bash
  krisnantobiyuh@kris:~/Document/git-pinter$ git status
  ```
    Setelah perintah \`git add .\` ketika kita cek lagi dengan \`git-status\`

\    seharusnya muncul status message \`change to be commited\`<br>
         menandakan file perubahan sudah di `add` dan siap di `commit`.

* _Menyimpan perubahan ke repository_ <br>
  _git-commit_ <br>
    Menyimpan perubahan yang sudah kita `add` ke dalam repository kita.
  ```bash
  krisnantobiyuh@kris:~/Document/git-pinter$ git commit -m "first commit" .
  ```
* _Membuat remote repository_ <br>
  _git remote_ <br>
    Buat sebuah sepository di github dengan nama `git-pinter`. setelah itu kita add remote.
  ```bash
  git remote add origin https://github.com/username-github-kalian/git-pinter.git
  ```
    Menambahkan remote repository ke dalam projevt git kita.
* _Megirim perubahan_ <br>
  _git-push_ <br>
    Menyimpan/mengirimkan perubahan yang sudah kita `commit` ke remote repository kita.
  ```bash
  krisnantobiyuh@kris:~/Document/git-pinter$ git push origin master .
  ```
    Perubahan yang berada dilocal kita sudah terkirim dan tersimpan.
    Untuk melihat coba lakukan check status `git-status`.
  ```bash
  krisnantobiyuh@kris:~/Document/git-pinter$ git status
  ```
    Muncul `nothing to commit, working tree clean`. menandakan tidak ada perubahan didalam working tree kita.
    git-pinter sudah ada di Repository saya silahkan check di [sini](https://github.com/krisnantobiyuh/git-pinter)
    Coba juga praktekan git [disini](https://codesaya.com/git) ya. hehehe
   Jika ada yang salah, jangan ragu untuk mengoreksi. #maridiskusi. 😉
