<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\SiteSetting;

class SiteSettingSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $defaultSettings = [
            // إعدادات الموقع العامة
            'site_name' => ['DubaiExchange', 'text', 'general', 'اسم الموقع'],
            'site_tagline' => ['منصة إدارة الأعمال الشاملة', 'text', 'general', 'شعار الموقع'],
            'site_description' => ['نظام إدارة شامل للشركات والمؤسسات مع حلول متقدمة لإدارة المبيعات والعملاء والمخزون', 'textarea', 'general', 'وصف الموقع'],
            'site_logo' => ['', 'file', 'general', 'شعار الموقع'],
            'site_favicon' => ['', 'file', 'general', 'أيقونة الموقع'],

            // معلومات التواصل
            'contact_phone' => ['+964 750 123 4567', 'text', 'contact', 'رقم الهاتف'],
            'contact_email' => ['info@dubaiexchange.com', 'email', 'contact', 'البريد الإلكتروني'],
            'contact_address' => ['بغداد، العراق', 'text', 'contact', 'العنوان'],
            'contact_whatsapp' => ['+964 750 123 4567', 'text', 'contact', 'رقم الواتساب'],

            // روابط وسائل التواصل الاجتماعي
            'social_facebook' => ['https://facebook.com/dubaiexchange', 'url', 'social', 'فيسبوك'],
            'social_twitter' => ['https://twitter.com/dubaiexchange', 'url', 'social', 'تويتر'],
            'social_instagram' => ['https://instagram.com/dubaiexchange', 'url', 'social', 'إنستغرام'],
            'social_linkedin' => ['https://linkedin.com/company/dubaiexchange', 'url', 'social', 'لينكدإن'],
            'social_youtube' => ['https://youtube.com/@dubaiexchange', 'url', 'social', 'يوتيوب'],

            // نصوص الصفحة الرئيسية
            'hero_title' => ['إدارة أعمالك بكفاءة مع DubaiExchange', 'text', 'homepage', 'عنوان البطل الرئيسي'],
            'hero_subtitle' => ['نظام شامل لإدارة المبيعات والعملاء والمخزون مع تقارير متقدمة وتحليلات ذكية لتطوير أعمالك', 'textarea', 'homepage', 'العنوان الفرعي'],
            'hero_cta_text' => ['ابدأ مجاناً', 'text', 'homepage', 'نص زر الدعوة للعمل'],

            // قسم المميزات
            'features_title' => ['لماذا تختار DubaiExchange؟', 'text', 'features', 'عنوان قسم المميزات'],
            'features_subtitle' => ['حلول متكاملة لإدارة أعمالك بكفاءة عالية مع أحدث التقنيات والأدوات المتطورة', 'text', 'features', 'العنوان الفرعي للمميزات'],

            // قسم الإحصائيات
            'stats_customers' => ['500+', 'text', 'stats', 'عدد العملاء'],
            'stats_customers_label' => ['عميل راضي', 'text', 'stats', 'تسمية عدد العملاء'],
            'stats_transactions' => ['10,000+', 'text', 'stats', 'عدد المعاملات'],
            'stats_transactions_label' => ['معاملة شهرياً', 'text', 'stats', 'تسمية عدد المعاملات'],
            'stats_revenue' => ['99%', 'text', 'stats', 'نسبة الرضا'],
            'stats_revenue_label' => ['رضا العملاء', 'text', 'stats', 'تسمية نسبة الرضا'],
            'stats_support' => ['24/7', 'text', 'stats', 'الدعم الفني'],
            'stats_support_label' => ['دعم فني', 'text', 'stats', 'تسمية الدعم الفني'],

            // معلومات الشركة
            'about_title' => ['من نحن؟', 'text', 'about', 'عنوان قسم من نحن'],
            'about_description' => ['نحن فريق من المطورين والخبراء المتخصصين في تطوير حلول الأعمال الرقمية. نعمل على توفير أفضل الأنظمة والحلول التقنية للشركات والمؤسسات لمساعدتها في تطوير أعمالها وزيادة كفاءتها.', 'textarea', 'about', 'وصف الشركة'],
            'about_mission' => ['مهمتنا هي توفير أفضل الحلول التقنية للشركات والمؤسسات لمساعدتها في إدارة أعمالها بكفاءة عالية وتحقيق النجاح المطلوب.', 'textarea', 'about', 'رسالة الشركة'],
            'about_vision' => ['رؤيتنا أن نكون الرائدين في مجال حلول الأعمال الرقمية في المنطقة وتقديم خدمات عالية الجودة تلبي احتياجات عملائنا.', 'textarea', 'about', 'رؤية الشركة'],

            // إعدادات الفوتر
            'footer_copyright' => ['© 2025 DubaiExchange. جميع الحقوق محفوظة.', 'text', 'footer', 'حقوق النشر'],
            'footer_description' => ['نظام إدارة شامل للشركات والمؤسسات مع حلول متقدمة لإدارة المبيعات والعملاء والمخزون وتقارير ذكية لتطوير أعمالك.', 'textarea', 'footer', 'وصف الفوتر'],

            // إعدادات SEO
            'seo_title' => ['DubaiExchange - نظام إدارة الأعمال الشامل', 'text', 'seo', 'عنوان SEO'],
            'seo_description' => ['نظام إدارة شامل للشركات مع حلول متقدمة للمبيعات والعملاء والمخزون. ابدأ مجاناً واكتشف كيف يمكن لـ DubaiExchange تطوير أعمالك.', 'textarea', 'seo', 'وصف SEO'],
            'seo_keywords' => ['إدارة أعمال، نظام مبيعات، إدارة عملاء، مخزون، تقارير، العراق، بغداد، نظام محاسبة', 'text', 'seo', 'كلمات مفتاحية'],
        ];

        foreach ($defaultSettings as $key => [$value, $type, $category, $label]) {
            SiteSetting::setValue($key, $value, $type, $category, $label);
        }
    }
}
