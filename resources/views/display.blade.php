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
                @foreach ($ak as $as)
                <div id = '' class="">
                    <a href='{{route('message')}}'>
                        <li>
                            <span>
                                name <br/>
                                {{$as}}.
                            </span>
                        </li>  
                    </a>
                </div>
                @endforeach
            </ul>
        </div>
    </div>
</body>
</html>