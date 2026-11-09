APP.form = APP.form || {};
APP.form.mode = 'addNew';
APP.form.state = 
{
    lienHe: {},
    donVi1: {},
    donVi2: {},
    phongBan1: {},
    phongBan2: {},
    tinh: {},
    phuongXa: {}
};

APP.form.control = 
{
    init: function()
    {
        APP.form.ui.init();
        this.bindEvents();
    },
    bindEvents: function()
    {       
        //Preview anh:
        document.getElementById('FileAnh').addEventListener('change', function(e) 
        {
            var canvas = document.createElement('canvas');
            var canvasContext = canvas.getContext('2d');
            var base64Image = '';       
            
            var img = new Image;            
            img.onload = function() 
            {
                var maxSize = 200;
                var width = img.width;
                var height = img.height;
                if (width > height)
                {
                    if (width > maxSize) 
                    {
                        height *= maxSize / width;
                        width = maxSize;
                    }
                } 
                else 
                {
                    if (height > maxSize) 
                    {
                        width *= maxSize / height;
                        height = maxSize;
                    }
                }
                
                canvas.width = width;
                canvas.height = height;
                canvas.setAttribute("style", `opacity:1;width:${width}px;`);
                $('#form_Anh_Show').innerHTML = '';
                document.getElementById('form_Anh_Show').appendChild(canvas);
                
                canvasContext.drawImage(img, 0, 0, width, height);
                base64Image = canvas.toDataURL('image/jpeg');
                form_Anh  = base64Image;
                //sendImage(base64Image);                
                URL.revokeObjectURL(img.src);
            }
            img.src = URL.createObjectURL(e.target.files[0]);
        });
    },
    sendImage: function(base64Image) 
    {
        var data = base64Image;
        var ajax = null;
        if (window.XMLHttpRequest) 
        {
            ajax = new XMLHttpRequest();
        }
        else if (window.ActiveXObject) 
        {
            ajax = new ActiveXObject("Microsoft.XMLHTTP");
        }
    
        data = 'cuongpvwww;www' + $('#form_Id').value + 'www;www' + data;
        ajax.send(data);
        $('#form_Anh_Updated').value = '1';
    },
    delete: async function()
    {
        const xacMinh = await PVCComponent.canhBao('Bạn có chắc chắn muốn xóa!', 'Cảnh báo', 'okCancel');
        if (!xacMinh) return;
        if (APP.form.state.lienHe.id == '') 
        {
            PVCComponent.canhBao('Id của liên hệ không đúng!', 'Xóa liên hệ');
            return;
        }

        let deleteStatus = await APP.api.delete();
        if (deleteStatus.status == 'ok')
        {
            //cập nhật cache, xóa lịch sử nếu có
            let dlIndex = APP.cache.data.danhSachLienHe.findIndex(lh => String(lh.id) === String(APP.form.state.lienHe.id));
            if (dlIndex !==-1) 
            {
                APP.cache.data.danhSachLienHe.splice(dlIndex,1);                
            }

            let historyIndex = APP.cache.data.danhSachLichSu.findIndex(lh => String(lh.lienHeId) === String(APP.form.state.lienHe.id));
            if (historyIndex !==-1) APP.cache.data.danhSachLichSu.splice(historyIndex,1);
            
            //render lại và showtab lịch sử
            APP.form.ui.clear();
            APP.history.ui.render();
            APP.view.ui.showTab('home');
        }
        else
        {
            PVCComponent.canhBao('Xóa không thành công');
        }
    },
    readData: function()
    {
        let d = new Date();
        let date = d.getDate();
        let month = d.getMonth() + 1;
        let year = d.getFullYear();
        let h = d.getHours();
        let m = d.getMinutes();
        let sec = d.getSeconds();

        let id = APP.form.state.lienHe.id;
        APP.form.state.lienHe =
        {
            id: id,
            star: $('#form_star_input').value,
            tenHienThi: $('#form_tenHienThi_input').value, 
            xungHoId: $('#form_xungHoId_input').value, 
            ten: $('#form_ten_input').value, 
            
            ngaySinh: $('#form_ngaySinh_input').value,
            thangSinh: $('#form_thangSinh_input').value,
            namSinh: $('#form_namSinh_input').value,
            
            donVi1Id: APP.form.state.donVi1.id,
            phongBan1Id: APP.form.state.phongBan1.id,

            donVi2Id: APP.form.state.donVi2.id,
            phongBan2Id: APP.form.state.phongBan2.id,

            tinhId: APP.form.state.tinh.id,
            phuongXaId: APP.form.state.phuongXa.id,
            
            timKiem: $('#form_timKiem_input').value,

            SDT1: $('#form_SDT1_input').value,
            SDT2: $('#form_SDT2_input').value,
            SDT3: $('#form_SDT3_input').value,

            SDT1Zalo: $('#form_SDT1Zalo_input').value,
            SDT2Zalo: $('#form_SDT2Zalo_input').value,
            SDT3Zalo: $('#form_SDT3Zalo_input').value,
            
            avatar: '',
            email: $('#form_email_input').value,
            diaChi: $('#form_diaChi_input').value,
            ghiChu: '',
            lichSuTruyCap:
            {
                ngay: date,
                thang: month,
                nam: year,
                gio: h,
                phut: m,
                giay: sec
            }
        };
    },
    submit: async function()
    {
        try{
            this.readData();
            if (APP.form.mode === 'addNew')
            {
                PVCComponent.toast('Đang thêm mới..');
                let addNewStatus = await APP.api.addNew();
                if (addNewStatus.status == 'ok')
                {
                    APP.form.state.lienHe.id = addNewStatus.id;
                    //cập nhật cache, xóa lịch sử nếu có
                    APP.cache.data.danhSachLienHe.push(new LienHe(APP.form.state.lienHe));
                    APP.cache.data.danhSachLichSu.push({
                        ...APP.form.state.lienHe.lichSuTruyCap,
                        lienHeId: APP.form.state.lienHe.id});
                
                    //render lại và showtab lịch sử
                    APP.form.ui.clear();
                    APP.history.ui.render();
                    APP.view.ui.showTab('home');
                }
                else
                {
                    PVCComponent.canhBao('Thêm mới không thành công');
                }            
            }
            else
            {
                PVCComponent.toast('Đang cập nhật..');
                if (APP.form.state.lienHe.id == '') 
                {
                    PVCComponent.canhBao('Id của liên hệ không đúng!', 'Cập nhật liên hệ');
                    return;
                }

                let updateStatus = await APP.api.update();
                if (updateStatus.status == 'ok')
                {
                    //cập nhật cache, xóa lịch sử nếu có
                    let udIndex = APP.cache.data.danhSachLienHe.findIndex(lh => String(lh.id) === String(APP.form.state.lienHe.id));
                    if (udIndex !==-1) 
                    {
                        APP.cache.data.danhSachLienHe[udIndex] = new LienHe(APP.form.state.lienHe);     
                    }

                    let historyIndex = APP.cache.data.danhSachLichSu.findIndex(lh => String(lh.lienHeId) === String(APP.form.state.lienHe.id));
                    if (historyIndex !==-1) 
                    {
                        APP.cache.data.danhSachLichSu[historyIndex] = {
                            ...APP.form.state.lienHe.lichSuTruyCap,
                            lienHeId: APP.form.state.lienHe.id
                        }
                    }
                    
                    //render lại và showtab lịch sử
                    APP.form.ui.clear();
                    APP.history.ui.render();
                    APP.view.ui.showTab('home');
                }
                else
                {
                    PVCComponent.canhBao('Cập nhật không thành công');
                }
            }
        }
        catch (error)
        {
            console.error('LỖI TRONG SUBMIT:', error);
            console.dir(error);

            try
            {
                console.error('Chi tiết lỗi:', JSON.stringify(error, null, 2));
            }
            catch (e)
            {
                console.error('Không thể chuyển lỗi thành JSON:', e);
            }

            PVCComponent.canhBao(error?.message || 'Có lỗi xảy ra khi xử lý dữ liệu!');
        } 
    
        
    }
}