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
        APP.cache.data.danhSachLienHe.forEach(lienHe =>
        {
            let avatar = lienHe.Avatar =='' || lienHe.Avatar === undefined ? `<image src="assets/img/avatar_star.svg" style="width:40px;">` : `<image src="${lienHe.Avatar}" style="width:40px;">`;
            $('#list_table').innerHTML +=
                `<tr onclick="APP.detail.ui.render(APP.cache.data.danhSachLienHe[${lienHe.GetArrayId()}])">
					<td style="width:25%;padding:8px;border-bottom:0.3px solid rgba(0,0,0,0.3);">
                        ${avatar}
					</td>					
					<td style="padding:8px;border-bottom:0.3px solid rgba(0,0,0,0.3);">
						<span style="color:var(--color-primary); font-size:14px;font-weight:bold;">${lienHe.TenHienThi}</span>
						<br><span style="color:rgba(0,0,0,0.5);font-size:12px;">${lienHe.SDT1} - ${lienHe.SDT2}</span>
					</td>
				</tr>`;
        });
    }
};



