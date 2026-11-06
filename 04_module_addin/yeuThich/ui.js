APP.yeuThich = APP.yeuThich || {};
APP.cache.data.danhSachYeuThich = APP.cache.data.danhSachYeuThich || {};
APP.yeuThich.ui = 
{
    init: function()
    {
        const main = document.createElement('div');
        main.className = 'tab__main';
        APP.view.ui.addTab('yeuThich', main);
    },
    render: function()
    {
        $('#yeuThich_tab').innerHTML = `<table style="width:100%;" id="yeuThich_table">
        </table>`;

        APP.cache.data.danhSachYeuThich = APP.cache.data.danhSachLienHe
            .filter(lh => String(lh.star) === '1');

        $('#yeuThich_table').innerHTML = '';
        let html = '';
        APP.cache.data.danhSachYeuThich.forEach(
            lh => html += lh.renderForListRow()
        );
        $('#yeuThich_table').innerHTML = html;
        
        APP.state.manHinhHienTai = APP.state.manHinhHienTai || 'yeuThich';
        if (APP.state.manHinhHienTai == 'yeuThich')
        {
            APP.view.ui.showTab('yeuThich');
        }
    }
};


