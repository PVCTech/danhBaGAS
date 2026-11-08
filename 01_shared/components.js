/*
 * Nạp CSS và JS của các component dùng chung theo thứ tự trong danh sách.
 * Dùng trong HTML: <script src="01_shared/components.js?v=dev2"></script>
 */
(function loadComponents() {
    const VERSION = 'dev2';
    const baseUrl = document.currentScript.src;
    const styles = [
        'components/alert/style.css',
        'components/dashboard/style.css',
        'components/dashboard/card/style.css',
        'components/dashboard/card/detailCard_01/style.css',
        'components/dashboard/card/numberCard_01/style.css',
        'components/dashboard/card/numberCard_02/style.css',
        'components/dashboard/desk/style.css',
        'components/dashboard/desk/deskCard_01/style.css',
        'components/dashboard/table/style.css',
        'components/dashboard/table/table_01/style.css',
        'components/form/style.css',
        'components/form/button/style.css',
        'components/form/button/button_01/style.css',
        'components/form/button/onlyIconButton_01/style.css',
        'components/form/date-picker/style.css',
        'components/form/formField/formField_01/style.css',
        'components/loading/loading-bar/style.css',
        'components/loading/loading-screen/loading-screen_01/style.css',
        'components/loading/loading-screen/loading-screen_02/style.css',
        'components/loading/loading-text/loading-text_01/style.css',
        'components/loading/loading-text/loading-text_02/style.css',
        'components/toast/style.css'
    ];
    const scripts = [
        'components/divChe/main.js',
        'components/alert/main.js',
        'components/dashboard/main.js',
        'components/loading/loading-text/loading-text_02/main.js',
        'components/dashboard/card/detailCard_01/main.js',
        'components/dashboard/card/numberCard_01/main.js',
        'components/dashboard/card/numberCard_02/main.js',
        'components/dashboard/card/main.js',
        'components/dashboard/desk/deskCard_01/main.js',
        'components/dashboard/desk/main.js',
        'components/dashboard/table/table_01/main.js',
        'components/dashboard/table/main.js',
        'components/form/button/button_01/main.js',
        'components/form/button/onlyIconButton_01/main.js',
        'components/form/button/main.js',
        'components/form/formField/formField_01/main.js',
        'components/form/formField/main.js',
        'components/form/date-picker/main.js',
        'components/form/main.js',
        'components/loading/loading-bar/ui.js',
        'components/loading/loading-text/loading-text_01/main.js',
        'components/loading/loading-text/main.js',
        'components/loading/loading-screen/loading-screen_01/ui.js',
        'components/loading/loading-screen/loading-screen_02/main.js',
        'components/loading/loading-screen/main.js',
        'components/toast/main.js',
        'components/ai/chat.js'
    ];

    const versionedUrl = path => {
        const url = new URL(path, baseUrl);
        url.searchParams.set('v', VERSION);
        return url.href;
    };

    for (const path of styles) {
        document.write(`<link rel="stylesheet" href="${versionedUrl(path)}">`);
    }

    for (const path of scripts) {
        const url = versionedUrl(path);
        document.write(`<script src="${url}"><\/script>`);
    }
})();
