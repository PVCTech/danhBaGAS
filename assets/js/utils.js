const copySoDienThoai = (SDT) =>
{
    SDT = String(SDT);
    if (SDT.substring(0,1) !== '0')
    {
        SDT = '0' + SDT;
    }
    copyToClipboard(SDT);
}