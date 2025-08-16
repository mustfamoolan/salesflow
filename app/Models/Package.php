<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Package extends Model
{
    protected $fillable = [
        'name',
        'description',
        'price',
        'duration_days',
        'features',
        'max_employees',
        'max_customers',
        'max_products',
        'has_reports',
        'has_analytics',
        'has_api',
        'has_support',
        'is_popular',
        'is_active',
        'currency'
    ];

    protected $casts = [
        'features' => 'array',
        'has_reports' => 'boolean',
        'has_analytics' => 'boolean',
        'has_api' => 'boolean',
        'has_support' => 'boolean',
        'is_popular' => 'boolean',
        'is_active' => 'boolean',
        'price' => 'decimal:2'
    ];

    protected $appends = ['price_formatted', 'duration_formatted'];

    public function getPriceFormattedAttribute()
    {
        return number_format($this->price, 0) . ' ' . $this->currency;
    }

    public function getDurationFormattedAttribute()
    {
        if ($this->duration_days >= 365) {
            $years = floor($this->duration_days / 365);
            return $years . ' سنة';
        } elseif ($this->duration_days >= 30) {
            $months = floor($this->duration_days / 30);
            return $months . ' شهر';
        } else {
            return $this->duration_days . ' يوم';
        }
    }
}
