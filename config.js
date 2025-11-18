// ✅ CONFIG محسّن مع Error Handling
const CONFIG = {
    BACKEND: {
        BASE_URL: 'https://n8n-video-worker.abdullah4work.deno.net',
        ENDPOINTS: {
            UPLOAD_AUDIO: '/upload-audio',
            REQUEST_TRANSCRIPT: '/request-transcript',
            TRANSCRIPT_STATUS: '/transcript-status',
            SAVE_DATA: '/save-data',
            AI_CORRECT: '/ai-correct',
            GET_BIN_DATA: '/get-bin-data',  // ✅ تصحيح الاسم
            GET_BIN: '/get-bin',
            HEALTH: '/health'
        },
        TIMEOUT: 30000,  // 30 seconds
        RETRY_ATTEMPTS: 3,
        RETRY_DELAY: 2000  // 2 seconds
    },

    JSONBIN: {
        BASE_URL: 'https://api.jsonbin.io/v3/b'
    },

    AI: {
        PROVIDER: 'google-gemini',
        MODEL: 'gemini-2.0-flash-exp',
        TEMPERATURE: 0.3,
        CORRECTION_PROMPT: `أنت مصحح نصوص عربية محترف. مهمتك تصحيح النص المفرغ من الصوت.

قواعد التصحيح:
1. صحح الأخطاء الإملائية والنحوية
2. لا تضف اي علامات ترقيم
3. حافظ على المعنى الأصلي تماماً
4. لا تضف أو تحذف معلومات
5. أرجع النص المصحح فقط بدون أي مقدمات أو تعليقات

النص المطلوب تصحيحه:`
    },

    APP: {
        WEB_APP_URL: 'https://abdullah4work.github.io/N8n-telegram-text-editor/',
        MAX_FILE_SIZE: 52428800,
        ALLOWED_AUDIO_FORMATS: ['audio/mpeg', 'audio/wav', 'audio/ogg', 'audio/m4a', 'audio/flac', 'audio/mp3'],
        MAX_TEXT_LENGTH: 100000,
        AUTO_SAVE_INTERVAL: 30000
    },

    TELEGRAM: {
        USER_ID: '7432377194'
    },

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

// ==================== ✅ دالة Fetch محسّنة مع CORS + Retry ====================
async function fetchWithRetry(url, options = {}, retries = CONFIG.BACKEND.RETRY_ATTEMPTS) {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), CONFIG.BACKEND.TIMEOUT);

    const fetchOptions = {
        ...options,
        signal: controller.signal,
        mode: 'cors',  // ✅ تفعيل CORS
        credentials: 'omit',  // ✅ لا نرسل credentials
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            ...options.headers
        }
    };

    for (let attempt = 1; attempt <= retries; attempt++) {
        try {
            console.log(`🔄 Attempt ${attempt}/${retries}: ${url}`);
            
            const response = await fetch(url, fetchOptions);
            clearTimeout(timeout);

            console.log(`📡 Response status: ${response.status}`);

            if (!response.ok) {
                const errorText = await response.text();
                console.error(`❌ Server error (${response.status}):`, errorText);
                
                // إذا 500 error، نحاول مرة ثانية
                if (response.status >= 500 && attempt < retries) {
                    console.log(`⏳ Retrying in ${CONFIG.BACKEND.RETRY_DELAY}ms...`);
                    await new Promise(resolve => setTimeout(resolve, CONFIG.BACKEND.RETRY_DELAY));
                    continue;
                }
                
                throw new Error(`Server error: ${response.status} - ${errorText}`);
            }

            const data = await response.json();
            console.log('✅ Success:', data);
            return data;

        } catch (error) {
            clearTimeout(timeout);
            
            console.error(`❌ Attempt ${attempt} failed:`, error.message);

            // إذا CORS error أو network error
            if (error.name === 'TypeError' && error.message.includes('Failed to fetch')) {
                console.error('🚫 CORS or Network Error detected');
            }

            if (error.name === 'AbortError') {
                console.error('⏱️ Request timeout');
            }

            // آخر محاولة؟
            if (attempt === retries) {
                throw new Error(`❌ Failed after ${retries} attempts: ${error.message}`);
            }

            // انتظر قبل المحاولة التالية
            await new Promise(resolve => setTimeout(resolve, CONFIG.BACKEND.RETRY_DELAY * attempt));
        }
    }
}

