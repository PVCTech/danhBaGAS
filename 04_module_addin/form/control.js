APP.form = APP.form || {};
APP.form.lienHeId = '';
APP.form.mode = 'addNew';
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
    Edit_Delete: function()
    {
        if (confirm("Bạn có chắc chắn muốn xóa!") == true)
        {
            var AllData = 'cuongpv;;;m;;;' + $('#form_Id').value;
            $.ajax
            ({
                url: 'index_files/themdanhba_ajax_xoadanhba.php',
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
    },
    EditDanhBa: function(Nd,Id)
    {
        //1: all
        //2. lich su
        //3: search
        //4: star
        //5: sinh nhat
        $('#form_EditNoiDung').value = Nd;
        if (Nd ==1)
        {
            var VT = Data_ALL_Id_Array.indexOf(Id);
            var avatarVer = Data_ALL_avatarVer_Array[VT]
            var HoVaTen = Data_ALL_HoVaTen_Array[VT];
            var Ten = Data_ALL_Ten_Array[VT];
            var XungHoId = Data_ALL_XungHoId_Array[VT];
            var TimKiem = Data_ALL_TimKiem_Array[VT];
            
            var ngaySinh = Data_ALL_ngaySinh_Array[VT];
            var thangSinh = Data_ALL_thangSinh_Array[VT];
            var namSinh = Data_ALL_namSinh_Array[VT];
            
            var email = Data_ALL_email_Array[VT];
            var diaChi = Data_ALL_diaChi_Array[VT];
            var Star = Data_ALL_Star_Array[VT];
            
            var DT1 = Data_ALL_DT1_Array[VT];
            var DT2 = Data_ALL_DT2_Array[VT];
            var DT3 = Data_ALL_DT3_Array[VT];
            
            var donVi1Id = Data_ALL_donVi1Id_Array[VT];
            var donVi2Id = Data_ALL_donVi2Id_Array[VT];
            var PhongBanId = Data_ALL_PhongBanId_Array[VT];
            var tinhId = Data_ALL_tinhId_Array[VT];
            var HuyenTPId = Data_ALL_HuyenTPId_Array[VT];
            var phuongXaId = Data_ALL_phuongXaId_Array[VT];
        }
        
        if (Nd ==2)
        {
            var VT = Data_LS_Id_Array.indexOf(Id);
            var avatarVer = Data_LS_avatarVer_Array[VT]
            var HoVaTen = Data_LS_HoVaTen_Array[VT];
            var Ten = Data_LS_Ten_Array[VT];
            var XungHoId = Data_LS_XungHoId_Array[VT];
            var TimKiem = Data_LS_TimKiem_Array[VT];
            
            var ngaySinh = Data_LS_ngaySinh_Array[VT];
            var thangSinh = Data_LS_thangSinh_Array[VT];
            var namSinh = Data_LS_namSinh_Array[VT];
            
            var email = Data_LS_email_Array[VT];
            var diaChi = Data_LS_diaChi_Array[VT];
            var Star = Data_LS_Star_Array[VT];
            
            var DT1 = Data_LS_DT1_Array[VT];
            var DT2 = Data_LS_DT2_Array[VT];
            var DT3 = Data_LS_DT3_Array[VT];
            
            var donVi1Id = Data_LS_donVi1Id_Array[VT];
            var donVi2Id = Data_LS_donVi2Id_Array[VT];
            var PhongBanId = Data_LS_PhongBanId_Array[VT];
            var tinhId = Data_LS_tinhId_Array[VT];
            var HuyenTPId = Data_LS_HuyenTPId_Array[VT];
            var phuongXaId = Data_LS_phuongXaId_Array[VT];
        }
        
        
        if (Nd ==6)
        {
            var VT = Data_LS2_Id_Array.indexOf(Id);
            var avatarVer = Data_LS2_avatarVer_Array[VT]
            var HoVaTen = Data_LS2_HoVaTen_Array[VT];
            var Ten = Data_LS2_Ten_Array[VT];
            var XungHoId = Data_LS2_XungHoId_Array[VT];
            var TimKiem = Data_LS2_TimKiem_Array[VT];
            
            var ngaySinh = Data_LS2_ngaySinh_Array[VT];
            var thangSinh = Data_LS2_thangSinh_Array[VT];
            var namSinh = Data_LS2_namSinh_Array[VT];
            
            var email = Data_LS2_email_Array[VT];
            var diaChi = Data_LS2_diaChi_Array[VT];
            var Star = Data_LS2_Star_Array[VT];
            
            var DT1 = Data_LS2_DT1_Array[VT];
            var DT2 = Data_LS2_DT2_Array[VT];
            var DT3 = Data_LS2_DT3_Array[VT];
            
            var donVi1Id = Data_LS2_donVi1Id_Array[VT];
            var donVi2Id = Data_LS2_donVi2Id_Array[VT];
            var PhongBanId = Data_LS2_PhongBanId_Array[VT];
            var tinhId = Data_LS2_tinhId_Array[VT];
            var HuyenTPId = Data_LS2_HuyenTPId_Array[VT];
            var phuongXaId = Data_LS2_phuongXaId_Array[VT];
        }
        
        
        if (Nd ==3)
        {
            var VT = Data_Sea_Id_Array.indexOf(Id);
            var avatarVer = Data_Sea_avatarVer_Array[VT]
            var HoVaTen = Data_Sea_HoVaTen_Array[VT];
            var Ten = Data_Sea_Ten_Array[VT];
            var XungHoId = Data_Sea_XungHoId_Array[VT];
            var TimKiem = Data_Sea_TimKiem_Array[VT];
            
            var ngaySinh = Data_Sea_ngaySinh_Array[VT];
            var thangSinh = Data_Sea_thangSinh_Array[VT];
            var namSinh = Data_Sea_namSinh_Array[VT];
            
            var email = Data_Sea_email_Array[VT];
            var diaChi = Data_Sea_diaChi_Array[VT];
            var Star = Data_Sea_Star_Array[VT];
            
            var DT1 = Data_Sea_DT1_Array[VT];
            var DT2 = Data_Sea_DT2_Array[VT];
            var DT3 = Data_Sea_DT3_Array[VT];
            
            var donVi1Id = Data_Sea_donVi1Id_Array[VT];
            var donVi2Id = Data_Sea_donVi2Id_Array[VT];
            var PhongBanId = Data_Sea_PhongBanId_Array[VT];
            var tinhId = Data_Sea_tinhId_Array[VT];
            var HuyenTPId = Data_Sea_HuyenTPId_Array[VT];
            var phuongXaId = Data_Sea_phuongXaId_Array[VT];
        }
        
        if (Nd ==4)
        {
            var VT = Data_STA_Id_Array.indexOf(Id);
            var avatarVer = Data_STA_avatarVer_Array[VT]
            var HoVaTen = Data_STA_HoVaTen_Array[VT];
            var Ten = Data_STA_Ten_Array[VT];
            var XungHoId = Data_STA_XungHoId_Array[VT];
            var TimKiem = Data_STA_TimKiem_Array[VT];
            
            var ngaySinh = Data_STA_ngaySinh_Array[VT];
            var thangSinh = Data_STA_thangSinh_Array[VT];
            var namSinh = Data_STA_namSinh_Array[VT];
            
            var email = Data_STA_email_Array[VT];
            var diaChi = Data_STA_diaChi_Array[VT];
            var Star = Data_STA_Star_Array[VT];
            
            var DT1 = Data_STA_DT1_Array[VT];
            var DT2 = Data_STA_DT2_Array[VT];
            var DT3 = Data_STA_DT3_Array[VT];
            
            var donVi1Id = Data_STA_donVi1Id_Array[VT];
            var donVi2Id = Data_STA_donVi2Id_Array[VT];
            var PhongBanId = Data_STA_PhongBanId_Array[VT];
            var tinhId = Data_STA_tinhId_Array[VT];
            var HuyenTPId = Data_STA_HuyenTPId_Array[VT];
            var phuongXaId = Data_STA_phuongXaId_Array[VT];
        }
        
        if (Nd ==5)
        {
            var VT = Data_SN_Id_Array.indexOf(Id);
            var avatarVer = Data_SN_avatarVer_Array[VT]
            var HoVaTen = Data_SN_HoVaTen_Array[VT];
            var Ten = Data_SN_Ten_Array[VT];
            var XungHoId = Data_SN_XungHoId_Array[VT];
            var TimKiem = Data_SN_TimKiem_Array[VT];
            
            var ngaySinh = Data_SN_ngaySinh_Array[VT];
            var thangSinh = Data_SN_thangSinh_Array[VT];
            var namSinh = Data_SN_namSinh_Array[VT];
            
            var email = Data_SN_email_Array[VT];
            var diaChi = Data_SN_diaChi_Array[VT];
            var Star = Data_SN_Star_Array[VT];
            
            var DT1 = Data_SN_DT1_Array[VT];
            var DT2 = Data_SN_DT2_Array[VT];
            var DT3 = Data_SN_DT3_Array[VT];
            
            var donVi1Id = Data_SN_donVi1Id_Array[VT];
            var donVi2Id = Data_SN_donVi2Id_Array[VT];
            var PhongBanId = Data_SN_PhongBanId_Array[VT];
            var tinhId = Data_SN_tinhId_Array[VT];
            var HuyenTPId = Data_SN_HuyenTPId_Array[VT];
            var phuongXaId = Data_SN_phuongXaId_Array[VT];
        }
        
        
        $('#form_Id').value = Id;
        $('#form_Star_Input').value = Star;
        if (Star == 1)
        {
            $('#form_Star_Image').classList.remove('form_Star_InActive');
            $('#form_Star_Image').classList.add('form_Star_Active');
        }
        else
        {
            $('#form_Star_Image').classList.remove('form_Star_Active');
            $('#form_Star_Image').classList.add('form_Star_InActive');
        }
        
        $('#form_HoVaTen_Input').value = HoVaTen;        
        $('#form_Ten_Input').value = Ten;        
        $('#form_TimKiem_Input').value = TimKiem;        
        $('#form_XungHo_Input').value = XungHoId;
        $('#form_XungHo_Input').dispatchEvent(new Event('change', { bubbles: true }));
        
        
        $('#form_DienThoai1_Input').value = DT1;        
        $('#form_DienThoai2_Input').value = DT2;        
        $('#form_DienThoai3_Input').value = DT3;        
        $('#form_ngaySinh_Input').value = ngaySinh;        
        $('#form_thangSinh_Input').value = thangSinh;        
        $('#form_namSinh_Input').value = namSinh;        
        $('#form_diaChi_Input').value = diaChi;        
        $('#form_email_Input').value = email;
        
        
        var HTML = '';
        if (parseInt(avatarVer)==0)
        {
            HTML = HTML  + '<img src="index_files/image_inactive.svg?version=1"  alt="avatar" style="width:100%;border-radius:10%;border:0.5px solid rgba(255,255,255,0.33);">';
        }
        else
        {
            HTML = HTML  + '<img src="index_files/avatar_showanh.php?id=' + Id + '&version=' + avatarVer + '" class="avatar" alt="avatar">';
        }
        HTML = HTML;
        $('#form_Anh_Show').html(HTML);
        
        
        
        var DonVi1 = DSDonVi_FullName_Array[DSDonVi_Id_Array.indexOf(donVi1Id,1)];
        var DonVi1_Short = DSDonVi_ShortName_Array[DSDonVi_Id_Array.indexOf(donVi1Id,1)];
        if(DSDonVi_Id_Array.indexOf(donVi1Id,1) > -1)
        {
            $('#form_DonVi_Input').html('<span style="color:green;">' + DonVi1 + '</span>');
        }
        else
        {
            $('#form_DonVi_Input').text('Chọn Đơn vị/nhóm');
        }
        $('#form_DonVi_Id_Input').value = donVi1Id;
        $('#form_DonVi_FullName_Input').value = DonVi1;
        $('#form_DonVi_ShortName_Input').value = DonVi1_Short;
        var DataDiv = "#form_GoiY_Data_Div_DonVi_"  + Id;
        $(DataDiv).classList.remove('form_GoiY_Data_Div_NotSelected');
        $(DataDiv).classList.add('form_GoiY_Data_Div_Selected');
        
        
        var DonVi2 = DSDonVi_FullName_Array[DSDonVi_Id_Array.indexOf(donVi2Id,1)];
        var DonVi2_Short = DSDonVi_ShortName_Array[DSDonVi_Id_Array.indexOf(donVi2Id,1)];
        if(DSDonVi_Id_Array.indexOf(donVi2Id,1) > -1)
        {
            $('#form_DonVi2_Input').html('<span style="color:green;">' + DonVi2 + '</span>');
        }
        else
        {
            $('#form_DonVi2_Input').text('Chọn Đơn vị/nhóm');
        }
        $('#form_DonVi2_Id_Input').value = donVi2Id;
        $('#form_DonVi2_FullName_Input').value = DonVi2;
        $('#form_DonVi2_ShortName_Input').value = DonVi2_Short;
        var DataDiv = "#form_GoiY_Data_Div_DonVi2_"  + Id;
        $(DataDiv).classList.remove('form_GoiY_Data_Div_NotSelected');
        $(DataDiv).classList.add('form_GoiY_Data_Div_Selected');
        
        
        var PhongBan = DSPB_FullName_Array[DSPB_Id_Array.indexOf(PhongBanId,1)];
        var PhongBan_Short = DSPB_ShortName_Array[DSPB_Id_Array.indexOf(PhongBanId,1)];
        if(DSPB_Id_Array.indexOf(PhongBanId,1) > -1)
        {
            $('#form_PhongBan_Input').html('<span style="color:green;">' + PhongBan + '</span>');
        }
        else
        {
            $('#form_PhongBan_Input').text('Chọn Phòng ban');
        }
        $('#form_PhongBan_Id_Input').value = PhongBanId;
        $('#form_PhongBan_FullName_Input').value = PhongBan;
        $('#form_PhongBan_ShortName_Input').value = PhongBan_Short;
        var DataDiv = "#form_GoiY_Data_Div_PhongBan_"  + Id;
        $(DataDiv).classList.remove('form_GoiY_Data_Div_NotSelected');
        $(DataDiv).classList.add('form_GoiY_Data_Div_Selected');
        
        
        var Tinh = DSTinh_FullName_Array[DSTinh_Id_Array.indexOf(tinhId,1)];
        var Tinh_Short = DSTinh_ShortName_Array[DSTinh_Id_Array.indexOf(tinhId,1)];
        if(DSTinh_Id_Array.indexOf(tinhId,1) > -1)
        {
            $('#form_Tinh_Input').html('<span style="color:green;">' + Tinh + '</span>');
        }
        else
        {
            $('#form_Tinh_Input').text('Chọn Tỉnh');
        }
        $('#form_Tinh_Id_Input').value = tinhId;
        $('#form_Tinh_FullName_Input').value = Tinh;
        $('#form_Tinh_ShortName_Input').value = Tinh_Short;
        var DataDiv = "#form_GoiY_Data_Div_Tinh_"  + Id;
        $(DataDiv).classList.remove('form_GoiY_Data_Div_NotSelected');
        $(DataDiv).classList.add('form_GoiY_Data_Div_Selected');
        
        var HuyenTP = DSHuyenTP_FullName_Array[DSHuyenTP_Id_Array.indexOf(HuyenTPId,1)];
        var HuyenTP_Short = DSHuyenTP_ShortName_Array[DSHuyenTP_Id_Array.indexOf(HuyenTPId,1)];
        if(DSHuyenTP_Id_Array.indexOf(HuyenTPId,1) > -1)
        {
            $('#form_HuyenTP_Input').html('<span style="color:green;">' + HuyenTP + '</span>');
        }
        else
        {
            $('#form_HuyenTP_Input').text('Chọn Huyện/TP');
        }
        $('#form_HuyenTP_Id_Input').value = HuyenTPId;
        $('#form_HuyenTP_FullName_Input').value = HuyenTP;
        $('#form_HuyenTP_ShortName_Input').value = HuyenTP_Short;
        var DataDiv = "#form_GoiY_Data_Div_HuyenTP_"  + Id;
        $(DataDiv).classList.remove('form_GoiY_Data_Div_NotSelected');
        $(DataDiv).classList.add('form_GoiY_Data_Div_Selected');
        
        
        
        
        var PhuongXa = DSPX_FullName_Array[DSPX_Id_Array.indexOf(phuongXaId,1)];
        var PhuongXa_Short = DSPX_ShortName_Array[DSPX_Id_Array.indexOf(phuongXaId,1)];
        if(DSPX_Id_Array.indexOf(phuongXaId,1) > -1)
        {
            $('#form_PhuongXa_Input').html('<span style="color:green;">' + PhuongXa + '</span>');
        }
        else
        {
            $('#form_PhuongXa_Input').text('Chọn Phường/Xã');
        }
        $('#form_PhuongXa_Id_Input').value = phuongXaId;
        $('#form_PhuongXa_FullName_Input').value = PhuongXa;
        $('#form_PhuongXa_ShortName_Input').value = PhuongXa_Short;
        var DataDiv = "#form_GoiY_Data_Div_PhuongXa_"  + Id;
        $(DataDiv).classList.remove('form_GoiY_Data_Div_NotSelected');
        $(DataDiv).classList.add('form_GoiY_Data_Div_Selected');
        
        
        $('#New_Div').show(0);
        $('#DanhBaAll_Div').hide();
        $('#SinhNhat_Div').hide();
        $('#Window_Caption').text('Chỉnh sửa liên lạc');
        $('#Search_ChonNhom_Div').hide();
        $('#Search_KetQua_Div').hide();
        AddScreen('ThemDanhBa');
        
        
        $('#DanhBaStar_Div').hide(0);
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
        var SDT1 = $('#form_DienThoai1_Input').value;
        var SDT2 = $('#form_DienThoai2_Input').value;
        var SDT3 = $('#form_DienThoai3_Input').value;
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