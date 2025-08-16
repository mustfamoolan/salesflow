<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Package;

class PackageSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Package::create([
            'name' => 'الباقة الأساسية',
            'description' => 'باقة مناسبة للشركات الصغيرة والمتوسطة',
            'price' => 50000,
            'duration_days' => 30,
            'features' => [
                'إدارة العملاء والموظفين',
                'تسجيل المبيعات والمشتريات',
                'تقارير أساسية',
                'النسخ الاحتياطي التلقائي',
                'دعم فني عبر الهاتف'
            ],
            'max_employees' => 10,
            'max_customers' => 100,
            'max_products' => 50,
            'has_reports' => true,
            'has_analytics' => false,
            'has_api' => false,
            'has_support' => true,
            'is_popular' => false,
            'is_active' => true,
        ]);

        Package::create([
            'name' => 'الباقة المتقدمة',
            'description' => 'باقة شاملة للشركات المتوسطة والكبيرة',
            'price' => 120000,
            'duration_days' => 30,
            'features' => [
                'جميع مميزات الباقة الأساسية',
                'تحليلات وتقارير متقدمة',
                'إدارة المخزون المتقدمة',
                'تتبع حالة الطلبات',
                'ربط مع المتاجر الإلكترونية',
                'تطبيق الجوال',
                'دعم فني على مدار الساعة'
            ],
            'max_employees' => 50,
            'max_customers' => 1000,
            'max_products' => 500,
            'has_reports' => true,
            'has_analytics' => true,
            'has_api' => true,
            'has_support' => true,
            'is_popular' => true,
            'is_active' => true,
        ]);

        Package::create([
            'name' => 'الباقة الاحترافية',
            'description' => 'باقة مخصصة للمؤسسات الكبيرة والشركات المتعددة الفروع',
            'price' => 250000,
            'duration_days' => 30,
            'features' => [
                'جميع مميزات الباقة المتقدمة',
                'إدارة الفروع المتعددة',
                'تحليلات ذكية متقدمة',
                'تخصيص كامل للنظام',
                'ربط مع الأنظمة الخارجية',
                'تدريب شامل للموظفين',
                'دعم فني مخصص',
                'تقارير حسب الطلب'
            ],
            'max_employees' => null, // غير محدود
            'max_customers' => null, // غير محدود
            'max_products' => null, // غير محدود
            'has_reports' => true,
            'has_analytics' => true,
            'has_api' => true,
            'has_support' => true,
            'is_popular' => false,
            'is_active' => true,
        ]);

        Package::create([
            'name' => 'الباقة السنوية الأساسية',
            'description' => 'باقة سنوية بخصم خاص للشركات الصغيرة',
            'price' => 500000,
            'duration_days' => 365,
            'features' => [
                'جميع مميزات الباقة الأساسية',
                'خصم 20% على السعر الشهري',
                'ترقيات مجانية',
                'أولوية في الدعم الفني',
                'تقارير شهرية مفصلة'
            ],
            'max_employees' => 15,
            'max_customers' => 150,
            'max_products' => 75,
            'has_reports' => true,
            'has_analytics' => false,
            'has_api' => false,
            'has_support' => true,
            'is_popular' => false,
            'is_active' => true,
        ]);

        Package::create([
            'name' => 'الباقة التجريبية',
            'description' => 'باقة مجانية لتجربة النظام لمدة 7 أيام',
            'price' => 0,
            'duration_days' => 7,
            'features' => [
                'وصول محدود للنظام',
                'إدارة أساسية للعملاء',
                'تسجيل المبيعات الأساسي',
                'تقارير بسيطة',
                'دعم فني محدود'
            ],
            'max_employees' => 3,
            'max_customers' => 20,
            'max_products' => 10,
            'has_reports' => false,
            'has_analytics' => false,
            'has_api' => false,
            'has_support' => false,
            'is_popular' => false,
            'is_active' => true,
        ]);
    }
}
