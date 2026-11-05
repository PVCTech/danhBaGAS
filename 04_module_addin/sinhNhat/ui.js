APP.sinhNhat = APP.sinhNhat || {};
APP.sinhNhat.month = (new Date()).getMonth + 1;
APP.sinhNhat.ui = 
{
    init: function()
    {
        const main = document.createElement('div');
        main.className = 'tab__main';
        APP.view.ui.addTab('sinhNhat', main);
    },
    render: function()
    {
        $('#sinhNhat_tab').innerHTML = `<table style="width:100%;" id="sinhNhat_table">
        </table>`;

        const m = APP.sinhNhat.month;
        APP.cache.data.danhSachSinhNhat = APP.cache.data.danhSachLienHe
            .filter(lh =>
                String(lh.thangSinh ?? '').trim() !== '' &&
                String(lh.thangSinh) === String(m) &&
                String(lh.ngaySinh ?? '').trim() !== ''
            )
            .sort((a, b) =>
                String(a.ngaySinh).localeCompare(String(b.ngaySinh), undefined, { numeric: true })
            );

        $('#sinhNhat_table').innerHTML = '';
        let html = '';
        APP.cache.data.danhSachSinhNhat.forEach(
            lh => html += lh.renderForListRow()
        );
        $('#sinhNhat_table').innerHTML = html;
        
        APP.state.manHinhHienTai = APP.state.manHinhHienTai || 'sinhNhat';
        if (APP.state.manHinhHienTai == 'sinhNhat')
        {
            APP.view.ui.showTab('sinhNhat');
        }
    }
};


