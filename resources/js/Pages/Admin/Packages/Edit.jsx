import React, { useState } from 'react';
import { Head, Link, useForm } from '@inertiajs/react';
import AdminLayout from '@/Layouts/AdminLayout';

export default function EditPackage({ package: packageData }) {
    const { data, setData, patch, processing, errors, transform } = useForm({
        name: packageData.name || '',
        description: packageData.description || '',
        price: packageData.price || '',
        duration_days: packageData.duration_days || 30,
        features: packageData.features || [''],
        max_employees: packageData.max_employees || '',
        max_customers: packageData.max_customers || '',
        max_products: packageData.max_products || '',
        has_reports: packageData.has_reports || false,
        has_analytics: packageData.has_analytics || false,
        has_api: packageData.has_api || false,
        has_support: packageData.has_support || false,
        is_popular: packageData.is_popular || false,
        is_active: packageData.is_active !== undefined ? packageData.is_active : true,
    });

    // Transform data before sending
    transform((data) => ({
        ...data,
        features: data.features.filter(feature => feature.trim() !== ''),
        max_employees: data.max_employees === '' ? null : parseInt(data.max_employees),
        max_customers: data.max_customers === '' ? null : parseInt(data.max_customers),
        max_products: data.max_products === '' ? null : parseInt(data.max_products),
    }));

    const handleSubmit = (e) => {
        e.preventDefault();
        patch(`/admin/packages/${packageData.id}`);
    };

    const addFeature = () => {
        const newFeatures = [...data.features, ''];
        setData('features', newFeatures);
    };

    const removeFeature = (index) => {
        const newFeatures = data.features.filter((_, i) => i !== index);
        setData('features', newFeatures);
    };

    const updateFeature = (index, value) => {
        const newFeatures = [...data.features];
        newFeatures[index] = value;
        setData('features', newFeatures);
    };

    const getDurationText = () => {
        const days = parseInt(data.duration_days);
        if (days >= 365) {
            return `${Math.floor(days / 365)} سنة`;
        } else if (days >= 30) {
            return `${Math.floor(days / 30)} شهر`;
        } else {
            return `${days} يوم`;
        }
    };

    return (
        <AdminLayout title={`تعديل الباقة: ${packageData.name}`}>
            <Head title={`تعديل ${packageData.name} - لوحة تحكم الأدمن`} />

            <div className="p-4 sm:p-6 lg:p-8">
                {/* Header */}
                <div className="mb-6 sm:mb-8">
                    <div className="flex items-center justify-between">
                        <div>
                            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">
                                تعديل الباقة: {packageData.name}
                            </h1>
                            <p className="mt-2 text-sm text-gray-600">
                                تحديث معلومات ومميزات الباقة
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
                                href={`/admin/packages/${packageData.id}`}
                                className="inline-flex items-center px-4 py-2 bg-indigo-600 border border-transparent rounded-lg text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition-colors duration-200"
                            >
                                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                </svg>
                                عرض
                            </Link>
                        </div>
                    </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-8">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {/* Main Information */}
                        <div className="lg:col-span-2 space-y-6">
                            <div className="bg-white rounded-lg border border-gray-200 p-6">
                                <h3 className="text-lg font-medium text-gray-900 mb-4">معلومات أساسية</h3>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="md:col-span-2">
                                        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                                            اسم الباقة *
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            value={data.name}
                                            onChange={e => setData('name', e.target.value)}
                                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                                            placeholder="مثل: الباقة الأساسية"
                                        />
                                        {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name}</p>}
                                    </div>

                                    <div className="md:col-span-2">
                                        <label htmlFor="description" className="block text-sm font-medium text-gray-700">
                                            وصف الباقة
                                        </label>
                                        <textarea
                                            id="description"
                                            rows={3}
                                            value={data.description}
                                            onChange={e => setData('description', e.target.value)}
                                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                                            placeholder="وصف مختصر للباقة ومميزاتها..."
                                        />
                                        {errors.description && <p className="mt-1 text-sm text-red-600">{errors.description}</p>}
                                    </div>

                                    <div>
                                        <label htmlFor="price" className="block text-sm font-medium text-gray-700">
                                            السعر (دينار عراقي) *
                                        </label>
                                        <input
                                            type="number"
                                            id="price"
                                            min="0"
                                            step="0.01"
                                            value={data.price}
                                            onChange={e => setData('price', e.target.value)}
                                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                                            placeholder="50000"
                                        />
                                        {errors.price && <p className="mt-1 text-sm text-red-600">{errors.price}</p>}
                                    </div>

                                    <div>
                                        <label htmlFor="duration_days" className="block text-sm font-medium text-gray-700">
                                            مدة الباقة (بالأيام) *
                                        </label>
                                        <div className="mt-1 relative">
                                            <input
                                                type="number"
                                                id="duration_days"
                                                min="1"
                                                value={data.duration_days}
                                                onChange={e => setData('duration_days', e.target.value)}
                                                className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                                            />
                                            <div className="absolute inset-y-0 left-0 pr-3 flex items-center pointer-events-none">
                                                <span className="text-gray-500 text-sm">
                                                    ({getDurationText()})
                                                </span>
                                            </div>
                                        </div>
                                        <p className="mt-1 text-xs text-gray-500">
                                            30 يوم = شهر، 365 يوم = سنة
                                        </p>
                                        {errors.duration_days && <p className="mt-1 text-sm text-red-600">{errors.duration_days}</p>}
                                    </div>
                                </div>
                            </div>

                            {/* Features */}
                            <div className="bg-white rounded-lg border border-gray-200 p-6">
                                <h3 className="text-lg font-medium text-gray-900 mb-4">مميزات الباقة *</h3>

                                <div className="space-y-3">
                                    {data.features.map((feature, index) => (
                                        <div key={index} className="flex items-center space-x-2 space-x-reverse">
                                            <input
                                                type="text"
                                                value={feature}
                                                onChange={e => updateFeature(index, e.target.value)}
                                                className="flex-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                                                placeholder={`ميزة ${index + 1}`}
                                            />
                                            {data.features.length > 1 && (
                                                <button
                                                    type="button"
                                                    onClick={() => removeFeature(index)}
                                                    className="p-2 text-red-600 hover:text-red-800 hover:bg-red-50 rounded-md transition-colors duration-200"
                                                >
                                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                                    </svg>
                                                </button>
                                            )}
                                        </div>
                                    ))}
                                    <button
                                        type="button"
                                        onClick={addFeature}
                                        className="inline-flex items-center px-3 py-2 border border-gray-300 shadow-sm text-sm leading-4 font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                                    >
                                        <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                                        </svg>
                                        إضافة ميزة
                                    </button>
                                </div>
                                {errors.features && <p className="mt-2 text-sm text-red-600">{errors.features}</p>}
                            </div>

                            {/* Limits */}
                            <div className="bg-white rounded-lg border border-gray-200 p-6">
                                <h3 className="text-lg font-medium text-gray-900 mb-4">حدود الباقة</h3>

                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                    <div>
                                        <label htmlFor="max_employees" className="block text-sm font-medium text-gray-700">
                                            الحد الأقصى للموظفين
                                        </label>
                                        <input
                                            type="number"
                                            id="max_employees"
                                            min="0"
                                            value={data.max_employees}
                                            onChange={e => setData('max_employees', e.target.value)}
                                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                                            placeholder="غير محدود"
                                        />
                                        <p className="mt-1 text-xs text-gray-500">اتركه فارغاً لعدم وجود حد</p>
                                    </div>

                                    <div>
                                        <label htmlFor="max_customers" className="block text-sm font-medium text-gray-700">
                                            الحد الأقصى للعملاء
                                        </label>
                                        <input
                                            type="number"
                                            id="max_customers"
                                            min="0"
                                            value={data.max_customers}
                                            onChange={e => setData('max_customers', e.target.value)}
                                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                                            placeholder="غير محدود"
                                        />
                                        <p className="mt-1 text-xs text-gray-500">اتركه فارغاً لعدم وجود حد</p>
                                    </div>

                                    <div>
                                        <label htmlFor="max_products" className="block text-sm font-medium text-gray-700">
                                            الحد الأقصى للمنتجات
                                        </label>
                                        <input
                                            type="number"
                                            id="max_products"
                                            min="0"
                                            value={data.max_products}
                                            onChange={e => setData('max_products', e.target.value)}
                                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                                            placeholder="غير محدود"
                                        />
                                        <p className="mt-1 text-xs text-gray-500">اتركه فارغاً لعدم وجود حد</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Sidebar Settings */}
                        <div className="space-y-6">
                            {/* Additional Features */}
                            <div className="bg-white rounded-lg border border-gray-200 p-6">
                                <h3 className="text-lg font-medium text-gray-900 mb-4">مميزات إضافية</h3>

                                <div className="space-y-4">
                                    <div className="flex items-center">
                                        <input
                                            id="has_reports"
                                            type="checkbox"
                                            checked={data.has_reports}
                                            onChange={e => setData('has_reports', e.target.checked)}
                                            className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                                        />
                                        <label htmlFor="has_reports" className="mr-2 block text-sm text-gray-900">
                                            تقارير متقدمة
                                        </label>
                                    </div>

                                    <div className="flex items-center">
                                        <input
                                            id="has_analytics"
                                            type="checkbox"
                                            checked={data.has_analytics}
                                            onChange={e => setData('has_analytics', e.target.checked)}
                                            className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                                        />
                                        <label htmlFor="has_analytics" className="mr-2 block text-sm text-gray-900">
                                            تحليلات البيانات
                                        </label>
                                    </div>

                                    <div className="flex items-center">
                                        <input
                                            id="has_api"
                                            type="checkbox"
                                            checked={data.has_api}
                                            onChange={e => setData('has_api', e.target.checked)}
                                            className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                                        />
                                        <label htmlFor="has_api" className="mr-2 block text-sm text-gray-900">
                                            وصول API
                                        </label>
                                    </div>

                                    <div className="flex items-center">
                                        <input
                                            id="has_support"
                                            type="checkbox"
                                            checked={data.has_support}
                                            onChange={e => setData('has_support', e.target.checked)}
                                            className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                                        />
                                        <label htmlFor="has_support" className="mr-2 block text-sm text-gray-900">
                                            دعم فني
                                        </label>
                                    </div>
                                </div>
                            </div>

                            {/* Status Settings */}
                            <div className="bg-white rounded-lg border border-gray-200 p-6">
                                <h3 className="text-lg font-medium text-gray-900 mb-4">إعدادات الحالة</h3>

                                <div className="space-y-4">
                                    <div className="flex items-center">
                                        <input
                                            id="is_popular"
                                            type="checkbox"
                                            checked={data.is_popular}
                                            onChange={e => setData('is_popular', e.target.checked)}
                                            className="h-4 w-4 text-yellow-600 border-gray-300 rounded focus:ring-yellow-500"
                                        />
                                        <label htmlFor="is_popular" className="mr-2 block text-sm text-gray-900">
                                            باقة شائعة
                                        </label>
                                    </div>

                                    <div className="flex items-center">
                                        <input
                                            id="is_active"
                                            type="checkbox"
                                            checked={data.is_active}
                                            onChange={e => setData('is_active', e.target.checked)}
                                            className="h-4 w-4 text-green-600 border-gray-300 rounded focus:ring-green-500"
                                        />
                                        <label htmlFor="is_active" className="mr-2 block text-sm text-gray-900">
                                            نشط
                                        </label>
                                    </div>
                                </div>
                            </div>

                            {/* Action Buttons */}
                            <div className="bg-white rounded-lg border border-gray-200 p-6">
                                <div className="space-y-3">
                                    <button
                                        type="submit"
                                        disabled={processing}
                                        className="w-full inline-flex justify-center items-center px-4 py-2 bg-blue-600 border border-transparent rounded-md text-sm font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 transition-colors duration-200"
                                    >
                                        {processing ? (
                                            <>
                                                <svg className="animate-spin -ml-1 mr-3 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                                </svg>
                                                جاري الحفظ...
                                            </>
                                        ) : (
                                            <>
                                                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                </svg>
                                                حفظ التغييرات
                                            </>
                                        )}
                                    </button>

                                    <Link
                                        href={`/admin/packages/${packageData.id}`}
                                        className="w-full inline-flex justify-center items-center px-4 py-2 bg-gray-300 border border-transparent rounded-md text-sm font-medium text-gray-700 hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 transition-colors duration-200"
                                    >
                                        إلغاء
                                    </Link>
                                </div>
                            </div>

                            {/* Package Preview */}
                            <div className="bg-white rounded-lg border border-gray-200 p-6">
                                <h3 className="text-lg font-medium text-gray-900 mb-4">معاينة الباقة</h3>

                                <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-lg p-4 border-2 border-dashed border-blue-200">
                                    <div className="text-center">
                                        <h4 className="text-lg font-semibold text-gray-900 mb-2">
                                            {data.name || 'اسم الباقة'}
                                        </h4>
                                        <div className="text-2xl font-bold text-blue-600 mb-2">
                                            {data.price ? parseFloat(data.price).toLocaleString() : '0'}
                                            <span className="text-sm text-gray-600 font-normal"> IQD</span>
                                        </div>
                                        <div className="text-sm text-gray-600 mb-3">
                                            /{getDurationText()}
                                        </div>
                                        {data.description && (
                                            <p className="text-sm text-gray-700 mb-4">
                                                {data.description}
                                            </p>
                                        )}
                                        <div className="text-xs text-gray-500">
                                            {data.features?.filter(f => f.trim()).length || 0} ميزة متاحة
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </AdminLayout>
    );
}
