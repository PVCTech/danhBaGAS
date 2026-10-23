APP.form = APP.form || {};
APP.form.ui = 
{
    listField: {
        donVi1: {id: 'form_donVi1_input', text: 'Đơn vị/Nhóm', list: APP.cache.data.danhSachDonVi},
        donVi2: {id: 'form_donVi2_input', text: 'Đơn vị/Nhóm 2', list: APP.cache.data.danhSachDonVi},
        phongBan: {id: 'form_phongBan_input', text: 'Phòng ban', list: APP.cache.data.danhSachPhongBan},
        tinh: {id: 'form_tinh_input', text: 'Tỉnh', list: APP.cache.data.danhSachTinh},
        //huyenThanhPho: {id: 'form_huyenThanhPho_input', text: 'Huyện/thành phố', list: APP.cache.data.danhSachHuyenThanhPho},
        phuongXa: {id: 'form_phuongXa_input', text: 'Phường xã', list: APP.cache.data.danhSachPhuongXa}
    },
    updateListField: function()
    {
        this.listField.donVi1.list = APP.cache.data.danhSachDonVi;
        this.listField.donVi2.list = APP.cache.data.danhSachDonVi;
        this.listField.phongBan.list = APP.cache.data.danhSachPhongBan;
        this.listField.tinh.list = APP.cache.data.danhSachTinh;
        this.listField.phuongXa.list = APP.cache.data.danhSachPhuongXa;
    },
    textField: [
        'tenHienThi', 'xungHoId', 'ten', 'timKiem', 
        'ngaySinh', 'thangSinh', 'namSinh', 
        'SDT1', 'SDT2', 'SDT3', 
        'diaChi', 'email'
    ],
    init: function()
    {
        const main = document.createElement('div');
        main.className = 'tab__main';
        APP.view.ui.addTab('form', main);
        let html = `
            <form id="lienHe_Form" autocomplete="nope"  enctype="multipart/form-data">
                <div style="display: flex; flex-direction: column; gap:8px; width: 96%;padding-bottom:200px;">
                    <div style="display: grid; grid-template-columns: 3fr 7fr;">
                        <div style="display: flex; flex-direction: column; gap:4px;">
                            <input  style="width:0px;" type="file"  id="FileAnh" accept=".jpg,.jpeg" name="FileAnh[]" multiple>
                            <input type="text" id="form_Anh_Updated" value="0" style="display:none;">
                            <label for="FileAnh">
                                <div id="form_Anh_Show" style="width:90%;">
                                </div>
                            </label>
                            <input type="text" id="form_Star_input" value="0" style="display:none;">
                            <div id="form_Anh_input" style="display:none;">                                
                            </div>
                            <div id="Preview_Anh"></div>
                            <div id="form_Anh_Preview"></div>
                        </div>
                        <div style="display: flex; flex-direction: column; gap:4px;">
                            <div style="height:35px;width:100%;position:relative;">
                                <input type="text" class="inputBox" id="form_tenHienThi_input" placeholder="họ và tên" autocomplete="nope">
                                <img src="assets/img/recycle.jpg" style="position:absolute;right:-15px;top:-10px;width:15px;opacity:0.4;" onclick="Edit_Delete()">
                            </div>
                            <div style="display:flex; gap:4px;">
                                <select class="inputBox" id="form_xungHoId_input" style="height:35px;width:70px;color:var(--color-primary);padding:4px;background:white;">
                                </select>
                                <input type="text" class="inputBox" id="form_ten_input" style="width:80px;" placeholder="tên" autocomplete="nope">
                            </div>
                            <input type="text" class="inputBox" id="form_timKiem_input" placeholder="tìm mở rộng" autocomplete="nope">
                            <div style="display: grid; grid-template-columns: 50px 50px 100px 1fr; gap:4px;">
                                <input type="number" class="inputBox" id="form_ngaySinh_input" max-length="2">
                                <input type="number" class="inputBox" id="form_thangSinh_input" max-length="2">
                                <input type="number" class="inputBox" id="form_namSinh_input" max-length="4" placeholder="năm sinh">
                                <div style="height:35px;position:relative;">
                                    <img src="assets/img/star.svg" class="form_Star_InActive" id="form_Star_Image" height="28px" style="position:absolute;left:5px;top:3px;" onclick="APP.form.ui.changeStar();" alt="star">
                                </div>
                            </div>
                        </div>                        
                    </div>`;

                    let listFields = '';
                    Object.keys(this.listField).forEach(key => {
                        let field = this.listField[key];
                        listFields += `<div class="inputBox not-has-value" id="${field.id}" onclick="APP.form.goiY.ui.render('${key}');">
                                ${field.text}
                            </div>`;
                    });
                    html += listFields;

                    html += `
                    <input type="text" class="inputBox" id="form_diaChi_input" placeholder="Địa chỉ" autocomplete="off">
                    <div style="display: grid;grid-template-columns: 1fr 1fr 1fr; gap: 8px; box-sizing: border-box;">
                        <input type="text" class="inputBox" id="form_SDT1_input" placeholder="Điện thoại 1" autocomplete="off">
                        <input type="text" class="inputBox" id="form_SDT2_input" placeholder="Điện thoại 2" autocomplete="off">
                        <input type="text" class="inputBox" id="form_SDT3_input" placeholder="Điện thoại 3" autocomplete="off">
                    </div>
                    <input type="text" class="inputBox" id="form_email_input" placeholder="Email" autocomplete="off">
                    <div style="width: 100%;display: grid;grid-template-columns: 1fr 90px 90px 1fr; gap: 16px; box-sizing: border-box;">
                        <div></div>
                        <div class="button" onclick="ThemDanhBa();">OK</div>
                        <div class="button" style="background:#999999;color:white;" onclick="APP.form.ui.boQua();">Bỏ qua</div>                                                        
                    </div>
                </div>
            </form>`;
        $('#form_tab').innerHTML = html;        
        APP.form.goiY.ui.init();
    },
    render: function()
    {
        if (APP.form.mode == 'addNew')
        {
            this.clear();
        }
        else
        {
            let lienHe = APP.cache.data.danhSachLienHe.find(lh=> String(lh.id) === String(APP.form.state.lienHeId));
            if (!lienHe)
            {
                canhBao('Không thể load form: id không tồn tại');
                return;
            }
            this.textField.forEach(f => {
                $(`#form_${f}_input`).value = lienHe[f];
            });

            Object.keys(this.listField).forEach(key => {
                let field = this.listField[key];
                const id = lienHe[key + 'Id'];
                if (id!= null && id !== '' && Number(id) !== 0)
                {
                    let item = field.list.find(it => String(it.id) === String(lienHe[key + 'Id']));
                    if (item)
                    {
                        $('#' + field.id).innerText = item.ten;
                        $('#' + field.id).classList.add('has-value');
                        $('#' + field.id).classList.remove('not-has-value');
                    }
                }
            });
        }
    },
    renderDanhSachXungHo: function()
    {
        let xungHoOption = '';
        APP.cache.data.danhSachXungHo.forEach(xh=> {
            xungHoOption += `<option value="${xh.id}">${xh.ten}</option>`;
        });
        $('#form_xungHoId_input').innerHTML = xungHoOption;
    },
    show: function(lienHeId)
    {
        APP.form.mode = lienHeId == '' ? 'addNew' : 'update';        
        APP.form.state.lienHeId = lienHeId;
        this.render();
        APP.view.ui.showTab('form');
    },
    changeStar: function()
    {
        var Star = $("#form_Star_input").value;
        if (Star == '0')
        {
            $('#form_Star_Image').classList.remove('form_Star_InActive');
            $('#form_Star_Image').classList.add('form_Star_Active');
            $("#form_Star_input").value = '1';
        }
        else
        {
            $('#form_Star_Image').classList.remove('form_Star_Active');
            $('#form_Star_Image').classList.add('form_Star_InActive');
            $("#form_Star_input").value = '0';
        }
    },
    form_input_Click: function(NoiDung)
    {
        $('.Input_GoiY_Div').hide();
        var IdClick = "#form_" + NoiDung + "_Click";
        var IdDiv = '#form_' + NoiDung + '_GoiY_Div';
        if ($(IdClick).value =='0')
        {
            //$('#DivChe').show(0);
            $(IdDiv).show();
            $(IdClick).value = '1';
            $('#form_'  + NoiDung + '_FullName_input').focus();
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
        if (APP.form.mode == 'addNew')
        {
            this.clear();
        }
        else
        {
            this.render();
        }
    },
    clear: function()
    {
        $('#lienHe_Form').reset();
        Object.keys(this.listField).forEach(key => {
            let field = this.listField[key];
            $('#' + field.id).innerText = field.text;
            $('#' + field.id).classList.remove('has-value');
            $('#' + field.id).classList.add('not-has-value');
        });
    },
    boQua: function()
    {
        this.clear();
        APP.view.ui.back();
    }
}
