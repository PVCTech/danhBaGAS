APP.search = APP.search || {};
APP.search.ui = 
{
    init: function()
    {
        $('#timKiem_searchBox_container').innerHTML = `
            <div style="position: relative;">
                <input id="timKiem_searchBox" type="text" class="inputBox" 
                    placeholder="tìm kiếm" onkeyup = "APP.search.control.search();">
                <div onclick="APP.search.control.clear();" class="image-button" style="position: absolute; top:30%; right:8px;color:#444;">x</div>
            </div>
        `;

        const main = document.createElement('div');
        main.className = 'tab__main';
        APP.view.ui.addTab('search', main);
        $('#search_tab').innerHTML = `<table style="width:100%;" id="search_table">
        </table>`;
    },
    render: function(danhSachLienHe_filterId)
    {      
        const html = danhSachLienHe_filterId.map(lienHeId =>
        {
            const lienHe = APP.cache.data.danhSachLienHe.find(lh => String(lh.id) === String(lienHeId));
            return lienHe ? lienHe.renderForListRow() : '';
        }).join('');

        $('#search_table').innerHTML = html;
    }
}
