import React from 'react';
import LandingLayout from '../../Layouts/LandingLayout';

export default function About({ siteSettings = {} }) {
    const team = [
        {
            name: 'أحمد محمد',
            role: 'الرئيس التنفيذي والمؤسس',
            image: '/images/team/ceo.jpg',
            description: 'خبرة 15 عام في تطوير حلول المبيعات والتكنولوجيا'
        },
        {
            name: 'فاطمة علي',
            role: 'مدير التطوير',
            image: '/images/team/cto.jpg',
            description: 'خبيرة في تطوير البرمجيات وإدارة الفرق التقنية'
        },
        {
            name: 'محمود حسن',
            role: 'مدير المنتج',
            image: '/images/team/product.jpg',
            description: 'متخصص في تجربة المستخدم وتطوير المنتجات'
        },
        {
            name: 'سارة أحمد',
            role: 'مدير المبيعات',
            image: '/images/team/sales.jpg',
            description: 'خبيرة في استراتيجيات المبيعات وإدارة العملاء'
        }
    ];

    const values = [
        {
            icon: '🎯',
            title: 'التركيز على العميل',
            description: 'نضع احتياجات عملائنا في المقدمة ونسعى دائماً لتقديم حلول تتجاوز توقعاتهم'
        },
        {
            icon: '🚀',
            title: 'الابتكار المستمر',
            description: 'نستثمر في أحدث التقنيات ونطور حلول مبتكرة تواكب التطورات العالمية'
        },
        {
            icon: '🤝',
            title: 'الشراكة الحقيقية',
            description: 'نؤمن بالعمل كشركاء مع عملائنا، ونساعدهم في تحقيق أهدافهم وتطوير أعمالهم'
        },
        {
            icon: '⚡',
            title: 'الكفاءة والسرعة',
            description: 'نقدم حلول سريعة وفعالة تساعد الشركات على زيادة إنتاجيتها وتقليل الوقت المهدر'
        },
        {
            icon: '🔒',
            title: 'الأمان والثقة',
            description: 'نلتزم بأعلى معايير الأمان والخصوصية لحماية بيانات عملائنا'
        },
        {
            icon: '🌟',
            title: 'التميز في الجودة',
            description: 'نسعى للتميز في كل ما نقدمه، من التطوير إلى الدعم الفني'
        }
    ];

    // إحصائيات ديناميكية من قاعدة البيانات
    const stats = [
        {
            icon: '👥',
            number: siteSettings.stats_customers || '500+',
            label: siteSettings.stats_customers_label || 'عميل راضي'
        },
        {
            icon: '💼',
            number: siteSettings.stats_transactions || '50K+',
            label: siteSettings.stats_transactions_label || 'معاملة ناجحة'
        },
        {
            icon: '📈',
            number: siteSettings.stats_revenue || '200M+',
            label: siteSettings.stats_revenue_label || 'دينار عراقي في المبيعات'
        },
        {
            icon: '🎯',
            number: siteSettings.stats_support || '24/7',
            label: siteSettings.stats_support_label || 'دعم فني'
        }
    ];

    return (
        <LandingLayout title="من نحن - SalesFlow" siteSettings={siteSettings}>
            {/* Hero Section */}
            <section className="bg-gradient-to-br from-purple-50 to-white py-16 sm:py-20 lg:py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                            {siteSettings.about_title || 'من نحن'}
                        </h1>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            {siteSettings.about_description || 'نحن فريق من المبدعين والخبراء المتخصصين في تطوير حلول المبيعات الذكية. مهمتنا هي مساعدة الشركات على تحقيق أهدافها وزيادة مبيعاتها باستخدام أحدث التقنيات.'}
                        </p>
                    </div>
                </div>
            </section>

            {/* Mission Section */}
            <section className="py-16 sm:py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                                {siteSettings.about_mission_title || 'مهمتنا'}
                            </h2>
                            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                                {siteSettings.about_mission_description || 'في SalesFlow، نؤمن بأن كل شركة تستحق الوصول إلى أدوات مبيعات متطورة وسهلة الاستخدام. نسعى لتطوير حلول تقنية مبتكرة تساعد الشركات من جميع الأحجام على تنظيم عمليات المبيعات، وتحسين العلاقات مع العملاء، وزيادة الإيرادات.'}
                            </p>
                            <p className="text-lg text-gray-600 leading-relaxed">
                                {siteSettings.about_partnership_text || 'نحن لا نقدم مجرد برنامج، بل نوفر شراكة حقيقية تهدف إلى نجاح عملائنا وتطوير أعمالهم في عالم يزداد تنافساً يوماً بعد يوم.'}
                            </p>
                        </div>
                        <div className="relative">
                            <div className="bg-gradient-to-br from-purple-100 to-purple-50 rounded-2xl p-8 h-80 flex items-center justify-center">
                                <div className="text-center">
                                    <div className="text-6xl mb-4">🎯</div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-2">{siteSettings.about_vision_title || 'رؤيتنا'}</h3>
                                    <p className="text-gray-600">
                                        {siteSettings.about_vision_description || 'أن نكون الحل الأول والأفضل لإدارة المبيعات في المنطقة العربية'}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-16 sm:py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                            {siteSettings.stats_section_title || 'أرقام تتحدث عن نفسها'}
                        </h2>
                        <p className="text-lg text-gray-600">
                            {siteSettings.stats_section_subtitle || 'إنجازاتنا وثقة عملائنا هي ما يدفعنا للأمام'}
                        </p>
                    </div>
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                        {stats.map((stat, index) => (
                            <div key={index} className="text-center">
                                <div className="bg-white rounded-2xl p-6 shadow-lg">
                                    <div className="text-3xl sm:text-4xl font-bold text-purple-600 mb-2">
                                        {stat.number}
                                    </div>
                                    <div className="text-gray-600 font-medium">
                                        {stat.label}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className="py-16 sm:py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                            قيمنا ومبادئنا
                        </h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            المبادئ التي نؤمن بها وتوجه عملنا في كل ما نقدمه لعملائنا
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {values.map((value, index) => (
                            <div key={index} className="text-center p-6 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors">
                                <div className="text-4xl mb-4">{value.icon}</div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">
                                    {value.title}
                                </h3>
                                <p className="text-gray-600 leading-relaxed">
                                    {value.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section className="py-16 sm:py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                            فريق العمل
                        </h2>
                        <p className="text-lg text-gray-600">
                            تعرف على الخبراء الذين يقودون رؤية SalesFlow
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {team.map((member, index) => (
                            <div key={index} className="bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-shadow">
                                <div className="w-24 h-24 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                                    <span className="text-white text-2xl font-bold">
                                        {member.name.split(' ').map(name => name[0]).join('')}
                                    </span>
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2">
                                    {member.name}
                                </h3>
                                <p className="text-purple-600 font-semibold mb-3">
                                    {member.role}
                                </p>
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    {member.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Timeline Section */}
            <section className="py-16 sm:py-20 bg-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                            رحلتنا
                        </h2>
                        <p className="text-lg text-gray-600">
                            كيف بدأنا وإلى أين وصلنا
                        </p>
                    </div>

                    <div className="space-y-8">
                        <div className="flex items-center">
                            <div className="flex-shrink-0 w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold">
                                2020
                            </div>
                            <div className="mr-6">
                                <h3 className="text-lg font-bold text-gray-900">بداية الفكرة</h3>
                                <p className="text-gray-600">تأسيس الشركة وبداية تطوير أول نسخة من SalesFlow</p>
                            </div>
                        </div>

                        <div className="flex items-center">
                            <div className="flex-shrink-0 w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold">
                                2021
                            </div>
                            <div className="mr-6">
                                <h3 className="text-lg font-bold text-gray-900">إطلاق النسخة الأولى</h3>
                                <p className="text-gray-600">إطلاق المنتج للجمهور وكسب أول 100 عميل</p>
                            </div>
                        </div>

                        <div className="flex items-center">
                            <div className="flex-shrink-0 w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold">
                                2022
                            </div>
                            <div className="mr-6">
                                <h3 className="text-lg font-bold text-gray-900">التوسع والنمو</h3>
                                <p className="text-gray-600">الوصول إلى 1000 عميل وإضافة ميزات متقدمة</p>
                            </div>
                        </div>

                        <div className="flex items-center">
                            <div className="flex-shrink-0 w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold">
                                2023
                            </div>
                            <div className="mr-6">
                                <h3 className="text-lg font-bold text-gray-900">التوسع الإقليمي</h3>
                                <p className="text-gray-600">دخول أسواق جديدة والوصول إلى 5000 عميل</p>
                            </div>
                        </div>

                        <div className="flex items-center">
                            <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-purple-600 to-purple-800 rounded-full flex items-center justify-center text-white font-bold">
                                2024
                            </div>
                            <div className="mr-6">
                                <h3 className="text-lg font-bold text-gray-900">الابتكار والذكاء الاصطناعي</h3>
                                <p className="text-gray-600">إدخال تقنيات الذكاء الاصطناعي وتجاوز 10,000 عميل</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 sm:py-20 bg-gradient-to-r from-purple-600 to-purple-800 text-white">
                <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                        {siteSettings.about_cta_title || 'انضم إلى رحلة النجاح'}
                    </h2>
                    <p className="text-xl mb-8 text-purple-100">
                        {siteSettings.about_cta_subtitle || 'كن جزءاً من قصة نجاح SalesFlow وساهم في تطوير مبيعات شركتك'}
                    </p>
                    <button className="bg-white text-purple-600 font-bold py-4 px-8 rounded-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-200">
                        {siteSettings.about_cta_button || 'ابدأ رحلتك معنا'}
                    </button>
                </div>
            </section>
        </LandingLayout>
    );

}
