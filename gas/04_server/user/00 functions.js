const sv_hashMatKhau_ = (matKhau) => 
{
    //const cauHinh = sv_getRowData_('01_CauHinh', 'maCauHinh', 'hashkey');
    const khoaBiMat = 'pvc00148';//String(cauHinh && cauHinh.giaTri || '').trim();
    
    //if (!khoaBiMat) throw new Error('Chưa cấu hình hashkey trong sheet 02_CauHinh.');
    return Utilities.base64Encode(Utilities.computeHmacSha256Signature(String(matKhau), khoaBiMat));
}

const sv_user_newToken_ = () => 
{
    const duLieu = Utilities.getUuid() + '|' + new Date().getTime() + '|' + Math.random();
    return Utilities.base64EncodeWebSafe(Utilities.computeDigest(Utilities.DigestAlgorithm.SHA_256, duLieu));
}

const sv_user_matKhauDung_ = (matKhau, hashDaLuu) =>
{
    return sv_hashMatKhau_(matKhau) === String(hashDaLuu || '').trim();
}



const sv_user_tokenActive_ = (taiKhoan) =>
{
    if (taiKhoan.token !== String(taiKhoan.token || '').trim()) return false;
    const KEY_LIFE_TIME_DAYS = 3; //day
    const loginTime = taiKhoan.loginTime instanceof Date ? taiKhoan.loginTime.getTime() : Number(taiKhoan.loginTime);
    if (!loginTime || isNaN(loginTime)) return false;

    return Date.now() < loginTime + 1 * 2 * 60 * 60 * 1000; //KEY_LIFE_TIME_DAYS * 24 * 60 * 60 * 1000;
}

const sv_user_xoaKeyDangNhap_ = (userName) =>
{
    sv_updateCell_('02_User', 'userName', userName, { token: '', loginTime: '' });
}

