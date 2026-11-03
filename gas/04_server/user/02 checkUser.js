/* Quản lý phiên đăng nhập bằng token lưu tại sheet 02_User. */
function sv_user_getLoginStatus(tk)
{
    try
    {
        const token = String(tk || '').trim();
        if (!token) return sv_user_loginStatus_(false, 'sv_user_getLoginStatus: Chưa có token đăng nhập.');

        const taiKhoan = sv_getRowData_('02_User', 'token', token);
        if (!taiKhoan || !sv_user_tokenActive_(taiKhoan))
        {
            let msg = 'kô có tài khoản';
            if (taiKhoan) {sv_user_xoaKeyDangNhap_(taiKhoan.userName); msg='có tài khoản: ' + JSON.stringify(taiKhoan);}
            return sv_user_loginStatus_(false, 'sv_user_getLoginStatus: Phiên đăng nhập đã hết hạn.' + msg);
        }

        if (String(taiKhoan.active || '').trim().toLowerCase() !== '1')
        {
            return sv_user_loginStatus_(false, 'sv_user_getLoginStatus: Tài khoản hiện không hoạt động.');
        }
        
        return sv_user_loginStatus_(true, '', taiKhoan, token);
    }
    catch (loi)
    {
        return sv_user_loginStatus_(false, loi.message || 'sv_user_getLoginStatus: Không thể kiểm tra phiên đăng nhập.');
    }
}



function sv_user_kiemTraQuyen_(danhSachLoaiTaiKhoan, token) 
{
    const user = sv_user_getCurrentUser_(token);
    if (danhSachLoaiTaiKhoan.indexOf(user.loaiTaiKhoan) === -1) {
        throw new Error('sv_user_kiemTraQuyen_: Không có quyền thực hiện thao tác này');
    }
    return user;
}


