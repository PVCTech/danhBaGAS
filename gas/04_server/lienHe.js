const sv_lienHe_addNew = (data, token) =>
{
    sv_user_kiemTraQuyen_(['user'], token);
    const { lichSuTruyCap, ...lienHeRutGon} = data.lienHe;
    sv_insertRow_('lienHe', lienHeRutGon);

    data.lienHe.lichSuTruyCap = {...data.lienHe.lichSuTruyCap, lienHeId: data.lienHe.id};
    sv_history_addNew(data.lienHe.lichSuTruyCap, token);
    setServerCacheVersion(token);

    const listField = [
                'lienHe',
                'donVi1', 'phongBan1',
                'donVi2', 'phongBan2',
                'tinh', 'phuongXa'];

    listField.forEach(f=> function()
    {
        sv_listFields_update(data, f);
    });

    return {
        status: 'ok'
    };
}


const sv_lienHe_update = (data, token) =>
{
    sv_user_kiemTraQuyen_(['user'], token);
    const { lichSuTruyCap, ...lienHeRutGon} = data.lienHe;
    sv_updateCell_('lienHe', 'id', data.lienHe.id, lienHeRutGon);

    data.lienHe.lichSuTruyCap = {...data.lienHe.lichSuTruyCap, lienHeId: data.lienHe.id};
    sv_history_addNew(data.lienHe.lichSuTruyCap, token);
    setServerCacheVersion(token);

    const listField = [
                'lienHe',
                'donVi1', 'phongBan1',
                'donVi2', 'phongBan2',
                'tinh', 'phuongXa'];

    listField.forEach(f=> function()
    {        
        sv_listFields_update(data, f);
    });
    return {
        status: 'ok'
    };
}

const sv_listFields_update = (data, fieldName)=>
{
    let change = false;
    const field = data[fieldName];
    let f = fieldName;
    if (f == 'donVi1' || f == 'donVi2') f= 'donVi';
    if (f == 'phongBan1' || f == 'phongBan2') f= 'phongBan';
    fieldName = f;
    
    if (field.id == '')
    {
        field.id = taoId_(fieldName);
        sv_insertRow_(fieldName, field);
        change = true;
    }
    else
    {
        let tblData = sv_getTableData_(fieldName);
        for (let i=0; i< tblData.length; i++)
        {
            if (String(tblData[i].id) === String(field.id))
            {
                if (String(tblData[i].ten) === String(field.ten) && String(tblData[i].timKiem) === String(field.timKiem))
                {
                    //không có thay đổi
                }
                else
                {
                    sv_updateCell_(fieldName, 'id', field.id, field);
                    change = true;
                }
                break;
            }
        }
    }

    return change;
}

