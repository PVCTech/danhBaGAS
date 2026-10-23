APP.header = APP.header || {};
APP.header.control = APP.header.control || {};
APP.header.control = 
{
    init: function()
    {
        div({
            id: 'header', 
            className: 'header',
            parent: document.body
        });

        $('#header').innerHTML = `<span class="hide-on-mobile">Danh bạ</span>`;
    }
};