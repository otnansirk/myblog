---
date: '2022-02-02 19:09'
path: /how-to-list-and-kill-port-in-ubuntu
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
label: Ubuntu
author: Kris
---
**List port** 

`netstat -a`

**Kill Process on Port**

For example, you need to kill process running on port 3000.

`sudo kill -9 $(sudo lsof -t -i:3000)`
