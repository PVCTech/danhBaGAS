const sv_user_doLogin = (loginInfor) => 
{
    try {
        const duLieu = typeof loginInfor === 'string' ? JSON.parse(loginInfor) : (loginInfor || {});
        const userName = String(duLieu.userName || '').trim();
        const password = String(duLieu.password || '');

        if (!userName || !password) return sv_user_loginStatus_(false, 'Vui lòng nhập tên đăng nhập và mật khẩu.');

        const taiKhoan = sv_getRowData_('02_User', 'userName', userName);
        if (!taiKhoan || !sv_user_matKhauDung_(password, taiKhoan.password))
        {
            return sv_user_loginStatus_(false, 'Tên đăng nhập hoặc mật khẩu không đúng.');
        }

        if (String(taiKhoan.active || '').trim().toLowerCase() !== '1') 
        {
            return sv_user_loginStatus_(false, 'Tài khoản hiện không được phép truy cập.');
        }

        const bayGio = new Date();
        const token = sv_user_newToken_();
        
        sv_updateCell_('02_User', 'userName', taiKhoan.userName, {
            token: token,
            loginTime: bayGio.getTime(),
            dangNhapLanCuoi: bayGio
        });

        return sv_user_loginStatus_(true, '', taiKhoan);
    } 
    catch (loi) 
    {
        return sv_user_loginStatus_(false, loi.message + 'sdfsdfds' || 'Không thể đăng nhập.');
    }
}


function sv_user_loginStatus_(thanhCong, message, taiKhoan = {}) 
{
    if (thanhCong) 
    {
        return JSON.stringify({
            status: thanhCong ? 'ok' : 'notOk',
            message: message || '',
            user: 
            {
                userName: thanhCong ? taiKhoan.userName : '',
                hoVaTen: thanhCong ? taiKhoan.hoVaTen : '',
                vaiTro: thanhCong ? taiKhoan.loaiTaiKhoan : '',
                token: thanhCong ? taiKhoan.token : ''
            },        
            cacheVersion: taiKhoan.cacheVersion || ''
        });
    }
    else 
    {
        return JSON.stringify({
            status: 'notOk',
            message: message || '',
            user:
            {
                userName: '',
                hoVaTen: '',
                vaiTro: '',
                token: ''
            },
            cacheVersion: ''
        });
    }
}
