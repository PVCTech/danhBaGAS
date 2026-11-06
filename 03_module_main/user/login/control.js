APP.user.login.control = 
{
    init: function () 
    {
        APP.user.login.ui.init();
        APP.user.login.control.bindEvents();
    },
    bindEvents: function ()
    {
        $('#login_password').addEventListener('keydown', function (e) 
        {
            if (e.key === 'Enter') APP.user.login.control.submit();
        });

        $('#login_submitButton').addEventListener('click', function (e) 
        {
            APP.user.login.control.submit();
        });       
    },
    submit: async function()
    {
        let cb;
        $('#loginError').innerHTML = '';
        $('#loginError').appendChild(loadingText());
        $('#login_submitButton').innerText = 'Đang đăng nhập..';
        
        inactiveButton('login_submitButton');
        let userName = document.getElementById("login_userName").value;
        let pass = document.getElementById("login_password").value;
        if (userName.length < 3)
        {
            cb = await canhBao('Vui lòng kiểm tra tên đăng nhập!','Đăng nhập ứng dụng');
            $('#login_submitButton').innerText = 'Đăng nhập';
            $('#loginError').innerHTML = 'Vui lòng đăng nhập để vào trang này';
            activeButton('login_submitButton');
            return;
        }
        else if (pass.length < 3)
        {
            cb = await canhBao('Vui lòng kiểm tra lại mật khẩu!','Đăng nhập ứng dụng');
            $('#login_submitButton').innerText = 'Đăng nhập';
            $('#loginError').innerHTML = 'Vui lòng đăng nhập để vào trang này';
            activeButton('login_submitButton');
            return;
        }
        else
        {
            try
            {
                const loginInfor = {userName: userName, password: pass};
                let loginStatus = await APP.user.api.doLogin(loginInfor);

                loginStatus  = typeof loginStatus === 'string' ? JSON.parse(loginStatus) : loginStatus;                
                if (loginStatus.status == 'ok')
                {
                    console.log('do login: loginStatus.status == ok');
                    localStorage.setItem('a00001_user', JSON.stringify(loginStatus));
                    
                    APP.state.user = loginStatus.user;
                    
                    await APP.control.getStartupData();
                    APP.state.manHinhHienTai = 'home';
                    APP.ui.render();

                    $('#user_hoVaTen').innerText = loginStatus.user.hoVaTen;
                    APP.user.login.ui.hide();
                }
                else
                {
                    canhBao(loginStatus.message || 'đăng nhập không thành công', 'Đăng nhập ứng dụng');
                    APP.user.login.ui.reset();
                }
            }
            catch (error)
            {
                console.error('Đăng nhập không thành công:', error);
                canhBao(error.message || 'Không thể đăng nhập. Vui lòng thử lại.', 'Đăng nhập ứng dụng');
                APP.user.login.ui.reset();
            }
        }
    }
};