APP.user.changePassword = APP.user.changePassword || {};
APP.user.changePassword.ui = APP.user.changePassword.ui || {};
APP.user.changePassword.ui = 
{
    init: function()
    {
        div({id: 'user_changePassword_divChe', 
            className: 'user_changePassword_divChe', 
            parent: document.body
        });
        
        div({id: 'changePassword_container', 
            className: 'login__container',
            parent: document.body});

        $('#changePassword_container').innerHTML = `
            <div class="login__div">
                <table class="login__header">
                    <tr>
                        <td style="position:relative;">
                        <div style="width:100%;text-align:center;">
                            <img src="assets/img/contact_caption.svg" style="height:25px;opacity:0.75;">
                        </div>
                        
                        <img src="assets/img/contact_book.svg" style="height:32px;position:absolute;right:30px;top:2px;opacity:0.55;">
                        </td>
                    </tr>
                </table>
                <div class="DivUnderHeader" style="height:70px;">&nbsp;
                </div>
                <center>
                    <font color="white">
                        Đổi mật khẩu
                    </font>
                </center>
                <table style="width:100%;padding:8px;" border="0" id="changePassword_Form" class="login__form">
                    <tr>
                        <td>
                        </td>
                    </tr>
                    <tr>
                        <td style="position:relative;">
                            <input type="password" id="changePass_newPassword1" 
                                onkeyup="APP.user.changePassword.control.checkForm()"
                                class="inputBox inputBox-001">
                            <img src="assets/img/password_icon.png" style="position:absolute;left:5px;bottom:7px;width:18px;opacity:0.5;">
                            <div id="changePass1_checkIcon" style="position:absolute;right:20px;bottom:7px;width:18px;height:18px;">
                            </div>
                        </td>
                    </tr>

                    <tr>
                        <td style="position:relative;">
                            <input type="password" id="changePass_newPassword2" 
                                onkeyup="APP.user.changePassword.control.checkForm()"
                                class="inputBox inputBox-001">
                            <img src="assets/img/password_icon.png" style="position:absolute;left:5px;bottom:7px;width:18px;opacity:0.5;">
                            <div id="changePass2_checkIcon" style="position:absolute;right:20px;bottom:7px;width:18px;height:18px;">
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td style="padding-top:35px;text-align:center;">
                            <center>
                                <table>
                                    <tr>
                                        <td>
                                            <div id="user_changePassword_submitButton"
                                                class="button sidebar__button" style="min-width:150px;">
                                                Đổi mật khẩu
                                            </div>
                                        </td>
                                        <td>
                                            <div id="user_changePassword_cancelButton"
                                                class="button sidebar__button" style="width:90px;">
                                                Bỏ qua
                                            </div>
                                        </td>
                                    </tr>
                                </table>
                                
                            </center>
                        </td>
                    </tr>
                </table>
                <div style="height:20px;"></div>
            </div>
        `;
    },
    render: function()
    {
        if (APP.user.id == '')
        {
            activeButton('user_changePassword_submitButton');
        }
        else
        {
            inactiveButton('user_changePassword_submitButton');
        }

        this.reset();
        if (APP.state.manHinhHienTai == 'changePassword')
        {            
            this.show();
        }
        else
        {
            this.hide();
        }
    },
    reset: function()
    {
        $('#changePass_newPassword1').value = '';
        $('#changePass_newPassword2').value = '';
        document.getElementById("changePass1_checkIcon").innerHTML = '';
        document.getElementById("changePass2_checkIcon").innerHTML = '';
        inactiveButton('user_changePassword_submitButton');
    },
    show: function()
    {
        show('user_changePassword_divChe');
        $('#changePassword_container').style.display = 'flex';        
    },
    hide: function()
    {
        hide('user_changePassword_divChe');
        hide('changePassword_container');
    },
    assets:
    {
        img: 
        {
            checkOk: function (w,h)
            { 
                return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" style="height:${h}px;width:${w}px;">
                    <circle cx="50" cy="50" r="44" fill="none" stroke="#fff" stroke-width="8"/>
                    <path d="m 32 51 12 12 25-27" fill="none" stroke="#fff" stroke-width="7" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>`;
            },
            checkFail: function (w,h)
            {
                return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" style="height:${h}px;width:${w}px;">
                    <circle cx="50" cy="50" r="44" fill="none" stroke="#fff" stroke-width="8"/>
                    <path d="m 37 37 26 26m0-26L37 63" fill="none" stroke="#fff" stroke-width="7" stroke-linecap="round"/>
                </svg>`;
            }
        }
    }
}