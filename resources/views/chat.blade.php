<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Laravel</title>
       @vite('resources/js/app.js')
    </head>
<body>
    <div>
        <div>
            <ul id = 'ul'>
                    
            </ul>
            <form id="form">
                @csrf
                <label for="message">
                    ENTER YOUR message
                </label>
                <input  id='input' type="text" name="message" placeholder="">
            </form>
        </div>
    </div>
</body>
</html>