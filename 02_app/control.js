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
    getStartupData: async function()
    {
        console.log('APP. get startup data:');
        APP.loadingScreen.show();
        await APP.cache.init(); //Nếu có cache trong local và token thì load cache và kiểm tra user dưới background
        APP.history.ui.render();
        APP.loadingScreen.hide();

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