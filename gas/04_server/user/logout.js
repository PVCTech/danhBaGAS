const sv_doLogout = (token) => 
{
    const taiKhoan = sv_getRowData_('02_User', 'token', String(token || '').trim());
    if (!taiKhoan) throw new Error('sv_doLogout: token not found!'); 
    if (taiKhoan) sv_user_xoaKeyDangNhap_(taiKhoan.userName);
    return JSON.stringify({ status: 'ok' });
}