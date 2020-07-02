---
date: '2020-07-02 22:22'
path: /mengatasi-error-pada-pecl-mac-OS
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
  - Belajar Database mongoDB
label: MongoDB
author: Kris
---
Saat melakukan install package dengan pecl dan mendapat error seperti ini 

```
Warning: mkdir(): File exists in System.php on line 294PHP Warning:  mkdir(): File exists in /usr/local/Cellar/php@7.2/7.2.19_1/share/php@7.2/pear/System.php on line 294
```

```
Warning: mkdir(): File exists in /usr/local/Cellar/php@7.2/7.2.19_1/share/php@7.2/pear/System.php on line 294ERROR: failed to mkdir /usr/local/Cellar/php@7.2/7.2.19_1/pecl/20170718$ echo $?1
```

Coba lakukan commend seperti berikut. ini bekerja untuk case saya. 

saya mendapatkan error yang sama waktu menginstall mongodb di mac.

`mkdir -p /usr/local/lib/php/pecl`

``

Setelah itu ulangi lagi commend yang bermasalah sebelumnya.
