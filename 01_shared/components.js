/*
 * Components dùng chung
 *
 * Nạp file trong HTML:
 *   <script src="01_shared/components.js"></script>
 *   <script>
 *     componentsReady.then(() => {
 *       canhBao_init();
 *       toast_init();
 *     }).catch(console.error);
 *   </script>
 *
 * Chờ componentsReady trước khi gọi component. Các ví dụ dưới đây dùng các
 * hàm tiện ích như $, div, hide và APP từ phần core của ứng dụng.
 *
 * Alert:
 *   canhBao_init();
 *   await canhBao('Đã lưu', 'Thông báo');                   // Chỉ nút OK
 *   const dongY = await canhBao('Xóa mục này?', 'Xác nhận', 'okCancel');
 *
 * Toast:
 *   toast_init();
 *   toast('Đã lưu thành công', 3000, 'success');
 *
 * Dashboard:
 *   const hang = row({id: 'hang'});
 *   hang.appendChild(column({id: 'cot'}));
 *   const html = totalCard_render('Tổng số', 12);
 *
 * Dashboard card:
 *   const cards = card_container([{type: 'numberCard_01',
 *     data: {caption: 'Liên hệ', subCaption: '', value: 12}}]);
 *   document.body.appendChild(cards);
 *
 * Dashboard desk:
 *   const desk = desk_container([{type: 'deskCard_01',
 *     data: {caption: 'Lịch hẹn', subCaption: '', detail: '', actionBar: ''}}]);
 *   document.body.appendChild(desk);
 *
 * Dashboard table:
 *   const bang = table_01([{name: 'name', caption: 'Tên'}], [['Nguyễn An']]);
 *   document.body.appendChild(bang);
 *
 * Div che:
 *   divChe_init();
 *   divChe({id: 'divChe'});
 *
 * Form:
 *   const form = buildForm([{name: 'name', caption: 'Họ tên', type: 'text'}]);
 *   document.body.appendChild(form);
 *   form.appendChild(button({text: 'Lưu', onclick: () => console.log('Lưu')}));
 *   form.appendChild(formField({id: 'email', caption: 'Email', type: 'email'}));
 *   datePicker_init(); // Dùng với trường type: 'dd/mm/yyyy'
 *
 * Loading:
 *   document.body.appendChild(loadingText({text: 'Đang tải'}));
 *   document.body.appendChild(loadingScreen('Đang tải dữ liệu', 'loading'));
 *   document.body.appendChild(loadingBar());
 *
 * AI chat:
 *   chat_line(['Xin chào!', 'Bạn cần hỗ trợ gì?'], 'chat', 1500);
 */
(function loadComponents() {
    if (window.componentsReady) return;

    const VERSION = 'dev1';
    const loaderScript = document.currentScript;
    if (!loaderScript || !loaderScript.src) {
        throw new Error('Không xác định được đường dẫn của components.js');
    }

    const baseUrl = loaderScript.src;
    const versionedUrl = path => {
        const url = new URL(path, baseUrl);
        url.searchParams.set('v', VERSION);
        return url.href;
    };
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
        'components/toast/main.js'
    ];

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

    window.componentsReady = (async () => {
        await Promise.all(styles.map(loadStyle));
        for (const path of scripts) {
            await loadScript(path);
        }

        const chatModule = await import(versionedUrl('components/ai/chat.js'));
        window.chat_line = chatModule.chat_line;
    })();
})();
