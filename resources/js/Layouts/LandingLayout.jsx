import React, { useState } from 'react';
import { Head, Link, usePage } from '@inertiajs/react';

export default function LandingLayout({ children, title = null, siteSettings = {} }) {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const { url } = usePage();

    // استخدام الإعدادات الديناميكية مع القيم الافتراضية
    const siteName = siteSettings.site_name || 'SalesFlow';
    const pageTitle = title || siteSettings.site_title || 'DubaiExchange - منصة إدارة الأعمال';
    const siteDescription = siteSettings.site_description || 'منصة شاملة لإدارة المبيعات والعمليات التجارية مع نظام متطور للتحليلات';

    const navigation = [
        { name: 'الرئيسية', href: '/' },
        { name: 'المميزات', href: '/features' },
        { name: 'الأسعار', href: '/pricing' },
        { name: 'من نحن', href: '/about' },
        { name: 'اتصل بنا', href: '/contact' },
    ];

    return (
        <>
            <Head title={pageTitle} />

            {/* Header */}
            <header className="bg-white shadow-sm border-b sticky top-0 z-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-14 sm:h-16">
                        {/* Logo */}
                        <div className="flex items-center space-x-2 sm:space-x-3 space-x-reverse">
                            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg sm:rounded-xl flex items-center justify-center">
                                <svg className="w-4 h-4 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                                </svg>
                            </div>
                            <span className="text-lg sm:text-xl font-bold text-gray-900">{siteName}</span>
                        </div>

                        {/* Navigation */}
                        <nav className="hidden lg:flex space-x-6 xl:space-x-8 space-x-reverse">
                            {navigation.map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                                        url === item.href
                                            ? 'text-purple-600 bg-purple-50'
                                            : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                                    }`}
                                >
                                    {item.name}
                                </Link>
                            ))}
                        </nav>

                        {/* CTA Buttons */}
                        <div className="hidden sm:flex items-center space-x-2 sm:space-x-4 space-x-reverse">
                            <Link
                                href="/login"
                                className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-xs sm:text-sm font-medium"
                            >
                                تسجيل الدخول
                            </Link>
                            <Link
                                href="/register"
                                className="bg-purple-600 text-white px-3 py-2 sm:px-4 sm:py-2 rounded-md text-xs sm:text-sm font-medium hover:bg-purple-700 transition-colors"
                            >
                                ابدأ الآن
                            </Link>
                        </div>

                        {/* Mobile menu button */}
                        <button
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            className="sm:hidden lg:hidden p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100"
                        >
                            <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Mobile menu */}
                {mobileMenuOpen && (
                    <div className="sm:hidden lg:hidden">
                        <div className="px-2 pt-2 pb-3 space-y-1 bg-gray-50 border-t">
                            {navigation.map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                                        url === item.href
                                            ? 'text-purple-600 bg-purple-50'
                                            : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                                    }`}
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    {item.name}
                                </Link>
                            ))}
                            <div className="pt-4 pb-2 border-t border-gray-200">
                                <Link
                                    href="/login"
                                    className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-100"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    تسجيل الدخول
                                </Link>
                                <Link
                                    href="/register"
                                    className="block px-3 py-2 rounded-md text-base font-medium text-white bg-purple-600 hover:bg-purple-700 mt-2"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    ابدأ الآن
                                </Link>
                            </div>
                        </div>
                    </div>
                )}
            </header>

            {/* Main Content */}
            <main className="min-h-screen">
                {children}
            </main>

            {/* Footer */}
            <footer className="bg-gray-900 text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
                        <div className="sm:col-span-2">
                            <div className="flex items-center space-x-2 sm:space-x-3 space-x-reverse mb-4">
                                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg sm:rounded-xl flex items-center justify-center">
                                    <svg className="w-4 h-4 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                                    </svg>
                                </div>
                                <span className="text-lg sm:text-xl font-bold">{siteName}</span>
                            </div>
                            <p className="text-gray-300 mb-4 text-sm sm:text-base">
                                {siteDescription}
                            </p>
                            <div className="flex space-x-3 sm:space-x-4 space-x-reverse">
                                {siteSettings.social_twitter && (
                                    <a href={siteSettings.social_twitter} className="text-gray-400 hover:text-white transition-colors">
                                        <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                                        </svg>
                                    </a>
                                )}
                                {siteSettings.social_facebook && (
                                    <a href={siteSettings.social_facebook} className="text-gray-400 hover:text-white transition-colors">
                                        <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
                                        </svg>
                                    </a>
                                )}
                                {siteSettings.social_linkedin && (
                                    <a href={siteSettings.social_linkedin} className="text-gray-400 hover:text-white transition-colors">
                                        <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                                        </svg>
                                    </a>
                                )}
                                {siteSettings.social_instagram && (
                                    <a href={siteSettings.social_instagram} className="text-gray-400 hover:text-white transition-colors">
                                        <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.618 5.367 11.987 11.987 11.987s11.987-5.369 11.987-11.987C24.014 5.367 18.635.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C4.198 14.895 3.708 13.744 3.708 12.447s.49-2.448 1.297-3.323C5.902 8.197 7.053 7.707 8.449 7.707s2.448.49 3.323 1.297c.896.875 1.387 2.026 1.387 3.323s-.49 2.448-1.387 3.323c-.875.806-2.026 1.297-3.323 1.297z"/>
                                        </svg>
                                    </a>
                                )}
                            </div>
                        </div>

                        <div>
                            <h3 className="text-xs sm:text-sm font-semibold text-gray-300 tracking-wider uppercase mb-3 sm:mb-4">المنتج</h3>
                            <ul className="space-y-2 sm:space-y-3">
                                <li><Link href="/features" className="text-gray-400 hover:text-white text-sm sm:text-base transition-colors">المميزات</Link></li>
                                <li><Link href="/pricing" className="text-gray-400 hover:text-white text-sm sm:text-base transition-colors">الأسعار</Link></li>
                                <li><a href="#" className="text-gray-400 hover:text-white text-sm sm:text-base transition-colors">الأمان</a></li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-xs sm:text-sm font-semibold text-gray-300 tracking-wider uppercase mb-3 sm:mb-4">الشركة</h3>
                            <ul className="space-y-2 sm:space-y-3">
                                <li><Link href="/about" className="text-gray-400 hover:text-white text-sm sm:text-base transition-colors">من نحن</Link></li>
                                <li><Link href="/contact" className="text-gray-400 hover:text-white text-sm sm:text-base transition-colors">اتصل بنا</Link></li>
                                <li><a href="#" className="text-gray-400 hover:text-white text-sm sm:text-base transition-colors">الدعم الفني</a></li>
                            </ul>
                        </div>
                    </div>

                    <div className="mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-gray-700">
                        <div className="flex flex-col sm:flex-row items-center justify-between">
                            <p className="text-gray-400 text-xs sm:text-sm mb-2 sm:mb-0">
                                {siteSettings.footer_copyright || `© 2025 ${siteName}. جميع الحقوق محفوظة.`}
                            </p>
                            <Link
                                href="/admin/login"
                                className="text-gray-500 hover:text-gray-300 text-xs transition-colors"
                            >
                                لوحة التحكم
                            </Link>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}
