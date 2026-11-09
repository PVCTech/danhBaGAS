APP.sidebar = APP.sidebar || {};
APP.sidebar.ui = 
{   
    moduleList: [
        { module: 'home', ten: 'Lịch sử'},
        { module: 'list', ten: 'Danh bạ'},
        { module: 'sinhNhat', ten: 'Sinh nhật'},
        { module: 'yeuThich', ten: 'Yêu thích'}
    ],
    init: function()
    {
        PVCComponent.div({
            id: 'main',
            className: 'main',
            parent: document.body
        });

        PVCComponent.div({
            id: 'sidebar_hamburger', 
            parentId: 'sidebar_hamburger_container',
            onclick: el => {
                APP.sidebar.ui.toggle();
            }
        });

        $('#sidebar_hamburger').innerHTML = '<span class="sidebar__hamburger image-button" style="width:26px;">☰</span>';
        
        PVCComponent.div({
            id: 'sidebar_divChe',
            className: 'sidebar__divChe',
            parent: document.body,
            onclick: el => {
                APP.sidebar.ui.hide();
            }
        });

        PVCComponent.div({
            id: 'sidebar', 
            className: 'sidebar', 
            parentId: 'main'
        });

        PVCComponent.div({
            id: 'sidebarGrid', 
            className: 'sidebar__grid', 
            parentId: 'sidebar'
        });

        let moduleDangChon = 'home';
        APP.state.manHinhHienTai = 'home';
        $('#sidebarGrid').innerHTML = this.moduleList.map(function(item)
        {
            const active = item.module === moduleDangChon ? ' sidebar__button__selected' : '';            
            let bt = `
                <div
                    id="sidebar_${item.module}"
                    class="sidebar__button${active}"
                    onclick="APP.ui.setManHinh('${item.module}');">
                    ${item.ten}
                </div>
            `;
            return bt;
        }).join('');
    },
    render: function()
    {
        const moduleDangChon = APP.state.manHinhHienTai || 'home';
        let timKiem = this.moduleList.find(md => md.module == moduleDangChon);
        if (timKiem) APP.sidebar.control.setSelectedButton(`sidebar_${moduleDangChon}`);
    },
    showing: !APP.config.mobileMode,
    show: function()
    {
        APP.sidebar.ui.showing = true;
        PVCComponent.show('sidebar_divChe');
        PVCComponent.show('sidebar');
        
        APP.user.menu.ui.hide();
    },
    hide: function()
    {
        APP.sidebar.ui.showing = false;
        PVCComponent.hide('sidebar');
        PVCComponent.hide('sidebar_divChe');
    },
    hideIfMobile: function()
    {
        if (APP.config.mobileMode) 
        {
            APP.sidebar.ui.hide();
        }
    },
    toggle: function()
    {            
        APP.config.mobileMode = true;
        if (APP.sidebar.ui.showing)
        {          
            APP.sidebar.ui.hide();
        }
        else
        {
            APP.sidebar.ui.show();
        }
    },
    clear: function()
    {
        $('#sidebarGrid').innerHTML = '';
    }
};