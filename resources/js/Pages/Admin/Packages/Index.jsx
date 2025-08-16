import React, { useState } from 'react';
import { Head, Link, router } from '@inertiajs/react';
import AdminLayout from '@/Layouts/AdminLayout';

export default function PackagesIndex({ packages }) {
    const [isDeleting, setIsDeleting] = useState(null);

    const handleDelete = (packageId, packageName) => {
        if (confirm(`هل تريد حذف الباقة "${packageName}"؟ هذا الإجراء غير قابل للتراجع.`)) {
            setIsDeleting(packageId);
            router.delete(`/admin/packages/${packageId}`, {
                onFinish: () => setIsDeleting(null),
            });
        }
    };

    const togglePackageStatus = (packageId, currentStatus) => {
        router.patch(`/admin/packages/${packageId}/quick-update`, {
            is_active: !currentStatus
        });
    };

    return (
        <AdminLayout title="إدارة الباقات">
            <Head title="الباقات - لوحة تحكم الأدمن" />

            <div className="p-4 sm:p-6 lg:p-8">
                {/* Header */}
                <div className="mb-6 sm:mb-8">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                        <div>
                            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">
                                إدارة الباقات
                            </h1>
                            <p className="mt-2 text-sm text-gray-600">
                                إدارة باقات الاشتراكات والأسعار وميزاتها
                            </p>
                        </div>
                        <Link
                            href="/admin/packages/create"
                            className="inline-flex items-center justify-center px-4 py-2 bg-blue-600 border border-transparent rounded-lg text-sm font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors duration-200"
                        >
                            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                            </svg>
                            إضافة باقة جديدة
                        </Link>
                    </div>
                </div>

                {/* Stats Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                    <div className="bg-white rounded-lg border border-gray-200 p-4">
                        <div className="flex items-center">
                            <div className="flex-shrink-0">
                                <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                                    <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                                    </svg>
                                </div>
                            </div>
                            <div className="mr-4">
                                <p className="text-sm font-medium text-gray-600">إجمالي الباقات</p>
                                <p className="text-2xl font-semibold text-gray-900">{packages.length}</p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white rounded-lg border border-gray-200 p-4">
                        <div className="flex items-center">
                            <div className="flex-shrink-0">
                                <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                                    <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                            </div>
                            <div className="mr-4">
                                <p className="text-sm font-medium text-gray-600">الباقات النشطة</p>
                                <p className="text-2xl font-semibold text-gray-900">
                                    {packages.filter(pkg => pkg.is_active).length}
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white rounded-lg border border-gray-200 p-4">
                        <div className="flex items-center">
                            <div className="flex-shrink-0">
                                <div className="w-8 h-8 bg-yellow-100 rounded-lg flex items-center justify-center">
                                    <svg className="w-4 h-4 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                                    </svg>
                                </div>
                            </div>
                            <div className="mr-4">
                                <p className="text-sm font-medium text-gray-600">الباقات الشائعة</p>
                                <p className="text-2xl font-semibold text-gray-900">
                                    {packages.filter(pkg => pkg.is_popular).length}
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white rounded-lg border border-gray-200 p-4">
                        <div className="flex items-center">
                            <div className="flex-shrink-0">
                                <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
                                    <svg className="w-4 h-4 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                                    </svg>
                                </div>
                            </div>
                            <div className="mr-4">
                                <p className="text-sm font-medium text-gray-600">متوسط السعر</p>
                                <p className="text-2xl font-semibold text-gray-900">
                                    {packages.length > 0
                                        ? Math.round(packages.reduce((sum, pkg) => sum + parseFloat(pkg.price), 0) / packages.length).toLocaleString()
                                        : 0
                                    } IQD
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Packages Table */}
                <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
                    <div className="px-4 py-5 sm:p-6">
                        <h3 className="text-lg font-medium text-gray-900 mb-4">الباقات المتاحة</h3>

                        {packages.length === 0 ? (
                            <div className="text-center py-12">
                                <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                                </svg>
                                <h3 className="mt-4 text-sm font-medium text-gray-900">لا توجد باقات</h3>
                                <p className="mt-2 text-sm text-gray-500">ابدأ بإنشاء باقة اشتراك جديدة.</p>
                                <div className="mt-6">
                                    <Link
                                        href="/admin/packages/create"
                                        className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                                    >
                                        <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                                        </svg>
                                        إضافة باقة جديدة
                                    </Link>
                                </div>
                            </div>
                        ) : (
                            <div className="overflow-x-auto">
                                <table className="min-w-full divide-y divide-gray-200">
                                    <thead className="bg-gray-50">
                                        <tr>
                                            <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                الباقة
                                            </th>
                                            <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                السعر
                                            </th>
                                            <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                المدة
                                            </th>
                                            <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                الحالة
                                            </th>
                                            <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                الإجراءات
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody className="bg-white divide-y divide-gray-200">
                                        {packages.map((packageItem) => (
                                            <tr key={packageItem.id} className="hover:bg-gray-50">
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    <div className="flex items-center">
                                                        <div>
                                                            <div className="flex items-center">
                                                                <div className="text-sm font-medium text-gray-900">
                                                                    {packageItem.name}
                                                                </div>
                                                                {packageItem.is_popular && (
                                                                    <span className="mr-2 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                                                                        شائع
                                                                    </span>
                                                                )}
                                                            </div>
                                                            <div className="text-sm text-gray-500">
                                                                {packageItem.description}
                                                            </div>
                                                            <div className="mt-1 text-xs text-gray-400">
                                                                {packageItem.features?.length || 0} ميزة
                                                            </div>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    <div className="text-sm text-gray-900 font-semibold">
                                                        {parseFloat(packageItem.price).toLocaleString()} IQD
                                                    </div>
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    <div className="text-sm text-gray-900">
                                                        {packageItem.duration_formatted}
                                                    </div>
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    <button
                                                        onClick={() => togglePackageStatus(packageItem.id, packageItem.is_active)}
                                                        className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                                                            packageItem.is_active
                                                                ? 'bg-green-100 text-green-800 hover:bg-green-200'
                                                                : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                                                        } transition-colors duration-200`}
                                                    >
                                                        {packageItem.is_active ? 'نشط' : 'غير نشط'}
                                                    </button>
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                                    <div className="flex items-center space-x-2 space-x-reverse">
                                                        <Link
                                                            href={`/admin/packages/${packageItem.id}`}
                                                            className="text-blue-600 hover:text-blue-900 p-1 rounded-md hover:bg-blue-50 transition-colors duration-200"
                                                            title="عرض"
                                                        >
                                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                                            </svg>
                                                        </Link>
                                                        <Link
                                                            href={`/admin/packages/${packageItem.id}/edit`}
                                                            className="text-indigo-600 hover:text-indigo-900 p-1 rounded-md hover:bg-indigo-50 transition-colors duration-200"
                                                            title="تعديل"
                                                        >
                                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                                                            </svg>
                                                        </Link>
                                                        <button
                                                            onClick={() => handleDelete(packageItem.id, packageItem.name)}
                                                            disabled={isDeleting === packageItem.id}
                                                            className="text-red-600 hover:text-red-900 p-1 rounded-md hover:bg-red-50 transition-colors duration-200 disabled:opacity-50"
                                                            title="حذف"
                                                        >
                                                            {isDeleting === packageItem.id ? (
                                                                <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                                                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                                                </svg>
                                                            ) : (
                                                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                                                </svg>
                                                            )}
                                                        </button>
                                                    </div>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </AdminLayout>
    );
}
