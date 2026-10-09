let SoKetQuaHienThi = 20;
let TyLeTuyetDoi = 0.5;
let DSXungHoId_NhoHon = [0,6,7,8,12,13,14,15,17];

class TimKiem_TextBox
{
    constructor (Id,Value,Place_Holder,Position,Top,Left,Width,Height,Padding,Border,Border_Radius,BackGround,Margin_Left,Margin_Right,Font_Size)
    {
		this.Id = Id;
		this.Value = Value;
		this.Place_Holder = Place_Holder;
		this.Position = Position;
		this.Top = Top;
		this.Left = Left;
		this.Width = Width;
		if (Height !==0) {this.Height = Height;}
		else {this.Height = 'auto';}
		this.Padding = Padding;
		this.Border = Border;
		this.Border_Radius = Border_Radius;
		this.BackGround = BackGround;
		this.Margin_Left = Margin_Left;
		this.Margin_Right = Margin_Right;
		this.Font_Size = Font_Size;
    }
    
    Show()
    {
		document.write('<input type="text" ');
			document.write('id="' + this.Id + '" ');
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
		$('#' + this.Id).val('');
	}
	
    KeyUp()
    {
        
    }
}


function TimKiemDanhBa()
{
	let SoKetQuaHienThi = 20;
	var TimKiem_Input = $('#TimKiem_TextBox').val();
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
				if (ChuoiTrongChuoi(Tach[0],DSXungHo[i].Ten,TyLeTuyetDoi))
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
				var TenI = DSLienHe[i].Ten.toLowerCase();
				
				if ((TenI == TimKiem_Input || BoDau(TenI) == TimKiem_Input) && DSXungHoId_NhoHon.includes(DSLienHe[i].XungHoId))
				{
					SoKq ++;
					if (SoKq <= SoKetQuaHienThi)
					{
						DSLienHe[i].toTR("green");
					}
					else
					{break;}
				}
			}
			
			if (SoKq ==0)
			{
				for (var i=0; i<DSLienHe.length; i++)
				{
					var TenI = DSLienHe[i].TenHienThi.toLowerCase();
					
					if (TenI == TimKiem_Input || BoDau(TenI) == TimKiem_Input)
					{
						SoKq ++;
						if (SoKq <= SoKetQuaHienThi)
						{
							DSLienHe[i].toTR("green");
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
				var TenI = DSLienHe[i].Ten.toLowerCase();
				if ((TenI == Tach[1] || BoDau(TenI) == Tach[1]) && ChuoiTrongChuoi(Tach[0],DSLienHe[i].GetXungHo(),1) )
				{
					SoKq ++;
					if (SoKq <= SoKetQuaHienThi)
					{
						DSLienHe[i].toTR("green");
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
