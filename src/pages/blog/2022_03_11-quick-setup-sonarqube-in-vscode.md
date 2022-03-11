---
date: '2022-03-11 11:12'
path: /quick-setup-sonarqube-in-vscode
thumbnail: /assets/screenshot-from-2022-03-11-11-51-08.png
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
label: Java
author: Kris
---
![quick-setup-sonarqube-in-vscode](/assets/screenshot-from-2022-03-11-11-51-08.png "quick-setup-sonarqube-in-vscode")

Sonarqube adalah sebuah platform dimana akan mengontrol kode dengan cara pengujian keamanan statis.

Steps : 

1. install extension sonarlint di vscode
2. pastikan sudah install java versi minimal 11
3. update setting.json tambahkan settingan berikut


```
"sonarlint.connectedMode.connections.sonarqube": [
    {
        "serverUrl": "https://sonar.getih.net",
        "token": "4a18d634fd2ace27207a221f3022fb39e84708f2",
    },
],
"sonarlint.ls.javaHome": "/usr/lib/jvm/java-11-openjdk-amd64"
```

4. restart vscode dan harusnya sudah bisa digunakan 
5. report sonar bisa dilihat di console->problem
