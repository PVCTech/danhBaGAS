/*
 * Nạp các file của 02_app theo thứ tự phụ thuộc.
 * Dùng trong HTML: <script src="02_app/main.js?v=dev1"></script>
 * Chờ window.appReady trước khi nạp các module tiếp theo.
 */
(function loadAppFiles() {
    if (window.appReady) return;

    const VERSION = 'dev1';
    const baseUrl = document.currentScript.src;
    const scripts = [
        'cache.js',
        'localStorage.js',
        'state.js',
        'ui.js',
        'control.js',
        'api.js'
    ];

    const loadScript = path => new Promise((resolve, reject) => {
        const script = document.createElement('script');
        const url = new URL(path, baseUrl);
        url.searchParams.set('v', VERSION);
        script.src = url.href;
        script.onload = resolve;
        script.onerror = () => reject(new Error(`Không tải được script: ${path}`));
        document.head.appendChild(script);
    });

    window.appReady = (async () => {
        for (const path of scripts) {
            await loadScript(path);
        }
    })();
})();
