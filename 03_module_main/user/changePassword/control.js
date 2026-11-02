APP.user.changePassword = APP.user.changePassword || {};
APP.user.changePassword.control = APP.user.changePassword.control || {};
APP.user.changePassword.control =
{
    init: function()
    {
        APP.user.changePassword.ui.init();
        APP.user.changePassword.control.bindEvents();
    },
    bindEvents: function () 
    {
        $('#user_changePassword_divChe').addEventListener('click', function (e) 
        {
            APP.user.changePassword.ui.hide();
        });

        $('#user_changePassword_submitButton').addEventListener('click', function (e) 
        {
            APP.user.changePassword.control.submit();
        });

        $('#user_changePassword_cancelButton').addEventListener('click', function (e) 
        {
            APP.user.changePassword.ui.hide();
        });

    },
    submit: async function()
    {
        let cb;
        let pass1 = document.getElementById("changePass_newPassword1").value;
        let pass2 = document.getElementById("changePass_newPassword2").value;
        if (pass1.length < 6)
        {
            cb = await canhBao('Mật khẩu tối thiểu phải có từ 6 ký tự trở lên!');
            return;
        }
        else if (pass1 !== pass2)
        {
            cb = await canhBao('Hai mật khẩu chưa trùng khớp!');
            return;
        }
        else
        {
            try
            {
                $('#user_changePassword_submitButton').innerText = 'Đang đổi mật khẩu..';
                inactiveButton('user_changePassword_submitButton');
                //toast('Đang đổi mật khẩu..');

                const sendData = {userName: APP.state.user.userName, password: pass1, token: APP.state.user.token};
                let changePasswordResult = await APP.user.api.changePassword(sendData);

                changePasswordResult  = typeof changePasswordResult === 'string' ? JSON.parse(changePasswordResult) : changePasswordResult;                
                if (changePasswordResult.status == 'ok')
                {
                    toast('Đổi mật khẩu thành công!');
                    APP.user.control.logout();                
                }
                else
                {
                    canhBao(changePasswordResult.message || 'đổi mật khẩu không thành công', 'Đổi mật khẩu');
                    APP.user.changePassword.ui.reset();
                }
            }
            catch (error)
            {
                console.error('Đổi mật khẩu không thành công:', error);
                canhBao(error.message || 'Không thể đổi mật khẩu. Vui lòng thử lại.', 'Đổi mật khẩu');
                APP.user.changePassword.ui.reset();
            }          
           
        }
    },
    checkForm: function()
    {
        let pass1 = document.getElementById("changePass_newPassword1").value;
        let pass2 = document.getElementById("changePass_newPassword2").value;
        if (pass1.length < 6)
        {
            inactiveButton('user_changePassword_submitButton');
            document.getElementById("changePass1_checkIcon").innerHTML = APP.user.changePassword.ui.assets.img.checkFail(18, 18);
            return false;
        }
        else 
        {
            document.getElementById("changePass1_checkIcon").innerHTML = APP.user.changePassword.ui.assets.img.checkOk(18, 18);
            if (pass1 !== pass2)
            {
                inactiveButton('user_changePassword_submitButton');
                document.getElementById("changePass2_checkIcon").innerHTML = APP.user.changePassword.ui.assets.img.checkFail(18, 18);
                return false;
            }
            else
            {
                activeButton('user_changePassword_submitButton');
                document.getElementById("changePass2_checkIcon").innerHTML = APP.user.changePassword.ui.assets.img.checkOk(18, 18);
                return true;
            }
        }
    }     
}