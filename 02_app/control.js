APP.control =
{
    init: function()
    {
        //if (!this.onGas()) return;
        APP.ui.init();
    },
    startup: async function()
    {        
        let loginStatus = localStorage.getItem('a00001_user');
        if (!loginStatus)
        {
            console.log('APP startup: localStorage chưa có');
            APP.user.login.ui.show();
            return;
        }
        
        loginStatus = JSON.parse(loginStatus);
        if (!loginStatus.token)
        {
            console.log('APP startup: localStorage_token chưa có');
            APP.user.login.ui.show();
            return;
        }

        const token = loginStatus.token;
        if (token == '')
        {
            console.log('APP startup: localStorage_token trống');
            APP.user.login.ui.show();
            return;
        }
        
        APP.user.login.ui.hide();
        APP.user.token = token;
        APP.control.getStartupData();
    },
    getStartupData: async function()
    {
        APP.loadingScreen.show();
        await APP.cache.init(); //Nếu có cache trong local và token thì load cache và kiểm tra user dưới background

        google.script.run
            .withSuccessHandler(function(duLieu)
            {
                APP.loadingScreen.hide();                
                APP.user.data = duLieu.user;
                $('#user_hoVaTen').innerText = APP.user.data.hoVaTen;
                APP.cache.serverCache = duLieu.serverCache;
                APP.features.chuNha.control.init();                
            })
            .withFailureHandler(function(error)
            {
                
            })
            .sv_appstartup_getData(APP.user.token);
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