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
        inactiveButton('user_changePassword_submitButton');
        let loginStatus = localStorage.getItem('a00001_user');
        if (loginStatus)
        {    
            let user = await APP.user.api.getLoginStatus(loginStatus.token);            
            user = JSON.parse(user);
            localStorage.setItem('a00001_user', JSON.stringify(user));

            if (user.status !== 'ok')
            {
                localStorage.removeItem('a00001_user');
                localStorage.removeItem('a00001_cache');
                $('#userMenu_hoVaTen').value = '';
                APP.user.login.ui.show();
            }
            else
            {
                APP.cache.version = user.cacheVersion;
                APP.user.data = user;
                APP.user.token = user.token;
                $('#user_hoVaTen').innerText = user.hoVaTen;
                activeButton('user_changePassword_submitButton');
                APP.getStartupData();
            }
        }
        else
        {
            console.log('Client checkUser: localstorage not found!');
            localStorage.setItem('a00001_user', 'notOk');
            APP.user.login.ui.show();
        }
    },
    logout: function()
    {
        let token = APP.user.token;
        APP.user.menu.ui.hide();
        APP.sidebar.ui.clear();
        APP.view.ui.clear();

        APP.ui.hideAllTabs();
        APP.ui.hideAllForms();
        APP.user.data = {};
        APP.user.login.ui.show();

        localStorage.setItem('a00001_user', '');
        localStorage.removeItem('a00001_cache');
        $('#user_hoVaTen').innerText = '--';   
        
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
            {
                success: true,
                loggedIn: true,
                user:
                {
                    id: 'U001',
                    hoVaTen: 'Nguyễn Văn A',
                    vaiTro: 'chuNha'
                },
                cacheVersion: '1'
            });
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
            if (loginInfor.userName == 'myName' && loginInfor.password == '123456')
            {
                return Promise.resolve(
                {
                    status: 'ok',
                    token: 'demo-token',
                    userName: 'myName',
                    hoVaTen: 'Nguyễn Văn A',
                    loaiTaiKhoan: 'chuNha'
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