// ==================== ✅ دالة تحميل البيانات الأولية محسّنة ====================
async function loadInitialData() {
    try {
        console.log('🚀 Loading initial data...');
        
        // الحصول على binId من URL
        const urlParams = new URLSearchParams(window.location.search);
        const binId = urlParams.get('bin');
        
        if (!binId) {
            console.warn('⚠️ No binId in URL');
            return null;
        }

        console.log('🆔 BinId:', binId);

        // ✅ استخدام الـ endpoint الصحيح
        const url = `${CONFIG.BACKEND.BASE_URL}${CONFIG.BACKEND.ENDPOINTS.GET_BIN_DATA}?binId=${binId}`;
        
        console.log('📡 Fetching from:', url);

        const data = await fetchWithRetry(url, {
            method: 'GET'
        });

        console.log('✅ Data loaded successfully:', data);
        return data;

    } catch (error) {
        console.error('❌ Error loading initial data:', error);
        
        // عرض رسالة للمستخدم
        showUserError('فشل تحميل البيانات. يرجى المحاولة مرة أخرى.');
        
        return null;
    }
}

// ==================== ✅ دالة عرض الأخطاء للمستخدم ====================
function showUserError(message) {
    // إنشاء عنصر رسالة الخطأ
    const errorDiv = document.createElement('div');
    errorDiv.style.cssText = `
        position: fixed;
        top: 20px;
        left: 50%;
        transform: translateX(-50%);
        background: linear-gradient(135deg, #ff6b6b, #ee5a6f);
        color: white;
        padding: 15px 30px;
        border-radius: 10px;
        box-shadow: 0 4px 15px rgba(0,0,0,0.3);
        z-index: 10000;
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        font-size: 16px;
        max-width: 90%;
        text-align: center;
        animation: slideDown 0.3s ease-out;
    `;
    errorDiv.innerHTML = `
        <div style="display: flex; align-items: center; gap: 10px;">
            <span style="font-size: 24px;">❌</span>
            <span>${message}</span>
        </div>
    `;

    // إضافة animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideDown {
            from {
                transform: translate(-50%, -100%);
                opacity: 0;
            }
            to {
                transform: translate(-50%, 0);
                opacity: 1;
            }
        }
    `;
    document.head.appendChild(style);

    document.body.appendChild(errorDiv);

    // إزالة الرسالة بعد 5 ثواني
    setTimeout(() => {
        errorDiv.style.animation = 'slideDown 0.3s ease-out reverse';
        setTimeout(() => errorDiv.remove(), 300);
    }, 5000);
}

// ==================== ✅ دالة حفظ البيانات محسّنة ====================
async function saveData(data) {
    try {
        console.log('💾 Saving data...');

        const url = `${CONFIG.BACKEND.BASE_URL}${CONFIG.BACKEND.ENDPOINTS.SAVE_DATA}`;
        
        const result = await fetchWithRetry(url, {
            method: 'POST',
            body: JSON.stringify(data)
        });

        console.log('✅ Data saved successfully');
        return result;

    } catch (error) {
        console.error('❌ Error saving data:', error);
        showUserError('فشل حفظ البيانات. يرجى المحاولة مرة أخرى.');
        throw error;
    }
}

// ==================== ✅ دالة تصحيح النص بالـ AI محسّنة ====================
async function correctTextWithAI(text) {
    try {
        console.log('🤖 AI correction started...');

        const url = `${CONFIG.BACKEND.BASE_URL}${CONFIG.BACKEND.ENDPOINTS.AI_CORRECT}`;
        
        const result = await fetchWithRetry(url, {
            method: 'POST',
            body: JSON.stringify({ text })
        });

        console.log('✅ AI correction completed');
        return result.correctedText;

    } catch (error) {
        console.error('❌ AI correction error:', error);
        showUserError('فشل تصحيح النص. يرجى المحاولة مرة أخرى.');
        throw error;
    }
}

// ==================== ✅ دالة رفع الصوت محسّنة ====================
async function uploadAudio(audioFile) {
    try {
        console.log('📤 Uploading audio...');

        // التحقق من حجم الملف
        if (audioFile.size > CONFIG.APP.MAX_FILE_SIZE) {
            throw new Error('حجم الملف كبير جداً. الحد الأقصى 50MB');
        }

        // التحقق من نوع الملف
        if (!CONFIG.APP.ALLOWED_AUDIO_FORMATS.includes(audioFile.type)) {
            throw new Error('صيغة الملف غير مدعومة');
        }

        const formData = new FormData();
        formData.append('audio', audioFile);

        const url = `${CONFIG.BACKEND.BASE_URL}${CONFIG.BACKEND.ENDPOINTS.UPLOAD_AUDIO}`;
        
        const result = await fetchWithRetry(url, {
            method: 'POST',
            body: formData,
            headers: {}  // لا نضيف Content-Type لأن FormData يحددها تلقائياً
        });

        console.log('✅ Audio uploaded successfully');
        return result;

    } catch (error) {
        console.error('❌ Audio upload error:', error);
        showUserError('فشل رفع الملف الصوتي. يرجى المحاولة مرة أخرى.');
        throw error;
    }
}

// ==================== ✅ دالة فحص صحة الـ Worker ====================
async function checkWorkerHealth() {
    try {
        console.log('🏥 Checking worker health...');

        const url = `${CONFIG.BACKEND.BASE_URL}${CONFIG.BACKEND.ENDPOINTS.HEALTH}`;
        
        const result = await fetchWithRetry(url, {
            method: 'GET'
        });

        console.log('✅ Worker is healthy:', result);
        return true;

    } catch (error) {
        console.error('❌ Worker health check failed:', error);
        showUserError('الخدمة غير متاحة حالياً. يرجى المحاولة لاحقاً.');
        return false;
    }
}

// تجميد الكائن لمنع التعديل
if (typeof Object.freeze === 'function') {
    Object.freeze(CONFIG);
    Object.freeze(CONFIG.BACKEND);
    Object.freeze(CONFIG.BACKEND.ENDPOINTS);
    Object.freeze(CONFIG.AI);
    Object.freeze(CONFIG.JSONBIN);
    Object.freeze(CONFIG.APP);
    Object.freeze(CONFIG.TELEGRAM);
    CONFIG.TEMPLATES.forEach(template => {
        Object.freeze(template);
        if (template.colors) {
            template.colors.forEach(color => Object.freeze(color));
        }
        if (template.data) {
            Object.freeze(template.data);
            if (template.data.PORTRAIT) Object.freeze(template.data.PORTRAIT);
            if (template.data.LANDSCAPE) Object.freeze(template.data.LANDSCAPE);
        }
    });
    CONFIG.SERIES_COLORS.forEach(color => Object.freeze(color));
}

// للاستخدام في Node.js
if (typeof module !== 'undefined' && module.exports) {
    module.exports = CONFIG;
}

// إضافة للنطاق العام
if (typeof window !== 'undefined') {
    window.CONFIG = CONFIG;
    window.fetchWithRetry = fetchWithRetry;
    window.loadInitialData = loadInitialData;
    window.saveData = saveData;
    window.correctTextWithAI = correctTextWithAI;
    window.uploadAudio = uploadAudio;
    window.checkWorkerHealth = checkWorkerHealth;
    window.showUserError = showUserError;
}

console.log('✅ CONFIG loaded with enhanced error handling');
console.log('🔒 CORS enabled with retry logic');
console.log('🤖 AI Model:', CONFIG.AI.MODEL);
console.log('⚡ Retry attempts:', CONFIG.BACKEND.RETRY_ATTEMPTS);
console.log('⏱️ Timeout:', CONFIG.BACKEND.TIMEOUT / 1000, 'seconds');

// ✅ فحص صحة الـ Worker عند تحميل الصفحة
if (typeof window !== 'undefined') {
    window.addEventListener('DOMContentLoaded', async () => {
        console.log('🚀 App Starting...');
        
        // فحص صحة الـ Worker
        const isHealthy = await checkWorkerHealth();
        
        if (isHealthy) {
            console.log('✅ Worker is ready');
            
            // تحميل البيانات الأولية
            const data = await loadInitialData();
            
            if (data) {
                console.log('✅ Initial data loaded');
                // يمكنك استخدام البيانات هنا
            }
        } else {
            console.error('❌ Worker is not available');
        }
    });
}
