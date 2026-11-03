const APPID = '00148';

function sv_user_getCurrentUser_(token) 
{
    const taiKhoan = sv_getRowData_('02_User', 'token', token);

    if (!taiKhoan) 
    {
        throw new Error('sv_user_getCurrentUser_: không thấy tài khoản khớp với token: ' + token);
    }

    if (taiKhoan.active !== '1')
    {
        throw new Error('sv_user_getCurrentUser_: Tài khoản không hoạt động');
    }

    if (!sv_user_tokenActive_(taiKhoan))
    {
        throw new Error('sv_user_getCurrentUser_: Phiên đăng nhập đã hết hạn.');
    }

    return {
        userName: taiKhoan.userName,
        hoVaTen: taiKhoan.hoVaTen,
        email: taiKhoan.email,
        loaiTaiKhoan: taiKhoan.loaiTaiKhoan,
        idKhachHang: taiKhoan.idKhachHang || '',
        token: token,
        quyen: layQuyenTheoLoaiTaiKhoan_(taiKhoan.loaiTaiKhoan)
    };
}

function layQuyenTheoLoaiTaiKhoan_(loaiTaiKhoan) {
    const quyen = {
        chuNha: ['XemTatCa', 'SuaTatCa', 'QuanLyTaiKhoan', 'XuLySuCo'],
        quanLy: ['XemPhong', 'XemKhach', 'XuLySuCo'],
        khach: ['XemDuLieuCuaMinh', 'BaoSuCo', 'NhapChiSo']
    };

    return quyen[loaiTaiKhoan] || [];
}