import React, { useState } from 'react';
import { Head, useForm } from '@inertiajs/react';
import AdminLayout from '@/Layouts/AdminLayout';

export default function SiteSettingsIndex({ settings }) {
    const [activeTab, setActiveTab] = useState('general');
    const [isResetting, setIsResetting] = useState(false);
    const [fileInputs, setFileInputs] = useState({});

    const { data, setData, post, processing, errors, reset } = useForm({
        settings: Object.fromEntries(
            Object.values(settings).flat().map(setting => [setting.key, setting.value])
        ),
        files: {}
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        const formData = new FormData();

        // Add settings data
        Object.entries(data.settings).forEach(([key, value]) => {
            formData.append(`settings[${key}]`, value || '');
        });

        // Add files
        Object.entries(fileInputs).forEach(([key, file]) => {
            if (file) {
                formData.append(`files[${key}]`, file);
            }
        });

        post('/admin/site-settings', {
            data: formData,
            onSuccess: () => {
                setFileInputs({});
            }
        });
    };

    const handleReset = () => {
        if (confirm('هل تريد إعادة تعيين جميع الإعدادات إلى القيم الافتراضية؟ هذا الإجراء غير قابل للتراجع.')) {
            setIsResetting(true);
            post('/admin/site-settings/reset', {
                onFinish: () => setIsResetting(false)
            });
        }
    };

    const updateSetting = (key, value) => {
        setData('settings', {
            ...data.settings,
            [key]: value
        });
    };

    const tabs = [
        { id: 'general', name: 'إعدادات عامة', icon: 'M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z' },
        { id: 'contact', name: 'معلومات التواصل', icon: 'M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z' },
        { id: 'social', name: 'وسائل التواصل', icon: 'M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 011.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 01-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 01-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 010 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 011.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 017.858 2h.193z' },
        { id: 'homepage', name: 'الصفحة الرئيسية', icon: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6' },
        { id: 'features', name: 'المميزات', icon: 'M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z' },
        { id: 'stats', name: 'الإحصائيات', icon: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z' },
        { id: 'about', name: 'من نحن', icon: 'M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z' },
        { id: 'footer', name: 'الفوتر', icon: 'M19 14l-7 7m0 0l-7-7m7 7V3' },
        { id: 'seo', name: 'SEO', icon: 'M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z' }
    ];

    const renderField = (setting) => {
        const value = data.settings[setting.key] || '';

        switch (setting.type) {
            case 'textarea':
                return (
                    <textarea
                        value={value}
                        onChange={(e) => updateSetting(setting.key, e.target.value)}
                        rows={4}
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                        placeholder={setting.description}
                    />
                );

            case 'file':
                return (
                    <div className="mt-1">
                        <input
                            type="file"
                            onChange={(e) => {
                                const file = e.target.files[0];
                                if (file) {
                                    setFileInputs(prev => ({
                                        ...prev,
                                        [setting.key]: file
                                    }));
                                }
                            }}
                            className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                            accept="image/*"
                        />
                        {(value || fileInputs[setting.key]) && (
                            <div className="mt-2">
                                {fileInputs[setting.key] ? (
                                    <img
                                        src={URL.createObjectURL(fileInputs[setting.key])}
                                        alt="Preview"
                                        className="h-20 w-20 object-cover rounded border"
                                    />
                                ) : value ? (
                                    <img
                                        src={`/storage/${value}`}
                                        alt="Current"
                                        className="h-20 w-20 object-cover rounded border"
                                    />
                                ) : null}
                            </div>
                        )}
                    </div>
                );

            case 'email':
                return (
                    <input
                        type="email"
                        value={value}
                        onChange={(e) => updateSetting(setting.key, e.target.value)}
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                        placeholder={setting.description}
                    />
                );

            case 'url':
                return (
                    <input
                        type="url"
                        value={value}
                        onChange={(e) => updateSetting(setting.key, e.target.value)}
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                        placeholder={setting.description}
                    />
                );

            default:
                return (
                    <input
                        type="text"
                        value={value}
                        onChange={(e) => updateSetting(setting.key, e.target.value)}
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                        placeholder={setting.description}
                    />
                );
        }
    };    return (
        <AdminLayout title="إعدادات الموقع">
            <Head title="إعدادات الموقع - لوحة تحكم الأدمن" />

            <div className="p-4 sm:p-6 lg:p-8">
                {/* Header */}
                <div className="mb-6 sm:mb-8">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                        <div>
                            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">
                                إعدادات الموقع
                            </h1>
                            <p className="mt-2 text-sm text-gray-600">
                                إدارة محتوى ونصوص الموقع ومعلومات التواصل
                            </p>
                        </div>
                        <button
                            onClick={handleReset}
                            disabled={isResetting}
                            className="inline-flex items-center px-4 py-2 bg-gray-600 border border-transparent rounded-lg text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 transition-colors duration-200 disabled:opacity-50"
                        >
                            {isResetting ? (
                                <>
                                    <svg className="animate-spin -ml-1 mr-3 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                    </svg>
                                    جاري الإعادة...
                                </>
                            ) : (
                                <>
                                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                                    </svg>
                                    إعادة تعيين للافتراضي
                                </>
                            )}
                        </button>
                    </div>
                </div>

                <form onSubmit={handleSubmit}>
                    <div className="flex flex-col lg:flex-row gap-8">
                        {/* Sidebar - Tabs */}
                        <div className="w-full lg:w-64 flex-shrink-0">
                            <nav className="space-y-1 bg-white rounded-lg border border-gray-200 p-2">
                                {tabs.map((tab) => (
                                    <button
                                        key={tab.id}
                                        type="button"
                                        onClick={() => setActiveTab(tab.id)}
                                        className={`w-full flex items-center px-3 py-2 text-sm font-medium rounded-md transition-colors duration-200 ${
                                            activeTab === tab.id
                                                ? 'bg-blue-100 text-blue-700'
                                                : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                                        }`}
                                    >
                                        <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={tab.icon} />
                                        </svg>
                                        {tab.name}
                                    </button>
                                ))}
                            </nav>
                        </div>

                        {/* Main Content */}
                        <div className="flex-1">
                            <div className="bg-white rounded-lg border border-gray-200">
                                <div className="p-6">
                                    <h3 className="text-lg font-medium text-gray-900 mb-6">
                                        {tabs.find(tab => tab.id === activeTab)?.name}
                                    </h3>

                                    {settings[activeTab] && (
                                        <div className="space-y-6">
                                            {settings[activeTab].map((setting) => (
                                                <div key={setting.key}>
                                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                                        {setting.label}
                                                    </label>
                                                    {renderField(setting)}
                                                    {setting.description && (
                                                        <p className="mt-1 text-xs text-gray-500">
                                                            {setting.description}
                                                        </p>
                                                    )}
                                                    {errors[`settings.${setting.key}`] && (
                                                        <p className="mt-1 text-sm text-red-600">
                                                            {errors[`settings.${setting.key}`]}
                                                        </p>
                                                    )}
                                                </div>
                                            ))}
                                        </div>
                                    )}

                                    {!settings[activeTab] && (
                                        <div className="text-center py-12">
                                            <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                                            </svg>
                                            <h3 className="mt-4 text-sm font-medium text-gray-900">لا توجد إعدادات</h3>
                                            <p className="mt-2 text-sm text-gray-500">لا توجد إعدادات في هذا القسم حالياً.</p>
                                        </div>
                                    )}
                                </div>

                                {/* Save Button */}
                                <div className="px-6 py-4 bg-gray-50 border-t border-gray-200 rounded-b-lg">
                                    <div className="flex justify-end">
                                        <button
                                            type="submit"
                                            disabled={processing}
                                            className="inline-flex items-center px-6 py-2 bg-blue-600 border border-transparent rounded-md text-sm font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 transition-colors duration-200"
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
                                                    حفظ الإعدادات
                                                </>
                                            )}
                                        </button>
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
