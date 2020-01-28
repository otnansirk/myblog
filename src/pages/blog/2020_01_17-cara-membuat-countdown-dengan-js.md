---
date: '2020-01-17 08:59'
path: /cara-membuat-countdown-dengan -js
thumbnail: /assets/countdown.png
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
label: Js
author: Kris
---
Kalian mesti sering melihat countdown time yang biasanya untuk menyambut tahun baru atau hari-hari besar lainnya. 
Nah gimana sih cara buatnya langsung aja yang pertama buat html dengan struktur seperti ini.
```
<!DOCTYPE HTML>
<html>
    <head>
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <style>
            p {
                text-align: center;
                font-size: 60px;
                margin-top: 0px;
            }
        </style>
    </head>
    <body>
    <p id="demo"></p>
    </body>
</html>
```

Setelah itu tambahkan script js nya

```
<script>
    // Set the date we're counting down to
    var countDownDate = new Date("Jan 30, 2020 15:37:25").getTime();

    // Update the count down every 1 second
    var x = setInterval(function() {

    // Get today's date and time
    var now = new Date().getTime();

    // Find the distance between now and the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Output the result in an element with id="demo"
    document.getElementById("demo").innerHTML = days + " Hari " + hours + " Jam " + minutes + " Menit " + seconds + " Detik ";

    // If the count down is over, write some text
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("demo").innerHTML = "EXPIRED";
        }
    }, 1000);
    
</script>
```
