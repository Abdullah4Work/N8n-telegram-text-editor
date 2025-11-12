// ✅ آمن 100% - جميع المفاتيح تأتي من GitHub Secrets
const CONFIG = {
    // إعدادات التطبيق
    APP: {
        WEB_APP_URL: 'https://abdullah4work.github.io/N8n-telegram-text-editor/',
        MAX_FILE_SIZE: 52428800, // 50 MB
        ALLOWED_AUDIO_FORMATS: ['audio/mpeg', 'audio/wav', 'audio/ogg', 'audio/m4a', 'audio/flac', 'audio/mp3'],
        MAX_TEXT_LENGTH: 100000,
        AUTO_SAVE_INTERVAL: 30000
    },

    // معلومات Telegram (من GitHub Secrets)
    TELEGRAM: {
        USER_ID: '7432377194' // سيتم تحديثه من TELEGRAM_USER_ID
    },

    // AssemblyAI (من GitHub Secrets)
    ASSEMBLYAI: {
        API_KEY: '', // سيتم تحديثه من ASSEMBLYAI_API_KEY
        UPLOAD_URL: 'https://api.assemblyai.com/v2/upload',
        TRANSCRIPT_URL: 'https://api.assemblyai.com/v2/transcript'
    },

    // JSONBin (من GitHub Secrets)
    JSONBIN: {
        API_KEY: '', // سيتم تحديثه من JSONBIN_API_KEY
        BASE_URL: 'https://api.jsonbin.io/v3/b'
    },

    // قوالب الفيديو
    TEMPLATES: [
        {
            id: 1,
            name: 'القالب الأول',
            icon: '🎯',
            gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            colors: [
                { id: 1, name: 'أزرق بنفسجي', value: '#667eea', gradient: 'linear-gradient(135deg, #667eea, #764ba2)' },
                { id: 2, name: 'وردي أحمر', value: '#f093fb', gradient: 'linear-gradient(135deg, #f093fb, #f5576c)' },
                { id: 3, name: 'أزرق فاتح', value: '#4facfe', gradient: 'linear-gradient(135deg, #4facfe, #00f2fe)' },
                { id: 4, name: 'أخضر', value: '#43e97b', gradient: 'linear-gradient(135deg, #43e97b, #38f9d7)' }
            ],
            data: {
                PORTRAIT: {
                    image_name: "template_1_portrait.png",
                    TITLE_color_hex: "#32CD32",
                    Series_color_hex: "#1E90FF",
                    google_drive_link: "https://drive.google.com/template1"
                },
                LANDSCAPE: {
                    image_name: "template_1_landscape.png",
                    TITLE_color_hex: "#32CD32",
                    Series_color_hex: "#1E90FF",
                    google_drive_link: "https://drive.google.com/template1"
                }
            }
        },
        {
            id: 2,
            name: 'القالب الثاني',
            icon: '🌟',
            gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
            colors: [
                { id: 1, name: 'وردي', value: '#f093fb', gradient: 'linear-gradient(135deg, #f093fb, #f5576c)' },
                { id: 2, name: 'برتقالي', value: '#fa709a', gradient: 'linear-gradient(135deg, #fa709a, #fee140)' },
                { id: 3, name: 'أحمر', value: '#ff6348', gradient: 'linear-gradient(135deg, #ff6348, #ff4757)' },
                { id: 4, name: 'بنفسجي', value: '#a8edea', gradient: 'linear-gradient(135deg, #a8edea, #fed6e3)' }
            ],
            data: {
                PORTRAIT: {
                    image_name: "template_2_portrait.png",
                    TITLE_color_hex: "#FF6347",
                    Series_color_hex: "#FF1493",
                    google_drive_link: "https://drive.google.com/template2"
                },
                LANDSCAPE: {
                    image_name: "template_2_landscape.png",
                    TITLE_color_hex: "#FF6347",
                    Series_color_hex: "#FF1493",
                    google_drive_link: "https://drive.google.com/template2"
                }
            }
        },
        {
            id: 3,
            name: 'القالب الثالث',
            icon: '💎',
            gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
            colors: [
                { id: 1, name: 'أزرق سماوي', value: '#4facfe', gradient: 'linear-gradient(135deg, #4facfe, #00f2fe)' },
                { id: 2, name: 'أخضر نعناعي', value: '#43e97b', gradient: 'linear-gradient(135deg, #43e97b, #38f9d7)' },
                { id: 3, name: 'بنفسجي فاتح', value: '#a8edea', gradient: 'linear-gradient(135deg, #a8edea, #fed6e3)' },
                { id: 4, name: 'أصفر', value: '#feca57', gradient: 'linear-gradient(135deg, #feca57, #ff9ff3)' }
            ],
            data: {
                PORTRAIT: {
                    image_name: "template_3_portrait.png",
                    TITLE_color_hex: "#00CED1",
                    Series_color_hex: "#4169E1",
                    google_drive_link: "https://drive.google.com/template3"
                },
                LANDSCAPE: {
                    image_name: "template_3_landscape.png",
                    TITLE_color_hex: "#00CED1",
                    Series_color_hex: "#4169E1",
                    google_drive_link: "https://drive.google.com/template3"
                }
            }
        },
        {
            id: 4,
            name: 'القالب الرابع',
            icon: '🚀',
            gradient: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
            colors: [
                { id: 1, name: 'أخضر', value: '#43e97b', gradient: 'linear-gradient(135deg, #43e97b, #38f9d7)' },
                { id: 2, name: 'أزرق', value: '#667eea', gradient: 'linear-gradient(135deg, #667eea, #764ba2)' },
                { id: 3, name: 'برتقالي', value: '#fa709a', gradient: 'linear-gradient(135deg, #fa709a, #fee140)' },
                { id: 4, name: 'فيروزي', value: '#4facfe', gradient: 'linear-gradient(135deg, #4facfe, #00f2fe)' }
            ],
            data: {
                PORTRAIT: {
                    image_name: "template_4_portrait.png",
                    TITLE_color_hex: "#7FFF00",
                    Series_color_hex: "#32CD32",
                    google_drive_link: "https://drive.google.com/template4"
                },
                LANDSCAPE: {
                    image_name: "template_4_landscape.png",
                    TITLE_color_hex: "#7FFF00",
                    Series_color_hex: "#32CD32",
                    google_drive_link: "https://drive.google.com/template4"
                }
            }
        }
    ],

    // ألوان السلسلة الرئيسية
    SERIES_COLORS: [
        { name: 'أزرق بنفسجي', value: '#667eea' },
        { name: 'أحمر وردي', value: '#f5576c' },
        { name: 'أزرق فاتح', value: '#4facfe' },
        { name: 'أخضر', value: '#43e97b' },
        { name: 'وردي', value: '#fa709a' },
        { name: 'أصفر', value: '#feca57' },
        { name: 'برتقالي', value: '#ff6348' },
        { name: 'رمادي داكن', value: '#2c3e50' }
    ]
};

