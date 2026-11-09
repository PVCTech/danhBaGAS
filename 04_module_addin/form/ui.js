APP.form = APP.form || {};
APP.form.ui = 
{
    listField: {
        donVi1: {id: 'form_donVi1_input', text: 'Đơn vị/Nhóm', list: APP.cache.data.danhSachDonVi},
        phongBan1: {id: 'form_phongBan1_input', text: 'Phòng ban 1', list: APP.cache.data.danhSachPhongBan},

        donVi2: {id: 'form_donVi2_input', text: 'Đơn vị/Nhóm 2', list: APP.cache.data.danhSachDonVi},
        phongBan2: {id: 'form_phongBan2_input', text: 'Phòng ban 2', list: APP.cache.data.danhSachPhongBan},
        
        tinh: {id: 'form_tinh_input', text: 'Tỉnh', list: APP.cache.data.danhSachTinh},
        phuongXa: {id: 'form_phuongXa_input', text: 'Phường xã', list: APP.cache.data.danhSachPhuongXa}
    },
    updateListField: function()
    {
        this.listField.donVi1.list = APP.cache.data.danhSachDonVi;
        this.listField.donVi2.list = APP.cache.data.danhSachDonVi;
        this.listField.phongBan1.list = APP.cache.data.danhSachPhongBan;
        this.listField.phongBan2.list = APP.cache.data.danhSachPhongBan;
        this.listField.tinh.list = APP.cache.data.danhSachTinh;
        this.listField.phuongXa.list = APP.cache.data.danhSachPhuongXa;
    },
    textField: [
        'tenHienThi', 'xungHoId', 'ten', 'timKiem', 
        'star', 
        'ngaySinh', 'thangSinh', 'namSinh', 
        'SDT1', 'SDT2', 'SDT3',
        'SDT1Zalo', 'SDT2Zalo', 'SDT3Zalo',
        'diaChi', 'email'
    ],
    init: function()
    {
        const main = document.createElement('div');
        main.className = 'tab__main';
        APP.view.ui.addTab('form', main);
        let html = `
            <form id="lienHe_Form" autocomplete="nope"  enctype="multipart/form-data">
                <div id="form_tab_container" style="display: flex; flex-direction: column; gap:8px; width: 96%;padding-bottom:200px;">
                    <div style="display: grid; grid-template-columns: 3fr 7fr;">
                        <div style="display: flex; flex-direction: column; gap:4px;">
                            <label>
                                <input  style="width:0px;" type="file"  id="FileAnh" accept=".jpg,.jpeg" name="FileAnh[]" multiple>
                                <div id="form_Anh_Show" class="form__avatar-preview">&nbsp;
                                </div>
                            </label>

                            <input type="text" id="form_star_input" value="0" style="display:none;">
                            <input type="text" id="form_Anh_Updated" value="0" style="display:none;">
                        </div>
                        
                        <div style="display: flex; flex-direction: column; gap:4px;">
                            <div style="height:35px;width:100%;">
                                <input type="text" class="inputBox" id="form_tenHienThi_input" placeholder="họ và tên" autocomplete="nope">
                                
                            </div>
                            <div style="display:flex; gap:4px;">
                                <select class="inputBox" id="form_xungHoId_input" style="height:35px;width:70px;color:var(--color-primary);padding:4px;background:white;">
                                </select>
                                <input type="text" class="inputBox" id="form_ten_input" style="width:80px;" placeholder="tên" autocomplete="nope">
                                <img src="https://pvctech.github.io/danhBaGAS/assets/img/recycle.jpg" style="width:16px; height:22px;opacity:0.4;margin-left:4px;" class="image-button" onclick="APP.form.control.delete()">
                            </div>
                            <input type="text" class="inputBox" id="form_timKiem_input" placeholder="tìm mở rộng" autocomplete="nope">
                            <div style="display: grid; grid-template-columns: 40px 40px 80px auto; gap:4px;width:100%;">
                                <input type="number" class="inputBox" id="form_ngaySinh_input" max-length="2">
                                <input type="number" class="inputBox" id="form_thangSinh_input" max-length="2">
                                <input type="number" class="inputBox" id="form_namSinh_input" max-length="4" placeholder="năm sinh">
                                <div style="height:35px;position:relative;">
                                    <img src="https://pvctech.github.io/danhBaGAS/assets/img/star.svg" class="form_star_inActive" id="form_star_image" height="28px" style="position:absolute;left:5px;top:3px;" onclick="APP.form.ui.changeStar();" alt="star">
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
                        <div style="position:relative;">
                            <input type="text" class="inputBox" id="form_SDT1_input" placeholder="Điện thoại 1" autocomplete="off">
                            <img src="https://pvctech.github.io/danhBaGAS/assets/img/zalo.png" 
                                id="form_SDT1Zalo_image"
                                onclick="APP.form.ui.changeZalo('SDT1');"
                                style="width:20px;position:absolute;right:-4px;top:-4px;" class="image-active image-button" alt="zalo">
                        </div>

                        <div style="position:relative;">
                            <input type="text" class="inputBox" id="form_SDT2_input" placeholder="Điện thoại 2" autocomplete="off">
                            <img src="https://pvctech.github.io/danhBaGAS/assets/img/zalo.png" 
                                id="form_SDT2Zalo_image"
                                onclick="APP.form.ui.changeZalo('SDT2');"
                                style="width:20px;position:absolute;right:-4px;top:-4px;" class="image-inactive image-button" alt="zalo">
                        </div>

                        <div style="position:relative;">
                            <input type="text" class="inputBox" id="form_SDT3_input" placeholder="Điện thoại 3" autocomplete="off">
                            <img src="https://pvctech.github.io/danhBaGAS/assets/img/zalo.png" 
                                id="form_SDT3Zalo_image"
                                onclick="APP.form.ui.changeZalo('SDT3');"
                                style="width:20px;position:absolute;right:-4px;top:-4px;" class="image-inactive image-button" alt="zalo">
                        </div>

                        <input type="hidden" id="form_SDT1Zalo_input" value="1">
                        <input type="hidden" id="form_SDT2Zalo_input" value="0">
                        <input type="hidden" id="form_SDT3Zalo_input" value="0">
                    </div>
                    <input type="text" class="inputBox" id="form_email_input" placeholder="Email" autocomplete="off">
                    <div style="width: 100%;display: grid;grid-template-columns: 1fr 90px 90px 1fr; gap: 16px; box-sizing: border-box;">
                        <div></div>
                        <div class="button" onclick="APP.form.control.submit();">OK</div>
                        <div class="button" style="background:#bbb;color:white;" onclick="APP.form.ui.boQua();">Bỏ qua</div>                                                        
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
            let lienHe = APP.cache.data.danhSachLienHe.find(lh=> String(lh.id) === String(APP.form.state.lienHe.id));
            if (!lienHe)
            {
                PVCComponent.canhBao('Không thể load form: id không tồn tại');
                return;
            }

            this.textField.forEach(f => {
                $(`#form_${f}_input`).value = lienHe[f];
            });

            this.changeStar();
            this.changeStar();

            Object.keys(this.listField).forEach(key => {
                let field = this.listField[key];
                const id = lienHe[key + 'Id'];
                if (id!= null && id !== '' && Number(id) !== 0)
                {
                    let item = field.list.find(it => String(it.id) === String(lienHe[key + 'Id']));
                    if (item)
                    {
                        APP.form.state[key] = item;
                    }
                    else
                    {
                        APP.form.state[key] = {id: '', ten: '', timKiem: ''};
                    }
                }
                else
                {
                    APP.form.state[key] = {id: '', ten: '', timKiem: ''};
                }
                this.renderListField(key);
            });

            this.renderZalo('SDT1');
            this.renderZalo('SDT2');
            this.renderZalo('SDT3');
        }
    },
    renderZalo: function(SDT)
    {
        var Zalo = $("#form_" + SDT + "Zalo_input").value;
        var img = $('#form_' + SDT + 'Zalo_image');
        if (Zalo == '0')
        {
            img.classList.remove('image-active');
            img.classList.add('image-inactive');
        }
        else
        {
            img.classList.remove('image-inactive');
            img.classList.add('image-active');
        }
    },
    renderListField: function(noiDung)
    {
        const id = APP.form.state[noiDung].id;
        const ten = APP.form.state[noiDung].ten;
        let formInput = $('#' + APP.form.ui.listField[noiDung].id);
        if (id!= null && id !== '' && Number(id) !== 0)
        {            
            formInput.innerText = ten;
            formInput.classList.add('has-value');
            formInput.classList.remove('not-has-value');            
        }
        else
        {
            formInput.innerText = APP.form.ui.listField[noiDung].text;
            formInput.classList.remove('has-value');
            formInput.classList.add('not-has-value');
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
        APP.form.state.avatarImage = '';
        APP.form.state.avatarError = null;
        APP.form.state.avatarRequestId++;
        APP.form.state.avatarProcessing = Promise.resolve('');
        $('#form_Anh_Show').innerHTML = '&nbsp;';
        APP.form.mode = lienHeId == '' ? 'addNew' : 'update';        
        APP.form.state.lienHe.id = lienHeId;
        this.render();
        APP.view.ui.showTab('form');
        const view = $('#view');
        const tab = $('#form_tab');
        if (view) view.scrollTop = 0;
        if (tab)
        {
            tab.scrollTop = 0;
            const main = tab.querySelector('.tab__main');
            if (main) main.scrollTop = 0;
        }
    },
    changeStar: function()
    {        
        var star = $("#form_star_input").value;
        if (String(star) === '0')
        {
            $('#form_star_image').classList.remove('form_star_inActive');
            $('#form_star_image').classList.add('form_star_active');
            $("#form_star_input").value = '1';
        }
        else
        {
            $('#form_star_image').classList.remove('form_star_active');
            $('#form_star_image').classList.add('form_star_inActive');
            $("#form_star_input").value = '0';
        }
    },
    changeZalo: function(SDT)
    {
        let img = $('#form_' + SDT + 'Zalo_image');
        var Zalo = $("#form_" + SDT + "Zalo_input").value;
        if (Zalo == '0')
        {
            $("#form_" + SDT + "Zalo_input").value = '1';
            img.classList.remove('image-inactive');
            img.classList.add('image-active');
        }
        else
        {
            $("#form_" + SDT + "Zalo_input").value = '0';
            img.classList.remove('image-active');
            img.classList.add('image-inactive');
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
        APP.form.state.avatarImage = '';
        APP.form.state.avatarError = null;
        APP.form.state.avatarRequestId++;
        APP.form.state.avatarProcessing = Promise.resolve('');
        $('#form_Anh_Show').innerHTML = '&nbsp;';
        APP.form.lienHeId = '';
        Object.keys(this.listField).forEach(key => {
            let field = this.listField[key];
            $('#' + field.id).innerText = field.text;
            $('#' + field.id).classList.remove('has-value');
            $('#' + field.id).classList.add('not-has-value');
        });

        $('#form_star_input').value = '0';
        $('#form_star_image').classList.remove('form_star_active');
        $('#form_star_image').classList.add('form_star_inActive');

        $('#form_SDT1Zalo_input').value = '1';
        $('#form_SDT2Zalo_input').value = '0';
        $('#form_SDT3Zalo_input').value = '0';

        $('#form_SDT1Zalo_image').classList.remove('image-inactive');
        $('#form_SDT1Zalo_image').classList.add('image-active');

        $('#form_SDT2Zalo_image').classList.remove('image-active');
        $('#form_SDT2Zalo_image').classList.add('image-inactive');

        $('#form_SDT3Zalo_image').classList.remove('image-active');
        $('#form_SDT3Zalo_image').classList.add('image-inactive');
    },
    boQua: function()
    {
        this.clear();
        APP.view.ui.back();
    }
}
