APP.sidebar = APP.sidebar || {};
APP.sidebar.ui = 
{
    init: function()
    {
        div({
            id: 'main',
            className: 'main',
            parent: document.body
        });

        div({
            id: 'sidebar_hamburger', 
            className: 'sidebar__hamburger', 
            parentId: 'header',
            onclick: el => {
                APP.sidebar.ui.toggle();
            }
        });

        $('#sidebar_hamburger').innerHTML = '☰';
        
        div({
            id: 'sidebar_divChe',
            className: 'sidebar__divChe',
            parent: document.body,
            onclick: el => {
                APP.sidebar.ui.hide();
            }
        });

        div({
            id: 'sidebar', 
            className: 'sidebar', 
            parentId: 'main'
        });

        div({
            id: 'sidebarGrid', 
            className: 'sidebar__grid', 
            parentId: 'sidebar'
        });

        const sidebar =
        [
            { module: 'Home', ten: 'Home' },
            { module: 'quanLyKhuNha', ten: 'Khu nhà' },
            { module: 'quanLyPhong', ten: 'Phòng' }  
        ];
        let moduleDangChon = 'home';
        APP.state.manHinhHienTai = 'home';
        $('#sidebarGrid').innerHTML = sidebar.map(function(item)
        {
            const active = item.module === moduleDangChon ? ' sidebar__button__selected' : '';
            return `
                <div
                    id="sidebar_${item.module}"
                    class="sidebar__button${active}"
                    onclick="APP.ui.setManHinh('chuNha','${item.module}', 'list');">
                    ${item.ten}
                </div>
            `;
        }).join('');
    },
    render: function()
    {
        const moduleDangChon = APP.state.manHinhHienTai || 'chuNha_dashboard';
        const button = $(`#sidebar_${moduleDangChon}`);
        APP.sidebar.control.setSelectedButton(button);
    },
    showing: !APP.config.mobileMode,
    show: function()
    {
        APP.sidebar.ui.showing = true;
        show('sidebar_divChe');
        show('sidebar');
        
        APP.user.menu.ui.hide();
    },
    hide: function()
    {
        APP.sidebar.ui.showing = false;
        hide('sidebar');
        hide('sidebar_divChe');
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