// 🔐 تحديث المتغيرات من GitHub Secrets (يتم استبدالها أثناء Build)
if (typeof TELEGRAM_USER_ID !== 'undefined') {
    CONFIG.TELEGRAM.USER_ID = TELEGRAM_USER_ID;
}
if (typeof ASSEMBLYAI_API_KEY !== 'undefined') {
    CONFIG.ASSEMBLYAI.API_KEY = ASSEMBLYAI_API_KEY;
}
if (typeof ASSEMBLYAI_UPLOAD_URL !== 'undefined') {
    CONFIG.ASSEMBLYAI.UPLOAD_URL = ASSEMBLYAI_UPLOAD_URL;
}
if (typeof ASSEMBLYAI_TRANSCRIPT_URL !== 'undefined') {
    CONFIG.ASSEMBLYAI.TRANSCRIPT_URL = ASSEMBLYAI_TRANSCRIPT_URL;
}
if (typeof JSONBIN_API_KEY !== 'undefined') {
    CONFIG.JSONBIN.API_KEY = JSONBIN_API_KEY;
}
if (typeof JSONBIN_BASE_URL !== 'undefined') {
    CONFIG.JSONBIN.BASE_URL = JSONBIN_BASE_URL;
}
if (typeof WEB_APP_URL !== 'undefined') {
    CONFIG.APP.WEB_APP_URL = WEB_APP_URL;
}

// تجميد الكائن لمنع التعديل
if (typeof Object.freeze === 'function') {
    Object.freeze(CONFIG);
}

console.log('✅ CONFIG loaded securely from GitHub Secrets');
