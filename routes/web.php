<?php

use Illuminate\Support\Facades\Route;
use App\Events\messag_event;
use Database\Factories\UserFactory;
use Illuminate\Http\Request;
use App\Models\User;
/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

/*Route::get('/', function () {
    return view('welcome');
});*/
Route::get('/', function () {
    return view('chat');
});
Route::post('/message', function (Request $req) {
    $aa = new User();
    $aa->factory()->create(); 
    return null;
});
 