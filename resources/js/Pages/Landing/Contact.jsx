import React, { useState } from 'react';
import LandingLayout from '../../Layouts/LandingLayout';

export default function Contact({ siteSettings = {} }) {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        company: '',
        phone: '',
        subject: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you would typically send the form data to your backend
        console.log('Form submitted:', formData);
        alert('تم إرسال رسالتك بنجاح! سنتواصل معك قريباً.');
    };

    const contactInfo = [
        {
            icon: '📧',
            title: 'البريد الإلكتروني',
            details: siteSettings.contact_email || 'info@salesflow.com',
            description: 'راسلنا في أي وقت وسنرد خلال 24 ساعة'
        },
        {
            icon: '📞',
            title: 'الهاتف',
            details: siteSettings.contact_phone || '+966 11 123 4567',
            description: 'متاحون من السبت إلى الخميس 9ص-6م'
        },
        {
            icon: '📍',
            title: 'العنوان',
            details: siteSettings.contact_address || 'الرياض، المملكة العربية السعودية',
            description: siteSettings.contact_address_description || 'مركز الأعمال الرقمي، طريق الملك فهد'
        },
        {
            icon: '💬',
            title: 'الدردشة المباشرة',
            details: 'متاح 24/7',
            description: 'تواصل معنا مباشرة من خلال الموقع'
        }
    ];

    const offices = [
        {
            city: 'الرياض',
            address: 'مركز الأعمال الرقمي، طريق الملك فهد',
            phone: '+966 11 123 4567',
            email: 'riyadh@salesflow.com'
        },
        {
            city: 'جدة',
            address: 'برج التجارة، شارع التحلية',
            phone: '+966 12 234 5678',
            email: 'jeddah@salesflow.com'
        },
        {
            city: 'دبي',
            address: 'مركز دبي المالي العالمي',
            phone: '+971 4 345 6789',
            email: 'dubai@salesflow.com'
        }
    ];

    const faqs = [
        {
            question: 'كم يستغرق تنفيذ النظام؟',
            answer: 'عادة ما يستغرق التنفيذ من أسبوع إلى 4 أسابيع حسب حجم الشركة ومتطلباتها.'
        },
        {
            question: 'هل يوجد تدريب للموظفين؟',
            answer: 'نعم، نوفر تدريب شامل لجميع المستخدمين ودعم مستمر بعد التنفيذ.'
        },
        {
            question: 'هل يمكن تخصيص النظام؟',
            answer: 'بالتأكيد، يمكننا تخصيص النظام ليناسب احتياجات شركتك الخاصة.'
        },
        {
            question: 'ما هي طرق الدعم المتاحة؟',
            answer: 'نوفر دعم عبر الهاتف، البريد الإلكتروني، الدردشة المباشرة، والزيارات الميدانية.'
        }
    ];

    return (
        <LandingLayout title="تواصل معنا - SalesFlow" siteSettings={siteSettings}>
            {/* Hero Section */}
            <section className="bg-gradient-to-br from-purple-50 to-white py-16 sm:py-20 lg:py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                        تواصل معنا
                    </h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        نحن هنا لمساعدتك. تواصل معنا بأي طريقة تناسبك وسنكون سعداء للإجابة على جميع استفساراتك
                    </p>
                </div>
            </section>

            {/* Contact Form & Info */}
            <section className="py-16 sm:py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {/* Contact Form */}
                        <div className="bg-gray-50 rounded-2xl p-8">
                            <h2 className="text-2xl font-bold text-gray-900 mb-6">
                                أرسل لنا رسالة
                            </h2>
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            الاسم *
                                        </label>
                                        <input
                                            type="text"
                                            name="name"
                                            required
                                            value={formData.name}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                                            placeholder="اسمك الكامل"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            البريد الإلكتروني *
                                        </label>
                                        <input
                                            type="email"
                                            name="email"
                                            required
                                            value={formData.email}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                                            placeholder="email@example.com"
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            اسم الشركة
                                        </label>
                                        <input
                                            type="text"
                                            name="company"
                                            value={formData.company}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                                            placeholder="اسم شركتك"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            رقم الهاتف
                                        </label>
                                        <input
                                            type="tel"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                                            placeholder="+966 5x xxx xxxx"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        الموضوع *
                                    </label>
                                    <select
                                        name="subject"
                                        required
                                        value={formData.subject}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                                    >
                                        <option value="">اختر الموضوع</option>
                                        <option value="demo">طلب عرض توضيحي</option>
                                        <option value="pricing">استفسار عن الأسعار</option>
                                        <option value="technical">دعم فني</option>
                                        <option value="partnership">شراكة</option>
                                        <option value="other">أخرى</option>
                                    </select>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        الرسالة *
                                    </label>
                                    <textarea
                                        name="message"
                                        required
                                        rows={5}
                                        value={formData.message}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                                        placeholder="اكتب رسالتك هنا..."
                                    ></textarea>
                                </div>

                                <button
                                    type="submit"
                                    className="w-full bg-purple-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-purple-700 transition-colors"
                                >
                                    إرسال الرسالة
                                </button>
                            </form>
                        </div>

                        {/* Contact Information */}
                        <div>
                            <h2 className="text-2xl font-bold text-gray-900 mb-6">
                                معلومات الاتصال
                            </h2>
                            <div className="space-y-6">
                                {contactInfo.map((info, index) => (
                                    <div key={index} className="flex items-start">
                                        <div className="flex-shrink-0 w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center text-2xl">
                                            {info.icon}
                                        </div>
                                        <div className="mr-4">
                                            <h3 className="text-lg font-semibold text-gray-900 mb-1">
                                                {info.title}
                                            </h3>
                                            <p className="text-purple-600 font-medium mb-1">
                                                {info.details}
                                            </p>
                                            <p className="text-gray-600 text-sm">
                                                {info.description}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Quick Response */}
                            <div className="mt-8 bg-purple-50 rounded-xl p-6">
                                <h3 className="text-lg font-bold text-gray-900 mb-3">
                                    استجابة سريعة ⚡
                                </h3>
                                <p className="text-gray-600 mb-4">
                                    نلتزم بالرد على جميع الاستفسارات خلال:
                                </p>
                                <ul className="space-y-2 text-sm">
                                    <li className="flex items-center">
                                        <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                                        الدردشة المباشرة: فوري
                                    </li>
                                    <li className="flex items-center">
                                        <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                                        البريد الإلكتروني: خلال 4 ساعات
                                    </li>
                                    <li className="flex items-center">
                                        <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                                        الهاتف: خلال ساعة واحدة
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Offices Section */}
            <section className="py-16 sm:py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                            مكاتبنا
                        </h2>
                        <p className="text-lg text-gray-600">
                            نتواجد في مواقع استراتيجية لخدمتك بشكل أفضل
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {offices.map((office, index) => (
                            <div key={index} className="bg-white rounded-2xl p-6 shadow-lg">
                                <h3 className="text-xl font-bold text-gray-900 mb-4">
                                    {office.city}
                                </h3>
                                <div className="space-y-3">
                                    <div className="flex items-start">
                                        <span className="text-gray-400 mr-3 mt-1">📍</span>
                                        <p className="text-gray-600">{office.address}</p>
                                    </div>
                                    <div className="flex items-center">
                                        <span className="text-gray-400 mr-3">📞</span>
                                        <p className="text-gray-600">{office.phone}</p>
                                    </div>
                                    <div className="flex items-center">
                                        <span className="text-gray-400 mr-3">📧</span>
                                        <p className="text-gray-600">{office.email}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-16 sm:py-20 bg-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                            أسئلة شائعة
                        </h2>
                        <p className="text-lg text-gray-600">
                            إجابات سريعة على الأسئلة الأكثر شيوعاً
                        </p>
                    </div>

                    <div className="space-y-6">
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

                    <div className="text-center mt-8">
                        <p className="text-gray-600 mb-4">لم تجد إجابة لسؤالك؟</p>
                        <button className="text-purple-600 font-semibold hover:text-purple-700">
                            تواصل معنا مباشرة →
                        </button>
                    </div>
                </div>
            </section>

            {/* Map Section (Placeholder) */}
            <section className="py-16 sm:py-20 bg-gray-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">
                            موقعنا على الخريطة
                        </h2>
                    </div>
                    <div className="bg-gray-300 rounded-2xl h-96 flex items-center justify-center">
                        <div className="text-center">
                            <div className="text-4xl mb-4">🗺️</div>
                            <p className="text-gray-600">خريطة تفاعلية - قريباً</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 sm:py-20 bg-gradient-to-r from-purple-600 to-purple-800 text-white">
                <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                        جاهز للبدء؟
                    </h2>
                    <p className="text-xl mb-8 text-purple-100">
                        احجز عرض توضيحي مجاني واكتشف كيف يمكن لـ SalesFlow تطوير مبيعاتك
                    </p>
                    <button className="bg-white text-purple-600 font-bold py-4 px-8 rounded-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-200">
                        احجز عرض توضيحي
                    </button>
                </div>
            </section>
        </LandingLayout>
    );
}
