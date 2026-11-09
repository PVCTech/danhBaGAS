APP.header = APP.header || {};
APP.header.control = APP.header.control || {};
APP.header.control = 
{
    init: function()
    {
        PVCComponent.div({
            id: 'header', 
            className: 'header',
            parent: document.body
        });

        $('#header').innerHTML = `        
            <div style="font-size: 20px;" class="hide-on-mobile">Danh bạ</div>
            <div id="sidebar_hamburger_container" class="hide-on-pc"></div>
            <div id="timKiem_searchBox_container"></div>
            `;
    }
};