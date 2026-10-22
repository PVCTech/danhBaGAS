const activeButton = (buttonId) =>
{
    $('#' + buttonId).classList.remove('button__inactive');
}

const inactiveButton = (buttonId) =>
{
    $('#' + buttonId).classList.add('button__inactive');
}    


//Tìm kiếm chuỗi A trong chuỗi B theo cách: tách từ, thứ tự xuất hiện đúng
const ATrongB = (A, B) => 
{
    A = boDau(A.toLowerCase()).trim().replace(/\s+/g, " ");
    B = boDau(B.toLowerCase()).trim().replace(/\s+/g, " ");

    const tachA = A.split(" ");
    const tachB = B.split(" ");

    let indexTimThayHienTai = 0;

    for (let i = 0; i < tachA.length; i++) 
    {
        let timThay = false;

        for (let j = indexTimThayHienTai; j < tachB.length; j++) 
        {
            if (tachB[j].startsWith(tachA[i])) 
            {
                timThay = true;
                indexTimThayHienTai = j + 1; // từ tiếp theo phải ở phía sau
                break;
            }
        }

        if (!timThay) 
        {
            return false;
        }
    }

    return true;
};

const ATruocB = (ngayA, thangA, namA, ngayB, thangB, namB) =>
{
    //Thực ra là A<=B (tính cả A=B) - dùng cho từ ngày đến ngày
    if (ngayA == '' || thangA == '' || namA == '' || ngayB == '' || thangB == '' || namB == '')
    {
        return true;
    }

    ngayA = parseInt(ngayA);
    thangA = parseInt(thangA);
    namA = parseInt(namA);

    ngayB = parseInt(ngayB);
    thangB = parseInt(thangB);
    namB = parseInt(namB);

    if (namA<namB)
    {
        return true;
    }
    else if(namA == namB)
    {
        if (thangA < thangB)
        {
            return true;
        } 
        else if (thangA == thangB)
        {
            if (ngayA <= ngayB)
            {
                return true;
            }
            else
            {
                return false;
            }
        } 
        else if (thangA > thangB)
        {
            return false;
        }
    }
    else if(namA > namB)
    {
        return false;
    }
}

const boDau = (str) =>
{
    return str
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/đ/g, "d")
        .replace(/Đ/g, "D");
}


function copyToClipboard_element(noiDungId)  //thêm hiệu ứng nhấp nháy khi copy
{
    const input = document.getElementById(noiDungId);
    let noiDung = input.value;
    const brRegex = /<br\s*[\/]?>/gi;
    const text = noiDung.replace(brRegex, "\r\n");
    navigator.clipboard.writeText(text);
    input.classList.add("Note_Input_Active");

    setTimeout(() => {
        input.classList.remove("Note_Input_Active");
    }, 100);
    document.getElementById('content_text_copyButton').innerText='Copied';
}

const copyToClipboard = (NoiDung)  =>
{
    var brRegex = /<br\s*[\/]?>/gi;
    NoiDung = NoiDung.replace(brRegex, "\r\n");
    navigator.clipboard.writeText(NoiDung);
}




const chuanHoaNgayThang = (number) =>
{
    if (String(number) == '')
    {
        return '';
    }

    if (parseInt(number) < 10) {return '0' + parseInt(number);} else {return parseInt(number);}
}


function escapeHtml(giaTri) 
{
    return String(giaTri ?? '')
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;');
}

const formatMoney = (so) =>
{
    if (so)
    {
        so = so.toString().replace(/[^0-9]/g, '');
        const giaTri = Number(so || 0);
        return giaTri.toLocaleString('vi-VN') + ' đ';
    }
    else
    {
        return '-';
    }        
}


class PVCImage
{
    constructor(src, width = "auto", height = "auto", style ='', opacity = 1)
    {
        this.src = src;
        this.width = width;
        this.height = height;
        this.style = style;
        this.opacity = opacity;
    }

    render()
    {
        return `
            <img src="${this.src}" style="width:${this.width}; height:${this.height}; opacity:${this.opacity}; ${this.style}">
        `;
    }
}


const formatNumber = (gia) =>
{        
    var kq="";
    if (gia.length<4){kq = gia;}
    else
    {
        
        var giatext = gia.toString();
        var Am ='';
        
        if (giatext.substring(0,1) == "-"){Am ='-';}
        gia = giatext.replace(/[^a-zA-Z0-9]/g, '');
        gia = parseInt(gia);
        giatext = gia.toString();
        
        if (giatext.length<4){kq = Am + giatext;}
        else if(giatext.length<7){kq = Am + giatext.substring(0,giatext.length-3) + "." + giatext.substring(giatext.length-3,giatext.length);}
        else if(giatext.length<10){kq = Am + giatext.substring(0,giatext.length-6) + "." + giatext.substring(giatext.length-6,giatext.length-6+3) + "." + giatext.substring(giatext.length-3,giatext.length);}
        else if(giatext.length<13){kq = Am + giatext.substring(0,giatext.length-9) + "." + giatext.substring(giatext.length-9,giatext.length-6) + "." + giatext.substring(giatext.length-6,giatext.length-6+3) + "." + giatext.substring(giatext.length-3,giatext.length);}
        else {kq = Am + giatext;}
    }
    return kq;
}
        
                        
const formatNumberInput = (IdInput) =>
{
    
    if ($('#' + IdInput).value == '' || $('#' + IdInput).value == '0' || $('#' + IdInput).value == '00' || $('#' + IdInput).value == '000')
    {
        
    }
    else
    {
        $('#' + IdInput).value = formatNumber(parseInt($('#' + IdInput).value));
    }
}


function xuLyLoi(loi) {
    toast(loi && loi.message ? loi.message : 'Có lỗi xảy ra');
    console.log(loi && loi.message ? loi.message : 'Có lỗi xảy ra');
}  