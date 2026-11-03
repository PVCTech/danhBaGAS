const sv_user_changePassword = (userName, pass, token) => 
{
    try {
        if (!userName) return sv_user_loginStatus_(false, 'User Name trống.');
        const taiKhoan = sv_getRowData_('02_User', 'userName', userName);
        
        if (!taiKhoan || taiKhoan.token !== token) 
        {
            return sv_user_loginStatus_(false, 'sv_user_doLogin: Tên đăng nhập hoặc mật khẩu không đúng.');
        }

        token = sv_user_newToken_();
        sv_updateCell_('02_User', 'userName', taiKhoan.userName, {
            token: token, password: sv_hashMatKhau_(pass)
        });

        return sv_user_loginStatus_(true, '', taiKhoan, token);
    } 
    catch (loi) 
    {
        return sv_user_loginStatus_(false, loi.message || 'sv_user_change pass: không thành công.');
    }
}


