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
                    JSON.stringify({
                        data: 
                        {
                            version: 'aadasda1111',
                            danhSachDonVi: [
                                new DonVi(12,"PCCC Tỉnh","pccctinh"),
                                new DonVi(14,"Mai Linh Nam Định","mlnd"),
                                new DonVi(15,"Mai Linh Thanh Hóa","MLTH")
                            ],
                            danhSachPhongBan: [
                                new PhongBan(3,"P. Kinh doanh","kdoanh") ,
                                new PhongBan(6,"Công đoàn","Cdoan") ,
                                new PhongBan(8,"Lái xe","Lxe")
                            ],
                            danhSachTinh: [
                                new Tinh(11,"Hà Nội","HaNoi Hnoi"), 
                                new Tinh(14,"Phú Thọ","PhuTho Ptho"), 
                                new Tinh(23,"Tỉnh Nam Định","NDinh")
                            ],
                            danhSachPhuongXa: [
                                new PhuongXa(21,"P. Văn Miếu","vmieu") ,
                                new PhuongXa(22,"P. Hạ Long","phlong phalong") ,
                                new PhuongXa(23,"P. Ngô Quyền","pnquyen")
                            ]
                        },
                        newCache: true                    
                    }));
            }
            else
            {
                return Promise.resolve(
                    JSON.stringify({
                        data: {version: localVersion},
                        newCache: false
                    }));
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
