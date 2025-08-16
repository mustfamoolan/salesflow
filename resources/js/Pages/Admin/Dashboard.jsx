import React from 'react';
import AdminLayout from '../../Layouts/AdminLayout';

export default function Dashboard() {
    const stats = [
        {
            name: 'إجمالي العملاء',
            value: '1,234',
            change: '+4.3%',
            changeType: 'increase',
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
            )
        },
        {
            name: 'إجمالي المبيعات',
            value: '2.4M ر.س',
            change: '+12.5%',
            changeType: 'increase',
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            )
        },
        {
            name: 'عدد الطلبات',
            value: '567',
            change: '+8.2%',
            changeType: 'increase',
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
            )
        },
        {
            name: 'عدد الموظفين',
            value: '45',
            change: '+2.1%',
            changeType: 'increase',
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
            )
        }
    ];

    const recentActivities = [
        {
            id: 1,
            user: 'أحمد محمد',
            action: 'أضاف عميل جديد',
            target: 'شركة النور للتجارة',
            time: 'منذ 5 دقائق',
            type: 'create'
        },
        {
            id: 2,
            user: 'فاطمة علي',
            action: 'حدث عملية بيع',
            target: 'طلب رقم #1234',
            time: 'منذ 15 دقيقة',
            type: 'update'
        },
        {
            id: 3,
            user: 'محمد حسن',
            action: 'أنشأ تقرير',
            target: 'تقرير المبيعات الشهري',
            time: 'منذ 30 دقيقة',
            type: 'create'
        },
        {
            id: 4,
            user: 'سارة أحمد',
            action: 'حدث بيانات العميل',
            target: 'مؤسسة الخليج',
            time: 'منذ ساعة',
            type: 'update'
        }
    ];

    const quickActions = [
        {
            name: 'لوحة التحكم',
            href: '/admin/dashboard',
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z" />
                </svg>
            ),
            color: 'bg-blue-500 hover:bg-blue-600'
        },
        {
            name: 'قريباً - العملاء',
            href: '#',
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
            ),
            color: 'bg-gray-400 cursor-not-allowed'
        },
        {
            name: 'قريباً - التقارير',
            href: '#',
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
            ),
            color: 'bg-gray-400 cursor-not-allowed'
        },
        {
            name: 'قريباً - الإعدادات',
            href: '#',
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
            ),
            color: 'bg-gray-400 cursor-not-allowed'
        }
    ];

    return (
        <AdminLayout title="لوحة التحكم الرئيسية">
            <div className="space-y-6">
                {/* Welcome Section */}
                <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl p-6 text-white">
                    <h1 className="text-2xl font-bold mb-2">مرحباً بك في لوحة تحكم SalesFlow</h1>
                    <p className="text-blue-100">إدارة شاملة لنظام المبيعات والعملاء</p>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {stats.map((stat, index) => (
                        <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-sm font-medium text-gray-600">{stat.name}</p>
                                    <p className="text-2xl font-bold text-gray-900 mt-1">{stat.value}</p>
                                </div>
                                <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center text-blue-600">
                                    {stat.icon}
                                </div>
                            </div>
                            <div className="mt-4 flex items-center">
                                <span className={`text-sm font-medium ${
                                    stat.changeType === 'increase' ? 'text-green-600' : 'text-red-600'
                                }`}>
                                    {stat.change}
                                </span>
                                <span className="text-sm text-gray-500 mr-2">من الشهر الماضي</span>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {/* Quick Actions */}
                    <div className="lg:col-span-1">
                        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                            <h2 className="text-lg font-bold text-gray-900 mb-4">إجراءات سريعة</h2>
                            <div className="space-y-3">
                                {quickActions.map((action, index) => (
                                    <a
                                        key={index}
                                        href={action.href}
                                        className={`${action.color} text-white p-4 rounded-lg flex items-center space-x-3 space-x-reverse transition-colors group`}
                                    >
                                        <div className="flex-shrink-0">
                                            {action.icon}
                                        </div>
                                        <span className="font-medium">{action.name}</span>
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Recent Activities */}
                    <div className="lg:col-span-2">
                        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                            <h2 className="text-lg font-bold text-gray-900 mb-4">الأنشطة الأخيرة</h2>
                            <div className="space-y-4">
                                {recentActivities.map((activity) => (
                                    <div key={activity.id} className="flex items-start space-x-3 space-x-reverse">
                                        <div className={`w-2 h-2 rounded-full mt-2 ${
                                            activity.type === 'create' ? 'bg-green-500' : 'bg-blue-500'
                                        }`}></div>
                                        <div className="flex-1 min-w-0">
                                            <p className="text-sm text-gray-900">
                                                <span className="font-medium">{activity.user}</span>
                                                {' '}
                                                <span className="text-gray-600">{activity.action}</span>
                                                {' '}
                                                <span className="font-medium text-blue-600">{activity.target}</span>
                                            </p>
                                            <p className="text-xs text-gray-500 mt-1">{activity.time}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="mt-4 pt-4 border-t border-gray-200">
                                <span className="text-sm text-gray-500 font-medium">
                                    المزيد من الميزات قريباً...
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Sales Chart Placeholder */}
                <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                    <div className="flex items-center justify-between mb-4">
                        <h2 className="text-lg font-bold text-gray-900">إحصائيات المبيعات</h2>
                        <select className="text-sm border border-gray-300 rounded-lg px-3 py-1">
                            <option>آخر 7 أيام</option>
                            <option>آخر 30 يوم</option>
                            <option>آخر 3 أشهر</option>
                        </select>
                    </div>
                    <div className="h-64 bg-gray-50 rounded-lg flex items-center justify-center">
                        <div className="text-center">
                            <svg className="w-12 h-12 text-gray-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                            </svg>
                            <p className="text-gray-500">مخطط بياني للمبيعات - قريباً</p>
                        </div>
                    </div>
                </div>
            </div>
        </AdminLayout>
    );
}
