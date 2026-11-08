/*
 * Nạp CSS và JS của 04_module_addin.
 * Dùng trong HTML: <script src="04_module_addin/main.js?v=dev1"></script>
 * Chờ window.addinModulesReady trước khi khởi tạo ứng dụng.
 */
(function loadAddinModules() {
    if (window.addinModulesReady) return;

    const VERSION = 'dev1';
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

    const versionedUrl = path => {
        const url = new URL(path, baseUrl);
        url.searchParams.set('v', VERSION);
        return url.href;
    };

    const loadStyle = path => new Promise((resolve, reject) => {
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = versionedUrl(path);
        link.onload = resolve;
        link.onerror = () => reject(new Error(`Không tải được stylesheet: ${path}`));
        document.head.appendChild(link);
    });

    const loadScript = path => new Promise((resolve, reject) => {
        const script = document.createElement('script');
        script.src = versionedUrl(path);
        script.onload = resolve;
        script.onerror = () => reject(new Error(`Không tải được script: ${path}`));
        document.head.appendChild(script);
    });

    window.addinModulesReady = (async () => {
        await window.mainModulesReady;
        await Promise.all(styles.map(loadStyle));
        for (const path of scripts) {
            await loadScript(path);
        }
    })();
})();
