APP.history = APP.history || {};

APP.history.control = 
{
    addNew: function(lienHeId)
    {
        let d = new Date();
        const existingHistory = APP.cache.data.danhSachLichSu.find(
            item => String(item.lienHeId) === String(lienHeId)
        );
        const lienHe = APP.cache.data.danhSachLienHe.find(
            item => String(item.id) === String(lienHeId)
        );
        const newHistory = 
        {
            ngay: d.getDate(),
            thang: d.getMonth() +1,
            nam: d.getFullYear(),
            gio: d.getHours(),
            phut: d.getMinutes(),
            giay: d.getSeconds(),
            lienHeId: lienHeId,
            avatar: (existingHistory && existingHistory.avatar) || (lienHe && lienHe.avatar) || ''
        };

        this.addToCache(newHistory);
        APP.history.api.addNew(newHistory)
            .then(savedHistory =>
            {
                if (savedHistory && typeof savedHistory.avatar === 'string'
                    && savedHistory.avatar !== newHistory.avatar)
                {
                    this.addToCache({...newHistory, avatar: savedHistory.avatar});
                }
            })
            .catch(error => console.error('Không thể cập nhật lịch sử truy cập:', error));
    },
    addToCache: function(history)
    {
        //add cache and set localStorage
        let lichSuTonTaiIndex = APP.cache.data.danhSachLichSu.findIndex(ls => String(ls.lienHeId) === String(history.lienHeId));
        if (lichSuTonTaiIndex !==-1)
        {
            APP.cache.data.danhSachLichSu[lichSuTonTaiIndex] = history;
        }
        else
        {
            APP.cache.data.danhSachLichSu.push(history);
        }
        
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