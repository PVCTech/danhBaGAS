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
                let user = await APP.user.api.doLogin(loginInfor);

                user  = typeof user === 'string' ? JSON.parse(user) : user;                
                if (user.status == 'ok')
                {
                    console.log('do login: user.status == ok');
                    localStorage.setItem('a00001_user', JSON.stringify(user));
                    
                    APP.state.user.token = user.token;
                    APP.state.user = user;
                    
                    await APP.control.getStartupData();
                    APP.ui.render();

                    $('#user_hoVaTen').innerText = user.hoVaTen;
                    
                    $('#login_submitButton').innerText = 'Đăng nhập';
                    activeButton('login_submitButton');
                    APP.user.login.ui.hide();
                }
                else
                {
                    canhBao(user.message || 'Tên đăng nhập hoặc mật khẩu không đúng', 'Đăng nhập ứng dụng');
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