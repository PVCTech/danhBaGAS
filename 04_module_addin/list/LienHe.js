		class LienHe
		{
            constructor({id,star,
                tenHienThi, xungHoId, ten,
                ngaySinh, thangSinh, namSinh,
                donVi1Id,phongBan1Id,
                donVi2Id,phongBan2Id,
                tinhId, phuongXaId,
                timKiem,
                SDT1,SDT2,SDT3,
                SDT1Zalo,SDT2Zalo,SDT3Zalo,
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
                this.ten = ten;
                
                this.ngaySinh = ngaySinh;
                this.thangSinh = thangSinh;
                this.namSinh = namSinh;
                
                this.donVi1Id = donVi1Id;
                this.phongBan1Id = phongBan1Id;
                
                this.donVi2Id = donVi2Id;
                this.phongBan2Id = phongBan2Id;
                
                this.tinhId =tinhId;
                this.phuongXaId = phuongXaId;
                
                this.timKiem = timKiem;
			   
               
			    this.SDT1 = ChuanHoaSDT(SDT1);
                this.SDT2 = ChuanHoaSDT(SDT2);
                this.SDT3 = ChuanHoaSDT(SDT3);
                this.SDT1Zalo = SDT1Zalo;
                this.SDT2Zalo = SDT2Zalo;
                this.SDT3Zalo = SDT3Zalo;

                this.avatar = '';
                
                this.email =email;
                this.diaChi = diaChi;
                this.ghiChu = ghiChu;
                this.lichSuTruyCap = lichSuTruyCap;
			}
			
			getArrayId()
			{
				for (var i=0;i<APP.cache.data.danhSachLienHe.length;i++)
				{
				   if (this.id == APP.cache.data.danhSachLienHe[i].id)
				   {
					   return i;
				   }
				}
				return -1;
			}
		   
			getXungHo()
			{
				for (var i=0;i<APP.cache.data.danhSachXungHo.length;i++)
				{
				   if (this.xungHoId == APP.cache.data.danhSachXungHo[i].id)
				   {
					   return APP.cache.data.danhSachXungHo[i].ten;
				   }
				}
				return '';
			}
			
			
			
			
			
			getDonVi1()
			{
				for (var i=0;i<APP.cache.data.danhSachDonVi.length;i++)
				{
					if (parseInt(this.donVi1Id) == parseInt(APP.cache.data.danhSachDonVi[i].id))
					{
                       return APP.cache.data.danhSachDonVi[i].ten;
					}
				}
				return "";
			}
			
			getPhongBan1()
			{
				for (var i=0;i<APP.cache.data.danhSachPhongBan.length;i++)
				{
					if (this.phongBan1Id == APP.cache.data.danhSachPhongBan[i].id)
					{
                       return APP.cache.data.danhSachPhongBan[i].ten;
					}
				}
				return "";
			}
		   
			getDonVi2()
			{
				for (var i=0;i<APP.cache.data.danhSachDonVi.length;i++)
				{
					if (this.donVi2Id == APP.cache.data.danhSachDonVi[i].id)
					{
                       return APP.cache.data.danhSachDonVi[i].ten;
					}
				}
				return "";
			}
			
			getPhongBan2()
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


            getPhuongXa()
            {
                let phuongXa = APP.cache.data.danhSachPhuongXa.find(item => String(item.id) === String(this.phuongXaId));
                return phuongXa ? phuongXa.ten : '';
            }

            getTinh()
            {
                let tinh = APP.cache.data.danhSachTinh.find(item => String(item.id) === String(this.tinhId));
                return tinh ? tinh.ten : '';
            }

            renderForListRow()
            {
                let avatar = this.avatar =='' || this.avatar === undefined ? `<image src="https://pvctech.github.io/danhBaGAS/assets/img/avatar_star.svg" style="width:40px;">` : `<image src="${this.avatar}" style="width:40px;">`;
                return `<tr>
                            <td  onclick="APP.detail.ui.render(APP.cache.data.danhSachLienHe[${this.getArrayId()}])"
                                style="width:25%;padding:8px;border-bottom:0.3px solid rgba(0,0,0,0.3);">
                                ${avatar}
                            </td>
                            <td  onclick="APP.detail.ui.render(APP.cache.data.danhSachLienHe[${this.getArrayId()}])"
                                style="padding:8px;border-bottom:0.3px solid rgba(0,0,0,0.3);">
                                <span style="color:var(--color-primary); font-size:14px;font-weight:bold;">${this.tenHienThi}</span>
                                <br><span style="color:rgba(0,0,0,0.5);font-size:12px;">${this.SDT1} - ${this.SDT2}</span>
                            </td>
                            <td class="TdData" style="width:15px; cursor:pointer;" onclick="APP.form.ui.show('${this.id}');">
                                <img src="https://pvctech.github.io/danhBaGAS/assets/img/infor.svg?version=1" style="width:15px;opacity:0.25;" alt="infor">
                            </td>
                        </tr>`;
            }
		   
		}
       
       
	
		function ChuanHoaSDT(SDT)
		{
            if (SDT == undefined || SDT == null) {SDT = '';}
            SDT = String(SDT);
            
            SDT = SDT.replace(/ /g,'');
            SDT = SDT.replace(/\./g,'');
            SDT = SDT.replace(/\-/g,'');
            SDT = SDT.replace(/\(/g,'');
            SDT = SDT.replace(/\)/g,'');

			if (SDT.length > 10 && SDT.substring(0,2) =="84")
			{
			   SDT = SDT.substring(2,SDT.length);
			}
			
			if (SDT.substring(0,1) =="0"){}
			else {SDT = "0" + SDT;}
			if (SDT.length < 4) {SDT = '';}
			return SDT;
		}
	