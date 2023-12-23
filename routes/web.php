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
//Route::get('/', function () {
   // return view('chat');
//});
Route::post('/message', function (Request $req) {
    $message = $req->message;
    //$one = User::find(2); //this line is use to auth user and get it id...$kk = Auth::user();...$kk->id;
    //$one ->comment()->create(['message'=> $message]);
    broadcast(new messag_event($message));
    return null;
});
Route::get('/', function () {
    $kk = Auth::user();
    if($kk = true){
        $aa = User::all();
        return view('display', ['aa'=>$aa]);
    }
});
Route::get('/message/{id}', function (Request $req) {
    return view('chat');//with the data collected;
})->name('message');
 