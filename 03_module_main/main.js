/*
 * Nạp CSS và JS của 03_module_main.
 * Dùng trong HTML: <script src="03_module_main/main.js?v=dev1"></script>
 * Chờ window.mainModulesReady trước khi nạp các module tiếp theo.
 */
(function loadMainModules() {
    if (window.mainModulesReady) return;

    const VERSION = 'dev1';
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

    window.mainModulesReady = (async () => {
        await window.appReady;
        await Promise.all(styles.map(loadStyle));
        for (const path of scripts) {
            await loadScript(path);
        }
    })();
})();
