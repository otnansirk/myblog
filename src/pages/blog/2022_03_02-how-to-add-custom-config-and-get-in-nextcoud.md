---
date: '2022-03-02 12:20'
path: /how-to-add-custom-config-and-get-in-nextcoud
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
label: PHP
author: Kris
---
You can add directly to file `/config/config.php` OR create custom config file in folder `/config`. you can add arbitrary name ending with `.config.php`. for example you want to create email config. you can add file `email.config.php`. 

and write to file like this example:

```
<?php
$CONFIG = array (
   'app_name' => 'my_name_app'
)
```

and you can get your config with this function 
```
$config     = \OC::$server->getConfig();
return $config->getSystemValue('app_name', 'default value')

// Will return my_name_app
```
