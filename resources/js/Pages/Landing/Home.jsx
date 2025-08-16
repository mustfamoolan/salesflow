import React, { useState } from 'react';
import LandingLayout from '../../Layouts/LandingLayout';

export default function Home({ siteSettings = {} }) {
    const [videoPlaying, setVideoPlaying] = useState(false);

    return (
        <LandingLayout title={siteSettings.site_title || "الرئيسية - SalesFlow"} siteSettings={siteSettings}>
            {/* Hero Section */}
            <section className="relative bg-gradient-to-br from-purple-50 to-white overflow-hidden min-h-screen flex items-center">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
                    <div className="text-center space-y-6 sm:space-y-8">
                        {/* Top Badge */}
                        <div className="inline-flex items-center px-3 sm:px-4 py-2 rounded-full bg-purple-100 text-purple-700 text-xs sm:text-sm font-medium">
                            <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
                            <span className="hidden sm:inline">موثوق من قبل {siteSettings.stats_customers || '500+'} عميل حول العالم</span>
                            <span className="sm:hidden">موثوق من قبل أفضل الشركات</span>
                        </div>

                        {/* Main Title */}
                        <div className="space-y-4 sm:space-y-6">
                            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 leading-tight px-2">
                                {siteSettings.hero_title ? (
                                    <span className="block">{siteSettings.hero_title}</span>
                                ) : (
                                    <>
                                        <span className="block">اكتشف أدوات إدارة</span>
                                        <span className="text-purple-600 block">المبيعات القوية</span>
                                    </>
                                )}
                            </h1>
                            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed px-4">
                                {siteSettings.hero_subtitle || (
                                    <>
                                        <span className="block">قم ببناء تجربة عمل استثنائية ومنظمة مع أدوات المبيعات</span>
                                        <span className="block mt-2">المتقدمة والذكية بسهولة تامة ومرونة عالية</span>
                                    </>
                                )}
                            </p>
                        </div>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-4">
                            <button className="w-full sm:w-auto bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 sm:py-4 px-6 sm:px-8 rounded-lg transition-all duration-200 flex items-center justify-center gap-2">
                                <span>{siteSettings.hero_cta_text || 'ابدأ مجاناً'}</span>
                                <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                </svg>
                            </button>
                            <button
                                onClick={() => setVideoPlaying(true)}
                                className="w-full sm:w-auto border border-gray-300 hover:border-gray-400 text-gray-700 font-semibold py-3 sm:py-4 px-6 sm:px-8 rounded-lg transition-all duration-200 flex items-center justify-center gap-2"
                            >
                                <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M8 5v14l11-7z"/>
                                </svg>
                                <span className="hidden sm:inline">مشاهدة العرض التوضيحي</span>
                                <span className="sm:hidden">شاهد العرض</span>
                            </button>
                        </div>

                        {/* Dashboard Preview */}
                        <div className="mt-12 sm:mt-16 relative">
                            <div className="relative mx-4 sm:mx-8 max-w-5xl mx-auto">
                                <div className="bg-white rounded-xl sm:rounded-2xl shadow-2xl border border-gray-200 p-4 sm:p-6 lg:p-8">
                                    {/* Dashboard Header */}
                                    <div className="flex items-center justify-between border-b border-gray-200 pb-4 mb-6">
                                        <h3 className="text-lg sm:text-xl font-bold text-gray-900">لوحة التحكم - SalesFlow</h3>
                                        <div className="flex gap-1.5">
                                            <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-red-500 rounded-full"></div>
                                            <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-yellow-500 rounded-full"></div>
                                            <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-green-500 rounded-full"></div>
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                                        {/* Left Sidebar */}
                                        <div className="space-y-4">
                                            <div className="bg-gray-50 rounded-lg p-4">
                                                <h4 className="font-semibold text-gray-900 mb-3 text-sm sm:text-base">المبيعات اليوم</h4>
                                                <div className="text-2xl sm:text-3xl font-bold text-purple-600">$12,847</div>
                                                <div className="text-xs sm:text-sm text-green-600">+12% من الأمس</div>
                                            </div>
                                            <div className="bg-gray-50 rounded-lg p-4">
                                                <h4 className="font-semibold text-gray-900 mb-3 text-sm sm:text-base">العملاء الجدد</h4>
                                                <div className="text-2xl sm:text-3xl font-bold text-blue-600">247</div>
                                                <div className="text-xs sm:text-sm text-green-600">+8% هذا الأسبوع</div>
                                            </div>
                                        </div>

                                        {/* Center Content */}
                                        <div className="lg:col-span-2 space-y-4">
                                            {/* Stats Cards */}
                                            <div className="grid grid-cols-3 gap-3">
                                                <div className="bg-white rounded-xl p-3 sm:p-4 shadow-sm border border-gray-100">
                                                    <div className="text-lg sm:text-2xl font-bold text-gray-900">$12.4K</div>
                                                    <div className="text-xs sm:text-sm text-gray-500">المبيعات</div>
                                                    <div className="text-green-500 text-xs">+12%</div>
                                                </div>
                                                <div className="bg-white rounded-xl p-3 sm:p-4 shadow-sm border border-gray-100">
                                                    <div className="text-lg sm:text-2xl font-bold text-gray-900">$738.14</div>
                                                    <div className="text-xs sm:text-sm text-gray-500">الإيرادات</div>
                                                    <div className="text-green-500 text-xs">+8%</div>
                                                </div>
                                                <div className="bg-white rounded-xl p-3 sm:p-4 shadow-sm border border-gray-100">
                                                    <div className="text-lg sm:text-2xl font-bold text-gray-900">847.76</div>
                                                    <div className="text-xs sm:text-sm text-gray-500">العملاء</div>
                                                    <div className="text-green-500 text-xs">+15%</div>
                                                </div>
                                            </div>

                                            {/* Chart Area */}
                                            <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
                                                <div className="h-32 bg-gradient-to-r from-purple-100 to-purple-200 rounded-lg flex items-center justify-center">
                                                    <span className="text-purple-600 font-medium text-sm sm:text-base">مخطط المبيعات التفاعلي</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Company Logos */}
                        <div className="mt-12 sm:mt-16">
                            <p className="text-gray-500 text-xs sm:text-sm mb-6 sm:mb-8 px-4">موثوق من قبل أفضل الشركات حول العالم</p>
                            <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 lg:gap-8 opacity-60 px-4">
                                <div className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-400">Microsoft</div>
                                <div className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-400">Google</div>
                                <div className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-400">Apple</div>
                                <div className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-400">Amazon</div>
                                <div className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-400">Netflix</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Video Modal */}
            {videoPlaying && (
                <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
                    <div className="relative bg-white rounded-lg p-2 max-w-4xl w-full">
                        <button
                            onClick={() => setVideoPlaying(false)}
                            className="absolute -top-4 -right-4 bg-white rounded-full p-2 shadow-lg hover:bg-gray-50"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                        <div className="aspect-video bg-gray-900 rounded-lg flex items-center justify-center">
                            <div className="text-white text-center">
                                <svg className="w-16 h-16 mx-auto mb-4" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M8 5v14l11-7z"/>
                                </svg>
                                <p>هنا سيكون الفيديو التوضيحي</p>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Features Section */}
            <section className="py-12 sm:py-16 lg:py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12 sm:mb-16">
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 px-4">
                            لماذا يختار الآلاف منصتنا؟
                        </h2>
                        <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
                            اكتشف المميزات القوية التي تجعل إدارة مبيعاتك أسهل وأكثر فعالية
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                        {/* Feature 1 */}
                        <div className="text-center p-6 sm:p-8">
                            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-purple-100 rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6">
                                <svg className="w-6 h-6 sm:w-8 sm:h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                                </svg>
                            </div>
                            <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4">تحليلات متقدمة</h3>
                            <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                                احصل على رؤى عميقة حول أداء مبيعاتك مع تقارير تفاعلية ومخططات بيانية واضحة
                            </p>
                        </div>

                        {/* Feature 2 */}
                        <div className="text-center p-6 sm:p-8">
                            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-blue-100 rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6">
                                <svg className="w-6 h-6 sm:w-8 sm:h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                                </svg>
                            </div>
                            <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4">إدارة العملاء</h3>
                            <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                                نظم قاعدة بيانات عملائك بطريقة ذكية مع إمكانية متابعة التفاعلات والمبيعات
                            </p>
                        </div>

                        {/* Feature 3 */}
                        <div className="text-center p-6 sm:p-8">
                            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-green-100 rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6">
                                <svg className="w-6 h-6 sm:w-8 sm:h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                </svg>
                            </div>
                            <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4">أتمتة المهام</h3>
                            <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                                وفر وقتك مع أدوات الأتمتة الذكية للمتابعة والتذكيرات والمهام المتكررة
                            </p>
                        </div>

                        {/* Feature 4 */}
                        <div className="text-center p-6 sm:p-8">
                            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-yellow-100 rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6">
                                <svg className="w-6 h-6 sm:w-8 sm:h-8 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                </svg>
                            </div>
                            <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4">أمان عالي</h3>
                            <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                                بيانات محمية بأعلى معايير الأمان مع نسخ احتياطية تلقائية وحماية متقدمة
                            </p>
                        </div>

                        {/* Feature 5 */}
                        <div className="text-center p-6 sm:p-8">
                            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-indigo-100 rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6">
                                <svg className="w-6 h-6 sm:w-8 sm:h-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                </svg>
                            </div>
                            <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4">سهولة الاستخدام</h3>
                            <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                                واجهة بديهية وسهلة التعلم تجعل فريقك ينجز أكثر في وقت أقل
                            </p>
                        </div>

                        {/* Feature 6 */}
                        <div className="text-center p-6 sm:p-8">
                            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-pink-100 rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6">
                                <svg className="w-6 h-6 sm:w-8 sm:h-8 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
                                </svg>
                            </div>
                            <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4">تكامل شامل</h3>
                            <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                                اربط النظام مع جميع أدواتك المفضلة للحصول على تجربة عمل متكاملة
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Integration Section */}
            <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12 sm:mb-16">
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 px-4">
                            ليس عليك تفويت جميع ميزاته
                        </h2>
                        <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
                            تكامل سلس مع جميع الأدوات التي تستخدمها يومياً لتجربة عمل متكاملة
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
                        {/* Left Content */}
                        <div className="space-y-6 sm:space-y-8 order-2 lg:order-1">
                            {/* Feature 1 */}
                            <div className="flex gap-4 sm:gap-6">
                                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                                    <svg className="w-5 h-5 sm:w-6 sm:h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">مبيعاتك منظمة بشكل جيد</h3>
                                    <p className="text-gray-600 text-sm sm:text-base">
                                        نظم جميع بيانات المبيعات والعملاء في مكان واحد لسهولة الوصول والمتابعة الدقيقة
                                    </p>
                                </div>
                            </div>

                            {/* Feature 2 */}
                            <div className="flex gap-4 sm:gap-6">
                                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                                    <svg className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">الحرية في معالجة أي بيانات</h3>
                                    <p className="text-gray-600 text-sm sm:text-base">
                                        تحكم كامل في معالجة وتحليل البيانات بأي تنسيق تريده مع أدوات متقدمة للتخصيص
                                    </p>
                                </div>
                            </div>

                            {/* Feature 3 */}
                            <div className="flex gap-4 sm:gap-6">
                                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                                    <svg className="w-5 h-5 sm:w-6 sm:h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">التكامل يجعل العمل أسهل</h3>
                                    <p className="text-gray-600 text-sm sm:text-base">
                                        تكامل سلس مع جميع الأدوات والتطبيقات التي تستخدمها لتجربة عمل موحدة ومتطورة
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Right Content - Visual */}
                        <div className="relative order-1 lg:order-2">
                            <div className="bg-white rounded-xl sm:rounded-2xl shadow-xl border border-gray-200 p-6 sm:p-8">
                                <div className="space-y-4 sm:space-y-6">
                                    {/* Integration Items */}
                                    <div className="flex items-center justify-between p-3 sm:p-4 bg-purple-50 rounded-lg">
                                        <div className="flex items-center gap-3 sm:gap-4">
                                            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-purple-600 rounded-lg flex items-center justify-center">
                                                <span className="text-white font-bold text-xs sm:text-sm">G</span>
                                            </div>
                                            <div>
                                                <div className="font-semibold text-gray-900 text-sm sm:text-base">Google Workspace</div>
                                                <div className="text-xs sm:text-sm text-gray-500">متصل</div>
                                            </div>
                                        </div>
                                        <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-green-500 rounded-full"></div>
                                    </div>

                                    <div className="flex items-center justify-between p-3 sm:p-4 bg-gray-50 rounded-lg">
                                        <div className="flex items-center gap-3 sm:gap-4">
                                            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                                                <span className="text-white font-bold text-xs sm:text-sm">S</span>
                                            </div>
                                            <div>
                                                <div className="font-semibold text-gray-900 text-sm sm:text-base">Slack</div>
                                                <div className="text-xs sm:text-sm text-gray-500">متصل</div>
                                            </div>
                                        </div>
                                        <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-green-500 rounded-full"></div>
                                    </div>

                                    <div className="flex items-center justify-between p-3 sm:p-4 bg-gray-50 rounded-lg">
                                        <div className="flex items-center gap-3 sm:gap-4">
                                            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-indigo-600 rounded-lg flex items-center justify-center">
                                                <span className="text-white font-bold text-xs sm:text-sm">Z</span>
                                            </div>
                                            <div>
                                                <div className="font-semibold text-gray-900 text-sm sm:text-base">Zoom</div>
                                                <div className="text-xs sm:text-sm text-gray-500">متصل</div>
                                            </div>
                                        </div>
                                        <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-green-500 rounded-full"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="py-12 sm:py-16 lg:py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12 sm:mb-16">
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 px-4">
                            بعض من عملائنا الراضين
                            <br />
                            يستخدمون أدوات Sensiol
                        </h2>
                        <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
                            آراء حقيقية من عملاء استفادوا من منصتنا وحققوا نتائج رائعة في أعمالهم
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                        {/* Testimonial 1 */}
                        <div className="bg-white rounded-xl p-6 sm:p-8 shadow-lg border border-gray-100">
                            <div className="flex items-center gap-1 mb-4 sm:mb-6">
                                {[...Array(5)].map((_, i) => (
                                    <svg key={i} className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                ))}
                            </div>
                            <p className="text-gray-700 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
                                "منصة رائعة ساعدتني في تنظيم عملي بشكل لا يصدق. التقارير والإحصائيات واضحة ودقيقة، والواجهة سهلة الاستخدام."
                            </p>
                            <div className="flex items-center gap-3 sm:gap-4">
                                <img
                                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
                                    alt="أحمد سعد"
                                    className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover flex-shrink-0"
                                />
                                <div>
                                    <div className="font-semibold text-gray-900 text-sm sm:text-base">أحمد سعد</div>
                                    <div className="text-gray-600 text-xs sm:text-sm">الرئيس التنفيذي - شركة التطوير</div>
                                </div>
                            </div>
                        </div>

                        {/* Testimonial 2 */}
                        <div className="bg-white rounded-xl p-6 sm:p-8 shadow-lg border border-gray-100">
                            <div className="flex items-center gap-1 mb-4 sm:mb-6">
                                {[...Array(5)].map((_, i) => (
                                    <svg key={i} className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                ))}
                            </div>
                            <p className="text-gray-700 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
                                "أفضل استثمار قمت به لشركتي. وفرت علي الكثير من الوقت والجهد في إدارة العملاء والمتابعة."
                            </p>
                            <div className="flex items-center gap-3 sm:gap-4">
                                <img
                                    src="https://images.unsplash.com/photo-1494790108755-2616b612b647?w=150&h=150&fit=crop&crop=face"
                                    alt="سارة محمد"
                                    className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover flex-shrink-0"
                                />
                                <div>
                                    <div className="font-semibold text-gray-900 text-sm sm:text-base">سارة محمد</div>
                                    <div className="text-gray-600 text-xs sm:text-sm">مؤسسة شركة الإبداع</div>
                                </div>
                            </div>
                        </div>

                        {/* Testimonial 3 */}
                        <div className="bg-white rounded-xl p-6 sm:p-8 shadow-lg border border-gray-100 md:col-span-2 lg:col-span-1">
                            <div className="flex items-center gap-1 mb-4 sm:mb-6">
                                {[...Array(5)].map((_, i) => (
                                    <svg key={i} className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                ))}
                            </div>
                            <p className="text-gray-700 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
                                "التكامل مع التطبيقات الأخرى ممتاز، والتقارير شاملة ومفيدة جداً لاتخاذ القرارات الصحيحة."
                            </p>
                            <div className="flex items-center gap-3 sm:gap-4">
                                <img
                                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
                                    alt="محمد علي"
                                    className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover flex-shrink-0"
                                />
                                <div>
                                    <div className="font-semibold text-gray-900 text-sm sm:text-base">محمد علي</div>
                                    <div className="text-gray-600 text-xs sm:text-sm">مدير المبيعات - شركة النجاح</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12 sm:mb-16">
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 px-4">
                            الأسئلة الشائعة
                        </h2>
                        <p className="text-lg sm:text-xl text-gray-600 px-4">
                            إجابات على الأسئلة الأكثر شيوعاً حول منصتنا وخدماتنا
                        </p>
                    </div>

                    <div className="space-y-6 sm:space-y-8">
                        {/* FAQ Item 1 */}
                        <div className="bg-white rounded-xl p-4 sm:p-6 shadow-sm border border-gray-100">
                            <div className="flex items-start gap-3 sm:gap-4">
                                <div className="w-5 h-5 sm:w-6 sm:h-6 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                                    <span className="text-purple-600 text-xs sm:text-sm font-bold">؟</span>
                                </div>
                                <div>
                                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">
                                        ما هي أفضل منصة إدارة مبيعات؟
                                    </h3>
                                    <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                                        منصتنا SalesFlow تعتبر من أفضل المنصات لإدارة المبيعات، حيث تجمع بين السهولة والقوة والمرونة في التخصيص حسب احتياجات عملك.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* FAQ Item 2 */}
                        <div className="bg-white rounded-xl p-4 sm:p-6 shadow-sm border border-gray-100">
                            <div className="flex items-start gap-3 sm:gap-4">
                                <div className="w-5 h-5 sm:w-6 sm:h-6 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                                    <span className="text-purple-600 text-xs sm:text-sm font-bold">؟</span>
                                </div>
                                <div>
                                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">
                                        هل يمكنني تجربة المنصة مجاناً؟
                                    </h3>
                                    <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                                        نعم، نوفر تجربة مجانية لمدة 30 يوماً بدون الحاجة لبطاقة ائتمان، يمكنك خلالها استكشاف جميع الميزات والوظائف.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* FAQ Item 3 */}
                        <div className="bg-white rounded-xl p-4 sm:p-6 shadow-sm border border-gray-100">
                            <div className="flex items-start gap-3 sm:gap-4">
                                <div className="w-5 h-5 sm:w-6 sm:h-6 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                                    <span className="text-purple-600 text-xs sm:text-sm font-bold">؟</span>
                                </div>
                                <div>
                                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">
                                        هل تدعم المنصة التكامل مع التطبيقات الأخرى؟
                                    </h3>
                                    <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                                        نعم، نوفر تكامل شامل مع أكثر من 100 تطبيق مختلف مثل Google Workspace وSlack وZoom وغيرها من الأدوات المهمة.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* FAQ Item 4 */}
                        <div className="bg-white rounded-xl p-4 sm:p-6 shadow-sm border border-gray-100">
                            <div className="flex items-start gap-3 sm:gap-4">
                                <div className="w-5 h-5 sm:w-6 sm:h-6 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                                    <span className="text-purple-600 text-xs sm:text-sm font-bold">؟</span>
                                </div>
                                <div>
                                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">
                                        كيف يمكنني الحصول على الدعم الفني؟
                                    </h3>
                                    <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                                        نوفر دعم فني متاح 24/7 عبر الدردشة المباشرة والبريد الإلكتروني والهاتف، بالإضافة إلى قاعدة معرفية شاملة.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Final CTA Section */}
            <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-r from-purple-600 to-purple-800 text-white">
                <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 px-4">
                        ارتق بأعمالك إلى المستوى التالي
                    </h2>
                    <p className="text-lg sm:text-xl mb-6 sm:mb-8 text-purple-100 px-4">
                        ابدأ رحلتك مع أفضل منصة لإدارة المبيعات والعملاء
                        واكتشف الفرق الحقيقي في أدائك وإنتاجيتك
                    </p>
                    <button className="bg-white text-purple-600 font-bold py-3 px-6 sm:py-4 sm:px-8 rounded-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-200 text-sm sm:text-base">
                        ابدأ مجاناً الآن
                    </button>
                    <p className="text-purple-200 text-xs sm:text-sm mt-4 sm:mt-6 px-4">
                        * تجربة مجانية 30 يوم • لا نحتاج بطاقة ائتمان • إعداد سريع
                    </p>
                </div>
            </section>
        </LandingLayout>
    );
}
