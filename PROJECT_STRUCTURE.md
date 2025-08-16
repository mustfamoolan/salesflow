# هيكل المشروع - SalesFlow

## نظرة عامة
تطبيق SaaS متكامل لإدارة الأعمال مع 3 مسارات منفصلة:

### 1. مسار Landing Page (الصفحات العامة)
**URL Base:** `/`
**Layout:** `LandingLayout.jsx`
**Controller:** `Landing\LandingController`
**الصفحات:**
- `/` - الصفحة الرئيسية
- `/features` - المميزات
- `/pricing` - خطط الأسعار والاشتراكات
- `/about` - من نحن
- `/contact` - اتصل بنا
- `/login` - تسجيل الدخول
- `/register` - إنشاء حساب جديد

### 2. مسار Admin (إدارة المشروع)
**URL Base:** `/admin`
**Layout:** `AdminLayout.jsx`
**Controller:** `Admin\AdminController`
**Middleware:** `admin` (يتطلب صلاحيات الإدارة)
**الصفحات:**
- `/admin/dashboard` - لوحة التحكم الرئيسية
- `/admin/employees` - إدارة الموظفين
- `/admin/opening-balance` - إدارة الأرصدة الافتتاحية
- `/admin/operations` - العمليات المالية
- `/admin/customers` - إدارة العملاء
- `/admin/transaction-log` - سجل المعاملات العام
- `/admin/reports` - التقارير والإحصائيات
- `/admin/settings` - إعدادات النظام

### 3. مسار Customer (العملاء)
**URL Base:** `/dashboard`
**Layout:** `CustomerLayout.jsx`
**Controller:** `Customer\CustomerController`
**Middleware:** `customer` (يتطلب اشتراك نشط)
**الصفحات:**
- `/dashboard` - لوحة تحكم العميل
- `/dashboard/profile` - الملف الشخصي
- `/dashboard/subscription` - إدارة الاشتراك
- `/dashboard/billing` - الفواتير والمدفوعات
- `/dashboard/transactions` - سجل المعاملات الشخصية
- `/dashboard/settings` - إعدادات الحساب
- `/dashboard/support` - الدعم الفني

## هيكل المجلدات
```
app/Http/
├── Controllers/
│   ├── Admin/
│   │   └── AdminController.php
│   ├── Landing/
│   │   └── LandingController.php
│   └── Customer/
│       └── CustomerController.php
└── Middleware/
    ├── AdminMiddleware.php
    └── CustomerMiddleware.php

resources/js/
├── Layouts/
│   ├── AdminLayout.jsx
│   ├── LandingLayout.jsx
│   └── CustomerLayout.jsx
└── Pages/
    ├── Admin/
    │   └── (صفحات الإدارة)
    ├── Landing/
    │   └── (صفحات الهبوط)
    └── Customer/
        └── (صفحات العملاء)
```

## نظام الصلاحيات

### Admin Middleware
- يتحقق من أن المستخدم مسجل دخول
- يتحقق من أن نوع المستخدم `admin`
- إعادة توجيه للوحة تسجيل الدخول في حالة عدم الصلاحية

### Customer Middleware
- يتحقق من أن المستخدم مسجل دخول
- يتحقق من صحة الاشتراك (نشط)
- إعادة توجيه لصفحة الأسعار في حالة انتهاء الاشتراك

## المزايا التقنية
- **React + Inertia.js** للتطوير السريع
- **Layouts منفصلة** لكل مسار
- **Middleware للحماية** والتحكم في الوصول
- **تصميم متجاوب** يدعم جميع الأجهزة
- **نظام توجيه واضح** ومنظم

## التطوير التالي
تم إعداد الهيكل الأساسي. الخطوات التالية:
1. إنشاء الصفحات الفعلية لكل مسار
2. تطوير نظام المصادقة
3. إعداد نظام الاشتراكات
4. تطوير قاعدة البيانات
5. إضافة واجهات API للعمليات

---
**تاريخ الإنشاء:** 16 أغسطس 2025
**المطور:** GitHub Copilot
