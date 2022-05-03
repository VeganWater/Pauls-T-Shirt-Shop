<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Products extends Model
{
    protected $fillable = [
    'tshirt',
    'quantity',
    'price',
    'information',
    'seller',
    'image-url'
    ];
}
