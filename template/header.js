let TimKiem_TextBox1 = new TimKiem_TextBox("TimKiem_TextBox","","tìm kiếm","absolute","0px","0px","150px",0,"5px","0.3px solid rgba(0,0,0,0.3)","5px","white","5px","5px","13px");


class Header
{
    constructor (Position,Z_index,Top,Left,Width,Height,Padding,Border,Border_Radius,BackGround,Margin_Bottom,TimKiem_TextBox1)
    {
		this.Position = Position;
		this.Z_index = Z_index;
		this.Top = Top;
		this.Left = Left;
		this.Width = Width;
		this.Height = Height;
		this.Padding = Padding;
		this.Border = Border;
		this.Border_Radius = Border_Radius;
		this.BackGround = BackGround;
		this.Margin_Bottom = Margin_Bottom;
		this.TimKiem_TextBox1 = TimKiem_TextBox1;
    }
    
    Show()
    {
		document.write('<div ');
			document.write('style="');
			document.write('position:' + this.Position + ';');
			document.write('top:' + this.Top + ';');
			document.write('left:' + this.Left + ';');
			document.write('width:' + this.Width + ';');
			document.write('height:' + this.Height + ';');
			document.write('padding:' + this.Padding + ';');
			document.write('border:' + this.Border + ';');
			document.write('border-radius:' + this.Border_Radius + ';');
			document.write('background:' + this.BackGround + ';');
		document.write('">');
			document.write('<table><tr><td><img src="template/img/home.png" style="Height:25px;margin-right:10px;"></td>');
			document.write('<td><span style="position:relative;background:yellow;width:' + TimKiem_TextBox1.Width + ';">');
				TimKiem_TextBox1.Show();
				document.write('<span style="position:absolute;z-index:103;right:5px;top:0px;color:rgba(0,0,0,0.3);" onclick="TimKiem_TextBox1.Clear();TimKiemDanhBa();">x');
				document.write('</span>');
			document.write('</span></td></tr></table>');
		document.write('</div>');
		document.write('<div style="height:' + this.Height + ';margin-bottom:' + this.Margin_Bottom + '">&nbsp;</div>');
    }
}


let Header1 =  new Header("fixed",101,"0px","0px","97%","30px","8px","0.3px solid rgba(0,0,0,0.3)","5px","green","15px");
Header1.Show();