const sv_history_addNew = (history, token) =>
{
    sv_user_kiemTraQuyen_(['user'], token);
    sv_deleteRowData_('lichSu', 'lienHeId', history.lienHeId);
    let tbl = sv_getTable_('lichSu');
    if (tbl.getLastRow() > 20)
    {
        tbl.deleteRow(2);
    }
    sv_insertRow_('lichSu', history);
    setServerCacheVersion(token);
}