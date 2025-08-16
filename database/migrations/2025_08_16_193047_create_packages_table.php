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
        Schema::create('packages', function (Blueprint $table) {
            $table->id();
            $table->string('name'); // اسم الباقة
            $table->text('description')->nullable(); // وصف الباقة
            $table->decimal('price', 10, 2); // السعر بالدينار العراقي
            $table->integer('duration_days'); // مدة الباقة بالأيام
            $table->json('features'); // مميزات الباقة (JSON)
            $table->integer('max_employees')->nullable(); // الحد الأقصى للموظفين
            $table->integer('max_customers')->nullable(); // الحد الأقصى للعملاء
            $table->integer('max_products')->nullable(); // الحد الأقصى للمنتجات
            $table->boolean('has_reports')->default(false); // تقارير متقدمة
            $table->boolean('has_analytics')->default(false); // تحليلات
            $table->boolean('has_api')->default(false); // وصول API
            $table->boolean('has_support')->default(false); // دعم فني
            $table->boolean('is_popular')->default(false); // باقة شائعة
            $table->boolean('is_active')->default(true); // حالة الباقة
            $table->string('currency', 3)->default('IQD'); // العملة
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('packages');
    }
};
