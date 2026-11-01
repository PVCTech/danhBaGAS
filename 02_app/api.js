APP.api =
{
    getNewCacheData: function(localVersion)
    {
        if (APP.mode == 'demo')
        {
            const serverCacheVersion = 'dfdsfsfsdfasd';
            if (localVersion == '' || localVersion !== serverCacheVersion)
            {
                return Promise.resolve(
                    {
                        data: 
                        {
                            version: 'aadasda1111',
                            danhSachLienHe: [
                                {id: '14', Star: '0', tenHienThi: 'Anh Tiệp LX 6877', xungHoId: '10', ten: 'Tiệp', ngaySinh: '0', thangSinh: '0', namSinh: '63', donVi1Id: '14', phongBan1Id: '0', donVi2Id: '-4', phongBan2Id: '2', tinhId: '23', huyenThanhPhoId: '15', phuongXaId: '22', timKiem: 'aTiệp anhTiepTdpho', SDT1: '914234229', SDT2: '0123456789', SDT3: '', SDTZalo: '1', avatarId: '0', avatar: '', avatarVersion: '0', email: '', diaChi: '17/168 Thanh Bình - Phường Hạ Long - Nam Định', ghiChu: ''},
                                {id: '15', Star: '0', tenHienThi: 'Anh Hạnh D03', xungHoId: '10', ten: 'HanhD03', ngaySinh: '0', thangSinh: '0', namSinh: '0', donVi1Id: '19', phongBan1Id: '0', donVi2Id: '0', phongBan2Id: '0', tinhId: '0', huyenThanhPhoId: '0', phuongXaId: '0', timKiem: 'aHanhD03', SDT1: '936838583', SDT2: '', SDT3: '', SDTZalo: '1', avatarId: '0', avatar: '', avatarVersion: '0', email: '', diaChi: '', ghiChu: ''},
                                {id: '16', Star: '0', tenHienThi: 'Anh Mạnh Chợ LX', xungHoId: '10', ten: 'kwManh', ngaySinh: '0', thangSinh: '0', namSinh: '0', donVi1Id: '0', phongBan1Id: '0', donVi2Id: '0', phongBan2Id: '0', tinhId: '0', huyenThanhPhoId: '0', phuongXaId: '0', timKiem: 'kwManh aManhcho', SDT1: '382666277', SDT2: '916429388', SDT3: '', SDTZalo: '1', avatarId: '0', avatar: '', avatarVersion: '0', email: '', diaChi: '', ghiChu: ''}
                            ],
                            danhSachLichSu: [
                                {ngay:1, thang:1, nam:2026, gio:8, phut:0, giay:0, lienHeId: 14},
                                {ngay:2, thang:5, nam:2027, gio:9, phut:1, giay:2, lienHeId: 15}
                            ],
                            danhSachDonVi: [
                                {id: '-5', ten: 'Bạn bè', timKiem: 'bbe ban'},
                                {id: '-4', ten: 'Nơi cư trú', timKiem: 'nctru'},
                                {id: '-3', ten: 'Công việc', timKiem: 'cv cviec'},
                                {id: '-1', ten: 'Gia đình', timKiem: 'gd gdinh'},
                                {id: '12', ten: "PCCC Tỉnh", timKiem: "pccctinh"},
                                {id: '14', ten: "Mai Linh Nam Định", timKiem: "mlnd"},
                                {id: '15', ten: "Mai Linh Thanh Hóa", timKiem: "MLTH"}
                            ],
                            danhSachPhongBan: [
                                {id: '3', ten: "P. Kinh doanh", timKiem: "kdoanh"} ,
                                {id: '6', ten: "Công đoàn", timKiem: "Cdoan"} ,
                                {id: '8', ten: "Lái xe", timKiem: "Lxe"}
                            ],
                            danhSachTinh: [
                                {id: '11',  ten: "Hà Nội", timKiem: "HaNoi Hnoi"}, 
                                {id: '14',  ten: "Phú Thọ", timKiem: "PhuTho Ptho"}, 
                                {id: '23',  ten: "Tỉnh Nam Định", timKiem: "NDinh"}
                            ],
                            danhSachPhuongXa: [
                                {id: '21',  ten: "P. Văn Miếu", timKiem: "vmieu"} ,
                                {id: '22',  ten: "P. Hạ Long", timKiem: "phlong phalong"} ,
                                {id: '23',  ten: "P. Ngô Quyền", timKiem: "pnquyen"}
                            ]
                        },
                        newCache: true                    
                    });
            }
            else
            {
                return Promise.resolve(
                    {
                        data: {version: localVersion},
                        newCache: false
                    });
            }            
        }
        else
        {
            return new Promise((resolve, reject) =>
            {
                google.script.run
                    .withSuccessHandler(resolve)
                    .withFailureHandler(reject)
                    .sv_appstartup_getData(APP.state.user.token);
            });
        }    
    },
    delete: function()
    {
        if (APP.mode == 'demo')
        {
            return Promise.resolve(
            {                
                thanhCong: true,
                massage: 'đã xóa'                                
            });                    
        }
        else
        {
            return new Promise((resolve, reject) =>
            {
                google.script.run
                    .withSuccessHandler(resolve)
                    .withFailureHandler(reject)
                    .sv_appstartup_getData(APP.state.user.token);
            });
        }    
    },
    addNew: function()
    {
        if (APP.mode == 'demo')
        {
            return Promise.resolve(
            {                
                thanhCong: true,
                massage: 'đã thêm mới',
                id: '123456789'                            
            });
            //Thêm mới liên hệ
            //Thêm mới hoặc cập nhật các ListField (tỉnh, đơn vị, phòng ban, ...)
        }
        else
        {
            const data = {
                lienHe: APP.form.state.lienHe,
                donVi: APP.form.state.donVi,
                donVi2: APP.form.state.donVi2,
                phongBan1: APP.form.state.phongBan1,
                phongBan2: APP.form.state.phongBan2,
                tinh: APP.form.state.tinh,
                phuongXa: APP.form.state.phuongXa
            };

            return new Promise((resolve, reject) =>
            {
                google.script.run
                    .withSuccessHandler(resolve)
                    .withFailureHandler(reject)
                    .sv_appstartup_getData(data, APP.state.user.token);
            });
        }    
    },
    update: function()
    {
        if (APP.mode == 'demo')
        {
            return Promise.resolve(
            {                
                thanhCong: true,
                massage: 'đã cập nhật'                                
            });                    
        }
        else
        {
            const data = {
                lienHe: APP.form.state.lienHe,
                donVi: APP.form.state.donVi,
                donVi2: APP.form.state.donVi2,
                phongBan1: APP.form.state.phongBan1,
                phongBan2: APP.form.state.phongBan2,
                tinh: APP.form.state.tinh,
                phuongXa: APP.form.state.phuongXa
            };

            return new Promise((resolve, reject) =>
            {
                google.script.run
                    .withSuccessHandler(resolve)
                    .withFailureHandler(reject)
                    .sv_appstartup_getData(data, APP.state.user.token);
            });
        }    
    }
};
