APP.search = APP.search || {};
APP.search.control = 
{
    searchTimeout: null,
    tyLeTuyetDoi: 0.5,
    soKetQuaHienThi: 20,
    danhSachXungHoId_NhoHon:[0,6,7,8,12,13,14,15,17],
    init: function()
    {

    },
    danhSachIdTimThay: [],
    soKetQuaTimThay: 0,
    search: function()
    {        
        clearTimeout(APP.search.control.searchTimeout);
        APP.search.control.searchTimeout =  setTimeout(function()
        {
            APP.search.control.danhSachIdTimThay = [];
            APP.search.control.soKetQuaTimThay = 0;
            var noiDungTimKiem = $('#timKiem_searchBox').value;
            noiDungTimKiem = noiDungTimKiem.toLowerCase();

            $('#search_table').innerHTML = '';
            if (noiDungTimKiem.length > 1)
            {
                var SoTu = 0;
                var CoCachSau = 0;
                var CoXungHo = 0;
                
                var Tach = noiDungTimKiem.split(' ');
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
                    for (var i=0;i<APP.cache.data.danhSachXungHo.length;i++)
                    {
                        if (ChuoiTrongChuoi(Tach[0],APP.cache.data.danhSachXungHo[i].ten,APP.search.control.tyLeTuyetDoi))
                        {
                            CoXungHo = 1;
                        }
                    }
                }
                
                
                ///1. Kiểm tra có bao nhiêu từ: 1,2,3
                ///1 Từ: không có dấu cách: Có dấu, không có dấu
                if (SoTu == 1 && CoCachSau == 0)
                {                    
                    //Tìm tuyệt đối theo tên (có dấu và không dấu) Ưu tiên: không có xưng hô, em,cháu,con,
                    for (var i=0; i<APP.cache.data.danhSachLienHe.length; i++)
                    {
                        var TenI = String(APP.cache.data.danhSachLienHe[i].ten).toLowerCase();                        
                        if ((TenI == noiDungTimKiem || boDau(TenI) == noiDungTimKiem) && APP.search.control.danhSachXungHoId_NhoHon.includes(APP.cache.data.danhSachLienHe[i].xungHoId))
                        {
                            if (!APP.search.control.themKetQuaNeuChuaCo(i)) 
                            {                                 
                                break;
                            }
                        }
                    }

                    //Tìm tuyệt đói theo số điện thoại
                    for (var i=0; i<APP.cache.data.danhSachLienHe.length; i++)
                    {
                        var SDT1 = APP.cache.data.danhSachLienHe[i].SDT1;
                        var SDT2 = APP.cache.data.danhSachLienHe[i].SDT2;
                        var SDT3 = APP.cache.data.danhSachLienHe[i].SDT3;
                        if (SDT1 == noiDungTimKiem || SDT2 == noiDungTimKiem || SDT3 == noiDungTimKiem)
                        {
                            if (!APP.search.control.themKetQuaNeuChuaCo(i)) break;
                        }
                    }
                    
                    if (APP.search.control.soKetQuaTimThay ==0)
                    {
                        for (var i=0; i<APP.cache.data.danhSachLienHe.length; i++)
                        {
                            var TenI = String(APP.cache.data.danhSachLienHe[i].tenHienThi).toLowerCase();
                            if (TenI == noiDungTimKiem || boDau(TenI) == noiDungTimKiem)
                            {
                                if (!APP.search.control.themKetQuaNeuChuaCo(i)) break;
                            }
                        }
                    }
                }
                ///2 Từ: Có xưng hô: tách xưng hô và chuyển về 1 từ
                else if (SoTu == 2 && CoXungHo ==1 && CoCachSau == 0)
                {
                    //Tìm tuyệt đối theo tên (có dấu và không dấu) và Xưng hô phù hợp
                    for (var i=0; i<APP.cache.data.danhSachLienHe.length; i++)
                    {
                        var TenI = String(APP.cache.data.danhSachLienHe[i].ten).toLowerCase();
                        if ((TenI == Tach[1] || boDau(TenI) == Tach[1]) && ChuoiTrongChuoi(Tach[0],APP.cache.data.danhSachLienHe[i].getXungHo(),1) )
                        {
                            if (!APP.search.control.themKetQuaNeuChuaCo(i)) break;
                        }
                    }
                    
                    if (APP.search.control.soKetQuaTimThay ==0)
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
                        APP.search.control.searchAll(NoiDungTk);
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
                    APP.search.control.searchAll(NoiDungTk);
                }


                APP.search.ui.render(APP.search.control.danhSachIdTimThay);
                APP.view.ui.showTab('search');
            }
            else
            {
                $('#search_table').innerHTML = '';
                APP.view.ui.showTab('home');
            }            
        },200);
    },
    searchAll: function(NoiDungTim)
    {        
        ///////Tìm tuyệt đối
        var tyLeTuyetDoi1 = 0.9;
        for (var i=0; i< APP.cache.data.danhSachLienHe.length; i++)
        {
            if (ChuoiTrongChuoi(NoiDungTim,APP.cache.data.danhSachLienHe[i].ten, tyLeTuyetDoi1))
            {
                if (!APP.search.control.themKetQuaNeuChuaCo(i)) break;
            }
            
        }
    
        
        //2. Tìm Tên hiển thị
        if (APP.search.control.soKetQuaTimThay < APP.search.control.soKetQuaHienThi)
        {
            for (var i=0; i<APP.cache.data.danhSachLienHe.length; i++)
            {
                if (ChuoiTrongChuoi(NoiDungTim,APP.cache.data.danhSachLienHe[i].tenHienThi,tyLeTuyetDoi1))
                {
                    if (!APP.search.control.themKetQuaNeuChuaCo(i)) break;
                }
            }
        }
        
        
        //3. Tìm tìm kiếm
        if (APP.search.control.soKetQuaTimThay < APP.search.control.soKetQuaHienThi)
        {
            for (var i=0; i<APP.cache.data.danhSachLienHe.length; i++)
            {
                if (ChuoiTrongChuoi(NoiDungTim,APP.cache.data.danhSachLienHe[i].timKiem,tyLeTuyetDoi1))
                {
                    if (!APP.search.control.themKetQuaNeuChuaCo(i)) break;
                }
            }
        }
        
        
        //4. Tìm Đơn vị 1
        if (APP.search.control.soKetQuaTimThay < APP.search.control.soKetQuaHienThi)
        {
            for (var i=0; i<APP.cache.data.danhSachLienHe.length; i++)
            {
                var DonVi1 = APP.cache.data.danhSachLienHe[i].getDonVi1();
                if (DonVi1=="")
                {
                    if (ChuoiTrongChuoi(NoiDungTim,DonVi1,tyLeTuyetDoi1))
                    {
                        if (!APP.search.control.themKetQuaNeuChuaCo(i)) break;
                    }
                }
            }
        }
        
        //5. Tìm đơn vị 2
        if (APP.search.control.soKetQuaTimThay < APP.search.control.soKetQuaHienThi)
        {
            for (var i=0; i<APP.cache.data.danhSachLienHe.length; i++)
            {
                var DonVi2 = APP.cache.data.danhSachLienHe[i].getDonVi2();
                if (DonVi2!=="")
                {
                    if (ChuoiTrongChuoi(NoiDungTim,DonVi2,tyLeTuyetDoi1))
                    {
                        if (!APP.search.control.themKetQuaNeuChuaCo(i)) break;
                    }
                }
            }
        }
        
        
        
        
        //////////////Tìm mức độ tương đối:
        //1. Tìm tên
        for (var i=0; i<APP.cache.data.danhSachLienHe.length; i++)
        {            
            if (ChuoiTrongChuoi(NoiDungTim,APP.cache.data.danhSachLienHe[i].ten,APP.search.control.tyLeTuyetDoi))
            {
                if (!APP.search.control.themKetQuaNeuChuaCo(i)) break;
            }            
        }
    
        
        //2. Tìm Tên hiển thị
        if (APP.search.control.soKetQuaTimThay < APP.search.control.soKetQuaHienThi)
        {
            for (var i=0; i<APP.cache.data.danhSachLienHe.length; i++)
            {
                if (ChuoiTrongChuoi(NoiDungTim,APP.cache.data.danhSachLienHe[i].tenHienThi,APP.search.control.tyLeTuyetDoi))
                {
                    if (!APP.search.control.themKetQuaNeuChuaCo(i)) break;
                }
            }
        }
        
        
        //3. Tìm tìm kiếm
        if (APP.search.control.soKetQuaTimThay < APP.search.control.soKetQuaHienThi)
        {
            for (var i=0; i<APP.cache.data.danhSachLienHe.length; i++)
            {
                if (ChuoiTrongChuoi(NoiDungTim,APP.cache.data.danhSachLienHe[i].timKiem,APP.search.control.tyLeTuyetDoi))
                {
                    if (!APP.search.control.themKetQuaNeuChuaCo(i)) break;
                }
            }
        }
        
        
        //4. Tìm Đơn vị 1
        if (APP.search.control.soKetQuaTimThay < APP.search.control.soKetQuaHienThi)
        {
            for (var i=0; i<APP.cache.data.danhSachLienHe.length; i++)
            {
                var DonVi1 = APP.cache.data.danhSachLienHe[i].getDonVi1();
                if (DonVi1=="")
                {
                    if (ChuoiTrongChuoi(NoiDungTim,DonVi1,APP.search.control.tyLeTuyetDoi))
                    {
                        if (!APP.search.control.themKetQuaNeuChuaCo(i)) break;
                    }
                }
            }
        }
        
        //5. Tìm đơn vị 2
        if (APP.search.control.soKetQuaTimThay < APP.search.control.soKetQuaHienThi)
        {
            for (var i=0; i< APP.cache.data.danhSachLienHe.length; i++)
            {
                var DonVi2 = APP.cache.data.danhSachLienHe[i].getDonVi2();
                if (DonVi2!=="")
                {
                    if (ChuoiTrongChuoi(NoiDungTim,DonVi2,APP.search.control.tyLeTuyetDoi))
                    {
                        if (!APP.search.control.themKetQuaNeuChuaCo(i)) break;
                    }
                }
            }
        }
    },
    themKetQuaNeuChuaCo: function(index)
    {
        let lienHeId = APP.cache.data.danhSachLienHe[index].id;
        if (!APP.search.control.danhSachIdTimThay.includes(lienHeId))
        {
            APP.search.control.soKetQuaTimThay ++;
            if (APP.search.control.soKetQuaTimThay <= APP.search.control.soKetQuaHienThi)
            {
                APP.search.control.danhSachIdTimThay.push(lienHeId);
                return true;
            }
            else
            {
                return false;
            }
        }
    },
    clear: function()
    {
        $('#timKiem_searchBox').value = '';
        APP.search.control.search();
    }
}



function ChuoiTrongChuoi(ChuoiA,ChuoiB, tyLeTuyetDoi)
{
	ChuoiA = String(ChuoiA).toLowerCase();
	ChuoiB = String(ChuoiB).toLowerCase();
	
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
    	    if (SoTuOk/TachA.length > tyLeTuyetDoi)
    	    {
    	        Ok =1;
    	        break;
    	    }
    	}
	}
	
	if (Ok==0) {return false;} else {return true;}
}