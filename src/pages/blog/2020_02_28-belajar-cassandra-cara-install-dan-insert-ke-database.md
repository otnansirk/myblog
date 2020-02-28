---
date: '2020-02-28 07:25'
path: /belajar-cassandra-cara install-dan-insert-ke-database
thumbnail: /assets/cara-install-dan-menggunakan-cqlsh-cassandra.png
tags:
  - Cassandra DB
  - No Sql
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
label: Network
author: Kris
---
Cassandra adalah salah satu  database open source yang didistribusikan oleh apache yang katanya sangat scalable atau dapat diukur dan dirancang untuk data terstruktur yang berkapasitas sangat besar yang tersebar di banyak server.

Cassandra ini merupakan salah satu implementasu dari NoSql seperti mongodb yang memiliki konsep penyimpanan data secara dinamis yang artinya tidak terikat pada relasi-relasi tabel yang kaku seperti RDBMS. Selain scalable juga NoSql dikenal memiliki performa pengaksesan yang lebih cepat.

Cassandra memiliki bahasa pemrosesan sendiri yang mirip dengan SQL yang dikenal dengan Cassandra Query Language.



## Intsall cassandra

Disini karena saya menggunakan OSX jadi tutorial ini aku lakukan di OSX.

Pertama aku melakukan update brew untuk mengupdate package

```
$brew update
```

Lalu install casandranya menggunakan brew

![Install cassandra pada osx](/assets/screen-shot-2020-02-27-at-21.55.53.png "Install cassandra pada osx")



Setelah itu masuk ke cqlsh 

![masuk kedalam csqsh](/assets/screen-shot-2020-02-27-at-22.03.15.png "masuk kedalam csqsh")

Selesai untuk instalasi cassandranya sekarang kita coba insert satu data ke DB cassandra

Sebelum membuat table kita perlu meyiapkan dulu keyspace.

keyspace ini berfungsi untuk menampung kumpulan tabel atau family column. keyspace ini berada di level paling atas yang mengontrol replikasi untuk object yang ada di setiap datacenter didalam cluster.

## **Buat keyspace terlebih dahulu keyspacenya**

```
CREATE KEYSPACE akakom WITH replication = {'class': 'SimpleStrategy', 'replication_factor' : 1};
```



## Buat table mahasiswa

```
CREATE TABLE akakom.mahasiswa(      id_mahasiswa uuid,       nim varchar,       nama_mahasiswa varchar,       email list<TEXT>,       PRIMARY KEY (id_mahasiswa));
```



## Cek list dari keyspace dan table

**List keyspace**

```
cqlsh>describe keyspaces;
```

**List table**

```
cqlsh>describe tables;
```



## Insert data mahasiswa

```
INSERT INTO akakom.mahasiswa(      id_mahasiswa,      nim,       nama_mahasiswa,       email)          VALUES       (46b7d18c-afda-4c90-82ad-f787957be2ed,        '202001001',        'Knanto',        ['kk15@gmail.com','knanto@icloud.com']);
```

Dan seharusnya sudah dapat dilihat hasilnya seperti ini :

![hasil insert data ke DB Cassandra](/assets/screen-shot-2020-02-28-at-00.19.37.png "hasil insert data ke DB Cassandra")

Tools untuk [generate uuid ](https://www.uuidgenerator.net/) bisa check [disini](https://www.uuidgenerator.net/).



Mungkin itu saja di tutorial kali ini kalau ada kesalahan pada arikel ini bisa PM agar bisa saya perbaiki segera. :)
