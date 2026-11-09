APP.actionbar =
{
    ui: {},
    control: {}
};

APP.actionbar.ui =
{
    init: function()
    {
        PVCComponent.div({
            id: 'header_actionbar', 
            className: 'header__actionbar',
            parentId: 'header'
        });        
    }
};