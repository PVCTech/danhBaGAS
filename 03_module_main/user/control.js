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
        let loginStatus = null;
        let token = '';
        try
        {   
            const localLoginStatus = localStorage.getItem('a00001_user');
            if (localLoginStatus) loginStatus = JSON.parse(localLoginStatus);
        }
        catch (error)
        {
            console.error('Không thể đọc trạng thái đăng nhập local:', error);
        }

        if (loginStatus && loginStatus.user && typeof loginStatus.user.token === 'string')
        {
            token = loginStatus.user.token.trim();
        }

        const hasValidSession = loginStatus &&
            loginStatus.status === 'ok' &&
            token.length > 0;
        const hasValidCache = APP.cache.loadLocal();

        if (hasValidSession && hasValidCache)
        {
            console.log('Khởi động từ session và cache local hợp lệ');
            APP.state.user = loginStatus.user;
            APP.state.manHinhHienTai = 'home';
            APP.control.prepareStartupUI();
            APP.ui.render();
            this.checkUserInBackground(token, APP.cache.data.version);
            return;
        }

        APP.loadingScreen.show();
        if (!token)
        {
            APP.control.clearData();
            APP.state.user = {};
            APP.state.manHinhHienTai = 'login';
            APP.user.login.ui.show();
            APP.loadingScreen.hide();
            return;
        }

        APP.state.user = loginStatus.user;
        await this.checkUserOnStartup(token);
    },
    checkUserOnStartup: async function(token)
    {
        try
        {
            const loginStatus = await this.requestLoginStatus(token);
            if (loginStatus.status !== 'ok')
            {
                this.showLogin();
                return;
            }

            APP.state.user = loginStatus.user;
            localStorage.setItem('a00001_user', JSON.stringify(loginStatus));
            await APP.control.getStartupData({showLoading: false});
            APP.state.manHinhHienTai = 'home';
            APP.ui.render();
        }
        catch (error)
        {
            console.error('Không thể khởi động từ server:', error);
            APP.loadingScreen.hide();
            APP.user.login.ui.show();
            PVCComponent.canhBao(error.message || 'Không thể kiểm tra phiên đăng nhập.', 'Đăng nhập ứng dụng');
        }
    },
    checkUserInBackground: async function(token, localVersion)
    {
        try
        {
            const loginStatus = await this.requestLoginStatus(token);
            if (loginStatus.status !== 'ok')
            {
                this.showLogin();
                return;
            }

            APP.state.user = loginStatus.user;
            localStorage.setItem('a00001_user', JSON.stringify(loginStatus));
            let change = await APP.cache.update(localVersion);
            if (change)
            {
                APP.control.prepareStartupUI();
                APP.ui.render();
            }            
        }
        catch (error)
        {
            console.error('Không thể đồng bộ trạng thái đăng nhập/cache ở background:', error);
        }
    },
    requestLoginStatus: async function(token)
    {
        const response = await APP.user.api.getLoginStatus(token);
        const loginStatus = typeof response === 'string' ? JSON.parse(response) : response;
        if (!loginStatus || typeof loginStatus !== 'object')
        {
            throw new Error('Server trả về trạng thái đăng nhập không hợp lệ');
        }
        return loginStatus;
    },
    showLogin: function()
    {
        APP.control.clearData();
        APP.state.user = {};
        APP.state.manHinhHienTai = 'login';
        APP.loadingScreen.hide();
        APP.user.login.ui.show();
        APP.ui.render();
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
                    vaiTro: 'user'
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
                    .sv_user_getLoginStatus(token);
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
