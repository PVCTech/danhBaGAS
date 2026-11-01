APP.footer =
{
    ui: {},
    control: {}
};

APP.footer.ui =
{
    init: function()
    {
        div({
            id: 'footer', 
            className: 'footer',
            parent: document.body
        });

        div({
            id: 'footer_menuMobile', 
            className: 'footer__menuMobile',
            parentId: 'footer'
        });

        $('#footer_menuMobile').innerHTML = `
            <img class="image-button" src="assets/img/back_white.svg" style="width:32px;" onclick="APP.footer.control.back()" />
            <div style="text-align: center;">DANH BẠ ĐIỆN THOẠI</div>
            <img class="image-button" src="assets/img/new_white.svg" 
                style="width:32px;" onclick="APP.form.ui.show('');" />
            `;
    }
};
