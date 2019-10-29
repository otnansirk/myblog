---
date: '2019-10-29 08:50'
path: /mengenal-singkat-perbedaan-ORM-dan-ODM
thumbnail: /assets/copy-of-learn.png
tags:
  - Belajar ORM
  - Belajar ODM
label: Network
author: Kris
---
Bahasan ringan kali ini, kita akan coba mengenal apa yang dimaksud ORM dan ODM dan juga perbedaan keduanya.

**1. ORM (Object Relational Mapping)**

ORM ini sebenarnya sebuah metode yang digunakan untuk mengkonversikan data dari bahasa pemogrman yang berorientasi object ke database relational. dengan kata lain ORM bisa dikatakan jembatan antara 2 system yang berbeda yaitu program dengan databasenya. Teknik ini bisa kita temui di beberapa framework PHP seperti Yii dan juga Laravel yang mengimplementasi tekni ORM ini atau kamu bisa juga install sendiri library ORMnya. PHP sendiri memiliki [Doctrine](https://www.doctrine-project.org/) sebagai library ORM yang popular saat ini.

**2. ODM (Object Document Mapper)**

ODM ini mirip dengan ORM dia juga sebagai jembatan antara 2 system yang berbeda antara program dengan databasenya. Yang membedakan hanya datanya saja. **_Jika di ORM dia memetakan data relational, ODM memetakan data yang berbentuk dokumen (no relatioanl data)._** Kalau tidak salah php Phalcon mengimplementasi ODM dalam memetakan data yang berbentuk dokumen seperti mongoDB 

Dari sini kita bisa membuat kesimpulkan singkat


**ORM** memetakan data rasional seperti MySql, MariaDB dan database yang berbasis Sql lainnya<br>
**ODM** dia lebih memilih untuk memetakan data / mengolah data berbentuk object seperti Mongodb, Casandra dan database yang berbasis No-Sql
