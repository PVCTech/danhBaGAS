//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////

function TimTatCa(NoiDungTim)
{
	var TachND = BoDau(NoiDungTim.toLowerCase()).split(' ');
	var KetQuaId_Array = [];
	var SoKq = 0;
	
	///////Tìm tuyệt đối
	var TyLeTuyetDoi1 = 0.9;
	//1. Tìm tên
	for (var i=0; i<DSLienHe.length; i++)
	{
		if (ChuoiTrongChuoi(NoiDungTim,DSLienHe[i].Ten,TyLeTuyetDoi1))
		{
			SoKq ++;
			if (SoKq <= SoKetQuaHienThi)
			{
				KetQuaId_Array.push(i);						
			}
			else
			{break;}
		}
		
	}
  
	
	//2. Tìm Tên hiển thị
	if (SoKq < SoKetQuaHienThi)
	{
		for (var i=0; i<DSLienHe.length; i++)
		{
			if (ChuoiTrongChuoi(NoiDungTim,DSLienHe[i].TenHienThi,TyLeTuyetDoi1))
			{
				if (!KetQuaId_Array.includes(i))
				{
					SoKq ++;
					if (SoKq <= SoKetQuaHienThi)
					{
						if (!KetQuaId_Array.includes(i))
						{
							KetQuaId_Array.push(i);			
						}
					}
					else
					{break;}
				}
			}
		}
	}
	
	
	//3. Tìm tìm kiếm
	if (SoKq < SoKetQuaHienThi)
	{
		for (var i=0; i<DSLienHe.length; i++)
		{
			if (ChuoiTrongChuoi(NoiDungTim,DSLienHe[i].TimKiem,TyLeTuyetDoi1))
			{
				if (!KetQuaId_Array.includes(i))
				{
					SoKq ++;
					if (SoKq <= SoKetQuaHienThi)
					{
						if (!KetQuaId_Array.includes(i))
						{
							KetQuaId_Array.push(i);			
						}
					}
					else
					{
						break;
					}
				}
			}
		}
	}
	
	
	//4. Tìm Đơn vị 1
	if (SoKq < SoKetQuaHienThi)
	{
		for (var i=0; i<DSLienHe.length; i++)
		{
			var DonVi1 = DSLienHe[i].GetDonVi2();
			if (DonVi1=="")
			{
				if (ChuoiTrongChuoi(NoiDungTim,DonVi1,TyLeTuyetDoi1))
				{
					if (!KetQuaId_Array.includes(i))
					{
						SoKq ++;
						if (SoKq <= SoKetQuaHienThi)
						{
							if (!KetQuaId_Array.includes(i))
							{
								KetQuaId_Array.push(i);			
							}
						}
						else
						{
							break;
						}
					}
				}
			}
		}
	}
	
	//5. Tìm đơn vị 2
	if (SoKq < SoKetQuaHienThi)
	{
		for (var i=0; i<DSLienHe.length; i++)
		{
			var DonVi2 = DSLienHe[i].GetDonVi2();
			if (DonVi2!=="")
			{
				if (ChuoiTrongChuoi(NoiDungTim,DonVi2,TyLeTuyetDoi1))
				{
					if (!KetQuaId_Array.includes(i))
					{
						SoKq ++;
						if (SoKq <= SoKetQuaHienThi)
						{
							if (!KetQuaId_Array.includes(i))
							{
								KetQuaId_Array.push(i);			
							}
						}
						else
						{
							break;
						}
					}
				}
			}
		}
	}
	
	
	
	
	//////////////Tìm mức độ tương đối:
	//1. Tìm tên
	for (var i=0; i<DSLienHe.length; i++)
	{
		if (ChuoiTrongChuoi(NoiDungTim,DSLienHe[i].Ten,TyLeTuyetDoi))
		{
			SoKq ++;
			if (SoKq <= SoKetQuaHienThi)
			{
				KetQuaId_Array.push(i);						
			}
			else
			{break;}
		}
		
	}
  
	
	//2. Tìm Tên hiển thị
	if (SoKq < SoKetQuaHienThi)
	{
		for (var i=0; i<DSLienHe.length; i++)
		{
			if (ChuoiTrongChuoi(NoiDungTim,DSLienHe[i].TenHienThi,TyLeTuyetDoi))
			{
				if (!KetQuaId_Array.includes(i))
				{
					SoKq ++;
					if (SoKq <= SoKetQuaHienThi)
					{
						if (!KetQuaId_Array.includes(i))
						{
							KetQuaId_Array.push(i);			
						}
					}
					else
					{break;}
				}
			}
		}
	}
	
	
	//3. Tìm tìm kiếm
	if (SoKq < SoKetQuaHienThi)
	{
		for (var i=0; i<DSLienHe.length; i++)
		{
			if (ChuoiTrongChuoi(NoiDungTim,DSLienHe[i].TimKiem,TyLeTuyetDoi))
			{
				if (!KetQuaId_Array.includes(i))
				{
					SoKq ++;
					if (SoKq <= SoKetQuaHienThi)
					{
						if (!KetQuaId_Array.includes(i))
						{
							KetQuaId_Array.push(i);			
						}
					}
					else
					{
						break;
					}
				}
			}
		}
	}
	
	
	//4. Tìm Đơn vị 1
	if (SoKq < SoKetQuaHienThi)
	{
		for (var i=0; i<DSLienHe.length; i++)
		{
			var DonVi1 = DSLienHe[i].GetDonVi2();
			if (DonVi1=="")
			{
				if (ChuoiTrongChuoi(NoiDungTim,DonVi1,TyLeTuyetDoi))
				{
					if (!KetQuaId_Array.includes(i))
					{
						SoKq ++;
						if (SoKq <= SoKetQuaHienThi)
						{
							if (!KetQuaId_Array.includes(i))
							{
								KetQuaId_Array.push(i);			
							}
						}
						else
						{
							break;
						}
					}
				}
			}
		}
	}
	
	//5. Tìm đơn vị 2
	if (SoKq < SoKetQuaHienThi)
	{
		for (var i=0; i<DSLienHe.length; i++)
		{
			var DonVi2 = DSLienHe[i].GetDonVi2();
			if (DonVi2!=="")
			{
				if (ChuoiTrongChuoi(NoiDungTim,DonVi2,TyLeTuyetDoi))
				{
					if (!KetQuaId_Array.includes(i))
					{
						SoKq ++;
						if (SoKq <= SoKetQuaHienThi)
						{
							if (!KetQuaId_Array.includes(i))
							{
								KetQuaId_Array.push(i);			
							}
						}
						else
						{
							break;
						}
					}
				}
			}
		}
	}
	
	///In kết quả
	for (var i=0;i<KetQuaId_Array.length;i++)
	{
		DSLienHe[KetQuaId_Array[i]].toTR("green");
		//if (i<3) {alert(DSLienHe[KetQuaId_Array[i]].GetXungHo());}
	}
	
}
		
		


