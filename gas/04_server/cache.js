const setServerCacheVersion = (token) => 
{
    const d = new Date();
    const pad = n => String(n).padStart(2, '0');
    let newVersion = (
        d.getFullYear() +
        pad(d.getMonth() + 1) +
        pad(d.getDate()) +
        pad(d.getHours()) +
        pad(d.getMinutes()) +
        pad(d.getSeconds())
    );

    sv_updateCell_('02_user', 'token', token, {cacheVersion: newVersion});
    return newVersion;
};

const getServerCacheVersion = (token) => 
{
    const userCache = sv_getRowData_('02_user', 'token', token);
    if (!userCache) {
        throw new Error('Không tìm thấy thông tin người dùng trong cache.');
    }
    return userCache.cacheVersion;
};

function sv_getNewCacheData(token, localVersion)
{
    sv_user_kiemTraQuyen_(['user'], token);
    let serverCacheVersion = getServerCacheVersion(token);
    if (serverCacheVersion !== localVersion)
    {
        return Promise.resolve(
        {
            data: 
            {
                version: serverCacheVersion,
                danhSachLienHe: sv_getTableData_('lienHe').data,
                danhSachLichSu: sv_getTableData_('lichSu').data,
                danhSachDonVi: sv_getTableData_('donVi').data,
                danhSachPhongBan: sv_getTableData_('phongBan').data,
                danhSachTinh: sv_getTableData_('tinh').data,
                danhSachPhuongXa: sv_getTableData_('phuongXa').data
            },
            newCache: true
        });
    }
    else
    {
        return Promise.resolve(
        {
            data: {version: localVersion},
            newCache: false
        });
    }
}