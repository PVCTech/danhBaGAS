APP.control =
{
    init: function()
    {
        console.log('APP.init:');
        APP.ui.init();
    },
    startup: async function()
    {
        console.log('APP.startup (power on)');
        APP.user.control.checkUser();
    },
    getStartupData: async function({showLoading = true} = {})
    {
        console.log('APP. get startup data:');
        if (showLoading) APP.loadingScreen.show();
        try
        {
            await APP.cache.init();
            this.prepareStartupUI();
        }
        finally
        {
            if (showLoading) APP.loadingScreen.hide();
        }
    },
    prepareStartupUI: function()
    {
        APP.history.ui.render();
        APP.form.ui.updateListField();
        APP.form.ui.renderDanhSachXungHo();
    },
    onGas()
    {
        if (!window.google || !google.script || !google.script.run) 
        {
            alert('Hãy mở trang này từ Google Apps Script Web App trên trình duyệt web');
            return false;
        }
    },
    clearData: function()
    {
        APP.cache.clear();
        APP.localStorage.clear();
    }
}


window.addEventListener('popstate', function(e)
{
    APP.view.ui.back();
});