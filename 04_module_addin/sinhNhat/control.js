APP.sinhNhat = APP.sinhNhat || {};

APP.sinhNhat.control = 
{
    addNew: function(lienHeId)
    {
        let d = new Date();
        const newHistory = 
        {
            ngay: d.getDate(),
            thang: d.getMonth() +1,
            nam: d.getFullYear(),
            gio: d.getHours(),
            phut: d.getMinutes(),
            giay: d.getSeconds(),
            lienHeId: lienHeId
        };

        this.addToCache(newHistory);
        APP.sinhNhat.api.addNew(newHistory);        
    },
    addToCache: function(sinhNhat)
    {
        //add cache and set localStorage
        let lichSuTonTaiIndex = APP.cache.data.danhSachLichSu.findIndex(ls => String(ls.lienHeId) === String(sinhNhat.lienHeId));
        if (lichSuTonTaiIndex !==-1)
        {
            APP.cache.data.danhSachLichSu[lichSuTonTaiIndex] = sinhNhat;
        }
        else
        {
            APP.cache.data.danhSachLichSu.push(sinhNhat);
        }
        
        APP.cache.setLocal();
        APP.sinhNhat.ui.render();
    }
}



APP.sinhNhat.api =
{
    addNew: function(sinhNhat)
    {
        if (APP.mode == 'demo')
        {
            return Promise.resolve(
            {                
                status: 'ok',
                message: 'đã thêm vào sinhNhat'                                
            });                    
        }
        else
        {
            return new Promise((resolve, reject) =>
            {
                google.script.run
                    .withSuccessHandler(resolve)
                    .withFailureHandler(reject)
                    .sv_sinhNhat_addNew(sinhNhat, APP.state.user.token);
            });
        }
    }
}