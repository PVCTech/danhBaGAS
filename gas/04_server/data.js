
function sv_getTable_(tableName) 
{
    const bang = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(tableName);

    if (!bang) {
        throw new Error('sv_getTable_: Không tìm thấy tên bảng: ' + tableName);
    }

    return bang;
}


function isRending(trangThai)
{
    return ['DangThue', 'DaThue', 'Thue', 'HieuLuc'].indexOf(String(trangThai)) !== -1;
}

function taoId_(tienTo)
{
    const so = Utilities.getUuid().replace(/-/g, '').substring(0, 10).toUpperCase();
    return tienTo + so;
}


function isActive(trangThai)
{
    const giaTri = String(trangThai || '').trim();
    return ['inactive', '0', 'NgungHoatDong'].indexOf(giaTri) === -1;
}


function sv_getTableData_(tableName) 
{
    const bang = sv_getTable_(tableName);
    const schema = SCHEMA[tableName];

    const soDong = bang.getLastRow();
    const soCot = bang.getLastColumn();

    if (soDong < 2 || soCot < 1) 
    {
        return {
            schema: schema || [],
            data: []
        };
    }

    const cot = bang
        .getRange(1, 1, 1, soCot)
        .getValues()[0];

    const duLieu = bang
        .getRange(2, 1, soDong - 1, soCot)
        .getValues();

    const data = duLieu
        .filter(function(dong) 
        {
            return dong.some(function(giaTri) 
            {
                return giaTri !== '';
            });
        })
        .map(function(dong) 
        {
            const ketQua = {};

            cot.forEach(function(tenCot, chiSo) 
            {
                ketQua[tenCot] = dong[chiSo];
            });

            return ketQua;
        });

    return {
        schema: schema || [],
        data: data
    };
}




function sv_getRowData_(tableName, tenCotTim, giaTriTim) 
{
    const danhSach = sv_getTableData_(tableName).data;

    for (let i = 0; i < danhSach.length; i++) 
    {
        if (String(danhSach[i][tenCotTim]).toLowerCase() === String(giaTriTim).toLowerCase()) 
        {
            return danhSach[i];
        }
    }

    return null;
}

const sv_insertRow_ = (tableName, duLieu) =>
{
    const bang = sv_getTable_(tableName);
    const schema = SCHEMA[tableName];

    const dong = schema.map(function(column) 
    {
        return duLieu[column.name] !== undefined ? duLieu[column.name] : '';
    });

    bang.getRange(bang.getLastRow() + 1, 1, 1, schema.length).setValues([dong]);
}

const sv_updateCell_ = (tableName, keyName, keyValue, duLieuCapNhat) =>
{
    const bang = sv_getTable_(tableName);
    const schema = SCHEMA[tableName];

    const chiSoCotKhoa = schema.findIndex(function(cot)
    {
        return cot.name == keyName;
    });

    if (chiSoCotKhoa === -1) throw new Error('sv_updateCell_: Không tìm thấy cột khóa chính');
    const soDong = bang.getLastRow();
    if (soDong < 2) {throw new Error('sv_updateCell_: Bảng trống');}

    const duLieu = bang.getRange(2, 1, soDong - 1, schema.length).getValues();

    for (let i = 0; i < duLieu.length; i++) 
    {
        if (String(duLieu[i][chiSoCotKhoa]).toLowerCase() === String(keyValue).toLowerCase()) 
        {
            const dongCu = duLieu[i].slice();
            Object.keys(duLieuCapNhat).forEach(function(tenCot) {
                const chiSo = schema.findIndex(function(cot)
                {
                    return cot.name == tenCot;
                });

                if (chiSo !== -1)
                {
                    duLieu[i][chiSo] = duLieuCapNhat[tenCot];
                }
                else
                {
                    throw new Error('Không thấy cột "' + tenCot + '" trong danh sách cấu hình bảng');
                }
            });

            //capNhatCacheTheoCapNhatTruong_(tableName, cot, dongCu, duLieuCapNhat);
            bang.getRange(i + 2, 1, 1, schema.length).setValues([duLieu[i]]);
            //throw new Error('updatecell: cel:' + i+2 + ', c:1,1,' + schema.length + 'du lieu:' + JSON.stringify(duLieu[i]));
            return true;
        }
    }

    throw new Error('sv_updateCell_: Không tìm thấy đối tượng cập nhật ' + tableName + ', ' + keyName + ', ' + keyValue + ', ' + JSON.stringify(duLieuCapNhat));
}