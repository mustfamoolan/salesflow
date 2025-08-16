import React, { useState, useEffect } from 'react';
import { Head, Link, usePage, router } from '@inertiajs/react';

export default function CustomerLayout({ children, title = 'لوحة تحكم العميل' }) {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const { url, props } = usePage();

    // الحصول على بيانات المستخدم من session
    const user = props.auth?.sessionUser || null;

    useEffect(() => {
        const checkMobile = () => {
            const mobile = window.innerWidth < 768;
            setIsMobile(mobile);
            if (!mobile) setSidebarOpen(true);
        };

        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    const navigation = [
        {
            name: 'لوحة التحكم',
            href: '/dashboard',
            icon: 'M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z',
            description: 'نظرة عامة على حسابك'
        },
        {
            name: 'الملف الشخصي',
            href: '/dashboard/profile',
            icon: 'M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z',
            description: 'إدارة بياناتك الشخصية'
        },
        {
            name: 'الاشتراك',
            href: '/dashboard/subscription',
            icon: 'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
            description: 'إدارة خطة الاشتراك'
        },
        {
            name: 'الفواتير',
            href: '/dashboard/billing',
            icon: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z',
            description: 'عرض الفواتير والمدفوعات'
        },
        {
            name: 'المعاملات',
            href: '/dashboard/transactions',
            icon: 'M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6',
            description: 'سجل المعاملات المالية'
        },
        {
            name: 'الإعدادات',
            href: '/dashboard/settings',
            icon: 'M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z M15 12a3 3 0 11-6 0 3 3 0 016 0z',
            description: 'إعدادات الحساب'
        },
        {
            name: 'الدعم الفني',
            href: '/dashboard/support',
            icon: 'M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
            description: 'المساعدة والدعم'
        }
    ];

    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    };

    const getCurrentPageInfo = () => {
        const currentItem = navigation.find(item => url.startsWith(item.href));
        return currentItem || navigation[0];
    };

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col">
            <Head title={`${title} - ${user?.name || 'DubaiExchange'}`} />

            {/* Header */}
            <header className="bg-white border-b border-gray-200 shadow-sm sticky top-0 z-50">
                <div className="px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        {/* Left: Menu and Logo */}
                        <div className="flex items-center space-x-4 space-x-reverse">
                            {isMobile && (
                                <button
                                    onClick={toggleSidebar}
                                    className="p-2 rounded-lg text-gray-500 hover:text-gray-700 hover:bg-gray-100"
                                >
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                    </svg>
                                </button>
                            )}

                            <div className="flex items-center space-x-3 space-x-reverse">
                                <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
                                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                                    </svg>
                                </div>
                                <div>
                                    <h1 className="text-lg font-semibold text-gray-900">
                                        {user?.company_name || 'DubaiExchange'}
                                    </h1>
                                    <p className="text-xs text-gray-500 hidden sm:block">{getCurrentPageInfo().name}</p>
                                </div>
                            </div>
                        </div>

                        {/* Right: User Profile */}
                        <div className="flex items-center space-x-4 space-x-reverse">
                            {/* Notifications */}
                            <button className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg relative">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                                </svg>
                                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
                            </button>

                            {/* User Menu */}
                            <div className="flex items-center space-x-3 space-x-reverse">
                                <div className="hidden lg:block text-right">
                                    <p className="text-sm font-semibold text-gray-900">{user?.name || 'العميل'}</p>
                                    <p className="text-xs text-gray-500">خطة Premium</p>
                                </div>
                                <div className="w-8 h-8 bg-gradient-to-br from-green-400 to-blue-500 rounded-full flex items-center justify-center text-white text-sm font-semibold">
                                    {user?.name ? user.name.charAt(0) : 'ع'}
                                </div>
                            </div>

                            {/* Logout */}
                            <button
                                onClick={() => {
                                    if (confirm('هل تريد تسجيل الخروج؟')) {
                                        router.post('/logout');
                                    }
                                }}
                                className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg"
                                title="خروج"
                            >
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </header>

            <div className="flex flex-1 overflow-hidden">
                {/* Mobile Overlay */}
                {isMobile && sidebarOpen && (
                    <div
                        className="fixed inset-0 bg-black bg-opacity-50 z-30"
                        onClick={() => setSidebarOpen(false)}
                    ></div>
                )}

                {/* Sidebar */}
                <aside className={`
                    ${isMobile ? 'fixed' : 'relative'}
                    ${isMobile ? (sidebarOpen ? 'translate-x-0' : '-translate-x-full') : 'translate-x-0'}
                    z-40 w-64 bg-white border-r border-gray-200 shadow-lg lg:shadow-none transition-transform duration-300 ease-in-out
                `}
                style={{ height: isMobile ? '100vh' : 'calc(100vh - 64px)' }}>
                    <div className="flex flex-col h-full">
                        {/* Navigation */}
                        <div className="flex-1 overflow-y-auto py-4">
                            <nav className="px-3 space-y-2">
                                {navigation.map((item) => (
                                    <Link
                                        key={item.name}
                                        href={item.href}
                                        onClick={() => isMobile && setSidebarOpen(false)}
                                        className={`w-full flex items-center px-4 py-3 text-right rounded-lg transition-all duration-200 group ${
                                            url.startsWith(item.href)
                                                ? 'bg-blue-50 text-blue-700 border-r-2 border-blue-500'
                                                : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                                        }`}
                                    >
                                        <svg
                                            className={`ml-3 w-5 h-5 ${
                                                url.startsWith(item.href) ? 'text-blue-600' : 'text-gray-400 group-hover:text-gray-600'
                                            }`}
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={item.icon} />
                                        </svg>
                                        <div className="flex-1 text-right">
                                            <div className="text-sm font-medium">{item.name}</div>
                                            <div className="text-xs mt-1 opacity-70">{item.description}</div>
                                        </div>
                                    </Link>
                                ))}
                            </nav>
                        </div>

                        {/* Subscription Status */}
                        <div className="p-4 border-t border-gray-100">
                            <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-lg p-3 border border-green-200">
                                <div className="flex items-center space-x-2 space-x-reverse">
                                    <div className="w-6 h-6 bg-green-500 rounded-lg flex items-center justify-center">
                                        <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    <div className="flex-1">
                                        <p className="text-xs font-medium text-green-900">خطة Premium نشطة</p>
                                        <p className="text-xs text-green-600">ينتهي في 30 يوم</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </aside>

                {/* Main Content */}
                <main className="flex-1 overflow-hidden">
                    <div className="h-full overflow-y-auto">
                        <div className="p-6">
                            {/* Page Header */}
                            <div className="mb-6">
                                <div className="flex items-center space-x-3 space-x-reverse">
                                    <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center">
                                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={getCurrentPageInfo().icon} />
                                        </svg>
                                    </div>
                                    <div>
                                        <h1 className="text-xl font-bold text-gray-900">{getCurrentPageInfo().name}</h1>
                                        <p className="text-sm text-gray-500">{getCurrentPageInfo().description}</p>
                                    </div>
                                </div>
                            </div>

                            {/* Page Content */}
                            <div className="bg-white rounded-xl shadow-sm border border-gray-200 min-h-[calc(100vh-200px)]">
                                <div className="p-6">
                                    {children}
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
}
