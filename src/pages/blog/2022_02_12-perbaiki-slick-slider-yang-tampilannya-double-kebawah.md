---
date: '2022-02-12 17:13'
path: /perbaiki-slick-slider-yang-tampilannya-double-kebawah
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
label: ReactJs
author: Kris
---
Jika ada diantara kalian yang mungkin mengalami masalah ini, (slick slider tidak bisa horizontal) 

![slick-slider-tidak-bisa-horizontal](/assets/screenshot-from-2022-02-12-17-13-15.png "slick slider tidak bisa horizontal")

pada gambar di atas biasanya terjadi jika data yang dilooping itu kurang dari data yang harus ditampilkan.\
ini bisa kita cek pada setting slick js nya. caranya lihat di key `slidesToShow` lihat valuenya, dan bandingkan dengan data array yang dilooping pada Component slidernya. pastikan nilai data yang di looping lebih dari sama dengan `slidesToShow`. 

```


    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: false,
        className: 'related-course-item-sliders',
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: false
              }
            },
            {
              breakpoint: 769,
              settings: {
                slidesToShow: 2.5,
                slidesToScroll: 2,
                initialSlide: 0,
                infinite: false
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1.2,
                slidesToScroll: 1,
                infinite: false
              }
            }
        ]
    };

<Slider {...settings}>
 {
  [1,2,3].map((item, index) => {
    return (
      <h1 key={index}>{index}</h1>
    )
   })
  }
</Slider>
```
diatas adalah contoh dimana data yang di map sama dengan config `slidesToShow`. 

harusnya dengan seperti ini bug seperti gambar 1 sudah solved.

thanks my past
