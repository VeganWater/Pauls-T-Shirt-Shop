<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Jenssegers\Mongodb\Eloquent\Model;

class Products extends Model
{
    protected $connection = 'mongodb';

    protected $fillable = [
    'tshirt',
    'quantity',
    'price',
    'information',
    'seller'
    ];

    public static function boot(){
        parent::boot();
        static::creating(function($project_id){
            $project_id->project_d=auth()->user()->id;
        });
    }
}
