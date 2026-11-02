APP.user.menu = APP.user.menu || {};
APP.user.menu.ui = APP.user.menu.ui || {};
APP.user.menu.ui =
{
    init: function (parentId = '') {
        div({
            id: 'userMenu_divChe',
            className: 'user__menu__divChe',
            parent: document.body,
            onclick: el => {
                APP.user.menu.ui.hide();
            }
        });

        div({
            id: 'userMenu_hamburger',
            html: `<img class="image-button" src="assets/img/user.svg" style="height: 25px;cursor: pointer;">`,
            parentId: parentId
        });

        div({ id: 'userMenu', className: 'user__menu', parentId: parentId });

        div({
            id: 'user_hoVaTen', className: 'sidebar__button user__menu__button',
            html: '--', style: 'font-weight:bold; margin-top:10px;',
            parentId: 'userMenu'
        });

        div({
            id: 'userMenu_changePassword', className: 'sidebar__button user__menu__button', text: 'Đổi mật khẩu',
            parentId: 'userMenu'
        });

        div({
            id: 'userMenu_dangXuat', className: 'sidebar__button user__menu__button', text: 'Đăng xuất',
            parentId: 'userMenu'
        });
    },
    render: function()
    {
        let hoVaTen = APP.state.user.hoVaTen || '';
        $('#user_hoVaTen').innerText = hoVaTen;
    },
    showing: false,
    show: function () {
        show('userMenu', 'flex');
        show('userMenu_divChe');
        APP.user.menu.ui.showing = true;
        if (APP.config.mobileMode) APP.sidebar.ui.hide();
    },
    hide: function () {
        hide('userMenu_divChe');
        hide('userMenu');
        APP.user.menu.ui.showing = false;
    },
    toggle: function () {
        if (APP.user.menu.ui.showing) {
            APP.user.menu.ui.hide();
        }
        else {
            APP.user.menu.ui.show();
        }
    }
};