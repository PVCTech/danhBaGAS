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
            console.log('loginStatus: ' + loginStatus);
            loginStatus = JSON.parse(loginStatus);
            if (!loginStatus.user)
            {
                APP.user.login.ui.show();
                return;
            }
            else
            {
                if (!loginStatus.user.token)
                {
                    APP.user.login.ui.show();
                    return;
                }
            }

            let newLoginStatus = await APP.user.api.getLoginStatus(loginStatus.user.token);
            console.log('new login status from server: ' + JSON.stringify(newLoginStatus));
            newLoginStatus = JSON.parse(newLoginStatus);
            localStorage.setItem('a00001_user', JSON.stringify(newLoginStatus));

            if (newLoginStatus.status !== 'ok')
            {
                APP.control.clearData();
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
            APP.control.clearData();
            APP.user.login.ui.show();
        }
    },
    logout: function()
    {
        let token = APP.state.user.token;
        APP.user.menu.ui.hide();
        //APP.sidebar.ui.clear();
        APP.view.ui.clearAllTab();

        APP.ui.hideAllTabs();
        APP.ui.hideAllForms();
        APP.state.user = {};
        APP.state.manHinhHienTai = 'login';
        APP.ui.render();

        APP.control.clearData();
        
        /*
        google.script.run.withSuccessHandler(function(userStatus)
        {
            
        }).sv_doLogout(token); */
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
    },
    changePassword: function(sendData)
    {
        if (APP.mode == 'demo')
        {
            return Promise.resolve(
            {
                status: 'ok',
                message: 'Đổi mật khẩu thành công'
            });
        }
        else
        {
            return new Promise((resolve, reject) =>
            {
                google.script.run
                    .withSuccessHandler(resolve)
                    .withFailureHandler(reject)
                    .sv_user_changePassword(JSON.stringify(sendData));
            });
        }
    }
};
