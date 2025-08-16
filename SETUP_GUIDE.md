# تشغيل مشروع SalesFlow

## خطوات الإعداد الأولى

### 1. تحديث المكتبات
```bash
composer install
npm install
```

### 2. إعداد البيئة
```bash
cp .env.example .env
php artisan key:generate
```

### 3. إعداد قاعدة البيانات
تأكد من إعداد قاعدة البيانات في ملف `.env`:
```env
DB_CONNECTION=sqlite
DB_DATABASE=database/database.sqlite
```

ثم:
```bash
php artisan migrate
```

### 4. تشغيل المشروع

#### في Terminal الأول:
```bash
php artisan serve
```

#### في Terminal الثاني:
```bash
npm run dev
```

### 5. فتح المتصفح
اذهب إلى: `http://localhost:8000`

---

## هيكل المشروع

### صفحات متاحة حالياً:

1. **Landing Page (الصفحة الرئيسية)**
   - URL: `http://localhost:8000/`
   - صفحة تسويقية جميلة مع:
     - قسم Hero مع فيديو يوتيوب
     - عرض المميزات
     - خطط الاشتراك
     - آراء العملاء
     - أقسام Call-to-Action

2. **صفحات أخرى محضرة** (ستُطور قريباً):
   - `/features` - المميزات
   - `/pricing` - الأسعار
   - `/about` - من نحن
   - `/contact` - اتصل بنا
   - `/admin/dashboard` - لوحة الإدارة
   - `/dashboard` - لوحة العملاء

---

## المشاكل الشائعة والحلول

### إذا لم تظهر الصفحة بشكل صحيح:
1. تأكد من تشغيل `npm run dev`
2. تأكد من تشغيل `php artisan serve`
3. امسح الـ cache: `php artisan config:clear`

### إذا كان هناك خطأ في JavaScript:
```bash
npm run build
```

### إذا كان هناك خطأ في قاعدة البيانات:
```bash
php artisan migrate:fresh
```

---

## الخطوات التالية للتطوير:

1. ✅ **Landing Page** - مكتملة
2. 🔄 **نظام المصادقة** (Login/Register)
3. 🔄 **نظام الاشتراكات**
4. 🔄 **لوحة تحكم الإدارة**
5. 🔄 **لوحة تحكم العملاء**
6. 🔄 **نظام الدفع**

---

**مطور بواسطة:** GitHub Copilot  
**تاريخ الإنشاء:** 16 أغسطس 2025
