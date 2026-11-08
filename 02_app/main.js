/*
 * Nạp các file của 02_app theo thứ tự phụ thuộc.
 * Dùng trong HTML: <script src="02_app/main.js?v=dev2"></script>
 */
(function loadAppFiles() {
    const VERSION = 'dev2';
    const baseUrl = document.currentScript.src;
    const scripts = [
        'cache.js',
        'localStorage.js',
        'state.js',
        'ui.js',
        'control.js',
        'api.js'
    ];

    for (const path of scripts) {
        const url = new URL(path, baseUrl);
        url.searchParams.set('v', VERSION);
        document.write(`<script src="${url.href}"><\/script>`);
    }
})();
