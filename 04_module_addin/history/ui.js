APP.history = APP.history || {};
APP.history.ui = 
{
    init: function()
    {
        const main = document.createElement('div');
        main.className = 'tab__main';
        APP.view.ui.addTab('home', main);
    },
    render: function()
    {
        $('#home_tab').innerHTML = `<table style="width:100%;" id="history_table">
        </table>`;
        APP.cache.data.danhSachLichSu.forEach(lichSu =>
        {
            let lienHe = APP.cache.data.danhSachLienHe.find(lh => String(lh.Id) == String(lichSu.lienHeId));
            let avatar = lienHe.Avatar =='' || lienHe.Avatar === undefined ? `<image src="assets/img/avatar_star.svg" style="width:40px;">` : `<image src="${lienHe.Avatar}" style="width:40px;">`;
            let hoVaTen_textSize = 18;
            if (lienHe.TenHienThi.length > 15 && lienHe.TenHienThi.indexOf(' ') == -1)
            {
                hoVaTen_textSize = Math.floor(18 * 15 /lienHe.TenHienThi.length);
            }
            lienHe.NamSinh = lienHe.NamSinh || 0;
            let namSinh = parseInt(lienHe.NamSinh) > 0 ? `<br><span style="font-size:10px;color:rgba(0,0,0,0.5);">${lienHe.NamSinh}</span>` : '';
            let sdt2 = lienHe.SDT2.length > 0 ? ` - <span style="font-size:14px;color:rgba(0,0,0,0.6);">${lienHe.SDT2}</span>` : '';
            let sdt3 = lienHe.SDT3.length > 0 ? ` - <span style="font-size:14px;color:rgba(0,0,0,0.6);">${lienHe.SDT3}</span>` : '';

            $('#history_table').innerHTML +=
                `<tr>
					<td class="TdData" style="width:60px;" onclick="DanhBa_ChiTiet(2,${lienHe.Id});">
                    <div class="Avatar_Div" onclick="APP.detail.ui.render(APP.cache.data.danhSachLienHe[${lienHe.GetArrayId()}])">
                        ${avatar}</div>
					</td>					
					<td class="TdData" onclick="APP.detail.ui.render(APP.cache.data.danhSachLienHe[${lienHe.GetArrayId()}])" style="padding-left:10px;">
                        <span style="color:var(--color-primary); font-size:${hoVaTen_textSize}px;font-weight:bold;">${lienHe.TenHienThi}</span>
						${namSinh}
                        <br><span style="font-size:14px;color:rgba(0,0,0,0.6);">${lienHe.SDT1}</span>                        
                        ${sdt2}
                        ${sdt3}                        
                        <br><span style="font-size:10px;color:rgba(0,0,0,0.3);">
                            ${chuanHoaNgayThang(lienHe.lichSuTruyCap.ngay)}/${chuanHoaNgayThang(lienHe.lichSuTruyCap.thang)}/${chuanHoaNgayThang(lienHe.lichSuTruyCap.nam)} ${chuanHoaNgayThang(lienHe.lichSuTruyCap.gio)}:${chuanHoaNgayThang(lienHe.lichSuTruyCap.phut)}
                        </span>
					</td>
                    <td class="TdData" style="width:15px;" onclick="EditDanhBa(2,${lienHe.Id});">
                        <img src="assets/img/infor.svg?version=1" style="width:15px;opacity:0.25;" alt="infor">
                    </td>
				</tr>`;
        });
    }
};


