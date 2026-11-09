APP.detail = APP.detail || {};
APP.detail.lienHeId = '';
APP.detail.ui =
{
    init: function()
    {
        let style = document.createElement('style');
        style.textContent = `
            .detail__div {
                position:fixed;
                inset:0;
                background: var(--color-primary-dark);
                z-index:105;
                display:none;
                vertical-align:bottom;
                padding:8px;
            }
        `;
        document.head.appendChild(style);
         PVCComponent.divChe( {id: 'detail_divChe'});
        let divct = document.createElement('div');
        divct.id = 'ChiTiet_Div';
        divct.className = 'detail__div';        

        divct.innerHTML = `        
            <center>
                <div id="detail_header_container" class="containner" style="border-radius:10px 10px 0px 0px;background:white;height:160px;position:relative;">
                    <div style="width:30px;position:absolute;right:16px;top:16px;padding:3px;z-index: 110;">
                        <img id="ChiTiet_Star_Image" src="https://pvctech.github.io/danhBaGAS/assets/img/star.svg?version=1" style="width:100%;">
                    </div>

                    <div style="width:100%;position:absolute;left:0px;top:20px;z-index: 106;">
                        <center>
                            <div id="ChiTiet_Anh_Show" style="height:120px;"></div>
                        </center>
                    </div>

                    <div style="position:absolute;left:15px;bottom:-12px;padding:3px;z-index: 110;" id="ChiTiet_Save_Input">

                    </div>

                    <div style="position:absolute;right:15px;bottom:-12px;padding:3px;display:flex;gap:8px; align-items: flex-end;z-index: 110;" id="ChiTiet_Copy_Input">
                        <div class="image-button" style="height:20px; width:18px;" 
                            onclick="APP.detail.control.copyChiTiet2();">
                            ${APP.detail.ui.assets.img.copy(18,20)}
                        </div>
                        <div class="image-button" style="height:25px; width:22px;"
                            onclick="APP.detail.control.copyChiTiet3();">
                            ${APP.detail.ui.assets.img.copy(22,25)}
                        </div>
                    </div>
                </div>
                <div class="containner" style="background:#e5e5e5;height:10px;">
                </div>
                <div class="containner" style="border-radius:0px 0px 10px 10px; background:var(--color-primary-dark); min-height:300px;position:relative;"><br>
                    <table style="width:100%;color:white;font-size:14px;padding:10px;">
                        <tr>
                            <td colspan="3">
                                <table style="width:98%;padding:0px;">
                                    <tr>
                                        <td style="vertical-align:text-top;">
                                            <div id="ChiTiet_HoVaTen_Input" class="HoVaTen" style="margin-left:10px;color:white;"></div>
                                        </td>
                                    </tr>
                                </table>
                            </td>
                        </tr>
                        <tr>
                            <td colspan="3">
                                <div style="overflow: scroll;height:128px;" class="noScrollbar">
                                    <table style="width:100%;color:white;">
                                        <tr>
                                            <td>
                                                <img src="https://pvctech.github.io/danhBaGAS/assets/img/date.png" style="width:20px;">
                                            </td>
                                            <td>
                                                <div id="ChiTiet_ngaySinh_Input" style="margin-left:10px;opacity:0.75;"></div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <img src="https://pvctech.github.io/danhBaGAS/assets/img/location.png" style="width:20px;">
                                            </td>
                                            <td>
                                                <div id="ChiTiet_diaChi_Input" style="margin-left:10px;opacity:0.75;"></div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <img src="https://pvctech.github.io/danhBaGAS/assets/img/donvi.png" style="width:20px;">
                                            </td>
                                            <td>
                                                <div id="ChiTiet_DonVi_Input" style="margin-left:10px;opacity:0.75;"></div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td >
                                                <img src="https://pvctech.github.io/danhBaGAS/assets/img/email.png" style="width:20px;">
                                            </td>
                                            <td>
                                                <div id="ChiTiet_email_Input" style="margin-left:10px;opacity:0.75;"></div>
                                            </td>
                                        </tr>
                                    </table>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td colspan="3">
                                <div id="ChiTiet_Nhom_Input"> 
                                </div>
                            </td>
                        </tr>   
                        <tr>
                            <td colspan="3">
                                <div class="inputBox" id="ChiTiet_SDT1_Input" style="float:left;padding:5px 3px 5px 3px;width:45%;font-size:14px;text-align:center;border:1px solid white;"></div>
                                <div class="inputBox" id="ChiTiet_SDT2_Input" style="float:left;padding:5px 3px 5px 3px;width:45%;font-size:14px;text-align:center;border:1px solid white;margin-left:5px;"></div>
                                <div class="inputBox" id="ChiTiet_SDT3_Input" style="float:left;padding:5px 3px 5px 3px;width:45%;font-size:14px;text-align:center;border:1px solid white;"></div>
                                <input type="text" id="Copy" style="display:none;">
                            </td>
                        </tr>
                        <tr>
                            <td colspan="3">
                                <center>
                                    <div style="position:fixed;bottom:10px;left:0px;width:100%;z-index:101;" onclick="APP.detail.ui.hide();">
                                        <center>
                                            <div class="button" style="width: 90px;">Ok</div>
                                        </center>
                                    </div>
                                </center>
                            </td>
                        </tr>
                    </table>
                </div>
            </center>`;
        document.body.appendChild(divct);
    },
    render: function(lienHe)
    {
        APP.detail.lienHeId = lienHe.id;
        //Favorite:
        if (parseInt(lienHe.star) == 1) 
        {
            $('#ChiTiet_Star_Image').classList.remove('form_star_inActive');
        }
        else
        {
            $('#ChiTiet_Star_Image').classList.add('form_star_inActive');
        }

        //Download vcard:
        var card = APP.detail.control.getVCardLink(lienHe.tenHienThi, lienHe.SDT1, lienHe.SDT2, lienHe.email, lienHe.timKiem);
        $('#ChiTiet_Save_Input').innerHTML = `<a href="${card}" download="${APP.detail.control.creatDateStringForFileName(Date.now()) + lienHe.SDT1}danhba.vcf">
                <div class="image-button" style="height:25px;">
                    ${APP.detail.ui.assets.img.save}
                </div>
            </a>`;
         

        //Họ và tên:
        $('#ChiTiet_HoVaTen_Input').innerHTML = lienHe.tenHienThi;
        
        //Phòng Ban, Đơn vị:
        var PbDvi = lienHe.getPhongBan1();
        if (PbDvi.length !=='') {PbDvi = PbDvi + ' ';}
        PbDvi = PbDvi + lienHe.getDonVi1();
        
        if (lienHe.getDonVi2() !=='') {PbDvi = PbDvi + ', ';}
        PbDvi = PbDvi + lienHe.getPhongBan2();
        if (lienHe.getPhongBan2() !=='') {PbDvi = PbDvi + ' ';}
        PbDvi = PbDvi + lienHe.getDonVi2();
        $('#ChiTiet_DonVi_Input').innerText = PbDvi ;
        
        ///Địa chỉ:
        var diaChi_Full = '';
        if (lienHe.diaChi !== ''){diaChi_Full = lienHe.diaChi;}

        
        const phuongXa = lienHe.getPhuongXa();
        if (phuongXa) 
        {
            if (diaChi_Full !== '') 
            {
                diaChi_Full += ', ' + phuongXa;
            } 
            else 
            {
                diaChi_Full = phuongXa;
            }
        }

        const tinh = lienHe.getTinh();
        if (tinh) 
        {
            if (diaChi_Full !== '')
            {
                diaChi_Full += ', ' + tinh;
            } 
            else 
            {
                diaChi_Full = tinh;
            }
        }
        $('#ChiTiet_diaChi_Input').innerText = diaChi_Full;

        ///email:
        $('#ChiTiet_email_Input').innerText = lienHe.email;
        
        ///Điện thoại:
        this.renderSoDienThoai(lienHe.SDT1, 1);
        this.renderSoDienThoai(lienHe.SDT2, 2);
        this.renderSoDienThoai(lienHe.SDT3, 3); 
                    
        ////Ngày tháng năm sinh:
        this.renderNgayThangnamSinh(lienHe.ngaySinh, lienHe.thangSinh, lienHe.namSinh);
    
        $('#detail_divChe').style.display = 'block';
        $('#ChiTiet_Div').style.display = 'block';
        this.renderAvatar();
        APP.history.control.addNew(lienHe.id);
    },
    renderSoDienThoai: function(SDT, stt)
    {
        let divContainer = $('#ChiTiet_SDT' + stt + '_Input');
        if (SDT !== '')
        {
            var HtmlDt = `
                <div style="display:flex;align-items:center;justify-content:center;flex-wrap:nowrap;">
                    <a href="tel:${SDT}">
                        <img src="https://pvctech.github.io/danhBaGAS/assets/img/call.png" style="height:20px;" alt="call">
                    </a>

                    <a href="tel:${SDT}"><font color="white">${SDT}</font></a>

                    <div onclick="copySoDienThoai('${SDT}');"
                        class="image-button" style="height:18px;margin-left:10px;">
                        ${APP.detail.ui.assets.img.copy_white}
                    </div>
                </div>`;
            divContainer.innerHTML = HtmlDt;
            divContainer.style.display = 'block';
        }
        else 
        {
            divContainer.style.display = 'none';
        }
    },
    renderNgayThangnamSinh: function(ngay, thang, nam)
    {
        var NTNSinh ='';
        if (ngay ==0){} else {NTNSinh = NTNSinh + ngay + '/';}
        
        if (NTNSinh == '')
        {
            if (thang ==0){} else {NTNSinh = NTNSinh + thang + '/';}
        } 
        else 
        {NTNSinh = NTNSinh + thang + '/';}
        
        if (NTNSinh.length > 0) 
        {
            if (NTNSinh == '')
            {
                if (nam ==0){} else {NTNSinh = NTNSinh + nam;}
            }
            else
            {
                NTNSinh = NTNSinh + nam;
            }
            
            if (NTNSinh.length > 0) {$('#ChiTiet_ngaySinh_Input').innerText = 'Ngày sinh: ' + NTNSinh;}
            else {$('#ChiTiet_ngaySinh_Input').innerText = '';}
            
        }
        else 
        {
            if (NTNSinh == '')
            {
                if (nam ==0){} else {NTNSinh = NTNSinh + nam;}
            }
            else
            {
                NTNSinh = NTNSinh + nam;
            }
            
            if (NTNSinh.length > 0) {$('#ChiTiet_ngaySinh_Input').innerText = 'Năm sinh: ' + NTNSinh;}
            else {$('#ChiTiet_ngaySinh_Input').innerText = '';}
        }
    },
    renderAvatar: async function()
    {
        const chiTietAnh_container = $('#ChiTiet_Anh_Show');
        chiTietAnh_container.style.backgroundColor = "var(--color-primary)";
        chiTietAnh_container.innerHTML = '<div style="height:12px;">&nbsp;</div>';
        chiTietAnh_container.appendChild(PVCComponent.loadingText({id:'detail_avatar_loading', text:'Đang tìm avatar.', type:'01'}));
        
        const lienHeId = APP.detail.lienHeId;
        try
        {
            const response = await APP.api.getAvatar(lienHeId);
            const avatar = response?.avatar;
            let loadingChild = $('#detail_avatar_loading');
            chiTietAnh_container.removeChild(loadingChild);
            chiTietAnh_container.style.backgroundColor = "white";
            if (typeof avatar !== 'string')
            {
                chiTietAnh_container.innerHTML = '<image src="https://pvctech.github.io/danhBaGAS/assets/img/avatar_star.svg" style="height:95%;">';
                throw new Error('Server trả về dữ liệu ảnh đại diện không hợp lệ');
            }

            if (avatar === '' || APP.detail.lienHeId !== lienHeId)
            {
                chiTietAnh_container.innerHTML = '<image src="https://pvctech.github.io/danhBaGAS/assets/img/avatar_star.svg" style="height:95%;">';
                return;
            }

            chiTietAnh_container.innerHTML = '<image src="' + avatar + '" style="height:95%;">';
        }
        catch (error)
        {
            console.error(`Không thể tải ảnh đại diện cho liên hệ ${lienHeId}:`, error);
        }
    },
    hide: function()
    {
        $('#ChiTiet_Div').style.display = 'none';
        $('#detail_divChe').style.display = 'none';
    },
    assets:
    {
        img:
        {
            save: `<svg style="width: 50px;max-height: 100%;">
                        <path
                        fill="none"
                        d="M5.25589 16C3.8899 15.0291 3 13.4422 3 11.6493C3 9.20008 4.8 6.9375 7.5 6.5C8.34694 4.48637 10.3514 3 12.6893 3C15.684 3 18.1317 5.32251 18.3 8.25C19.8893 8.94488 21 10.6503 21 12.4969C21 14.0582 20.206 15.4339 19 16.2417M12 21V11M12 21L9 18M12 21L15 18"
                        stroke="green"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        id="path1890"
                        style="stroke:var(--color-primary);" />
                    </svg>`,
            copy_white: `<svg width="513" height="625" viewBox="0 0 513 625" style="height:18px; width: 16px;">
                        <path fill="#ffffff"
                            d="m 254.48797,223.29618 c 0,6.627 -5.373,12 -12,12 h -109 c -6.627,0 -12,-5.373 -12,-12 v -2 c 0,-6.627 5.373,-12 12,-12 h 109 c 6.627,0 12,5.373 12,12 z"/>
                        <path fill="#ffffff"
                            d="m 386.48797,301.29618 c 0,6.627 -5.373,12 -12,12 h -241 c -6.627,0 -12,-5.373 -12,-12 v -1.5 c 0,-6.627 5.373,-12 12,-12 h 241 c 6.627,0 12,5.373 12,12 z"/>
                        <path fill="#ffffff"
                            d="m 386.48797,379.29618 c 0,6.627 -5.373,12 -12,12 h -241 c -6.627,0 -12,-5.373 -12,-12 v -1.5 c 0,-6.627 5.373,-12 12,-12 h 241 c 6.627,0 12,5.373 12,12 z"/>
                        <path fill="#ffffff"
                            d="m 386.48797,458.29618 c 0,6.627 -5.373,12 -12,12 h -241 c -6.627,0 -12,-5.373 -12,-12 v -1.5 c 0,-6.627 5.373,-12 12,-12 h 241 c 6.627,0 12,5.373 12,12 z"/>
                        <path
                            style="fill:none;fill-opacity:0.245718;stroke:#ffffff;stroke-width:30;stroke-linecap:round;stroke-linejoin:round;stroke-dasharray:none;stroke-opacity:1"
                            d="m 46.736409,67.190067 c 0,0 -5.678345,-21.456018 23.603844,-22.5391 28.722178,0.170927 293.287957,-0.565916 293.287957,-0.565916 0,0 11.09669,-3.749628 22.57941,6.332907 11.48271,10.082534 81.7297,80.727352 81.7297,80.727352 0,0 3.7988,4.36922 3.31379,19.461 0.18334,16.468 0.89054,411.02837 0.89054,411.02837 0,0 -0.78956,18.84417 -16.75068,19.38359 -38.31714,-0.25916 -387.249265,0 -387.249265,0 0,0 -21.825863,1.3153 -21.825863,-15.91776 0,-17.23305 0.420567,-497.910443 0.420567,-497.910443 z"
                            id="path969" />
                        <path
                            style="fill:none;fill-opacity:0.245718;stroke:#ffffff;stroke-width:30;stroke-linecap:round;stroke-linejoin:round;stroke-dasharray:none;stroke-opacity:1"
                            d="m 374.94339,50.95725 v 75.61225 c 0,0 -1.78788,13.78389 13.60301,13.78389 15.39089,0 82.32377,0 82.32377,0"
                            />
                    </svg>`,
            copy: function (w,h)
            { 
                return `<svg width="513" height="625" viewBox="0 0 513 625" style="height:${h}px; width: ${w}px;">
                    <path style="fill:var(--color-primary)"
                        d="m 254.48797,223.29618 c 0,6.627 -5.373,12 -12,12 h -109 c -6.627,0 -12,-5.373 -12,-12 v -2 c 0,-6.627 5.373,-12 12,-12 h 109 c 6.627,0 12,5.373 12,12 z"/>
                    <path style="fill:var(--color-primary)"
                        d="m 386.48797,301.29618 c 0,6.627 -5.373,12 -12,12 h -241 c -6.627,0 -12,-5.373 -12,-12 v -1.5 c 0,-6.627 5.373,-12 12,-12 h 241 c 6.627,0 12,5.373 12,12 z"/>
                    <path style="fill:var(--color-primary)"
                        d="m 386.48797,379.29618 c 0,6.627 -5.373,12 -12,12 h -241 c -6.627,0 -12,-5.373 -12,-12 v -1.5 c 0,-6.627 5.373,-12 12,-12 h 241 c 6.627,0 12,5.373 12,12 z"/>
                    <path style="fill:var(--color-primary)"
                        d="m 386.48797,458.29618 c 0,6.627 -5.373,12 -12,12 h -241 c -6.627,0 -12,-5.373 -12,-12 v -1.5 c 0,-6.627 5.373,-12 12,-12 h 241 c 6.627,0 12,5.373 12,12 z"/>
                    <path
                        style="fill:none;fill-opacity:0.245718;stroke:var(--color-primary);stroke-width:30;stroke-linecap:round;stroke-linejoin:round;stroke-dasharray:none;stroke-opacity:1"
                        d="m 46.736409,67.190067 c 0,0 -5.678345,-21.456018 23.603844,-22.5391 28.722178,0.170927 293.287957,-0.565916 293.287957,-0.565916 0,0 11.09669,-3.749628 22.57941,6.332907 11.48271,10.082534 81.7297,80.727352 81.7297,80.727352 0,0 3.7988,4.36922 3.31379,19.461 0.18334,16.468 0.89054,411.02837 0.89054,411.02837 0,0 -0.78956,18.84417 -16.75068,19.38359 -38.31714,-0.25916 -387.249265,0 -387.249265,0 0,0 -21.825863,1.3153 -21.825863,-15.91776 0,-17.23305 0.420567,-497.910443 0.420567,-497.910443 z"
                        id="path969" />
                    <path
                        style="fill:none;fill-opacity:0.245718;stroke:var(--color-primary);stroke-width:30;stroke-linecap:round;stroke-linejoin:round;stroke-dasharray:none;stroke-opacity:1"
                        d="m 374.94339,50.95725 v 75.61225 c 0,0 -1.78788,13.78389 13.60301,13.78389 15.39089,0 82.32377,0 82.32377,0"
                        />
                </svg>`;
            }
        }
    }
}
