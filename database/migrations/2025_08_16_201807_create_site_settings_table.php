<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('site_settings', function (Blueprint $table) {
            $table->id();
            $table->string('key')->unique(); // مفتاح الإعداد
            $table->text('value')->nullable(); // قيمة الإعداد
            $table->string('type')->default('text'); // نوع الإعداد (text, textarea, image, boolean)
            $table->string('category')->default('general'); // فئة الإعداد
            $table->string('label'); // عنوان الإعداد
            $table->text('description')->nullable(); // وصف الإعداد
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('site_settings');
    }
};
