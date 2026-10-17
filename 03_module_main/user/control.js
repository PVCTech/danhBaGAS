APP.user = APP.user || {};
APP.user.control = 
{
    init: function()
    {
        APP.user.menu.control.init();
        APP.user.login.control.init();
        APP.user.changePassword.control.init();
    },
    checkUser: async function()
    {
        console.log('checkUser..');
        let loginStatus = localStorage.getItem('a00001_user');
        if (loginStatus)
        {    
            let newLoginStatus = await APP.user.api.getLoginStatus(loginStatus.token);
            console.log(JSON.stringify(newLoginStatus));     
            newLoginStatus = JSON.parse(newLoginStatus);
            localStorage.setItem('a00001_user', JSON.stringify(newLoginStatus));

            if (newLoginStatus.status !== 'ok')
            {
                localStorage.removeItem('a00001_user');
                localStorage.removeItem('a00001_cache');
                APP.user.login.ui.show();
            }
            else
            {
                console.log('Check user: oke');
                APP.state.user = newLoginStatus.user;
                await APP.control.getStartupData();
                APP.ui.render();
            }
        }
        else
        {
            console.log('Client checkUser: localstorage not found!');
            APP.user.login.ui.show();
        }
    },
    logout: function()
    {
        let token = APP.state.user.token;
        APP.user.menu.ui.hide();
        APP.sidebar.ui.clear();
        APP.view.ui.clear();

        APP.ui.hideAllTabs();
        APP.ui.hideAllForms();
        APP.state.user = {};
        APP.user.login.ui.show();

        localStorage.setItem('a00001_user', '');
        localStorage.removeItem('a00001_cache'); 
        
        google.script.run.withSuccessHandler(function(userStatus)
        {
            
        }).sv_doLogout(token);
    }
};


APP.user.api = 
{ 
    getLoginStatus: function(token)
    {
        if (APP.mode == 'demo')
        {
            return Promise.resolve(
            JSON.stringify({
                status: 'ok',      
                user:
                {
                    id: 'U001',
                    token: 'demo-token',
                    userName: 'admin',
                    hoVaTen: 'Nguyễn Văn A',
                    vaiTro: 'chuNha'
                },
                cacheVersion: '1'
            }));
        }
        else
        {
            return new Promise((resolve, reject) =>
            {
                google.script.run
                    .withSuccessHandler(resolve)
                    .withFailureHandler(reject)
                    .sv_user_getLoginStatus_(token);
            });
        }
    },
    doLogin: function(loginInfor)
    {
        if (APP.mode == 'demo')
        {
            if (loginInfor.userName == 'admin' && loginInfor.password == '123456')
            {
                return Promise.resolve(
                {
                    status: 'ok',
                    user:
                    {
                        id: 'U001',
                        token: 'demo-token',
                        userName: 'admin',
                        hoVaTen: 'Nguyễn Văn A',
                        vaiTro: 'admin'
                    },
                    cacheVersion: '1'
                });
            }
            else
            {
                return Promise.resolve(
                {
                    status: 'error',
                    message: 'Tên đăng nhập hoặc mật khẩu không đúng'
                });
            }
        }
        else
        {
            return new Promise((resolve, reject) =>
            {
                google.script.run
                    .withSuccessHandler(resolve)
                    .withFailureHandler(reject)
                    .sv_user_doLogin(JSON.stringify(loginInfor));
            });
        }
    }
};
