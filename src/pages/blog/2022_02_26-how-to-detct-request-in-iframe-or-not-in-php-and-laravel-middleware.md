---
date: '2022-02-26 08:32'
path: /how-to-detct-request-in-iframe-or-not-in-PHP-and-LARAVEL-MIDDLEWARE
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
For this purpose you can use global variable `$_SERVER` in php.

You can access `HTTP_SEC_FETCH_DEST` from $_SERVER as array. 



example : 

```
$document = $_SERVER['HTTP_SEC_FETCH_DEST'];
```
result $document is `iframe` or `document`

So with this you can make condition like.
```
if($document === 'iframe') {
   return "Request from in iframe";
} else {
   return "Request outside iframe";
}


### Implement to laravel middleware

you can create middleware in laravel.
in this case this middleware does not allowed request if not from iframe.

```
php artisan make:middleware
```

and write middleware like this

```

    public function handle(Request $request, Closure $next)
    {
        $isIframe = isset($_SERVER['HTTP_SEC_FETCH_DEST']) && 
                        $_SERVER['HTTP_SEC_FETCH_DEST'] == 'iframe';

        if (!$isIframe) {
            abort(403, 'Forbidden');
        }

        return $next($request);

    }

```

