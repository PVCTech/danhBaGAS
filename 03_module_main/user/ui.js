APP.user = APP.user || {};
APP.user.ui = 
{
    render: function()
    {
        APP.user.menu.ui.render();
        APP.user.login.ui.render();
        APP.user.changePassword.ui.render();
    }
}