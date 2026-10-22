APP.form = APP.form || {};
APP.form.ui = 
{
    init: function()
    {
        const main = document.createElement('div');
        main.className = 'tab__main';
        APP.view.ui.addTab('form', main);
        $('#form_tab').innerHTML = `
            <form id="lienHe_Form" autocomplete="nope"  enctype="multipart/form-data">
                <div style="display: flex; flex-direction: column; gap:8px;">
                    <div style="display: grid; grid-template-columns: 3fr 7fr;">
                        <div style="display: flex; flex-direction: column; gap:4px;">
                            <input  style="width:0px;" type="file"  id="FileAnh" accept=".jpg,.jpeg" name="FileAnh[]" multiple>
                            <input type="text" id="form_Anh_Updated" value="0" style="display:none;">
                            <label for="FileAnh">
                                <div id="form_Anh_Show" style="width:90%;">
                                </div>
                            </label>
                            <input type="text" id="form_Star_Input" value="0" style="display:none;">
                            <div id="form_Anh_Input" style="display:none;">                                
                            </div>
                            <div id="Preview_Anh"></div>
                            <div id="form_Anh_Preview"></div>
                        </div>
                        <div style="display: flex; flex-direction: column; gap:4px;">
                            <div style="height:35px;width:100%;position:relative;">
                                <input type="text" class="inputBox" id="form_HoVaTen_Input" style="margin-bottom:5px;color:var(--color-primary);" placeholder="họ và tên" autocomplete="nope">
                                <img src="assets/img/recycle.jpg" style="position:absolute;right:-15px;top:-10px;width:15px;opacity:0.4;" onclick="Edit_Delete()">
                            </div>
                            <div style="display:flex; gap:4px;">
                                <select class="inputBox" id="form_XungHo_Input" style="height:35px;width:70px;margin-bottom:5px;color:var(--color-primary);padding:4px;background:white;">
                                </select>
                                <input type="text" class="inputBox" id="form_Ten_Input" style="width:80px;margin-bottom:5px;color:var(--color-primary);" placeholder="tên" autocomplete="nope">
                            </div>
                            <input type="text" class="inputBox" id="form_TimKiem_Input" placeholder="tìm mở rộng" autocomplete="nope">
                            <div style="display: grid; grid-template-columns: 60px 60px 120px 1fr;gap: 4px;">
                                <input type="number" class="inputBox" id="form_ngaySinh_Input" max-length="2" style="color:var(--color-primary);">
                                <input type="number" class="inputBox" id="form_thangSinh_Input" max-length="2" style="color:var(--color-primary);">
                                <input type="number" class="inputBox" id="form_namSinh_Input" max-length="4" style="color:var(--color-primary);" placeholder="năm sinh">
                                <div style="height:35px;position:relative;">
                                    <img src="assets/img/star.svg" class="form_Star_InActive" id="form_Star_Image" height="28px" style="position:absolute;left:5px;top:3px;" onclick="APP.form.ui.changeStar();" alt="star">
                                </div>
                            </div>
                        </div>                        
                    </div>
                    <div class="inputBox" id="form_DonVi_Input" onclick="form_Input_Click('DonVi');$('#form_DonVi_ShortName_ShowHide').show();$('#form_DonVi_ShortName_Input').hide();">
                        Đơn vị/Nhóm                                
                    </div>
                    <div class="inputBox" id="form_DonVi2_Input" onclick="form_Input_Click('DonVi2');$('#form_DonVi2_ShortName_ShowHide').show();$('#form_DonVi2_ShortName_Input').hide();">
                        Đơn vị/Nhóm 2                                
                    </div>
                    <div class="inputBox" id="form_PhongBan_Input" onclick="form_Input_Click('PhongBan');$('#form_PhongBan_ShortName_ShowHide').show();$('#form_PhongBan_ShortName_Input').hide();">
                        Phòng ban                                
                    </div> 
                    <div class="inputBox" id="form_Tinh_Input" onclick="form_Input_Click('Tinh');$('#form_Tinh_ShortName_ShowHide').show();$('#form_Tinh_ShortName_Input').hide();">
                        Tỉnh                                
                    </div>
                    <div class="inputBox" id="form_HuyenTP_Input" onclick="form_Input_Click('HuyenTP');$('#form_HuyenTP_ShortName_ShowHide').show();$('#form_HuyenTP_ShortName_Input').hide();">
                        Huyện/TPhố                                
                    </div>
                    <input type="text" id="form_PhuongXa_Click" value="0" style="display:none;">
                    <div class="inputBox" id="form_PhuongXa_Input" onclick="form_Input_Click('PhuongXa');$('#form_PhuongXa_ShortName_ShowHide').show();$('#form_PhuongXa_ShortName_Input').hide();">
                        Phường xã                                
                    </div> 
                    <input type="text" class="inputBox" style="color:var(--color-primary);" id="form_diaChi_Input" placeholder="Địa chỉ" autocomplete="off">
                    <div style="display: grid;grid-template-columns: 1fr 1fr 1fr; gap: 8px; box-sizing: border-box;">
                        <input type="text" class="inputBox" id="form_DienThoai1_Input" style="color:var(--color-primary);" placeholder="Điện thoại 1" autocomplete="off">
                        <input type="text" class="inputBox" id="form_DienThoai2_Input" style="color:var(--color-primary);" placeholder="Điện thoại 2" autocomplete="off">
                        <input type="text" class="inputBox" id="form_DienThoai3_Input" style="color:var(--color-primary);" placeholder="Điện thoại 3" autocomplete="off">
                    </div>
                    <input type="text" class="inputBox" style="color:var(--color-primary);" id="form_email_Input" placeholder="email" autocomplete="off">
                    <div style="width: 100%;display: grid;grid-template-columns: 1fr 90px 90px 1fr; gap: 16px; box-sizing: border-box;">
                        <div></div>
                        <div class="button" onclick="ThemDanhBa();">OK</div>
                        <div class="button" style="background:#999999;color:white;" onclick="APP.form.ui.boQua();">Bỏ qua</div>                                                        
                    </div>
                </div>
            </form>`;
        let xungHoOption = '';
        APP.cache.data.danhSachXungHo.forEach(xh=> {
            xungHoOption += `<option value="${xh.id}">${xh.ten}</option>`;
        });
        $('#form_XungHo_Input').innerHTML = xungHoOption;
        APP.form.goiY.ui.init();
    },
    render: function()
    {
        console.log('Form render, id: ' + APP.form.lienHeId);
        if (APP.form.mode == 'addNew')
        {
            this.clear();
        }
        else
        {
            let lienHe = APP.cache.data.danhSachLienHe.find(lh=> lh.id);
            $('#form_HoVaTen_Input').value = lienHe.tenHienThi;

        }
    },
    show: function(lienHeId)
    {
        APP.form.mode = lienHeId == '' ? 'addNew' : 'update';        
        APP.form.lienHeId = lienHeId;
        this.render();
        APP.view.ui.showTab('form');
    },
    changeStar: function()
    {
        var Star = $("#form_Star_Input").value;
        if (Star == '0')
        {
            $('#form_Star_Image').classList.remove('form_Star_InActive');
            $('#form_Star_Image').classList.add('form_Star_Active');
            $("#form_Star_Input").value = '1';
        }
        else
        {
            $('#form_Star_Image').classList.remove('form_Star_Active');
            $('#form_Star_Image').classList.add('form_Star_InActive');
            $("#form_Star_Input").value = '0';
        }
    },
    form_Input_Click: function(NoiDung)
    {
        $('.Input_GoiY_Div').hide();
        var IdClick = "#form_" + NoiDung + "_Click";
        var IdDiv = '#form_' + NoiDung + '_GoiY_Div';
        if ($(IdClick).value =='0')
        {
            //$('#DivChe').show(0);
            $(IdDiv).show();
            $(IdClick).value = '1';
            $('#form_'  + NoiDung + '_FullName_Input').focus();
        }
        else
        {
            //$('#DivChe').hide(0);
            $(IdDiv).hide();
            $(IdClick).value = '0';
        }
    },
    reset: function()
    {

    },
    clear: function()
    {
        $('#lienHe_Form').reset();
    },
    boQua: function()
    {
        this.clear();
        APP.view.ui.back();
    }
}
