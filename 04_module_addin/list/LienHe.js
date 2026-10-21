		class LienHe
		{
            constructor({Id,Star,
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
                GhiChu,
                lichSuTruyCap = {}
            })
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
               this.lichSuTruyCap = lichSuTruyCap;
			}
			
			GetArrayId()
			{
				for (var i=0;i<APP.cache.data.danhSachLienHe.length;i++)
				{
				   if (this.Id == APP.cache.data.danhSachLienHe[i].Id)
				   {
					   return i;
					   break;
				   }
				}
				return -1;
			}
		   
			GetXungHo()
			{
				for (var i=0;i<APP.cache.data.danhSachXungHo.length;i++)
				{
				   if (this.XungHoId == APP.cache.data.danhSachXungHo[i].Id)
				   {
					   return APP.cache.data.danhSachXungHo[i].Ten;
					   break;
				   }
				}
				return '';
			}
			
			
			
			
			
			GetDonVi1()
			{
				for (var i=0;i<APP.cache.data.danhSachDonVi.length;i++)
				{
					if (parseInt(this.DonVi1Id) == parseInt(APP.cache.data.danhSachDonVi[i].Id))
					{
                       return APP.cache.data.danhSachDonVi[i].Ten;
					   break;
					}
				}
				return "";
			}
			
			GetPhongBan1()
			{
				for (var i=0;i<APP.cache.data.danhSachPhongBan.length;i++)
				{
					if (this.PhongBan1Id == APP.cache.data.danhSachPhongBan[i].Id)
					{
                       return APP.cache.data.danhSachPhongBan[i].Ten;
					   break;
					}
				}
				return "";
			}
		   
			GetDonVi2()
			{
				for (var i=0;i<APP.cache.data.danhSachDonVi.length;i++)
				{
					if (this.DonVi2Id == APP.cache.data.danhSachDonVi[i].Id)
					{
                       return APP.cache.data.danhSachDonVi[i].Ten;
					   break;
					}
				}
				return "";
			}
			
			GetPhongBan2()
			{
				for (var i=0;i<APP.cache.data.danhSachPhongBan.length;i++)
				{
					if (this.PhongBan2Id == APP.cache.data.danhSachPhongBan[i].Id)
					{
                       return APP.cache.data.danhSachPhongBan[i].Ten;
					   break;
					}
				}
				return "";
			}
           
		   
           
           toTr(Color)
           {
			   var Tr = '';
				Tr = Tr + '<tr onclick="APP.detail.ui.render(APP.cache.data.danhSachLienHe[' + this.GetArrayId() + ']) ">';
					Tr = Tr + '<td style="width:25%;padding:8px;border-bottom:0.3px solid rgba(0,0,0,0.3);">';
						if (this.Avatar =='' || this.Avatar === undefined) 
						{
							Tr = Tr + '<image src="assets/img/avatar_star.svg" style="width:40px;">';
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
                return Tr;
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
	