var SCHEMA = {
    '02_user': [
        {
            name: 'userName',
            caption: '',
            type: { type: 'text', options: {} },
            key: 1,
            formula: '',
            initialValue: null,
            show: 1,
            editable: 1,
            require: 0,
            search: 1
        },
        {
            name: 'hoVaTen',
            caption: '',
            type: { type: 'text', options: {} },
            key: 0,
            formula: '',
            initialValue: null,
            show: 1,
            editable: 1,
            require: 0,
            search: 1
        },
        {
            name: 'password',
            caption: '',
            type: { type: 'text', options: {} },
            key: 0,
            formula: '',
            initialValue: null,
            show: 1,
            editable: 1,
            require: 0,
            search: 1
        },
        {
            name: 'email',
            caption: '',
            type: { type: 'text', options: {} },
            key: 0,
            formula: '',
            initialValue: null,
            show: 1,
            editable: 1,
            require: 0,
            search: 1
        },
        {
            name: 'vaiTro',
            caption: '',
            type: { type: 'text', options: {} },
            key: 0,
            formula: '',
            initialValue: null,
            show: 1,
            editable: 1,
            require: 0,
            search: 1
        },
        {
            name: 'idKhachHang',
            caption: '',
            type: { type: 'text', options: {} },
            key: 0,
            formula: '',
            initialValue: null,
            show: 1,
            editable: 1,
            require: 0,
            search: 1
        },
        {
            name: 'active',
            caption: '',
            type: {
                type: 'enum',
                options: {
                    values: [
                        { value: '1', caption: 'Có' },
                        { value: '0', caption: 'Không' }
                    ]
                }
            },
            key: 0,
            formula: '',
            initialValue: '1',
            show: 1,
            editable: 1,
            require: 0,
            search: 1
        },
        {
            name: 'matKhauUngDung',
            caption: '',
            type: { type: 'text', options: {} },
            key: 0,
            formula: '',
            initialValue: null,
            show: 1,
            editable: 1,
            require: 0,
            search: 1
        },
        {
            name: 'dangNhapLanCuoi',
            caption: '',
            type: { type: 'text', options: {} },
            key: 0,
            formula: '',
            initialValue: null,
            show: 1,
            editable: 1,
            require: 0,
            search: 1
        },
        {
            name: 'ghiChu',
            caption: '',
            type: { type: 'text', options: {} },
            key: 0,
            formula: '',
            initialValue: null,
            show: 1,
            editable: 1,
            require: 0,
            search: 1
        },
        {
            name: 'loginTime',
            caption: '',
            type: { type: 'text', options: {} },
            key: 0,
            formula: '',
            initialValue: null,
            show: 1,
            editable: 1,
            require: 0,
            search: 1
        },
        {
            name: 'token',
            caption: '',
            type: { type: 'text', options: {} },
            key: 0,
            formula: '',
            initialValue: null,
            show: 1,
            editable: 1,
            require: 0,
            search: 1
        },
        {
            name: 'cacheVersion',
            caption: '',
            type: { type: 'text', options: {} },
            key: 0,
            formula: '',
            initialValue: null,
            show: 1,
            editable: 1,
            require: 0,
            search: 0
        }
    ],
    'lienHe': 
    [
        {
            name: 'Id',
            caption: 'ID',
            type: { type: 'text', options: {} },
            key: 1,
            formula: '',
            initialValue: null,
            show: 1,
            editable: 1,
            require: 0,
            search: 0
        },
        {
            name: 'Star',
            caption: 'Đánh dấu',
            type: { type: 'text', options: {} },
            key: 0,
            formula: '',
            initialValue: null,
            show: 1,
            editable: 1,
            require: 0,
            search: 0
        },
        {
            name: 'TenHienThi',
            caption: 'Tên hiển thị',
            type: { type: 'text', options: {} },
            key: 0,
            formula: '',
            initialValue: null,
            show: 1,
            editable: 1,
            require: 1,
            search: 1
        },
        {
            name: 'XungHoId',
            caption: 'Xưng hô',
            type: { type: 'text', options: {} },
            key: 0,
            formula: '',
            initialValue: null,
            show: 1,
            editable: 1,
            require: 0,
            search: 0
        },
        {
            name: 'Ten',
            caption: 'Tên',
            type: { type: 'text', options: {} },
            key: 0,
            formula: '',
            initialValue: null,
            show: 1,
            editable: 1,
            require: 0,
            search: 1
        },
        {
            name: 'NgaySinh',
            caption: 'Ngày sinh',
            type: { type: 'text', options: {} },
            key: 0,
            formula: '',
            initialValue: null,
            show: 1,
            editable: 1,
            require: 0,
            search: 0
        },
        {
            name: 'ThangSinh',
            caption: 'Tháng sinh',
            type: { type: 'text', options: {} },
            key: 0,
            formula: '',
            initialValue: null,
            show: 1,
            editable: 1,
            require: 0,
            search: 0
        },
        {
            name: 'NamSinh',
            caption: 'Năm sinh',
            type: { type: 'text', options: {} },
            key: 0,
            formula: '',
            initialValue: null,
            show: 1,
            editable: 1,
            require: 0,
            search: 0
        },
        {
            name: 'DonVi1Id',
            caption: 'Đơn vị 1',
            type: { type: 'text', options: {} },
            key: 0,
            formula: '',
            initialValue: null,
            show: 1,
            editable: 1,
            require: 0,
            search: 0
        },
        {
            name: 'PhongBan1Id',
            caption: 'Phòng ban 1',
            type: { type: 'text', options: {} },
            key: 0,
            formula: '',
            initialValue: null,
            show: 1,
            editable: 1,
            require: 0,
            search: 0
        },
        {
            name: 'DonVi2Id',
            caption: 'Đơn vị 2',
            type: { type: 'text', options: {} },
            key: 0,
            formula: '',
            initialValue: null,
            show: 1,
            editable: 1,
            require: 0,
            search: 0
        },
        {
            name: 'PhongBan2Id',
            caption: 'Phòng ban 2',
            type: { type: 'text', options: {} },
            key: 0,
            formula: '',
            initialValue: null,
            show: 1,
            editable: 1,
            require: 0,
            search: 0
        },
        {
            name: 'TinhId',
            caption: 'Tỉnh',
            type: { type: 'text', options: {} },
            key: 0,
            formula: '',
            initialValue: null,
            show: 1,
            editable: 1,
            require: 0,
            search: 0
        },
        {
            name: 'HuyenThanhPhoId',
            caption: 'Huyện/thành phố',
            type: { type: 'text', options: {} },
            key: 0,
            formula: '',
            initialValue: null,
            show: 1,
            editable: 1,
            require: 0,
            search: 0
        },
        {
            name: 'PhuongXaId',
            caption: 'Phường/xã',
            type: { type: 'text', options: {} },
            key: 0,
            formula: '',
            initialValue: null,
            show: 1,
            editable: 1,
            require: 0,
            search: 0
        },
        {
            name: 'TimKiem',
            caption: 'Tìm kiếm',
            type: { type: 'text', options: {} },
            key: 0,
            formula: '',
            initialValue: null,
            show: 0,
            editable: 1,
            require: 0,
            search: 1
        },
        {
            name: 'SDT1',
            caption: 'Điện thoại 1',
            type: { type: 'text', options: {} },
            key: 0,
            formula: '',
            initialValue: null,
            show: 1,
            editable: 1,
            require: 0,
            search: 1
        },
        {
            name: 'SDT2',
            caption: 'Điện thoại 2',
            type: { type: 'text', options: {} },
            key: 0,
            formula: '',
            initialValue: null,
            show: 1,
            editable: 1,
            require: 0,
            search: 1
        },
        {
            name: 'SDT3',
            caption: 'Điện thoại 3',
            type: { type: 'text', options: {} },
            key: 0,
            formula: '',
            initialValue: null,
            show: 1,
            editable: 1,
            require: 0,
            search: 1
        },
        {
            name: 'AvatarId',
            caption: 'Avatar ID',
            type: { type: 'text', options: {} },
            key: 0,
            formula: '',
            initialValue: null,
            show: 0,
            editable: 1,
            require: 0,
            search: 0
        },
        {
            name: 'Avatar',
            caption: 'Ảnh đại diện',
            type: { type: 'text', options: {} },
            key: 0,
            formula: '',
            initialValue: null,
            show: 1,
            editable: 1,
            require: 0,
            search: 0
        },
        {
            name: 'AvatarVersion',
            caption: 'Phiên bản avatar',
            type: { type: 'text', options: {} },
            key: 0,
            formula: '',
            initialValue: null,
            show: 0,
            editable: 1,
            require: 0,
            search: 0
        },
        {
            name: 'Email',
            caption: 'Email',
            type: { type: 'text', options: {} },
            key: 0,
            formula: '',
            initialValue: null,
            show: 1,
            editable: 1,
            require: 0,
            search: 1
        },
        {
            name: 'DiaChi',
            caption: 'Địa chỉ',
            type: { type: 'text', options: {} },
            key: 0,
            formula: '',
            initialValue: null,
            show: 1,
            editable: 1,
            require: 0,
            search: 1
        },
        {
            name: 'GhiChu',
            caption: 'Ghi chú',
            type: { type: 'text', options: {} },
            key: 0,
            formula: '',
            initialValue: null,
            show: 1,
            editable: 1,
            require: 0,
            search: 1
        }
    ],

    'lichSu': [
        {
            name: 'ngay',
            caption: 'Ngày',
            type: { type: 'text', options: {} },
            key: 0,
            formula: '',
            initialValue: null,
            show: 1,
            editable: 0,
            require: 0,
            search: 0
        },
        {
            name: 'thang',
            caption: 'Tháng',
            type: { type: 'text', options: {} },
            key: 0,
            formula: '',
            initialValue: null,
            show: 1,
            editable: 0,
            require: 0,
            search: 0
        },
        {
            name: 'nam',
            caption: 'Năm',
            type: { type: 'text', options: {} },
            key: 0,
            formula: '',
            initialValue: null,
            show: 1,
            editable: 0,
            require: 0,
            search: 0
        },
        {
            name: 'gio',
            caption: 'Giờ',
            type: { type: 'text', options: {} },
            key: 0,
            formula: '',
            initialValue: null,
            show: 1,
            editable: 0,
            require: 0,
            search: 0
        },
        {
            name: 'phut',
            caption: 'Phút',
            type: { type: 'text', options: {} },
            key: 0,
            formula: '',
            initialValue: null,
            show: 1,
            editable: 0,
            require: 0,
            search: 0
        },
        {
            name: 'giay',
            caption: 'Giây',
            type: { type: 'text', options: {} },
            key: 0,
            formula: '',
            initialValue: null,
            show: 1,
            editable: 0,
            require: 0,
            search: 0
        },
        {
            name: 'lienHeId',
            caption: 'Liên hệ ID',
            type: { type: 'text', options: {} },
            key: 0,
            formula: '',
            initialValue: null,
            show: 1,
            editable: 0,
            require: 1,
            search: 0
        }
    ],

    'tinh': [
        {
            name: 'Id',
            caption: 'ID',
            type: { type: 'text', options: {} },
            key: 1,
            formula: '',
            initialValue: null,
            show: 1,
            editable: 1,
            require: 0,
            search: 0
        },
        {
            name: 'Ten',
            caption: 'Tên tỉnh',
            type: { type: 'text', options: {} },
            key: 0,
            formula: '',
            initialValue: null,
            show: 1,
            editable: 1,
            require: 1,
            search: 1
        },
        {
            name: 'TimKiem',
            caption: 'Tìm kiếm',
            type: { type: 'text', options: {} },
            key: 0,
            formula: '',
            initialValue: null,
            show: 0,
            editable: 1,
            require: 0,
            search: 1
        }
    ],

    'phuongXa': [
        {
            name: 'Id',
            caption: 'ID',
            type: { type: 'text', options: {} },
            key: 1,
            formula: '',
            initialValue: null,
            show: 1,
            editable: 1,
            require: 0,
            search: 0
        },
        {
            name: 'Ten',
            caption: 'Tên phường/xã',
            type: { type: 'text', options: {} },
            key: 0,
            formula: '',
            initialValue: null,
            show: 1,
            editable: 1,
            require: 1,
            search: 1
        },
        {
            name: 'TimKiem',
            caption: 'Tìm kiếm',
            type: { type: 'text', options: {} },
            key: 0,
            formula: '',
            initialValue: null,
            show: 0,
            editable: 1,
            require: 0,
            search: 1
        }
    ],

    'donVi': [
        {
            name: 'Id',
            caption: 'ID',
            type: { type: 'text', options: {} },
            key: 1,
            formula: '',
            initialValue: null,
            show: 1,
            editable: 1,
            require: 0,
            search: 0
        },
        {
            name: 'Ten',
            caption: 'Tên đơn vị',
            type: { type: 'text', options: {} },
            key: 0,
            formula: '',
            initialValue: null,
            show: 1,
            editable: 1,
            require: 1,
            search: 1
        },
        {
            name: 'TimKiem',
            caption: 'Tìm kiếm',
            type: { type: 'text', options: {} },
            key: 0,
            formula: '',
            initialValue: null,
            show: 0,
            editable: 1,
            require: 0,
            search: 1
        }
    ],

    'phongBan': [
        {
            name: 'Id',
            caption: 'ID',
            type: { type: 'text', options: {} },
            key: 1,
            formula: '',
            initialValue: null,
            show: 1,
            editable: 1,
            require: 0,
            search: 0
        },
        {
            name: 'Ten',
            caption: 'Tên phòng ban',
            type: { type: 'text', options: {} },
            key: 0,
            formula: '',
            initialValue: null,
            show: 1,
            editable: 1,
            require: 1,
            search: 1
        },
        {
            name: 'TimKiem',
            caption: 'Tìm kiếm',
            type: { type: 'text', options: {} },
            key: 0,
            formula: '',
            initialValue: null,
            show: 0,
            editable: 1,
            require: 0,
            search: 1
        }
    ]
};