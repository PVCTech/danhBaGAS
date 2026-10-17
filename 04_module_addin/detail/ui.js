APP.detail = APP.detail || {};
APP.detail.ui =
{
    init: function()
    {
        let style = document.createElement('style');
        style.textContent = `
            .detail__div {
                position:fixed;
                bottom:0px;
                left:0px;
                width:100%;
                min-height:100vh;
                background: var(--color-primary);
                z-index:105;
                display:none;
                vertical-align:bottom;
            }
        `;
        document.head.appendChild(style);
        divChe({id: 'detail_divChe'});
        //div({id: 'ChiTiet_Div', className: 'detail__div'});
        let divct = document.createElement('div');
        divct.id = 'ChiTiet_Div';
        divct.className = 'detail__div';        

        divct.innerHTML = `        
            <center>
                <div style="height:80px;color:white;">.</div>
                <div class="Containner" style="border-radius:10px 10px 0px 0px;background:white;height:260px;position:relative;">
                    <div style="width:30px;position:absolute;right:20px;top:20px;padding:3px;">
                        <img id="ChiTiet_Star_Image" src="assets/img/star.svg?version=1" style="width:100%;">
                    </div>
                    <div style="width:100%;position:absolute;left:0px;top:40px;">
                        <center>
                            <div id="ChiTiet_Anh_Show" style="height:180px;">Ảnh</div>
                        </center>
                    </div>
                    <div style="position:absolute;right:15px;bottom:-12px;padding:3px;" id="ChiTiet_Copy_Input">
                        <img id="ChiTiet_Star_Image" src="assets/img/copy_green.svg" style="height:20px;">
                        <img id="ChiTiet_Star_Image" src="assets/img/copy_green.svg" style="height:25px;margin-left:8px;">
                    </div>
                </div>
                <div class="Containner" style="background:#e5e5e5;height:10px;">
                </div>
                <div class="Containner" style="border-radius:0px 0px 10px 10px;background:green;min-height:300px;position:relative;"><br>
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
                                <div style="overflow: scroll;height:110px;" class="noScrollbar">
                                    <table style="width:100%;color:white;">
                                        <tr>
                                            <td>
                                                <img src="assets/img/date.png" style="width:20px;">
                                            </td>
                                            <td>
                                                <div id="ChiTiet_NgaySinh_Input" style="margin-left:10px;opacity:0.75;"></div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <img src="assets/img/location.png" style="width:20px;">
                                            </td>
                                            <td>
                                                <div id="ChiTiet_DiaChi_Input" style="margin-left:10px;opacity:0.75;"></div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <img src="assets/img/donvi.png" style="width:20px;">
                                            </td>
                                            <td>
                                                <div id="ChiTiet_DonVi_Input" style="margin-left:10px;opacity:0.75;"></div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td >
                                                <img src="assets/img/email.png" style="width:20px;">
                                            </td>
                                            <td>
                                                <div id="ChiTiet_Email_Input" style="margin-left:10px;opacity:0.75;"></div>
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
                                <div class="InputBox" id="ChiTiet_DienThoai1_Input" style="float:left;padding:5px 3px 5px 3px;width:45%;font-size:14px;text-align:center;border:1px solid white;"></div>
                                <div class="InputBox" id="ChiTiet_DienThoai2_Input" style="float:left;padding:5px 3px 5px 3px;width:45%;font-size:14px;text-align:center;border:1px solid white;margin-left:5px;"></div>
                                <div class="InputBox" id="ChiTiet_DienThoai3_Input" style="float:left;padding:5px 3px 5px 3px;width:45%;font-size:14px;text-align:center;border:1px solid white;"></div>
                                <input type="text" id="Copy" style="display:none;">
                            </td>
                        </tr>
                        <tr>
                            <td colspan="3">
                                <center>
                                    <div style="position:fixed;bottom:10px;left:0px;width:100%;z-index:101;" onclick="APP.detail.ui.hide();">
                                        <center>
                                            <div class="Button" style="background:green;color:rgba(255,255,255,0.5);border:0.3px solid rgba(255,255,255,0.5);padding:8px;margin-top:15px;">Ok</div>
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
    hide: function()
    {
        $('#ChiTiet_Div').style.display = 'none';
        $('#detail_divChe').style.display = 'none';
    }
}


