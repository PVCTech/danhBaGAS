APP.control =
{
    init: function()
    {
        //if (!this.onGas()) return;
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
        APP.loadingScreen.hide();
    },
    onGas()
    {
        if (!window.google || !google.script || !google.script.run) 
        {
            alert('Hãy mở trang này từ Google Apps Script Web App trên trình duyệt web');
            return false;
        }
    }
}