import React from 'react';
import { Head, Link, router } from '@inertiajs/react';
import AdminLayout from '@/Layouts/AdminLayout';

export default function ShowPackage({ package: packageData }) {
    const handleDelete = () => {
        if (confirm(`هل تريد حذف الباقة "${packageData.name}"؟ هذا الإجراء غير قابل للتراجع.`)) {
            router.delete(`/admin/packages/${packageData.id}`);
        }
    };

    const toggleStatus = () => {
        router.patch(`/admin/packages/${packageData.id}/quick-update`, {
            is_active: !packageData.is_active
        });
    };

    return (
        <AdminLayout title={`عرض الباقة: ${packageData.name}`}>
            <Head title={`${packageData.name} - تفاصيل الباقة`} />

            <div className="p-4 sm:p-6 lg:p-8">
                {/* Header */}
                <div className="mb-6 sm:mb-8">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                        <div>
                            <div className="flex items-center space-x-2 space-x-reverse">
                                <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">
                                    {packageData.name}
                                </h1>
                                {packageData.is_popular && (
                                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                                        شائع
                                    </span>
                                )}
                                <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                                    packageData.is_active
                                        ? 'bg-green-100 text-green-800'
                                        : 'bg-gray-100 text-gray-800'
                                }`}>
                                    {packageData.is_active ? 'نشط' : 'غير نشط'}
                                </span>
                            </div>
                            <p className="mt-2 text-sm text-gray-600">
                                تفاصيل الباقة ومميزاتها
                            </p>
                        </div>
                        <div className="flex items-center space-x-2 space-x-reverse">
                            <Link
                                href="/admin/packages"
                                className="inline-flex items-center px-4 py-2 bg-gray-600 border border-transparent rounded-lg text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 transition-colors duration-200"
                            >
                                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                                </svg>
                                العودة للقائمة
                            </Link>
                            <Link
                                href={`/admin/packages/${packageData.id}/edit`}
                                className="inline-flex items-center px-4 py-2 bg-blue-600 border border-transparent rounded-lg text-sm font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors duration-200"
                            >
                                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                                </svg>
                                تعديل
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Main Content */}
                    <div className="lg:col-span-2 space-y-6">
                        {/* Basic Information */}
                        <div className="bg-white rounded-lg border border-gray-200 p-6">
                            <h3 className="text-lg font-medium text-gray-900 mb-4">معلومات أساسية</h3>

                            <dl className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <dt className="text-sm font-medium text-gray-500">اسم الباقة</dt>
                                    <dd className="mt-1 text-sm text-gray-900">{packageData.name}</dd>
                                </div>

                                <div>
                                    <dt className="text-sm font-medium text-gray-500">السعر</dt>
                                    <dd className="mt-1 text-sm text-gray-900 font-semibold">
                                        {parseFloat(packageData.price).toLocaleString()} IQD
                                    </dd>
                                </div>

                                <div>
                                    <dt className="text-sm font-medium text-gray-500">المدة</dt>
                                    <dd className="mt-1 text-sm text-gray-900">
                                        {packageData.duration_formatted} ({packageData.duration_days} يوم)
                                    </dd>
                                </div>

                                <div>
                                    <dt className="text-sm font-medium text-gray-500">تاريخ الإنشاء</dt>
                                    <dd className="mt-1 text-sm text-gray-900">
                                        {new Date(packageData.created_at).toLocaleDateString('ar-SA')}
                                    </dd>
                                </div>

                                {packageData.description && (
                                    <div className="md:col-span-2">
                                        <dt className="text-sm font-medium text-gray-500">الوصف</dt>
                                        <dd className="mt-1 text-sm text-gray-900">{packageData.description}</dd>
                                    </div>
                                )}
                            </dl>
                        </div>

                        {/* Features */}
                        <div className="bg-white rounded-lg border border-gray-200 p-6">
                            <h3 className="text-lg font-medium text-gray-900 mb-4">مميزات الباقة</h3>

                            {packageData.features && packageData.features.length > 0 ? (
                                <ul className="space-y-2">
                                    {packageData.features.map((feature, index) => (
                                        <li key={index} className="flex items-center">
                                            <svg className="h-4 w-4 text-green-600 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                            <span className="text-sm text-gray-900">{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            ) : (
                                <p className="text-sm text-gray-500">لا توجد مميزات محددة</p>
                            )}
                        </div>

                        {/* Limits */}
                        <div className="bg-white rounded-lg border border-gray-200 p-6">
                            <h3 className="text-lg font-medium text-gray-900 mb-4">حدود الباقة</h3>

                            <dl className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                <div>
                                    <dt className="text-sm font-medium text-gray-500">الموظفين</dt>
                                    <dd className="mt-1 text-sm text-gray-900">
                                        {packageData.max_employees || 'غير محدود'}
                                    </dd>
                                </div>

                                <div>
                                    <dt className="text-sm font-medium text-gray-500">العملاء</dt>
                                    <dd className="mt-1 text-sm text-gray-900">
                                        {packageData.max_customers || 'غير محدود'}
                                    </dd>
                                </div>

                                <div>
                                    <dt className="text-sm font-medium text-gray-500">المنتجات</dt>
                                    <dd className="mt-1 text-sm text-gray-900">
                                        {packageData.max_products || 'غير محدود'}
                                    </dd>
                                </div>
                            </dl>
                        </div>

                        {/* Additional Features */}
                        <div className="bg-white rounded-lg border border-gray-200 p-6">
                            <h3 className="text-lg font-medium text-gray-900 mb-4">مميزات إضافية</h3>

                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                <div className="flex items-center">
                                    <div className={`w-3 h-3 rounded-full ml-2 ${packageData.has_reports ? 'bg-green-400' : 'bg-gray-300'}`}></div>
                                    <span className="text-sm text-gray-900">تقارير متقدمة</span>
                                </div>

                                <div className="flex items-center">
                                    <div className={`w-3 h-3 rounded-full ml-2 ${packageData.has_analytics ? 'bg-green-400' : 'bg-gray-300'}`}></div>
                                    <span className="text-sm text-gray-900">تحليلات</span>
                                </div>

                                <div className="flex items-center">
                                    <div className={`w-3 h-3 rounded-full ml-2 ${packageData.has_api ? 'bg-green-400' : 'bg-gray-300'}`}></div>
                                    <span className="text-sm text-gray-900">وصول API</span>
                                </div>

                                <div className="flex items-center">
                                    <div className={`w-3 h-3 rounded-full ml-2 ${packageData.has_support ? 'bg-green-400' : 'bg-gray-300'}`}></div>
                                    <span className="text-sm text-gray-900">دعم فني</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Sidebar */}
                    <div className="space-y-6">
                        {/* Package Preview */}
                        <div className="bg-white rounded-lg border border-gray-200 p-6">
                            <h3 className="text-lg font-medium text-gray-900 mb-4">معاينة الباقة</h3>

                            <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-lg p-4 border-2 border-dashed border-blue-200">
                                <div className="text-center">
                                    <h4 className="text-lg font-semibold text-gray-900 mb-2">
                                        {packageData.name}
                                    </h4>
                                    <div className="text-2xl font-bold text-blue-600 mb-2">
                                        {parseFloat(packageData.price).toLocaleString()}
                                        <span className="text-sm text-gray-600 font-normal"> IQD</span>
                                    </div>
                                    <div className="text-sm text-gray-600 mb-3">
                                        /{packageData.duration_formatted}
                                    </div>
                                    {packageData.description && (
                                        <p className="text-sm text-gray-700 mb-4">
                                            {packageData.description}
                                        </p>
                                    )}
                                    <div className="text-xs text-gray-500">
                                        {packageData.features?.length || 0} ميزة متاحة
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Quick Actions */}
                        <div className="bg-white rounded-lg border border-gray-200 p-6">
                            <h3 className="text-lg font-medium text-gray-900 mb-4">إجراءات سريعة</h3>

                            <div className="space-y-3">
                                <button
                                    onClick={toggleStatus}
                                    className={`w-full inline-flex justify-center items-center px-4 py-2 border border-transparent rounded-md text-sm font-medium transition-colors duration-200 ${
                                        packageData.is_active
                                            ? 'bg-gray-600 text-white hover:bg-gray-700 focus:ring-gray-500'
                                            : 'bg-green-600 text-white hover:bg-green-700 focus:ring-green-500'
                                    } focus:outline-none focus:ring-2 focus:ring-offset-2`}
                                >
                                    {packageData.is_active ? 'إلغاء التفعيل' : 'تفعيل الباقة'}
                                </button>

                                <Link
                                    href={`/admin/packages/${packageData.id}/edit`}
                                    className="w-full inline-flex justify-center items-center px-4 py-2 bg-blue-600 border border-transparent rounded-md text-sm font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200"
                                >
                                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                                    </svg>
                                    تعديل الباقة
                                </Link>

                                <button
                                    onClick={handleDelete}
                                    className="w-full inline-flex justify-center items-center px-4 py-2 bg-red-600 border border-transparent rounded-md text-sm font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition-colors duration-200"
                                >
                                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                    </svg>
                                    حذف الباقة
                                </button>
                            </div>
                        </div>

                        {/* Statistics */}
                        <div className="bg-white rounded-lg border border-gray-200 p-6">
                            <h3 className="text-lg font-medium text-gray-900 mb-4">إحصائيات</h3>

                            <dl className="space-y-3">
                                <div>
                                    <dt className="text-sm font-medium text-gray-500">المشتركين الحاليين</dt>
                                    <dd className="text-lg font-semibold text-gray-900">0</dd>
                                </div>

                                <div>
                                    <dt className="text-sm font-medium text-gray-500">إجمالي الإيرادات</dt>
                                    <dd className="text-lg font-semibold text-gray-900">0 IQD</dd>
                                </div>

                                <div>
                                    <dt className="text-sm font-medium text-gray-500">آخر اشتراك</dt>
                                    <dd className="text-sm text-gray-900">لا يوجد</dd>
                                </div>
                            </dl>
                        </div>
                    </div>
                </div>
            </div>
        </AdminLayout>
    );
}
