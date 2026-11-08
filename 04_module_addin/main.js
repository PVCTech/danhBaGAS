/*
 * Nạp CSS và JS của 04_module_addin theo thứ tự phụ thuộc.
 * Dùng trong HTML: <script src="04_module_addin/main.js?v=dev3"></script>
 */
(function loadAddinModules() {
    const VERSION = 'dev3';
    const baseUrl = document.currentScript.src;
    const styles = [
        'form/style.css',
        'form/goiY/style.css'
    ];
    const scripts = [
        'models.js',
        'LienHe.js',
        'list/ui.js',
        'list/control.js',
        'history/ui.js',
        'history/control.js',
        'sinhNhat/ui.js',
        'yeuThich/ui.js',
        'detail/ui.js',
        'detail/control.js',
        'form/ui.js',
        'form/control.js',
        'form/goiY/ui.js',
        'form/goiY/control.js',
        'search/ui.js',
        'search/control.js'
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
