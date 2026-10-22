APP.detail = APP.detail || {};
APP.detail.control =
{
    init: function()
    {
        APP.detail.ui.init();
    },
    copyChiTiet2: function()
    {
        const lienHeId = APP.detail.lienHeId;
        const lienHe = APP.cache.data.danhSachLienHe.find(lh => String(lh.id) === String(lienHeId));
        let dt2 = lienHe.SDT2 !== '0' && lienHe.SDT2 !== '' ? '<br>✆ ' + lienHe.SDT2 : '';
        let dt3 = lienHe.SDT3 !== '0' && lienHe.SDT3 !== '' ? '<br>✆ ' + lienHe.SDT3 : '';
        var TTCopy2 = `${lienHe.tenHienThi}<br>✆ ${lienHe.SDT1}${dt2}${dt3}`;        
        copyToClipboard(TTCopy2);            
    },
    copyChiTiet3: function()
    {
        const lienHeId = APP.detail.lienHeId;
        const lienHe = APP.cache.data.danhSachLienHe.find(lh => String(lh.id) === String(lienHeId));
        let dt2 = lienHe.SDT2 !== '0' && lienHe.SDT2 !== '' ? '<br>✆ ' + lienHe.SDT2 : '';
        let dt3 = lienHe.SDT3 !== '0' && lienHe.SDT3 !== '' ? '<br>✆ ' + lienHe.SDT3 : '';
        var diaChi_Full = lienHe.diaChi !== '0' && lienHe.diaChi !== "" ? '<br>' + lienHe.diaChi : '';
        var TTCopy3 = `${lienHe.tenHienThi}<br>✆ ${lienHe.SDT1}${dt2}${dt3}${diaChi_Full}`;
        copyToClipboard(TTCopy3); 
        /*
        if (diaChi !== '0'){TTCopy3 = TTCopy3 + '<br>' + diaChi;}
        
        
        var PhongBan = DSPB_FullName_Array[DSPB_Id_Array.indexOf(PhongBanId,1)];
        var DonVi1 = DSDonVi_FullName_Array[DSDonVi_Id_Array.indexOf(donVi1Id,1)];
        var DonVi2 = DSDonVi_FullName_Array[DSDonVi_Id_Array.indexOf(donVi2Id,1)];
        
        if (DSPB_Id_Array.indexOf(PhongBanId,1) > -1) {TTCopy3 = TTCopy3 + '<br>' + PhongBan;}
        if (DSDonVi_Id_Array.indexOf(donVi1Id,1) > -1){TTCopy3 = TTCopy3 + '<br>' + DonVi1;}
        if (DSDonVi_Id_Array.indexOf(donVi2Id,1) > -1){TTCopy3 = TTCopy3 + '<br>' + DonVi2;} 
        
        
        var diaChi_Full = '';
        if (diaChi !== '0' && diaChi !== "")
        {
            diaChi_Full = diaChi;
        }
        
        if (DSPX_Id_Array.indexOf(phuongXaId,1) > -1)
        {
            if (diaChi_Full =="")
            {
                diaChi_Full = PhuongXa;
            }
            else
            {
                diaChi_Full = diaChi_Full + ", " + PhuongXa;
            }
            
        }
        if (DSHuyenTP_Id_Array.indexOf(HuyenTPId,1) > -1) 
        {
            if (diaChi_Full ==""){diaChi_Full = HuyenTP;}
            else {
            diaChi_Full = diaChi_Full + ', ' + HuyenTP;}
        }
        if (DSTinh_Id_Array.indexOf(tinhId,1) > -1) 
        {
            if (diaChi_Full ==""){diaChi_Full = Tinh;}
            else {
            diaChi_Full = diaChi_Full + ', ' + Tinh;}
        }
        if (diaChi_Full !==""){TTCopy3 = TTCopy3 + '<br>' + diaChi_Full;}
        
        TTCopy3 = TTCopy3 + "'";
        TTCopy3 = TTCopy3 + ');"'; */
    },
    creatDateStringForFileName: function(date) 
    {
        var d = new Date(date),
            month = '' + (d.getMonth() + 1),
            day = '' + d.getDate(),
            year = d.getFullYear();
    
        if (month.length < 2) month = '0' + month;
        if (day.length < 2) day = '0' + day;    
        return [year, month, day].join('-');
    },
    getVCardLink: function(ten, SDT1, SDT2, email, ghiChu)
    {        
        var card = 'data:text/vcard;charset=utf-8,';
        card += 'BEGIN:VCARD' + '%0A';
        card += 'VERSION:3.0' + '%0A';
        card += 'N:;' + ten + '%0A';
        card += 'FN:' + ten + ' ' + '%0A';
        card += 'TEL;TYPE=CELL:' + SDT1 + '%0A';
        card += 'TEL;TYPE=WORK:' + SDT2 + '%0A';
        card += 'EMAIL:' + email + '%0A';
        card += 'NOTE:' + ghiChu + '%0A';
        card += 'END:VCARD' + '%0A';

        return card;
    }
}