            function copyToClipboard(NoiDung) 
        	{
        		var $temp = $("<input type='text'>");
        		$("body").append($temp);
        		$temp.val("0" + NoiDung).select();
        		document.execCommand("copy");
        		$temp.remove();
        	}
        	
        	function copyToClipboardNot0(NoiDung) 
        	{
        		var $temp = $("<textarea>");
                var brRegex = /<br\s*[\/]?>/gi;
                $("body").append($temp);
                $temp.val(NoiDung.replace(brRegex, "\r\n")).select();
                document.execCommand("copy");
                $temp.remove();
        	}
            
            function DanhBa_ChiTiet222(Nd,Id)
            {
                //1: all
                //2. lich su
                //3: search
                //4: star
                //5: sinh nhat
                if (Nd ==1)
                {
                    var VT = Data_ALL_Id_Array.indexOf(Id,1);
                    var AvatarVer = Data_ALL_AvatarVer_Array[VT]
                    var HoVaTen = Data_ALL_HoVaTen_Array[VT];
                    var Ten = Data_ALL_Ten_Array[VT];
                    var XungHoId = Data_ALL_XungHoId_Array[VT];
                    var TimKiem = Data_ALL_TimKiem_Array[VT];
                    
                    var NgaySinh = Data_ALL_NgaySinh_Array[VT];
                    var ThangSinh = Data_ALL_ThangSinh_Array[VT];
                    var NamSinh = Data_ALL_NamSinh_Array[VT];
                    
                    var Email = Data_ALL_Email_Array[VT];
                    var DiaChi = Data_ALL_DiaChi_Array[VT];
                    var Star = Data_ALL_Star_Array[VT];
                    
                    var DT1 = Data_ALL_DT1_Array[VT];
                    var DT2 = Data_ALL_DT2_Array[VT];
                    var DT3 = Data_ALL_DT3_Array[VT];
                    
                    var DonVi1Id = Data_ALL_DonVi1Id_Array[VT];
                    var DonVi2Id = Data_ALL_DonVi2Id_Array[VT];
                    var PhongBanId = Data_ALL_PhongBanId_Array[VT];
                    var TinhId = Data_ALL_TinhId_Array[VT];
                    var HuyenTPId = Data_ALL_HuyenTPId_Array[VT];
                    var PhuongXaId = Data_ALL_PhuongXaId_Array[VT];
                }
                
                if (Nd ==2)
                {
                    var VT = Data_LS_Id_Array.indexOf(Id,1);
                    var AvatarVer = Data_LS_AvatarVer_Array[VT]
                    var HoVaTen = Data_LS_HoVaTen_Array[VT];
                    var Ten = Data_LS_Ten_Array[VT];
                    var XungHoId = Data_LS_XungHoId_Array[VT];
                    var TimKiem = Data_LS_TimKiem_Array[VT];
                    
                    var NgaySinh = Data_LS_NgaySinh_Array[VT];
                    var ThangSinh = Data_LS_ThangSinh_Array[VT];
                    var NamSinh = Data_LS_NamSinh_Array[VT];
                    
                    var Email = Data_LS_Email_Array[VT];
                    var DiaChi = Data_LS_DiaChi_Array[VT];
                    var Star = Data_LS_Star_Array[VT];
                    
                    var DT1 = Data_LS_DT1_Array[VT];
                    var DT2 = Data_LS_DT2_Array[VT];
                    var DT3 = Data_LS_DT3_Array[VT];
                    
                    var DonVi1Id = Data_LS_DonVi1Id_Array[VT];
                    var DonVi2Id = Data_LS_DonVi2Id_Array[VT];
                    var PhongBanId = Data_LS_PhongBanId_Array[VT];
                    var TinhId = Data_LS_TinhId_Array[VT];
                    var HuyenTPId = Data_LS_HuyenTPId_Array[VT];
                    var PhuongXaId = Data_LS_PhuongXaId_Array[VT];
                }
                
                
                if (Nd ==6)
                {
                    var VT = Data_LS2_Id_Array.indexOf(Id,1);
                    var AvatarVer = Data_LS2_AvatarVer_Array[VT]
                    var HoVaTen = Data_LS2_HoVaTen_Array[VT];
                    var Ten = Data_LS2_Ten_Array[VT];
                    var XungHoId = Data_LS2_XungHoId_Array[VT];
                    var TimKiem = Data_LS2_TimKiem_Array[VT];
                    
                    var NgaySinh = Data_LS2_NgaySinh_Array[VT];
                    var ThangSinh = Data_LS2_ThangSinh_Array[VT];
                    var NamSinh = Data_LS2_NamSinh_Array[VT];
                    
                    var Email = Data_LS2_Email_Array[VT];
                    var DiaChi = Data_LS2_DiaChi_Array[VT];
                    var Star = Data_LS2_Star_Array[VT];
                    
                    var DT1 = Data_LS2_DT1_Array[VT];
                    var DT2 = Data_LS2_DT2_Array[VT];
                    var DT3 = Data_LS2_DT3_Array[VT];
                    
                    var DonVi1Id = Data_LS2_DonVi1Id_Array[VT];
                    var DonVi2Id = Data_LS2_DonVi2Id_Array[VT];
                    var PhongBanId = Data_LS2_PhongBanId_Array[VT];
                    var TinhId = Data_LS2_TinhId_Array[VT];
                    var HuyenTPId = Data_LS2_HuyenTPId_Array[VT];
                    var PhuongXaId = Data_LS2_PhuongXaId_Array[VT];
                }
                
                
                if (Nd ==3)
                {
                    var VT = Data_Sea_Id_Array.indexOf(Id,1);
                    var AvatarVer = Data_Sea_AvatarVer_Array[VT]
                    var HoVaTen = Data_Sea_HoVaTen_Array[VT];
                    var Ten = Data_Sea_Ten_Array[VT];
                    var XungHoId = Data_Sea_XungHoId_Array[VT];
                    var TimKiem = Data_Sea_TimKiem_Array[VT];
                    
                    var NgaySinh = Data_Sea_NgaySinh_Array[VT];
                    var ThangSinh = Data_Sea_ThangSinh_Array[VT];
                    var NamSinh = Data_Sea_NamSinh_Array[VT];
                    
                    var Email = Data_Sea_Email_Array[VT];
                    var DiaChi = Data_Sea_DiaChi_Array[VT];
                    var Star = Data_Sea_Star_Array[VT];
                    
                    var DT1 = Data_Sea_DT1_Array[VT];
                    var DT2 = Data_Sea_DT2_Array[VT];
                    var DT3 = Data_Sea_DT3_Array[VT];
                    
                    var DonVi1Id = Data_Sea_DonVi1Id_Array[VT];
                    var DonVi2Id = Data_Sea_DonVi2Id_Array[VT];
                    var PhongBanId = Data_Sea_PhongBanId_Array[VT];
                    var TinhId = Data_Sea_TinhId_Array[VT];
                    var HuyenTPId = Data_Sea_HuyenTPId_Array[VT];
                    var PhuongXaId = Data_Sea_PhuongXaId_Array[VT];
                }
                
                if (Nd ==4)
                {
                    var VT = Data_STA_Id_Array.indexOf(Id,1);
                    var AvatarVer = Data_STA_AvatarVer_Array[VT]
                    var HoVaTen = Data_STA_HoVaTen_Array[VT];
                    var Ten = Data_STA_Ten_Array[VT];
                    var XungHoId = Data_STA_XungHoId_Array[VT];
                    var TimKiem = Data_STA_TimKiem_Array[VT];
                    
                    var NgaySinh = Data_STA_NgaySinh_Array[VT];
                    var ThangSinh = Data_STA_ThangSinh_Array[VT];
                    var NamSinh = Data_STA_NamSinh_Array[VT];
                    
                    var Email = Data_STA_Email_Array[VT];
                    var DiaChi = Data_STA_DiaChi_Array[VT];
                    var Star = Data_STA_Star_Array[VT];
                    
                    var DT1 = Data_STA_DT1_Array[VT];
                    var DT2 = Data_STA_DT2_Array[VT];
                    var DT3 = Data_STA_DT3_Array[VT];
                    
                    var DonVi1Id = Data_STA_DonVi1Id_Array[VT];
                    var DonVi2Id = Data_STA_DonVi2Id_Array[VT];
                    var PhongBanId = Data_STA_PhongBanId_Array[VT];
                    var TinhId = Data_STA_TinhId_Array[VT];
                    var HuyenTPId = Data_STA_HuyenTPId_Array[VT];
                    var PhuongXaId = Data_STA_PhuongXaId_Array[VT];
                }
                
                if (Nd ==5)
                {
                    var VT = Data_SN_Id_Array.indexOf(Id,1);
                    var AvatarVer = Data_SN_AvatarVer_Array[VT]
                    var HoVaTen = Data_SN_HoVaTen_Array[VT];
                    var Ten = Data_SN_Ten_Array[VT];
                    var XungHoId = Data_SN_XungHoId_Array[VT];
                    var TimKiem = Data_SN_TimKiem_Array[VT];
                    
                    var NgaySinh = Data_SN_NgaySinh_Array[VT];
                    var ThangSinh = Data_SN_ThangSinh_Array[VT];
                    var NamSinh = Data_SN_NamSinh_Array[VT];
                    
                    var Email = Data_SN_Email_Array[VT];
                    var DiaChi = Data_SN_DiaChi_Array[VT];
                    var Star = Data_SN_Star_Array[VT];
                    
                    var DT1 = Data_SN_DT1_Array[VT];
                    var DT2 = Data_SN_DT2_Array[VT];
                    var DT3 = Data_SN_DT3_Array[VT];
                    
                    var DonVi1Id = Data_SN_DonVi1Id_Array[VT];
                    var DonVi2Id = Data_SN_DonVi2Id_Array[VT];
                    var PhongBanId = Data_SN_PhongBanId_Array[VT];
                    var TinhId = Data_SN_TinhId_Array[VT];
                    var HuyenTPId = Data_SN_HuyenTPId_Array[VT];
                    var PhuongXaId = Data_SN_PhuongXaId_Array[VT];
                }
                
                $('#ChiTiet_Id').val(Id);
                
                History_Add(Id);
                setTimeout(function(){History_Reload();},1000);
                
                
                if (Star == 1)
                {
                    $('#ChiTiet_Star_Image').removeClass('ThemMoi_Star_InActive');
                    $('#ChiTiet_Star_Image').addClass('ThemMoi_Star_Active');
                }
                else
                {
                    $('#ChiTiet_Star_Image').removeClass('ThemMoi_Star_Active');
                    $('#ChiTiet_Star_Image').addClass('ThemMoi_Star_InActive');
                }
                
                
                
                
                
                var Tinh = DSTinh_FullName_Array[DSTinh_Id_Array.indexOf(TinhId,1)];
                var HuyenTP = DSHuyenTP_FullName_Array[DSHuyenTP_Id_Array.indexOf(HuyenTPId,1)];
                var PhuongXa = DSPX_FullName_Array[DSPX_Id_Array.indexOf(PhuongXaId,1)];
                
                
                var TTCopy2 = 'onclick="copyToClipboardNot0(';
                TTCopy2 = TTCopy2 + "'";
                TTCopy2 = TTCopy2 + HoVaTen + '<br>SĐT:' + DT1;
                if (DT2 !== '0' && DT2 !== ''){TTCopy2 = TTCopy2 + '<br>SĐT2:' + DT2;}
                if (DT3 !== '0' && DT3 !== ''){TTCopy2 = TTCopy2 + '<br>SĐT3:' + DT3;}
                
                var TTCopy3 = TTCopy2;
                if (DiaChi !== '0'){TTCopy3 = TTCopy3 + '<br>' + DiaChi;}
                
                var PhongBan = DSPB_FullName_Array[DSPB_Id_Array.indexOf(PhongBanId,1)];
                var DonVi1 = DSDonVi_FullName_Array[DSDonVi_Id_Array.indexOf(DonVi1Id,1)];
                var DonVi2 = DSDonVi_FullName_Array[DSDonVi_Id_Array.indexOf(DonVi2Id,1)];
                
                if (DSPB_Id_Array.indexOf(PhongBanId,1) > -1) {TTCopy3 = TTCopy3 + '<br>' + PhongBan;}
                if (DSDonVi_Id_Array.indexOf(DonVi1Id,1) > -1){TTCopy3 = TTCopy3 + '<br>' + DonVi1;}
                if (DSDonVi_Id_Array.indexOf(DonVi2Id,1) > -1){TTCopy3 = TTCopy3 + '<br>' + DonVi2;}
                
                
                var DiaChi_Full = '';
                if (DiaChi !== '0' && DiaChi !== "")
                {
                    DiaChi_Full = DiaChi;
                }
                
                if (DSPX_Id_Array.indexOf(PhuongXaId,1) > -1)
                {
                    if (DiaChi_Full =="")
                    {
                      DiaChi_Full = PhuongXa;
                    }
                    else
                    {
                      DiaChi_Full = DiaChi_Full + ", " + PhuongXa;
                    }
                    
                }
                if (DSHuyenTP_Id_Array.indexOf(HuyenTPId,1) > -1) 
                {
                    if (DiaChi_Full ==""){DiaChi_Full = HuyenTP;}
                    else {
                    DiaChi_Full = DiaChi_Full + ', ' + HuyenTP;}
                }
                if (DSTinh_Id_Array.indexOf(TinhId,1) > -1) 
                {
                    if (DiaChi_Full ==""){DiaChi_Full = Tinh;}
                    else {
                    DiaChi_Full = DiaChi_Full + ', ' + Tinh;}
                }
                if (DiaChi_Full !==""){TTCopy3 = TTCopy3 + '<br>' + DiaChi_Full;}
                
                
                TTCopy2 = TTCopy2 + "'";
                TTCopy2 = TTCopy2 + ');"';
                
                TTCopy3 = TTCopy3 + "'";
                TTCopy3 = TTCopy3 + ');"';
                
                $('#ChiTiet_Copy_Input').html('');
                var TTCopy = '<a href="javascript:void(0);" ' + TTCopy2 + '><img src="themes/img/copy_green.svg" style="height:20px;" alt="copy"></a>';
                $('#ChiTiet_Copy_Input').append(TTCopy);
                
                var TTCopy = '<a href="javascript:void(0);" ' + TTCopy3 + '><img src="themes/img/copy_green.svg" style="height:25px;margin-left:10px;" alt="copy"></a>';
                $('#ChiTiet_Copy_Input').append(TTCopy);
                
                
                $('#ChiTiet_DiaChi_Input').text(DiaChi_Full);
                
                
                $('#ChiTiet_Email_Input').text(Email);
                
				
				var DVDV = "";
                if (DSPB_Id_Array.indexOf(PhongBanId,1) > -1) {DVDV = PhongBan;}
                if (DSDonVi_Id_Array.indexOf(DonVi1Id,1) > -1) 
                {
                    if (DVDV ==""){DVDV = DonVi1;}
                    else {
                    DVDV = DVDV + ', ' + DonVi1;}
                }
                
                if (DSDonVi_Id_Array.indexOf(DonVi2Id,1) > -1) 
                {
                    if (DVDV ==""){DVDV = DonVi2;}
                    else {
                    DVDV = DVDV + ', ' + DonVi2;}
                    
                }
                $('#ChiTiet_DonVi_Input').text(DVDV);
                
                
                
            }