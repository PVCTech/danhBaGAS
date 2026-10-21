const copySoDienThoai = (sdt) =>
{
    sdt = String(sdt);
    if (sdt.substring(0,1) !== '0')
    {
        sdt = '0' + sdt;
    }
    copyToClipboard(sdt);
}