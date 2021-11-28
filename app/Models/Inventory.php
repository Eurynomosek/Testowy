<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Inventory extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'int_numer',
        'int_wysoko',
        'int_nazwa',
        'int_data',
        'int_fv',
        'int_wartosc',
        'int_nazwisko',
        'int_zaklad',
        'int_status',
        'int_uwagi',
        'int_image',
        'int_wprowadzenie',
        'int_login',
        'likv_data',
        'likw_protokol',
        'likv_data1',
        'likv_login',
        'uwagi',
        'usuniete',
        'int_lokalizacja'
    ];
}
