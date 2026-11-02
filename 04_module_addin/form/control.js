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

APP.form.control = {
    init: function()
    {
        APP.form.ui.init();
        this.bindEvents();
    },
    bindEvents: function()
    {

        /*
        //Preview anh:
        document.getElementById('FileAnh').addEventListener('change', function(e) 
        {
            var canvas = document.createElement('canvas');
            var canvasContext = canvas.getContext('2d');
            var base64Image = '';       
            
            var img = new Image;
            
            //var Style= 'opacity:0;position:absolute;z-index:-1;top: -100000000;left:-1000000000;width:' + width + 'px;height:' + height + 'px;';
            //var Style= 'opacity:0;position:absolute;z-index:-1;top: -100000000;left:-1000000000;width:500px;height:500px;';
            
            
            
            img.onload = function() {
                    var maxSize = 200;
                    var width = img.width;
                    //alert(width);
                    var height = img.height;
                    if (width > height) {
                        if (width > maxSize) {
                            height *= maxSize / width;
                            width = maxSize;
                        }
                    } else {
                        if (height > maxSize) {
                            width *= maxSize / height;
                            height = maxSize;
                        }
                    }
                    
                    canvas.width = width;
                    canvas.height = height;
                    //var Style= 'opacity:0;position:absolute;z-index:-1;top: -100000000;left:-1000000000;width:' + width + 'px;height:' + height + 'px;';
                    canvas.setAttribute("style", 'opacity:1;width:60px;');
                    $('#form_Anh_Show').html('');
                    document.getElementById('form_Anh_Show').appendChild(canvas);
                    
                    //alert ( width +','+ height);
                    canvasContext.drawImage(img, 0, 0, width, height);
                    base64Image = canvas.toDataURL('image/jpeg');
                    form_Anh  = base64Image;
                    sendImage(base64Image);
                    
                    //document.body.removeChild(canvas)
                    URL.revokeObjectURL(img.src);
                } 
            img.src = URL.createObjectURL(e.target.files[0]);
        });



        $("#form_DonVi_FullName_Input").on('keyup', function (e) 
        {
            if (e.key === 'Enter' || e.keyCode === 13) 
            {
                if ($('#form_ChonNhom_GoiY_SoKetQua').value == '1')
                {
                    for (var j=1;j<=parseInt($('#GoiY_DonVi_Sum').value);j++)
                    {
                        var ThemMoiDivId = '#form_GoiY_Data_Div_DonVi_' + j;
                        if ($(ThemMoiDivId).is(":visible"))
                        {
                            form_LuaChon_LoadThongTin('DonVi',j,'Đơn vị/Nhóm',j);
                            break;
                        }
                    }
                }
                else
                {
                    form_GoiY('DonVi');
                }
            }
            else
            {
                form_GoiY('DonVi');
            }
        });




        $("#form_DonVi2_FullName_Input").on('keyup', function (e) 
        {
            if (e.key === 'Enter' || e.keyCode === 13) 
            {
                if ($('#form_ChonNhom_GoiY_SoKetQua').value == '1')
                {
                    for (var j=1;j<=parseInt($('#GoiY_DonVi2_Sum').value);j++)
                    {
                        var ThemMoiDivId = '#form_GoiY_Data_Div_DonVi2_' + j;
                        if ($(ThemMoiDivId).is(":visible"))
                        {
                            form_LuaChon_LoadThongTin('DonVi2',j,'Đơn vị/Nhóm 2',j);
                            break;
                        }
                    }
                }
                else
                {
                    form_GoiY('DonVi2');
                }
            }
            else
            {
                form_GoiY('DonVi2');
            }
        });





        $("#form_PhongBan_FullName_Input").on('keyup', function (e) 
        {
            if (e.key === 'Enter' || e.keyCode === 13) 
            {
                if ($('#form_ChonNhom_GoiY_SoKetQua').value == '1')
                {
                    for (var j=1;j<=parseInt($('#GoiY_PhongBan_Sum').value);j++)
                    {
                        var ThemMoiDivId = '#form_GoiY_Data_Div_PhongBan_' + j;
                        if ($(ThemMoiDivId).is(":visible"))
                        {
                            form_LuaChon_LoadThongTin('PhongBan',j,'Phòng ban',j);
                            break;
                        }
                    }
                }
                else
                {
                    form_GoiY('PhongBan');
                }
            }
            else
            {
                form_GoiY('PhongBan');
            }
        });




        $("#form_Tinh_FullName_Input").on('keyup', function (e) 
        {
            if (e.key === 'Enter' || e.keyCode === 13) 
            {
                if ($('#form_ChonNhom_GoiY_SoKetQua').value == '1')
                {
                    for (var j=1;j<=parseInt($('#GoiY_Tinh_Sum').value);j++)
                    {
                        var ThemMoiDivId = '#form_GoiY_Data_Div_Tinh_' + j;
                        if ($(ThemMoiDivId).is(":visible"))
                        {
                            form_LuaChon_LoadThongTin('Tinh',j,'Tỉnh',j);
                            break;
                        }
                    }
                }
                else
                {
                    form_GoiY('Tinh');
                }
            }
            else
            {
                form_GoiY('Tinh');
            }
        });




        $("#form_HuyenTP_FullName_Input").on('keyup', function (e) 
        {
            if (e.key === 'Enter' || e.keyCode === 13) 
            {
                if ($('#form_ChonNhom_GoiY_SoKetQua').value == '1')
                {
                    for (var j=1;j<=parseInt($('#GoiY_HuyenTP_Sum').value);j++)
                    {
                        var ThemMoiDivId = '#form_GoiY_Data_Div_HuyenTP_' + j;
                        if ($(ThemMoiDivId).is(":visible"))
                        {
                            form_LuaChon_LoadThongTin('HuyenTP',j,'Huyện/TPhố',j);
                            break;
                        }
                    }
                }
                else
                {
                    form_GoiY('HuyenTP');
                }
            }
            else
            {
                form_GoiY('HuyenTP');
            }
        });




        $("#form_PhuongXa_FullName_Input").on('keyup', function (e) 
        {
            if (e.key === 'Enter' || e.keyCode === 13) 
            {
                if ($('#form_ChonNhom_GoiY_SoKetQua').value == '1')
                {
                    for (var j=1;j<=parseInt($('#GoiY_PhuongXa_Sum').value);j++)
                    {
                        var ThemMoiDivId = '#form_GoiY_Data_Div_PhuongXa_' + j;
                        if ($(ThemMoiDivId).is(":visible"))
                        {
                            form_LuaChon_LoadThongTin('PhuongXa',j,'Phường xã',j);
                            break;
                        }
                    }
                }
                else
                {
                    form_GoiY('PhuongXa');
                }
            }
            else
            {
                form_GoiY('PhuongXa');
            }
        });
    */



    },
    sendImage: function(base64Image) 
    {
        var data = base64Image;
        var ajax = null;
        if (window.XMLHttpRequest) {
            ajax = new XMLHttpRequest();
        } else if (window.ActiveXObject) {
            ajax = new ActiveXObject("Microsoft.XMLHTTP");
        }
    
        ajax.open('POST', 'index_files/avatar_upload_server.php', true);
        ajax.setRequestHeader('Content-Type', 'application/octet-stream');
        ajax.onreadystatechange = function() {
            if (ajax.readyState === XMLHttpRequest.DONE) {
                if (ajax.status === 200) {
                    //window.location.reload();
                    //alert(this.responseText);
                } else {
                }
            }
        };
    
        data = 'cuongpvwww;www' + $('#form_Id').value + 'www;www' + data;
        ajax.send(data);
        $('#form_Anh_Updated').value = '1';
        //alert(data);
    },
    previewFiles: function(PreviewId,FileId)
    {
        var preview2 = document.querySelector('#'+PreviewId);
        var files2   = document.querySelector('#'+FileId).files;
        $('.ThongTinXe_Image').hide();
    
        function readAndPreview2(file2) 
        {
            if ( /\.(jpe?g|png|gif)$/i.test(file2.name) ) {
                var reader2 = new FileReader();
        
                reader2.addEventListener("load", function () {
                var image2 = new Image();
                image2.height = 300;
                image2.title = file2.name;
                image2.src = this.result;
                $('#'+PreviewId).html('');
                preview2.appendChild(image2);
                }, false);
        
                //reader2.readAsDataURL(file2);
            }
    
        }
        
        
        if (files2) 
        {
            [].forEach.call(files2, readAndPreview2);
            //[].forEach.call(files2, resizeImage);
        
        }
    },
    delete: async function()
    {
        const xacMinh = await canhBao('Bạn có chắc chắn muốn xóa!', 'Cảnh báo', 'okCancel');
        if (!xacMinh) return;
        if (APP.form.state.lienHe.id == '') 
        {
            canhBao('Id của liên hệ không đúng!', 'Xóa liên hệ');
            return;
        }

        let deleteStatus = await APP.api.delete();
        if (deleteStatus.thanhCong)
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
            canhBao('Xóa không thành công');
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
        let s = d.getSeconds;

        let id = APP.form.state.lienHe.id;
        APP.form.state.lienHe =
        {
            id: id,
            star: $('#form_Star_input').value,
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
            huyenThanhPhoId: '',
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
            lichSuTruyCap:{
                ngay: date,
                thang: month,
                nam: year,
                gio: h,
                phut: m,
                giay: s
            }
        };
    },
    submit: async function()
    {
        this.readData();
        if (APP.form.mode === 'addNew')
        {
            toast('Đang thêm mới..');
            let addNewStatus = await APP.api.addNew();
            if (addNewStatus.thanhCong)
            {
                APP.form.state.lienHe.id = addNewStatus.id;
                //cập nhật cache, xóa lịch sử nếu có
                APP.cache.data.danhSachLienHe.push(new LienHe(APP.form.state.lienHe));
                console.log('APP.cache.data.danhSachLienHe', APP.cache.data.danhSachLienHe);
                APP.cache.data.danhSachLichSu.push({
                    ngay: APP.form.state.lienHe.lichSuTruyCap.ngay, 
                    thang: APP.form.state.lienHe.lichSuTruyCap.thang, 
                    nam: APP.form.state.lienHe.lichSuTruyCap.nam, 
                    gio: APP.form.state.lienHe.lichSuTruyCap.gio, 
                    phut: APP.form.state.lienHe.lichSuTruyCap.phut, 
                    giay: APP.form.state.lienHe.lichSuTruyCap.giay, 
                    lienHeId: APP.form.state.lienHe.id});
               
                //render lại và showtab lịch sử
                APP.form.ui.clear();
                APP.history.ui.render();
                APP.view.ui.showTab('home');
            }
            else
            {
                canhBao('Thêm mới không thành công');
            }            
        }
        else
        {
            toast('Đang cập nhật..');
            if (APP.form.state.lienHe.id == '') 
            {
                canhBao('Id của liên hệ không đúng!', 'Cập nhật liên hệ');
                return;
            }

            let updateStatus = await APP.api.update();
            if (updateStatus.thanhCong)
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
                        ngay: APP.form.state.lienHe.lichSuTruyCap.ngay,
                        thang: APP.form.state.lienHe.lichSuTruyCap.thang,
                        nam: APP.form.state.lienHe.lichSuTruyCap.nam,
                        gio: APP.form.state.lienHe.lichSuTruyCap.gio,
                        phut: APP.form.state.lienHe.lichSuTruyCap.phut,
                        giay: APP.form.state.lienHe.lichSuTruyCap.giay,
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
                canhBao('Cập nhật không thành công');
            }
        }
    },
    form_GoiY: function(NoiDung)
    {
        var FullNameId = "#form_" + NoiDung + "_FullName_Input";
        var Full = $(FullNameId).value;
        
        //var ShortNameId = "#form_" + NoiDung + "_ShortName_Input";
        //var Short = $(ShortNameId).value;
        
        var SumId = "#GoiY_" + NoiDung + "_Sum";
        var Sum = parseInt($(SumId).value);
        $('#form_ChonNhom_GoiY_SoKetQua').value = '0';
        var SoKQ = 0;
            
        if (Full.length > 1)
        {
            Full = xoa_dau(Full);
            Full = Full.toUpperCase();
            
            //Short = xoa_dau(Short);
            //Short = Short.toUpperCase();
            //Short = Short.replace(/[^a-zA-Z0-9]/g, '');
            //Full.indexOf
            var TachFull = Full.split(' ');
            //var TachShort = Short.split(' ');
            
            //var DivId = "#form_" + NoiDung + "_Input";
            //alert(Full);
            
            for (var i=0;i<=Sum;i++)
            {
                var GoiYFullId = '#GoiY_' + NoiDung + '_FullName_' + i;
                var GoiYShortId = '#GoiY_' + NoiDung + '_ShortName_' + i;
                var GoiYFull = $(GoiYFullId).value;
                var GoiYShort = $(GoiYShortId).value;
                
                GoiYFull = xoa_dau(GoiYFull);
                GoiYFull = GoiYFull.toUpperCase();
                GoiYFull = GoiYFull.replace(/[^a-zA-Z0-9]/g, '');
                
                GoiYShort = xoa_dau(GoiYShort);
                GoiYShort = GoiYShort.toUpperCase();
                GoiYShort = GoiYShort.replace(/[^a-zA-Z0-9]/g, '');
                
                var Ok=1;
                for (var j=0;j<TachFull.length;j++)
                {
                    if (TachFull[j]!=='')
                    {
                        if (GoiYFull.indexOf(TachFull[j]) > -1){}
                        else
                        {
                            Ok=0;
                        }
                    }
                }
                
                if (Ok == 0)
                {
                    Ok=1;
                    for (var j=0;j<TachFull.length;j++)
                    {
                        if (GoiYShort.indexOf(TachFull[j]) > -1){}
                        else
                        {
                            Ok=0;
                        }
                    }
                }
                
                var GoiYDivId = '#form_GoiY_Data_Div_' + NoiDung + '_' + i;
                if (Ok ==1)
                {
                    $(GoiYDivId).show();
                    SoKQ = SoKQ + 1;
                    $('#form_ChonNhom_GoiY_SoKetQua').value = SoKQ;
                }
                else
                {
                    $(GoiYDivId).hide();
                }
                
            }
        }
        else
        {
            for (var i=0;i<=Sum;i++)
            {
                var GoiYDivId = '#form_GoiY_Data_Div_' + NoiDung + '_' + i;
                $(GoiYDivId).show();
            }
        }
    },
    ThemDanhBa:function()
    {
        var Id = $('#form_Id').value;
        var HoVaTen = $('#form_HoVaTen_Input').value;
        var Ten = $('#form_Ten_Input').value;
        var TimKiem = $('#form_TimKiem_Input').value;
        var XungHoId = $('#form_XungHo_Input').value;
        var SDT1 = $('#form_SDT1_Input').value;
        var SDT2 = $('#form_SDT2_Input').value;
        var SDT3 = $('#form_SDT3_Input').value;
        var ngaySinh = $('#form_ngaySinh_Input').value;
        var thangSinh = $('#form_thangSinh_Input').value;
        var namSinh = $('#form_namSinh_Input').value;
        if (ngaySinh.length == 0){ngaySinh = "0";}
        if (thangSinh.length == 0){thangSinh = "0";}
        if (namSinh.length == 0){namSinh = "0";}
        if (ngaySinh.length >2){ngaySinh = ngaySinh.substr(0,2);}
        if (thangSinh.length >2){thangSinh = thangSinh.substr(0,2);}
        if (namSinh.length >4){namSinh = namSinh.substr(0,4);}
        
        var diaChi = $('#form_diaChi_Input').value;
        var email = $('#form_email_Input').value;
        var Star = $('#form_Star_Input').value;
        
                            var form_DonVi_Id_Input = $('#form_DonVi_Id_Input').value;
            var form_DonVi_FullName_Input = $('#form_DonVi_FullName_Input').value;
            var form_DonVi_ShortName_Input = $('#form_DonVi_ShortName_Input').value;
                            var form_DonVi2_Id_Input = $('#form_DonVi2_Id_Input').value;
            var form_DonVi2_FullName_Input = $('#form_DonVi2_FullName_Input').value;
            var form_DonVi2_ShortName_Input = $('#form_DonVi2_ShortName_Input').value;
                            var form_PhongBan_Id_Input = $('#form_PhongBan_Id_Input').value;
            var form_PhongBan_FullName_Input = $('#form_PhongBan_FullName_Input').value;
            var form_PhongBan_ShortName_Input = $('#form_PhongBan_ShortName_Input').value;
                            var form_Tinh_Id_Input = $('#form_Tinh_Id_Input').value;
            var form_Tinh_FullName_Input = $('#form_Tinh_FullName_Input').value;
            var form_Tinh_ShortName_Input = $('#form_Tinh_ShortName_Input').value;
                            var form_HuyenTP_Id_Input = $('#form_HuyenTP_Id_Input').value;
            var form_HuyenTP_FullName_Input = $('#form_HuyenTP_FullName_Input').value;
            var form_HuyenTP_ShortName_Input = $('#form_HuyenTP_ShortName_Input').value;
                            var form_PhuongXa_Id_Input = $('#form_PhuongXa_Id_Input').value;
            var form_PhuongXa_FullName_Input = $('#form_PhuongXa_FullName_Input').value;
            var form_PhuongXa_ShortName_Input = $('#form_PhuongXa_ShortName_Input').value;
                        
        
        //alert(HoVaTen);
        if (HoVaTen =='')
        {
            Alert('Vui lòng Nhập <b>HỌ VÀ TÊN</b>!!');
        }
        else
        {
            if (SDT1 =='' && SDT2=='')
            {
                Alert('Vui lòng nhập ít nhất 1 SĐT!');
            }
            else
            {
                
                var AllData = 'cuongpv;;;m;;;' + Id + ';;;m;;;' + HoVaTen + ';;;m;;;' + Ten + ';;;m;;;' + SDT1 + ';;;m;;;' + SDT2;
                AllData = AllData + ';;;m;;;' + ngaySinh + ';;;m;;;' + thangSinh + ';;;m;;;' + namSinh;
                                            AllData = AllData + ';;;m;;;' + form_DonVi_Id_Input + ';;;m;;;' + form_DonVi_FullName_Input + ';;;m;;;' + form_DonVi_ShortName_Input;
                                            AllData = AllData + ';;;m;;;' + form_DonVi2_Id_Input + ';;;m;;;' + form_DonVi2_FullName_Input + ';;;m;;;' + form_DonVi2_ShortName_Input;
                                            AllData = AllData + ';;;m;;;' + form_PhongBan_Id_Input + ';;;m;;;' + form_PhongBan_FullName_Input + ';;;m;;;' + form_PhongBan_ShortName_Input;
                                            AllData = AllData + ';;;m;;;' + form_Tinh_Id_Input + ';;;m;;;' + form_Tinh_FullName_Input + ';;;m;;;' + form_Tinh_ShortName_Input;
                                            AllData = AllData + ';;;m;;;' + form_HuyenTP_Id_Input + ';;;m;;;' + form_HuyenTP_FullName_Input + ';;;m;;;' + form_HuyenTP_ShortName_Input;
                                            AllData = AllData + ';;;m;;;' + form_PhuongXa_Id_Input + ';;;m;;;' + form_PhuongXa_FullName_Input + ';;;m;;;' + form_PhuongXa_ShortName_Input;
                                        AllData = AllData + ';;;m;;;' + SDT3 + ';;;m;;;' + diaChi + ';;;m;;;' + email + ';;;m;;;' + Star;
                AllData = AllData + ';;;m;;;' + form_Anh;
                AllData = AllData + ';;;m;;;' + TimKiem  + ';;;m;;;' + XungHoId;
                AllData = AllData + ';;;m;;;1'
                //alert (AllData);
                $.ajax
                ({
                    url: 'index_files/themdanhba_ajax_themdanhba.php',
                    type: "POST",
                    data: 'AllData=' + AllData,
                    success: function (data)
                    {
                        if (data.length >0) {alert (data);}
                        else {window.location.reload(); }
                        
                    },
                    error: function (e)
                    {
                        console.log(e.message);
                    }
                });
            }
        }
    },
    form_LuaChon_LoadThongTin: function(NoiDung,Id,NoiDung_Caption,Stt)
    {
        var FullNameId = '#form_' + NoiDung + '_FullName_Input';
        var ShortNameId = '#form_' + NoiDung + '_ShortName_Input';
        var IdId = '#form_' + NoiDung + '_Id_Input';
        
        var FullNameId2 = '#GoiY_' + NoiDung + '_FullName_' + Stt;
        var ShortNameId2 = '#GoiY_' + NoiDung + '_ShortName_' + Stt;
        var IdId2 = '#GoiY_' + NoiDung + '_Id_' + Stt;
        
        $(FullNameId).value = $(FullNameId2).value;
        $(ShortNameId).value = $(ShortNameId2).value;
        $(IdId).value = $(IdId2).value;
        
        var DivId = '#form_' + NoiDung + '_Input';
        if (Id ==0) 
        {
            $(DivId).html(NoiDung_Caption);
            $(FullNameId).focus();
        }
        else
        {
            $(DivId).html('<span style="color:green;">' + $(FullNameId2).value + '</span>');
            form_Input_Click(NoiDung);
        }
        
        var SumId = "#GoiY_" + NoiDung + "_Sum";
        var Sum = parseInt($(SumId).value);
        for (var i=1;i<=Sum;i++)
        {
            var DataDiv = "#form_GoiY_Data_Div_" + NoiDung + "_"  + i;
            $(DataDiv).classList.remove('form_GoiY_Data_Div_Selected');
            $(DataDiv).classList.add('form_GoiY_Data_Div_NotSelected');
        }
        
        var DataDiv = "#form_GoiY_Data_Div_" + NoiDung + "_"  + Stt;
        $(DataDiv).classList.remove('form_GoiY_Data_Div_NotSelected');
        $(DataDiv).classList.add('form_GoiY_Data_Div_Selected');
    }
}