//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////

function ChuoiTrongChuoi(ChuoiA,ChuoiB,TyLeTuyetDoi)
{
	ChuoiA = ChuoiA.toLowerCase();
	ChuoiB = ChuoiB.toLowerCase();
	
	if (ChuoiA == BoDau(ChuoiA))
	{ChuoiB = BoDau(ChuoiB);}	
    
	
    TachA = ChuoiA.split(' ');
    TachB = ChuoiB.split(' ');
	var Ok =0;
	var SoTuOk =0;
	
    for (var i=0; i<TachA.length; i++)
	{
	    if (TachB.includes(TachA[i]))
    	{
    	    SoTuOk++;
    	    if (SoTuOk/TachA.length > TyLeTuyetDoi)
    	    {
    	        Ok =1;
    	        break;
    	    }
    	}
	}
	
	if (Ok==0) {return false;} else {return true;}
}

function BoDau(str) 
{
	str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a");
	str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e");
	str = str.replace(/ì|í|ị|ỉ|ĩ/g, "i");
	str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o");
	str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u");
	str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y");
	str = str.replace(/đ/g, "d");
	str = str.replace(/À|Á|Ạ|Ả|Ã|Â|Ầ|Ấ|Ậ|Ẩ|Ẫ|Ă|Ằ|Ắ|Ặ|Ẳ|Ẵ/g, "A");
	str = str.replace(/È|É|Ẹ|Ẻ|Ẽ|Ê|Ề|Ế|Ệ|Ể|Ễ/g, "E");
	str = str.replace(/Ì|Í|Ị|Ỉ|Ĩ/g, "I");
	str = str.replace(/Ò|Ó|Ọ|Ỏ|Õ|Ô|Ồ|Ố|Ộ|Ổ|Ỗ|Ơ|Ờ|Ớ|Ợ|Ở|Ỡ/g, "O");
	str = str.replace(/Ù|Ú|Ụ|Ủ|Ũ|Ư|Ừ|Ứ|Ự|Ử|Ữ/g, "U");
	str = str.replace(/Ỳ|Ý|Ỵ|Ỷ|Ỹ/g, "Y");
	str = str.replace(/Đ/g, "D");
	return str;
}