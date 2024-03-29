<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\User;

class comments_model extends Model
{
    use HasFactory;
    protected $table = 'comments';
    protected $fillable = [
        'message'
    ];
    public function usEr(){
        return $this->belongsTo( User::class , 'receiver_id','sender_id' );
    }
}
