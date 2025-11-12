const CONFIG = {
    // معلومات Telegram
    TELEGRAM: {
        USER_ID: '7432377194' // يتم تحديثه تلقائياً من GitHub Secrets
    },

    // إعدادات التطبيق
    APP: {
        MAX_FILE_SIZE: 50 * 1024 * 1024, // 50 MB
        SUPPORTED_AUDIO_FORMATS: ['audio/mpeg', 'audio/wav', 'audio/ogg', 'audio/mp4', 'audio/m4a']
    },

    // عناوين Backend (Cloudflare Worker)
    BACKEND: {
        BASE_URL: 'https://your-worker.workers.dev', // سيتم تحديثه من GitHub Secrets
        ENDPOINTS: {
            HEALTH: '/health',
            UPLOAD_AUDIO: '/upload-audio',
            REQUEST_TRANSCRIPT: '/request-transcript',
            TRANSCRIPT_STATUS: '/transcript-status',
            SAVE_DATA: '/save-data'
        }
    },

    // إعدادات JSONBin
    JSONBIN_BASE_URL: 'https://api.jsonbin.io/v3/b',
    JSONBIN_API_KEY: '$2a$10$...', // سيتم تحديثه من GitHub Secrets

    // قوالب الفيديو
    TEMPLATES: [
        {
            id: 'classic',
            name: 'كلاسيكي',
            icon: '📄',
            gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            data: { type: 'classic', layout: 'standard' },
            colors: [
                { id: 'purple', name: 'بنفسجي', gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' },
                { id: 'blue', name: 'أزرق', gradient: 'linear-gradient(135deg, #2193b0 0%, #6dd5ed 100%)' },
                { id: 'green', name: 'أخضر', gradient: 'linear-gradient(135deg, #11998e 0%, #38ef7d 100%)' },
                { id: 'orange', name: 'برتقالي', gradient: 'linear-gradient(135deg, #f12711 0%, #f5af19 100%)' }
            ]
        },
        {
            id: 'modern',
            name: 'عصري',
            icon: '✨',
            gradient: 'linear-gradient(135deg, #FA8BFF 0%, #2BD2FF 52%, #2BFF88 90%)',
            data: { type: 'modern', layout: 'dynamic' },
            colors: [
                { id: 'rainbow', name: 'قوس قزح', gradient: 'linear-gradient(135deg, #FA8BFF 0%, #2BD2FF 52%, #2BFF88 90%)' },
                { id: 'sunset', name: 'غروب', gradient: 'linear-gradient(135deg, #ff6e7f 0%, #bfe9ff 100%)' },
                { id: 'ocean', name: 'محيط', gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)' },
                { id: 'fire', name: 'نار', gradient: 'linear-gradient(135deg, #ff9a56 0%, #ff6a88 100%)' }
            ]
        },
        {
            id: 'minimal',
            name: 'بسيط',
            icon: '⚪',
            gradient: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
            data: { type: 'minimal', layout: 'clean' },
            colors: [
                { id: 'gray', name: 'رمادي', gradient: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)' },
                { id: 'white', name: 'أبيض', gradient: 'linear-gradient(135deg, #ffffff 0%, #e0e0e0 100%)' },
                { id: 'black', name: 'أسود', gradient: 'linear-gradient(135deg, #434343 0%, #000000 100%)' },
                { id: 'silver', name: 'فضي', gradient: 'linear-gradient(135deg, #bdc3c7 0%, #2c3e50 100%)' }
            ]
        },
        {
            id: 'elegant',
            name: 'أنيق',
            icon: '👔',
            gradient: 'linear-gradient(135deg, #134E5E 0%, #71B280 100%)',
            data: { type: 'elegant', layout: 'sophisticated' },
            colors: [
                { id: 'teal', name: 'تركواز', gradient: 'linear-gradient(135deg, #134E5E 0%, #71B280 100%)' },
                { id: 'navy', name: 'كحلي', gradient: 'linear-gradient(135deg, #2c3e50 0%, #3498db 100%)' },
                { id: 'wine', name: 'عنابي', gradient: 'linear-gradient(135deg, #8e44ad 0%, #c0392b 100%)' },
                { id: 'gold', name: 'ذهبي', gradient: 'linear-gradient(135deg, #f7971e 0%, #ffd200 100%)' }
            ]
        }
    ],

    // ألوان السلسلة الرئيسية
    SERIES_COLORS: [
        { name: 'بنفسجي', value: '#667eea' },
        { name: 'أزرق', value: '#2193b0' },
        { name: 'أخضر', value: '#11998e' },
        { name: 'برتقالي', value: '#f12711' },
        { name: 'وردي', value: '#FA8BFF' },
        { name: 'أحمر', value: '#ff6e7f' },
        { name: 'أصفر', value: '#ffd200' },
        { name: 'كحلي', value: '#2c3e50' },
        { name: 'عنابي', value: '#8e44ad' },
        { name: 'ذهبي', value: '#f7971e' },
        { name: 'فضي', value: '#bdc3c7' },
        { name: 'أسود', value: '#000000' }
    ]
};

// تحديث المتغيرات من GitHub Secrets عند النشر
if (typeof TELEGRAM_USER_ID !== 'undefined') {
    CONFIG.TELEGRAM.USER_ID = TELEGRAM_USER_ID;
}
if (typeof BACKEND_BASE_URL !== 'undefined') {
    CONFIG.BACKEND.BASE_URL = BACKEND_BASE_URL;
}
if (typeof JSONBIN_API_KEY !== 'undefined') {
    CONFIG.JSONBIN_API_KEY = JSONBIN_API_KEY;
}
if (typeof JSONBIN_BASE_URL !== 'undefined') {
    CONFIG.JSONBIN_BASE_URL = JSONBIN_BASE_URL;
}

console.log('✅ CONFIG loaded successfully');
```

---

## 🔄 كيف يعمل النظام؟

### الحالة 1: جاءت بيانات من الملف (فيه `bin` في الرابط)
```
1. يفتح التطبيق → يكتشف وجود ?bin=xxxxx في الرابط
2. يجلب البيانات من JSONBin
3. يملأ:
   - اسم الملف الصوتي
   - مدة الصوت
   - النص المفرغ
4. ينتقل مباشرة للخطوة 2 (التصحيح)
5. المستخدم يصحح النص ويكمل باقي الخطوات
```

### الحالة 2: لم تأت بيانات (ما فيه `bin`)
```
1. يفتح التطبيق → لا يوجد ?bin في الرابط
2. يبقى في الخطوة 1
3. يطلب من المستخدم رفع ملف صوتي
4. يرفع الملف ويفرغه
5. يكمل باقي الخطوات
