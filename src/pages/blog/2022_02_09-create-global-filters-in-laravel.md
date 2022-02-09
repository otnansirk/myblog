---
date: '2022-02-09 10:38'
path: /create-global-filters-in-laravel
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
label: Laravel
author: Kris
---
Semoga ini bisa mengiatkan saya di kemudia hari hahahaha.

membuat simple global filter di laravel.

Pertama buat folder Filters bebas dimana kalau dalam kasus saya , saya letakkan di dalam folder http jadi seperti ini

```
[o] Http
   [o] Filters
```

lalu buat file Filter.php dan FilterBuilder.php di dalam folder Filters.



Filter.php
```
<?php
namespace App\Http\Filters;

trait FilterBuilder 
{
    static function filter($model, array $filters)
    {
        foreach ($filters as $key => $value) {

            if (method_exists(__CLASS__, $key)) {
                call_user_func(array(__CLASS__, $key), $model, $value);
            }
        }
        return $model;
    }
}
```
Filter.php
```
<?php
namespace App\Http\Filters;

use App\Models\Campaign;
use App\Http\Filters\QueryBuilder;
use Illuminate\Support\Facades\DB;

class Filter
{
    use FilterBuilder;

    static function categories($model, $filter) {
        return $model->whereIn("$model->from.category_id", explode(',', $filter));
    }

    static function search($model, $filter) {
        return  $model->where(DB::raw("lower($model->from.title)"), 'LIKE', '%'.strtolower($filter).'%');
    }

    static function limit($model, $limit) {
        return $model->limit($limit);
    }

    static function skip($model, $offset) {
        return $model->skip($offset);
    }

    static function is_featured($model, $featured) {
        return $model->where("$model->from.is_featured", $featured);
    }

    static function status($model, $status) {
        return $model->whereIn("$model->from.status", explode(',', $status));
    }

    static function name($model, $filter) {
        return  $model->where(DB::raw("lower($model->from.name)"), 'LIKE', '%'.strtolower($filter).'%');
    }

    static function username($model, $filter) {
        return  $model->where(DB::raw("lower($model->from.username)"), 'LIKE', '%'.strtolower($filter).'%');
    }

    static function email($model, $filter) {
        return  $model->where(DB::raw("lower($model->from.email)"), 'LIKE', '%'.strtolower($filter).'%');
    }

    static function between_created($model, $date) {
        return $model->whereBetween("$model->from.created_at", explode(',', $date));
    }
}
```


### How to use
use models\User;

$users = \App\Http\Filters\Filter::filter(User, $request->all());
dd($users->get());
