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
                                {Id: '14', Star: '0', TenHienThi: 'Anh Tiệp LX 6877', XungHoId: '10', Ten: 'Tiệp', NgaySinh: '0', ThangSinh: '0', NamSinh: '63', DonVi1Id: '14', PhongBan1Id: '0', DonVi2Id: '-4', PhongBan2Id: '2', TinhId: '23', HuyenThanhPhoId: '15', PhuongXaId: '22', TimKiem: 'aTiệp anhTiepTdpho', SDT1: '914234229', SDT2: '', SDT3: '', AvatarId: '0', Avatar: '', AvatarVersion: '0', Email: '', DiaChi: '17/168 Thanh Bình - Phường Hạ Long - Nam Định', GhiChu: ''},
                                {Id: '15', Star: '0', TenHienThi: 'Anh Hạnh D03', XungHoId: '10', Ten: 'HanhD03', NgaySinh: '0', ThangSinh: '0', NamSinh: '0', DonVi1Id: '19', PhongBan1Id: '0', DonVi2Id: '0', PhongBan2Id: '0', TinhId: '0', HuyenThanhPhoId: '0', PhuongXaId: '0', TimKiem: 'aHanhD03', SDT1: '936838583', SDT2: '', SDT3: '', AvatarId: '0', Avatar: '', AvatarVersion: '0', Email: '', DiaChi: '', GhiChu: ''},
                                {Id: '16', Star: '0', TenHienThi: 'Anh Mạnh Chợ LX', XungHoId: '10', Ten: 'kwManh', NgaySinh: '0', ThangSinh: '0', NamSinh: '0', DonVi1Id: '0', PhongBan1Id: '0', DonVi2Id: '0', PhongBan2Id: '0', TinhId: '0', HuyenThanhPhoId: '0', PhuongXaId: '0', TimKiem: 'kwManh aManhcho', SDT1: '382666277', SDT2: '916429388', SDT3: '', AvatarId: '0', Avatar: '', AvatarVersion: '0', Email: '', DiaChi: '', GhiChu: ''}
                            ],
                            danhSachDonVi: [
                                {Id: '12', Ten: "PCCC Tỉnh", TimKiem: "pccctinh"},
                                {Id: '14', Ten: "Mai Linh Nam Định", TimKiem: "mlnd"},
                                {Id: '15', Ten: "Mai Linh Thanh Hóa", TimKiem: "MLTH"}
                            ],
                            danhSachPhongBan: [
                                {Id: '3', Ten: "P. Kinh doanh", TimKiem: "kdoanh"} ,
                                {Id: '6', Ten: "Công đoàn", TimKiem: "Cdoan"} ,
                                {Id: '8', Ten: "Lái xe", TimKiem: "Lxe"}
                            ],
                            danhSachTinh: [
                                {Id: '11',  Ten: "Hà Nội", TimKiem: "HaNoi Hnoi"}, 
                                {Id: '14',  Ten: "Phú Thọ", TimKiem: "PhuTho Ptho"}, 
                                {Id: '23',  Ten: "Tỉnh Nam Định", TimKiem: "NDinh"}
                            ],
                            danhSachPhuongXa: [
                                {Id: '21',  Ten: "P. Văn Miếu", TimKiem: "vmieu"} ,
                                {Id: '22',  Ten: "P. Hạ Long", TimKiem: "phlong phalong"} ,
                                {Id: '23',  Ten: "P. Ngô Quyền", TimKiem: "pnquyen"}
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
    }
};
