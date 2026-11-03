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
        const newCacheData = sv_getTableData_('04_cache');
        return Promise.resolve(
        {
            data: 
            {
                version: serverCacheVersion,
                danhSachLienHe: getTableData_('lienHe').data,
                danhSachLichSu: getTableData_('lichSu').data,
                danhSachDonVi: getTableData_('donVi').data,
                danhSachPhongBan: getTableData_('phongBan').data,
                danhSachTinh: getTableData_('tinh').data,
                danhSachPhuongXa: getTableData_('phuongXa').data
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