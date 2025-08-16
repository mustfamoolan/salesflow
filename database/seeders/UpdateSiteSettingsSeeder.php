<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\SiteSetting;

class UpdateSiteSettingsSeeder extends Seeder
{
    public function run()
    {
        $settings = [
            // إعدادات صفحة من نحن
            [
                'key' => 'about_title',
                'value' => 'من نحن',
                'category' => 'about',
                'label' => 'عنوان صفحة من نحن',
                'description' => 'عنوان صفحة من نحن'
            ],
            [
                'key' => 'about_description',
                'value' => 'نحن فريق من المبدعين والخبراء المتخصصين في تطوير حلول المبيعات الذكية. مهمتنا هي مساعدة الشركات على تحقيق أهدافها وزيادة مبيعاتها باستخدام أحدث التقنيات.',
                'category' => 'about',
                'label' => 'وصف صفحة من نحن',
                'description' => 'وصف صفحة من نحن الرئيسي'
            ],
            [
                'key' => 'about_mission_title',
                'value' => 'مهمتنا',
                'category' => 'about',
                'label' => 'عنوان المهمة',
                'description' => 'عنوان قسم المهمة'
            ],
            [
                'key' => 'about_mission_description',
                'value' => 'في SalesFlow، نؤمن بأن كل شركة تستحق الوصول إلى أدوات مبيعات متطورة وسهلة الاستخدام. نسعى لتطوير حلول تقنية مبتكرة تساعد الشركات من جميع الأحجام على تنظيم عمليات المبيعات، وتحسين العلاقات مع العملاء، وزيادة الإيرادات.',
                'category' => 'about',
                'label' => 'وصف المهمة',
                'description' => 'وصف المهمة'
            ],
            [
                'key' => 'about_partnership_text',
                'value' => 'نحن لا نقدم مجرد برنامج، بل نوفر شراكة حقيقية تهدف إلى نجاح عملائنا وتطوير أعمالهم في عالم يزداد تنافساً يوماً بعد يوم.',
                'category' => 'about',
                'label' => 'نص الشراكة',
                'description' => 'نص الشراكة'
            ],
            [
                'key' => 'about_vision_title',
                'value' => 'رؤيتنا',
                'category' => 'about',
                'label' => 'عنوان الرؤية',
                'description' => 'عنوان قسم الرؤية'
            ],
            [
                'key' => 'about_vision_description',
                'value' => 'أن نكون الحل الأول والأفضل لإدارة المبيعات في المنطقة العربية',
                'category' => 'about',
                'label' => 'وصف الرؤية',
                'description' => 'وصف الرؤية'
            ],
            [
                'key' => 'about_cta_title',
                'value' => 'انضم إلى رحلة النجاح',
                'category' => 'about',
                'label' => 'عنوان دعوة العمل',
                'description' => 'عنوان دعوة العمل في صفحة من نحن'
            ],
            [
                'key' => 'about_cta_subtitle',
                'value' => 'كن جزءاً من قصة نجاح SalesFlow وساهم في تطوير مبيعات شركتك',
                'category' => 'about',
                'label' => 'نص دعوة العمل الفرعي',
                'description' => 'نص فرعي لدعوة العمل'
            ],
            [
                'key' => 'about_cta_button',
                'value' => 'ابدأ رحلتك معنا',
                'category' => 'about',
                'label' => 'نص زر دعوة العمل',
                'description' => 'نص زر دعوة العمل'
            ],

            // إعدادات الإحصائيات
            [
                'key' => 'stats_section_title',
                'value' => 'أرقام تتحدث عن نفسها',
                'category' => 'stats',
                'label' => 'عنوان قسم الإحصائيات',
                'description' => 'عنوان قسم الإحصائيات'
            ],
            [
                'key' => 'stats_section_subtitle',
                'value' => 'إنجازاتنا وثقة عملائنا هي ما يدفعنا للأمام',
                'category' => 'stats',
                'label' => 'نص فرعي للإحصائيات',
                'description' => 'نص فرعي لقسم الإحصائيات'
            ],

            // إعدادات روابط التواصل الاجتماعي
            [
                'key' => 'social_twitter',
                'value' => 'https://twitter.com/salesflow',
                'category' => 'social',
                'label' => 'رابط تويتر',
                'description' => 'رابط تويتر'
            ],
            [
                'key' => 'social_facebook',
                'value' => 'https://facebook.com/salesflow',
                'category' => 'social',
                'label' => 'رابط فيسبوك',
                'description' => 'رابط فيسبوك'
            ],
            [
                'key' => 'social_linkedin',
                'value' => 'https://linkedin.com/company/salesflow',
                'category' => 'social',
                'label' => 'رابط لينكدإن',
                'description' => 'رابط لينكدإن'
            ],
            [
                'key' => 'social_instagram',
                'value' => 'https://instagram.com/salesflow',
                'category' => 'social',
                'label' => 'رابط إنستغرام',
                'description' => 'رابط إنستغرام'
            ],

            // إعدادات التذييل
            [
                'key' => 'footer_copyright',
                'value' => '© 2025 SalesFlow. جميع الحقوق محفوظة.',
                'category' => 'footer',
                'label' => 'نص حقوق النشر',
                'description' => 'نص حقوق النشر في التذييل'
            ],
        ];        foreach ($settings as $setting) {
            SiteSetting::updateOrCreate(
                ['key' => $setting['key']],
                $setting
            );
        }
    }
}
