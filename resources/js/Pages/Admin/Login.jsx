import React, { useState } from 'react';
import { Head, Link, useForm } from '@inertiajs/react';

export default function AdminLogin() {
    const [showPassword, setShowPassword] = useState(false);

    const { data, setData, post, processing, errors } = useForm({
        phone: '',
        password: '',
        remember: false,
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post('/admin/login');
    };

    return (
        <>
            <Head title="تسجيل دخول الأدمن - SalesFlow" />

            <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-md">
                    {/* Logo */}
                    <div className="flex justify-center">
                        <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-lg">
                            <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                            </svg>
                        </div>
                    </div>

                    <h2 className="mt-6 text-center text-3xl font-bold text-white">
                        لوحة تحكم الأدمن
                    </h2>
                    <p className="mt-2 text-center text-sm text-blue-100">
                        قم بتسجيل الدخول للوصول إلى لوحة التحكم
                    </p>
                </div>

                <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                    <div className="bg-white py-8 px-4 shadow-xl rounded-2xl sm:px-10">
                        <form className="space-y-6" onSubmit={handleSubmit}>
                            {/* Phone Field */}
                            <div>
                                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                                    رقم الهاتف
                                </label>
                                <div className="mt-1 relative">
                                    <input
                                        id="phone"
                                        name="phone"
                                        type="tel"
                                        autoComplete="tel"
                                        required
                                        value={data.phone}
                                        onChange={(e) => setData('phone', e.target.value)}
                                        className={`appearance-none block w-full px-3 py-2 border ${
                                            errors.phone ? 'border-red-300' : 'border-gray-300'
                                        } rounded-lg placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm pr-10`}
                                        placeholder="0501234567"
                                    />
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center">
                                        <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                        </svg>
                                    </div>
                                </div>
                                {errors.phone && (
                                    <p className="mt-1 text-sm text-red-600">{errors.phone}</p>
                                )}
                            </div>

                            {/* Password Field */}
                            <div>
                                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                                    كلمة المرور
                                </label>
                                <div className="mt-1 relative">
                                    <input
                                        id="password"
                                        name="password"
                                        type={showPassword ? 'text' : 'password'}
                                        autoComplete="current-password"
                                        required
                                        value={data.password}
                                        onChange={(e) => setData('password', e.target.value)}
                                        className={`appearance-none block w-full px-3 py-2 border ${
                                            errors.password ? 'border-red-300' : 'border-gray-300'
                                        } rounded-lg placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm pr-10`}
                                        placeholder="كلمة المرور"
                                    />
                                    <button
                                        type="button"
                                        className="absolute inset-y-0 left-0 pl-3 flex items-center"
                                        onClick={() => setShowPassword(!showPassword)}
                                    >
                                        {showPassword ? (
                                            <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.878 9.878L3 3m6.878 6.878L21 21" />
                                            </svg>
                                        ) : (
                                            <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                            </svg>
                                        )}
                                    </button>
                                </div>
                                {errors.password && (
                                    <p className="mt-1 text-sm text-red-600">{errors.password}</p>
                                )}
                            </div>

                            {/* Remember Me */}
                            <div className="flex items-center justify-between">
                                <div className="flex items-center">
                                    <input
                                        id="remember"
                                        name="remember"
                                        type="checkbox"
                                        checked={data.remember}
                                        onChange={(e) => setData('remember', e.target.checked)}
                                        className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                                    />
                                    <label htmlFor="remember" className="mr-2 block text-sm text-gray-900">
                                        تذكرني
                                    </label>
                                </div>

                                <div className="text-sm">
                                    <a href="#" className="font-medium text-blue-600 hover:text-blue-500">
                                        نسيت كلمة المرور؟
                                    </a>
                                </div>
                            </div>

                            {/* Submit Button */}
                            <div>
                                <button
                                    type="submit"
                                    disabled={processing}
                                    className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-lg text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                                >
                                    {processing ? (
                                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                        </svg>
                                    ) : (
                                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
                                        </svg>
                                    )}
                                    {processing ? 'جارٍ تسجيل الدخول...' : 'تسجيل الدخول'}
                                </button>
                            </div>
                        </form>

                        {/* Footer */}
                        <div className="mt-6">
                            <div className="relative">
                                <div className="absolute inset-0 flex items-center">
                                    <div className="w-full border-t border-gray-300" />
                                </div>
                                <div className="relative flex justify-center text-sm">
                                    <span className="px-2 bg-white text-gray-500">أو</span>
                                </div>
                            </div>

                            <div className="mt-6 text-center">
                                <Link
                                    href="/"
                                    className="font-medium text-blue-600 hover:text-blue-500"
                                >
                                    العودة إلى الموقع الرئيسي
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* Security Notice */}
                    <div className="mt-6 bg-blue-800 bg-opacity-50 backdrop-blur-sm rounded-lg p-4">
                        <div className="flex">
                            <div className="flex-shrink-0">
                                <svg className="h-5 w-5 text-blue-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                </svg>
                            </div>
                            <div className="mr-3">
                                <h3 className="text-sm font-medium text-blue-100">
                                    لوحة تحكم آمنة
                                </h3>
                                <div className="mt-1 text-sm text-blue-200">
                                    هذه منطقة آمنة مخصصة للمدراء فقط. جميع الأنشطة مُراقبة ومُسجلة.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
