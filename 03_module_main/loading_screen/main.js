APP.loadingScreen = 
{
    init: function()
    {
        let id= 'app_loadingScreen';
        document.body.appendChild(PVCComponent.loadingScreen('Đang kiểm tra dữ liệu khởi động',id));
        PVCComponent.hide(id);
    },
    show: function(noiDung = 'Dữ liệu của bạn đang được tải')
    {
        $('#loading-screen_message').innerText = noiDung;
        PVCComponent.show('app_loadingScreen');
    },
    hide: function()
    {
        PVCComponent.hide('app_loadingScreen');
    }
};