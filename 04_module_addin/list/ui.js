APP.list = APP.list || {};
APP.list.ui = 
{
    init: function()
    {
        const main = document.createElement('div');
        main.className = 'tab__main';
        APP.view.ui.addTab('home', main);
    },
    render: function()
    {
        $('#home_tab').innerHTML = `<table id="list_table">
        </table>`;
        APP.cache.data.danhSachLienHe.forEach(lienHe =>
        {
            $('#list_table').innerHTML += lienHe.toTr('green');
        });
    }
};


