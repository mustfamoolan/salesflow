import React, { useState } from 'react';
import LandingLayout from '../../Layouts/LandingLayout';

export default function Pricing({ packages, siteSettings = {} }) {
    const [isAnnual, setIsAnnual] = useState(false);

    // تحويل الباقات لتناسب العرض
    const formatPackages = (packages) => {
        return packages.map(pkg => ({
            id: pkg.id,
            name: pkg.name,
            description: pkg.description,
            price: parseFloat(pkg.price),
            duration_days: pkg.duration_days,
            duration_formatted: pkg.duration_formatted,
            features: pkg.features || [],
            max_employees: pkg.max_employees,
            max_customers: pkg.max_customers,
            max_products: pkg.max_products,
            has_reports: pkg.has_reports,
            has_analytics: pkg.has_analytics,
            has_api: pkg.has_api,
            has_support: pkg.has_support,
            is_popular: pkg.is_popular,
            is_active: pkg.is_active
        }));
    };

    const formattedPackages = formatPackages(packages);

    // حساب السعر حسب النوع (شهري/سنوي)
    const getDisplayPrice = (pkg) => {
        if (pkg.duration_days >= 365) {
            // باقة سنوية
            return isAnnual ? pkg.price : Math.round(pkg.price / 12);
        } else {
            // باقة شهرية
            return isAnnual ? pkg.price * 12 : pkg.price;
        }
    };

    const getPricePeriod = (pkg) => {
        if (pkg.duration_days >= 365) {
            return isAnnual ? 'سنة' : 'شهر';
        } else {
            return isAnnual ? 'سنة' : 'شهر';
        }
    };

    const faqs = [
        {
            question: 'هل يمكنني تغيير الخطة في أي وقت؟',
            answer: 'نعم، يمكنك ترقية أو تخفيض خطتك في أي وقت. التغييرات ستأخذ مفعولها فوراً.'
        },
        {
            question: 'ما هي طرق الدفع المتاحة؟',
            answer: 'نقبل جميع البطاقات الائتمانية الرئيسية، والتحويل البنكي، والدفع النقدي.'
        },
        {
            question: 'هل هناك رسوم إضافية؟',
            answer: 'لا، جميع الأسعار شاملة. لا توجد رسوم خفية أو تكاليف إضافية.'
        },
        {
            question: 'هل يمكنني إلغاء الاشتراك في أي وقت؟',
            answer: 'نعم، يمكنك إلغاء اشتراكك في أي وقت بدون أي رسوم إلغاء.'
        }
    ];

    return (
        <LandingLayout title="الأسعار - DubaiExchange" siteSettings={siteSettings}>
            {/* Hero Section */}
            <section className="bg-gradient-to-br from-blue-50 to-white py-16 sm:py-20 lg:py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                        باقات تناسب جميع احتياجاتك
                    </h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                        اختر الباقة المناسبة لحجم عملك واحتياجاتك. جميع الباقات تشمل تجربة مجانية
                    </p>

                    {/* Toggle */}
                    <div className="flex items-center justify-center space-x-4 space-x-reverse">
                        <span className={`text-sm font-medium ${!isAnnual ? 'text-gray-900' : 'text-gray-500'}`}>
                            شهري
                        </span>
                        <button
                            onClick={() => setIsAnnual(!isAnnual)}
                            className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                                isAnnual ? 'bg-blue-600' : 'bg-gray-200'
                            }`}
                        >
                            <span
                                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                                    isAnnual ? 'translate-x-6' : 'translate-x-1'
                                }`}
                            />
                        </button>
                        <span className={`text-sm font-medium ${isAnnual ? 'text-gray-900' : 'text-gray-500'}`}>
                            سنوي
                            <span className="text-green-600 font-bold"> (خصم خاص)</span>
                        </span>
                    </div>
                </div>
            </section>

            {/* Pricing Cards */}
            <section className="py-16 sm:py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {formattedPackages.length > 0 ? (
                        <div className={`grid grid-cols-1 ${formattedPackages.length === 2 ? 'md:grid-cols-2 max-w-4xl mx-auto' : formattedPackages.length === 3 ? 'md:grid-cols-3' : 'md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'} gap-8`}>
                            {formattedPackages.map((pkg) => (
                                <div
                                    key={pkg.id}
                                    className={`relative rounded-2xl p-8 ${
                                        pkg.is_popular
                                            ? 'bg-blue-600 text-white ring-4 ring-blue-200 scale-105'
                                            : 'bg-white border border-gray-200'
                                    } transition-all duration-300 hover:shadow-xl`}
                                >
                                    {pkg.is_popular && (
                                        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                                            <span className="bg-yellow-400 text-blue-900 px-4 py-1 rounded-full text-sm font-bold">
                                                الأكثر شعبية
                                            </span>
                                        </div>
                                    )}

                                    <div className="text-center">
                                        <h3 className={`text-2xl font-bold mb-2 ${pkg.is_popular ? 'text-white' : 'text-gray-900'}`}>
                                            {pkg.name}
                                        </h3>
                                        {pkg.description && (
                                            <p className={`text-sm mb-6 ${pkg.is_popular ? 'text-blue-100' : 'text-gray-600'}`}>
                                                {pkg.description}
                                            </p>
                                        )}

                                        <div className="mb-6">
                                            <span className={`text-4xl font-bold ${pkg.is_popular ? 'text-white' : 'text-gray-900'}`}>
                                                {getDisplayPrice(pkg).toLocaleString()}
                                            </span>
                                            <span className={`text-xl font-medium ${pkg.is_popular ? 'text-blue-100' : 'text-gray-600'}`}>
                                                {' '}IQD
                                            </span>
                                            <br />
                                            <span className={`text-sm ${pkg.is_popular ? 'text-blue-100' : 'text-gray-600'}`}>
                                                /{getPricePeriod(pkg)}
                                            </span>
                                        </div>

                                        <button
                                            className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors ${
                                                pkg.is_popular
                                                    ? 'bg-white text-blue-600 hover:bg-gray-50'
                                                    : 'bg-blue-600 text-white hover:bg-blue-700'
                                            }`}
                                        >
                                            {pkg.price === 0 ? 'ابدأ التجربة المجانية' : 'اشترك الآن'}
                                        </button>
                                    </div>

                                    <div className="mt-8">
                                        <h4 className={`text-sm font-semibold mb-4 ${pkg.is_popular ? 'text-white' : 'text-gray-900'}`}>
                                            مميزات الباقة:
                                        </h4>
                                        <ul className="space-y-3">
                                            {pkg.features.map((feature, featureIndex) => (
                                                <li key={featureIndex} className="flex items-start">
                                                    <svg
                                                        className={`w-5 h-5 mr-3 mt-0.5 flex-shrink-0 ${pkg.is_popular ? 'text-white' : 'text-green-500'}`}
                                                        fill="none"
                                                        stroke="currentColor"
                                                        viewBox="0 0 24 24"
                                                    >
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                    </svg>
                                                    <span className={`text-sm ${pkg.is_popular ? 'text-blue-100' : 'text-gray-600'}`}>
                                                        {feature}
                                                    </span>
                                                </li>
                                            ))}

                                            {/* إضافة معلومات الحدود */}
                                            {pkg.max_employees && (
                                                <li className="flex items-start">
                                                    <svg
                                                        className={`w-5 h-5 mr-3 mt-0.5 flex-shrink-0 ${pkg.is_popular ? 'text-white' : 'text-green-500'}`}
                                                        fill="none"
                                                        stroke="currentColor"
                                                        viewBox="0 0 24 24"
                                                    >
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                    </svg>
                                                    <span className={`text-sm ${pkg.is_popular ? 'text-blue-100' : 'text-gray-600'}`}>
                                                        حتى {pkg.max_employees} موظف
                                                    </span>
                                                </li>
                                            )}

                                            {pkg.max_customers && (
                                                <li className="flex items-start">
                                                    <svg
                                                        className={`w-5 h-5 mr-3 mt-0.5 flex-shrink-0 ${pkg.is_popular ? 'text-white' : 'text-green-500'}`}
                                                        fill="none"
                                                        stroke="currentColor"
                                                        viewBox="0 0 24 24"
                                                    >
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                    </svg>
                                                    <span className={`text-sm ${pkg.is_popular ? 'text-blue-100' : 'text-gray-600'}`}>
                                                        حتى {pkg.max_customers} عميل
                                                    </span>
                                                </li>
                                            )}

                                            {pkg.max_products && (
                                                <li className="flex items-start">
                                                    <svg
                                                        className={`w-5 h-5 mr-3 mt-0.5 flex-shrink-0 ${pkg.is_popular ? 'text-white' : 'text-green-500'}`}
                                                        fill="none"
                                                        stroke="currentColor"
                                                        viewBox="0 0 24 24"
                                                    >
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                    </svg>
                                                    <span className={`text-sm ${pkg.is_popular ? 'text-blue-100' : 'text-gray-600'}`}>
                                                        حتى {pkg.max_products} منتج
                                                    </span>
                                                </li>
                                            )}

                                            {/* المميزات الإضافية */}
                                            {pkg.has_reports && (
                                                <li className="flex items-start">
                                                    <svg
                                                        className={`w-5 h-5 mr-3 mt-0.5 flex-shrink-0 ${pkg.is_popular ? 'text-white' : 'text-green-500'}`}
                                                        fill="none"
                                                        stroke="currentColor"
                                                        viewBox="0 0 24 24"
                                                    >
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                    </svg>
                                                    <span className={`text-sm ${pkg.is_popular ? 'text-blue-100' : 'text-gray-600'}`}>
                                                        تقارير متقدمة
                                                    </span>
                                                </li>
                                            )}

                                            {pkg.has_analytics && (
                                                <li className="flex items-start">
                                                    <svg
                                                        className={`w-5 h-5 mr-3 mt-0.5 flex-shrink-0 ${pkg.is_popular ? 'text-white' : 'text-green-500'}`}
                                                        fill="none"
                                                        stroke="currentColor"
                                                        viewBox="0 0 24 24"
                                                    >
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                    </svg>
                                                    <span className={`text-sm ${pkg.is_popular ? 'text-blue-100' : 'text-gray-600'}`}>
                                                        تحليلات البيانات
                                                    </span>
                                                </li>
                                            )}

                                            {pkg.has_api && (
                                                <li className="flex items-start">
                                                    <svg
                                                        className={`w-5 h-5 mr-3 mt-0.5 flex-shrink-0 ${pkg.is_popular ? 'text-white' : 'text-green-500'}`}
                                                        fill="none"
                                                        stroke="currentColor"
                                                        viewBox="0 0 24 24"
                                                    >
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                    </svg>
                                                    <span className={`text-sm ${pkg.is_popular ? 'text-blue-100' : 'text-gray-600'}`}>
                                                        وصول API
                                                    </span>
                                                </li>
                                            )}

                                            {pkg.has_support && (
                                                <li className="flex items-start">
                                                    <svg
                                                        className={`w-5 h-5 mr-3 mt-0.5 flex-shrink-0 ${pkg.is_popular ? 'text-white' : 'text-green-500'}`}
                                                        fill="none"
                                                        stroke="currentColor"
                                                        viewBox="0 0 24 24"
                                                    >
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                    </svg>
                                                    <span className={`text-sm ${pkg.is_popular ? 'text-blue-100' : 'text-gray-600'}`}>
                                                        دعم فني
                                                    </span>
                                                </li>
                                            )}
                                        </ul>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-12">
                            <div className="max-w-md mx-auto">
                                <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                                </svg>
                                <h3 className="mt-4 text-lg font-medium text-gray-900">لا توجد باقات متاحة حالياً</h3>
                                <p className="mt-2 text-sm text-gray-500">
                                    سنقوم بإضافة باقات جديدة قريباً. تابعنا للحصول على آخر التحديثات.
                                </p>
                            </div>
                        </div>
                    )}
                </div>
            </section>

            {/* Enterprise Section */}
            <section className="py-16 sm:py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                        هل تحتاج حلول مخصصة؟
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
                        للشركات الكبيرة التي تحتاج متطلبات خاصة، نوفر حلول مخصصة تماماً حسب احتياجاتك
                    </p>
                    <div className="bg-white rounded-2xl p-8 shadow-lg max-w-2xl mx-auto">
                        <h3 className="text-xl font-bold text-gray-900 mb-4">الحلول المؤسسية تشمل:</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-right">
                            <ul className="space-y-2">
                                <li className="flex items-center">
                                    <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                    تخصيص كامل للواجهات
                                </li>
                                <li className="flex items-center">
                                    <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                    استضافة خاصة
                                </li>
                                <li className="flex items-center">
                                    <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                    تكامل مخصص
                                </li>
                            </ul>
                            <ul className="space-y-2">
                                <li className="flex items-center">
                                    <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                    SLA مضمون
                                </li>
                                <li className="flex items-center">
                                    <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                    تدريب مكثف
                                </li>
                                <li className="flex items-center">
                                    <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                    دعم مخصص
                                </li>
                            </ul>
                        </div>
                        <button className="mt-6 bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                            تواصل مع فريق المبيعات
                        </button>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-16 sm:py-20 bg-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                            أسئلة شائعة حول الأسعار
                        </h2>
                        <p className="text-lg text-gray-600">
                            إجابات على الأسئلة الأكثر شيوعاً حول باقات الاشتراك
                        </p>
                    </div>

                    <div className="space-y-8">
                        {faqs.map((faq, index) => (
                            <div key={index} className="bg-gray-50 rounded-xl p-6">
                                <h3 className="text-lg font-bold text-gray-900 mb-3">
                                    {faq.question}
                                </h3>
                                <p className="text-gray-600 leading-relaxed">
                                    {faq.answer}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 sm:py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
                <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                        جاهز للبدء؟
                    </h2>
                    <p className="text-xl mb-8 text-blue-100">
                        انضم إلى آلاف الشركات التي تستخدم DubaiExchange لتطوير أعمالها
                    </p>
                    <button className="bg-white text-blue-600 font-bold py-4 px-8 rounded-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-200">
                        ابدأ تجربتك المجانية
                    </button>
                    <p className="text-blue-200 text-sm mt-6">
                        * لا نحتاج بطاقة ائتمان • إلغاء في أي وقت • دعم مجاني
                    </p>
                </div>
            </section>
        </LandingLayout>
    );
}
