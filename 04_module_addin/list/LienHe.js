		class LienHe
		{
            constructor({id,star,
                tenHienThi,xungHoId,Ten,
                ngaySinh,thangSinh,namSinh,
                donVi1Id,phongBan1Id,
                donVi2Id,phongBan2Id,
                tinhId,huyenThanhPhoId,phuongXaId,
                TimKiem,
                SDT1,SDT2,SDT3,
                avatarId,avatar,avatarVersion,
                email,
                diaChi,
                ghiChu,
                lichSuTruyCap = {}
            })
            {
			   this.id = id;
			   this.star = star;
			   this.tenHienThi = tenHienThi;
               this.xungHoId = xungHoId;
               this.ten = Ten;
			   
			   this.ngaySinh = ngaySinh;
			   this.thangSinh = thangSinh;
			   this.namSinh = namSinh;
			   
               this.donVi1Id = donVi1Id;
               this.phongBan1Id = phongBan1Id;
			   
               this.donVi2Id = donVi2Id;
			   this.phongBan2Id = phongBan2Id;
			   
			   this.tinhId =tinhId;
			   this.huyenThanhPhoId = huyenThanhPhoId;
			   this.phuongXaId = phuongXaId;
			   
               this.timKiem = TimKiem;
			   
               
				this.SDT1 = ChuanHoaSDT(SDT1);
               this.SDT2 = ChuanHoaSDT(SDT2);
               this.SDT3 = ChuanHoaSDT(SDT3);
			   
			   this.avatarId = avatarId;
			   this.avatar = avatar;
			   this.avatarVersion = avatarVersion;
			   
			   this.email =email;
			   this.diaChi = diaChi;
			   this.ghiChu = ghiChu;
               this.lichSuTruyCap = lichSuTruyCap;
			}
			
			GetArrayId()
			{
				for (var i=0;i<APP.cache.data.danhSachLienHe.length;i++)
				{
				   if (this.id == APP.cache.data.danhSachLienHe[i].id)
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
				   if (this.xungHoId == APP.cache.data.danhSachXungHo[i].id)
				   {
					   return APP.cache.data.danhSachXungHo[i].ten;
					   break;
				   }
				}
				return '';
			}
			
			
			
			
			
			GetDonVi1()
			{
				for (var i=0;i<APP.cache.data.danhSachDonVi.length;i++)
				{
					if (parseInt(this.donVi1Id) == parseInt(APP.cache.data.danhSachDonVi[i].id))
					{
                       return APP.cache.data.danhSachDonVi[i].ten;
					   break;
					}
				}
				return "";
			}
			
			GetPhongBan1()
			{
				for (var i=0;i<APP.cache.data.danhSachPhongBan.length;i++)
				{
					if (this.phongBan1Id == APP.cache.data.danhSachPhongBan[i].id)
					{
                       return APP.cache.data.danhSachPhongBan[i].ten;
					   break;
					}
				}
				return "";
			}
		   
			GetDonVi2()
			{
				for (var i=0;i<APP.cache.data.danhSachDonVi.length;i++)
				{
					if (this.donVi2Id == APP.cache.data.danhSachDonVi[i].id)
					{
                       return APP.cache.data.danhSachDonVi[i].ten;
					   break;
					}
				}
				return "";
			}
			
			GetPhongBan2()
			{
				for (var i=0;i<APP.cache.data.danhSachPhongBan.length;i++)
				{
					if (this.phongBan2Id == APP.cache.data.danhSachPhongBan[i].id)
					{
                       return APP.cache.data.danhSachPhongBan[i].ten;
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
						if (this.avatar =='' || this.avatar === undefined) 
						{
							Tr = Tr + '<image src="assets/img/avatar_star.svg" style="width:40px;">';
						}
						else
						{
							Tr = Tr + '<image src="' + this.avatar + '" style="width:40px;">';
						}
					Tr = Tr + '</td>';
					
					Tr = Tr + '<td style="padding:8px;border-bottom:0.3px solid rgba(0,0,0,0.3);">';
						Tr = Tr + '<span style="color:' + Color + ';font-size:14px;font-weight:bold;">' + this.tenHienThi + '</span>';
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
	