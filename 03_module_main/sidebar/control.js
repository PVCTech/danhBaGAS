APP.sidebar = APP.sidebar || {};
APP.sidebar.control = 
{
    init: function()
    {
        APP.sidebar.ui.init();
    },
    setSelectedButton(buttonId)
    {
        const button = document.getElementById(buttonId);
        if (!button)
        {
            throw new Error('Sidebar button not found: ' + buttonId);
        }

        document
            .querySelectorAll('#sidebarGrid .sidebar__button')
            .forEach(function(bt)
            {
                bt.classList.remove('sidebar__button__selected');
            });

        activeButton(buttonId);
        button.classList.add('sidebar__button__selected');
    }
}