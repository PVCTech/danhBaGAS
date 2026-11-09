APP.footer =
{
    ui: {},
    control: {}
};

APP.footer.ui =
{
    init: function()
    {
        PVCComponent.div({
            id: 'footer', 
            className: 'footer',
            parent: document.body
        });

        PVCComponent.div({
            id: 'footer_menuMobile', 
            className: 'footer__menuMobile',
            parentId: 'footer'
        });

        $('#footer_menuMobile').innerHTML = `
            <img class="image-button" id="footer_backButton" src="https://pvctech.github.io/danhBaGAS/assets/img/back_white.svg" style="width:32px;" onclick="APP.view.ui.back()" />
            <div style="text-align: center;">DANH BẠ ĐIỆN THOẠI</div>
            <img class="image-button" src="https://pvctech.github.io/danhBaGAS/assets/img/new_white.svg" 
                style="width:32px;" onclick="APP.form.ui.show('');" />
            `;
    },
    backButton:
    {
        disable: function()
        {
            inactiveButton('footer_backButton');
        },
        enable: function()
        {
            activeButton('footer_backButton');
        }
    }
};
