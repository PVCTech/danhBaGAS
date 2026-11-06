APP.list = APP.list || {};
APP.list.ui = 
{
    init: function()
    {
        const main = document.createElement('div');
        main.className = 'tab__main';
        APP.view.ui.addTab('list', main);
    },
    render: function()
    {
        $('#list_tab').innerHTML = `<table style="width:100%;" id="list_table">
        </table>`;
        let stt = 0;
        APP.cache.data.danhSachLienHe.forEach(lienHe =>
        {
            stt ++;
            if (stt > 20) return;
            $('#list_table').innerHTML += lienHe.renderForListRow();
        });
    }
};



