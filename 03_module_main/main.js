/*
 * Nạp CSS và JS của 03_module_main theo thứ tự phụ thuộc.
 * Dùng trong HTML: <script src="03_module_main/main.js?v=dev2"></script>
 */
(function loadMainModules() {
    const VERSION = 'dev2';
    const baseUrl = document.currentScript.src;
    const styles = [
        'user/menu/style.css',
        'user/login/style.css',
        'user/changePassword/style.css',
        'header/style.css',
        'sidebar/style.css',
        'view/style.css',
        'footer/style.css'
    ];
    const scripts = [
        'user/ui.js',
        'user/control.js',
        'user/menu/ui.js',
        'user/menu/control.js',
        'user/login/ui.js',
        'user/login/control.js',
        'user/changePassword/ui.js',
        'user/changePassword/control.js',
        'loading_screen/main.js',
        'header/ui.js',
        'header/control.js',
        'actionbar/ui.js',
        'actionbar/control.js',
        'sidebar/ui.js',
        'sidebar/control.js',
        'view/ui.js',
        'view/control.js',
        'footer/ui.js',
        'footer/control.js',
        'tip/ui.js'
    ];

    for (const path of styles) {
        const url = new URL(path, baseUrl);
        url.searchParams.set('v', VERSION);
        document.write(`<link rel="stylesheet" href="${url.href}">`);
    }

    for (const path of scripts) {
        const url = new URL(path, baseUrl);
        url.searchParams.set('v', VERSION);
        document.write(`<script src="${url.href}"><\/script>`);
    }
})();
