APP.history = APP.history || {};

APP.history.control = 
{
    addNew: function(lienHeId)
    {
        let d = new Date();
        const newHistory = 
        {
            ngay: d.getDate(),
            thang: d.getMonth +1,
            nam: d.getFullYear(),
            gio: d.getHours(),
            phut: d.getMinutes(),
            giay: d.getSeconds(),
            lienHeId: lienHeId
        };

        this.addToCache(newHistory);
        APP.history.api.addNew(newHistory);        
    },
    addToCache: function(history)
    {
        //add cache and set localStorage
        APP.cache.data.danhSachLichSu.push(history);
        APP.cache.setLocal();
        APP.history.ui.render();
    }
}



APP.history.api =
{
    addNew: function(history)
    {
        if (APP.mode == 'demo')
        {
            return Promise.resolve(
            {                
                status: 'ok',
                message: 'đã thêm vào history'                                
            });                    
        }
        else
        {
            return new Promise((resolve, reject) =>
            {
                google.script.run
                    .withSuccessHandler(resolve)
                    .withFailureHandler(reject)
                    .sv_history_addNew(history, APP.state.user.token);
            });
        }
    }
}