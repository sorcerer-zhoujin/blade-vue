<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />

    <title>Laravel Vite Vue</title>
</head>

<body>
    <div id="app"></div>
    @vite(['resources/css/app.css', 'resources/js/app.ts'])
</body>

</html>
