let SoKetQuaHienThi = 20;
let TyLeTuyetDoi = 0.5;
let DSXungHoId_NhoHon = [0,6,7,8,12,13,14,15,17];

class TimKiem_TextBox
{   

    Show()
    {
		document.write('<input type="text" ');
			document.write('id="' + this.id + '" ');
			document.write('value="' + this.Value + '" ');
			document.write('placeholder="' + this.Place_Holder + '" ');
			
			document.write('style="');
			//document.write('position:' + this.Position + ';z-index:102;');
			document.write('top:' + this.Top + ';');
			document.write('left:' + this.Left + ';');
			document.write('width:' + this.Width + ';');
			document.write('height:' + this.Height + ';');
			document.write('padding:' + this.Padding + ';');
			document.write('border:' + this.Border + ';');
			document.write('border-radius:' + this.Border_Radius + ';');
			document.write('background:' + this.BackGround + ';');
			document.write('font-size:' + this.Font_Size + ';');
		document.write('" onkeyup="TimKiemDanhBa();">');
    }
    
	Clear()
	{
		$('#' + this.id).value = '';
	}
	
    KeyUp()
    {
        
    }
}


function TimKiemDanhBa()
{
	let SoKetQuaHienThi = 20;
	var TimKiem_Input = $('#TimKiem_TextBox').value;
	TimKiem_Input = TimKiem_Input.toLowerCase();
	$('#TableData').html('');
	if (TimKiem_Input.length > 1)
	{
		var SoTu = 0;
		var CoCachSau = 0;
		var CoXungHo = 0;
		
		var Tach = TimKiem_Input.split(' ');
		if (Tach[Tach.length -  1] == '')
		{
			SoTu = Tach.length -  1;
			CoCachSau = 1;
		}
		else 
		{
			SoTu = Tach.length;
		}
		
		if (SoTu > 1)
		{
			for (var i=0;i<DSXungHo.length;i++)
			{
				if (ChuoiTrongChuoi(Tach[0],DSXungHo[i].ten,TyLeTuyetDoi))
				{
					CoXungHo = 1;
				}
			}
		}
		
		//alert("co xung ho: " + CoXungHo + "\n CoCachSau: " + CoCachSau + " \n So tu: " + SoTu + " \n Tên: " + Tach[1]);
		
		///1. Kiểm tra có bao nhiêu từ: 1,2,3
		///1 Từ: không có dấu cách: Có dấu, không có dấu
		if (SoTu == 1 && CoCachSau == 0)
		{
			//Tìm tuyệt đối theo tên (có dấu và không dấu) Ưu tiên: không có xưng hô, em,cháu,con,
			var SoKq = 0;
			for (var i=0; i<DSLienHe.length; i++)
			{
				var TenI = DSLienHe[i].ten.toLowerCase();
				
				if ((TenI == TimKiem_Input || boDau(TenI) == TimKiem_Input) && DSXungHoId_NhoHon.includes(DSLienHe[i].xungHoId))
				{
					SoKq ++;
					if (SoKq <= SoKetQuaHienThi)
					{
						DSLienHe[i].toTr("green");
					}
					else
					{break;}
				}
			}
			
			if (SoKq ==0)
			{
				for (var i=0; i<DSLienHe.length; i++)
				{
					var TenI = DSLienHe[i].tenHienThi.toLowerCase();
					
					if (TenI == TimKiem_Input || boDau(TenI) == TimKiem_Input)
					{
						SoKq ++;
						if (SoKq <= SoKetQuaHienThi)
						{
							DSLienHe[i].toTr("green");
						}
						else
						{break;}
					}
				}
			}
		}
		///2 Từ: Có xưng hô: tách xưng hô và chuyển về 1 từ
		else if (SoTu == 2 && CoXungHo ==1 && CoCachSau == 0)
		{
			//Tìm tuyệt đối theo tên (có dấu và không dấu) và Xưng hô phù hợp
			var SoKq = 0;
			for (var i=0; i<DSLienHe.length; i++)
			{
				var TenI = DSLienHe[i].ten.toLowerCase();
				if ((TenI == Tach[1] || boDau(TenI) == Tach[1]) && ChuoiTrongChuoi(Tach[0],DSLienHe[i].GetXungHo(),1) )
				{
					SoKq ++;
					if (SoKq <= SoKetQuaHienThi)
					{
						DSLienHe[i].toTr("green");
					}
					else
					{break;}
				}
			}
			
			if (SoKq ==0)
			{
				var NoiDungTk = '';
				for (var k=0;k<SoTu;k++)
				{
					if (k==0)
					{
						NoiDungTk = NoiDungTk + Tach[k];
					}
					else
					{
						NoiDungTk = NoiDungTk  + ' ' + Tach[k];
					}
				}
				TimTatCa(NoiDungTk);
			}
		}
		///3 trở lên hoặc Có dấu cách tìm tất cả, 2 từ nhưng không có xưng hô
		else if ((SoTu >=1 && CoCachSau == 1) || SoTu >=3 || (SoTu == 2 && CoXungHo ==0))
		{
			var NoiDungTk = '';
			for (var k=0;k<SoTu;k++)
			{
				if (k==0)
				{
					NoiDungTk = NoiDungTk + Tach[k];
				}
				else 
				{
					NoiDungTk = NoiDungTk  + ' ' + Tach[k];
				}
			}
			TimTatCa(NoiDungTk);
			//alert("Tìm tất cả: " + NoiDungTk);
		}
		
	}
	else
	{
		$('#TableData').html('');
	}
	
}

//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////

function TimTatCa(NoiDungTim)
{
	var TachND = boDau(NoiDungTim.toLowerCase()).split(' ');
	var KetQuaId_Array = [];
	var SoKq = 0;
	
	///////Tìm tuyệt đối
	var TyLeTuyetDoi1 = 0.9;
	//1. Tìm tên
	for (var i=0; i<DSLienHe.length; i++)
	{
		if (ChuoiTrongChuoi(NoiDungTim,DSLienHe[i].ten,TyLeTuyetDoi1))
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
			if (ChuoiTrongChuoi(NoiDungTim,DSLienHe[i].tenHienThi,TyLeTuyetDoi1))
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
			if (ChuoiTrongChuoi(NoiDungTim,DSLienHe[i].timKiem,TyLeTuyetDoi1))
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
		if (ChuoiTrongChuoi(NoiDungTim,DSLienHe[i].ten,TyLeTuyetDoi))
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
			if (ChuoiTrongChuoi(NoiDungTim,DSLienHe[i].tenHienThi,TyLeTuyetDoi))
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
			if (ChuoiTrongChuoi(NoiDungTim,DSLienHe[i].timKiem,TyLeTuyetDoi))
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
		DSLienHe[KetQuaId_Array[i]].toTr("green");
		//if (i<3) {alert(DSLienHe[KetQuaId_Array[i]].GetXungHo());}
	}
	
}
		
		


//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////

function ChuoiTrongChuoi(ChuoiA,ChuoiB,TyLeTuyetDoi)
{
	ChuoiA = ChuoiA.toLowerCase();
	ChuoiB = ChuoiB.toLowerCase();
	
	if (ChuoiA == boDau(ChuoiA))
	{ChuoiB = boDau(ChuoiB);}	
    
	
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