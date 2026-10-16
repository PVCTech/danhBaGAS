		class LienHe
		{
           constructor(Id,Star,
		   TenHienThi,XungHoId,Ten,
		   NgaySinh,ThangSinh,NamSinh,
		   DonVi1Id,PhongBan1Id,
		   DonVi2Id,PhongBan2Id,
		   TinhId,HuyenThanhPhoId,PhuongXaId,
		   TimKiem,
		   SDT1,SDT2,SDT3,
		   AvatarId,Avatar,AvatarVersion,
		   Email,
		   DiaChi,
		   GhiChu)
           {
			   this.Id = Id;
			   this.Star = Star;
			   this.TenHienThi = TenHienThi;
               this.XungHoId = XungHoId;
               this.Ten = Ten;
			   
			   this.NgaySinh = NgaySinh;
			   this.ThangSinh = ThangSinh;
			   this.NamSinh = NamSinh;
			   
               this.DonVi1Id = DonVi1Id;
               this.PhongBan1Id = PhongBan1Id;
			   
               this.DonVi2Id = DonVi2Id;
			   this.PhongBan2Id = PhongBan2Id;
			   
			   this.TinhId =TinhId;
			   this.HuyenThanhPhoId = HuyenThanhPhoId;
			   this.PhuongXaId = PhuongXaId;
			   
               this.TimKiem = TimKiem;
			   
               
				this.SDT1 = ChuanHoaSDT(SDT1);
               this.SDT2 = ChuanHoaSDT(SDT2);
               this.SDT3 = ChuanHoaSDT(SDT3);
			   
			   this.AvatarId = AvatarId;
			   this.Avatar = Avatar;
			   this.AvatarVersion = AvatarVersion;
			   
			   this.Email =Email;
			   this.DiaChi = DiaChi;
			   this.GhiChu = GhiChu;
			}
			
			GetArrayId()
			{
				for (var i=0;i<DSLienHe.length;i++)
				{
				   if (this.Id == DSLienHe[i].Id)
				   {
					   return i;
					   break;
				   }
				}
				return -1;
			}
		   
			GetXungHo()
			{
				for (var i=0;i<DSXungHo.length;i++)
				{
				   if (this.XungHoId == DSXungHo[i].Id)
				   {
					   return DSXungHo[i].Ten;
					   break;
				   }
				}
				return '';
			}
			
			
			
			
			
			GetDonVi1()
			{
				for (var i=0;i<DSDonVi.length;i++)
				{
					if (parseInt(this.DonVi1Id) == parseInt(DSDonVi[i].Id))
					{
                       return DSDonVi[i].Ten;
					   break;
					}
				}
				return "";
			}
			
			GetPhongBan1()
			{
				for (var i=0;i<DSPhongBan.length;i++)
				{
					if (this.PhongBan1Id == DSPhongBan[i].Id)
					{
                       return DSPhongBan[i].Ten;
					   break;
					}
				}
				return "";
			}
		   
			GetDonVi2()
			{
				for (var i=0;i<DSDonVi.length;i++)
				{
					if (this.DonVi2Id == DSDonVi[i].Id)
					{
                       return DSDonVi[i].Ten;
					   break;
					}
				}
				return "";
			}
			
			GetPhongBan2()
			{
				for (var i=0;i<DSPhongBan.length;i++)
				{
					if (this.PhongBan2Id == DSPhongBan[i].Id)
					{
                       return DSPhongBan[i].Ten;
					   break;
					}
				}
				return "";
			}
           
		   
           
           toTR(Color)
           {
			   var Tr = '';
				Tr = Tr + '<tr onclick="DSLienHe[' + this.GetArrayId() + '].ShowChiTiet();">';
					Tr = Tr + '<td style="width:25%;padding:8px;border-bottom:0.3px solid rgba(0,0,0,0.3);">';
						if (this.Avatar =='' || this.Avatar === undefined) 
						{
							Tr = Tr + '<image src="data/avatar/avatar_star.svg" style="width:40px;">';
						}
						else
						{
							Tr = Tr + '<image src="' + this.Avatar + '" style="width:40px;">';
						}
					Tr = Tr + '</td>';
					
					Tr = Tr + '<td style="padding:8px;border-bottom:0.3px solid rgba(0,0,0,0.3);">';
						Tr = Tr + '<span style="color:' + Color + ';font-size:14px;font-weight:bold;">' + this.TenHienThi + '</span>';
						Tr = Tr + '<br><span style="color:rgba(0,0,0,0.5);font-size:12px;">' + this.SDT1 + ' - ' + this.SDT2 + '</span>';
					Tr = Tr + '</td>';
				Tr = Tr + '</tr>';
				$('#TableData').append(Tr);
           }
		   
		   
			ShowChiTiet()
			{
				//Họ và tên:
				$('#ChiTiet_HoVaTen_Input').html('');
                $('#ChiTiet_HoVaTen_Input').text(this.TenHienThi);
				
				//Phòng Ban, Đơn vị:
				var PbDvi = this.GetPhongBan1();
				if (PbDvi.length !=='') {PbDvi = PbDvi + ' ';}
				PbDvi = PbDvi + this.GetDonVi1();
				
				if (this.GetDonVi2() !=='') {PbDvi = PbDvi + ', ';}
				PbDvi = PbDvi + this.GetPhongBan2();
				if (this.GetPhongBan2() !=='') {PbDvi = PbDvi + ' ';}
				PbDvi = PbDvi + this.GetDonVi2();
                $('#ChiTiet_DonVi_Input').text(PbDvi );
				
				///Địa chỉ:
				var DiaChi_Full = '';
				if (this.DiaChi !== ''){DiaChi_Full = this.DiaChi;}
                                
                $('#ChiTiet_DiaChi_Input').text(DiaChi_Full);
				
				
				
				
				///Email:
				$('#ChiTiet_Email_Input').text(this.Email);
				
				///Điện thoại:
				if (this.SDT1 !== '')
                {
                    var HtmlDt = '<center><table><tr><td><a href="tel:' + this.SDT1 + '"><img src="assets/img/call.png" style="height:20px;" alt="call"></a></td>';
                    HtmlDt = HtmlDt + '<td><a href="tel:' + this.SDT1 + '"><font color="white">' + this.SDT1 + '</font></a></td>';
                    HtmlDt = HtmlDt + '<td><a href="javascript:void(0);" onclick="copyToClipboard('+ this.SDT1 +');"><img src="assets/img/copy.svg"  alt="copy" style="height:18px;margin-left:10px;"></a></td>';
                    HtmlDt = HtmlDt + '</tr></table></center>';
                    $('#ChiTiet_DienThoai1_Input').html(HtmlDt);
                    $('#ChiTiet_DienThoai1_Input').show();
                }else {$('#ChiTiet_DienThoai1_Input').hide();}
                
                
                if (this.SDT2 !== '')
                {
                    var HtmlDt = '<center><table><tr><td><a href="tel:' + this.SDT2 + '"><img src="assets/img/call.png" style="height:20px;" alt="call"></a></td>';
                    HtmlDt = HtmlDt + '<td><a href="tel:' + this.SDT2 + '"><font color="white">' + this.SDT2 + '</font></a></td>';
                    HtmlDt = HtmlDt + '<td><a href="javascript:void(0);" onclick="copyToClipboard('+ this.SDT2 +');"><img src="assets/img/copy.svg"  alt="copy" style="height:18px;margin-left:10px;"></a></td>';
                    HtmlDt = HtmlDt + '</tr></table></center>';
                    $('#ChiTiet_DienThoai2_Input').html(HtmlDt);
                    $('#ChiTiet_DienThoai2_Input').show();
                }
                else
                {
                    $('#ChiTiet_DienThoai2_Input').hide();
                }
                
                
                if (this.SDT3 !== '' && !isNaN(this.SDT3))
                {
                    var HtmlDt = '<center><table><tr><td><a href="tel:' + this.SDT3 + '"><img src="assets/img/call.png" style="height:20px;" alt="call"></a></td>';
                    HtmlDt = HtmlDt + '<td><a href="tel:' + this.SDT3 + '"><font color="white">' + this.SDT3 + '</font></a></td>';
                    HtmlDt = HtmlDt + '<td><a href="javascript:void(0);" onclick="copyToClipboard('+ this.SDT3 +');"><img src="assets/img/copy.svg" alt="copy" style="height:18px;margin-left:10px;"></a></td>';
                    HtmlDt = HtmlDt + '</tr></table></center>';
                    $('#ChiTiet_DienThoai3_Input').html(HtmlDt);
                    $('#ChiTiet_DienThoai3_Input').show();
                }
                else
                {$('#ChiTiet_DienThoai3_Input').hide();}
			
			
			
				//Avatar:
				if (this.Avatar =='' || this.Avatar === undefined) 
				{
					var HTML = '<image src="data/avatar/avatar_star.svg" style="height:95%;">';
				}
				else
				{
					var HTML = '<image src="' + this.Avatar + '" style="height:95%;">';
				}
                $('#ChiTiet_Anh_Show').html(HTML);
				
				////Ngày tháng năm sinh:
				var NTNSinh ='';
                if (this.NgaySinh ==0){} else {NTNSinh = NTNSinh + this.NgaySinh + '/';}
                
                if (NTNSinh == '')
                {
                    if (this.ThangSinh ==0){} else {NTNSinh = NTNSinh + this.ThangSinh + '/';}
                } 
                else 
                {NTNSinh = NTNSinh + this.ThangSinh + '/';}
                
                if (NTNSinh.length > 0) 
                {
                    if (NTNSinh == '')
                    {
                        if (this.NamSinh ==0){} else {NTNSinh = NTNSinh + this.NamSinh;}
                    }
                    else
                    {
                        NTNSinh = NTNSinh + this.NamSinh;
                    }
                    
                    if (NTNSinh.length > 0) {$('#ChiTiet_NgaySinh_Input').text('Ngày sinh: ' + NTNSinh);}
                    else {$('#ChiTiet_NgaySinh_Input').text('');}
                    
                }
                else 
                {
                    if (NTNSinh == '')
                    {
                        if (this.NamSinh ==0){} else {NTNSinh = NTNSinh + this.NamSinh;}
                    }
                    else
                    {
                        NTNSinh = NTNSinh + this.NamSinh;
                    }
                    
                    if (NTNSinh.length > 0) {$('#ChiTiet_NgaySinh_Input').text('Năm sinh: ' + NTNSinh);}
                    else {$('#ChiTiet_NgaySinh_Input').text('');}
                }
				
				$('#DivChe').show();
				$('#ChiTiet_Div').show();
		   }
		   
		   
		}
       
       
	
		function ChuanHoaSDT(SDT)
		{
			if (SDT.length > 10 && SDT.substring(0,2) =="84")
			{
			   SDT = SDT.substring(2,SDT.length);
			}
			
			if (SDT.substring(0,1) =="0"){}
			else {SDT = "0" + SDT;}
			if (SDT.length < 4) {SDT = '';}
			return SDT;
		}
	