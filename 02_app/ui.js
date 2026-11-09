APP.ui = 
{
    init: function()
    {    
        //render modal dialogs
        datePicker_init();
        divChe_init();
        
        //Render layout: header, sidebar, view, footer
        APP.loadingScreen.init();
        APP.form.goiY.ui.header.init();
        APP.header.control.init();
        
        APP.sidebar.control.init();
        APP.actionbar.control.init();
        APP.user.control.init();

        APP.view.control.init();
        APP.footer.control.init();


        APP.history.ui.init();
        APP.sinhNhat.ui.init();
        APP.yeuThich.ui.init();
        APP.list.ui.init();
        APP.detail.control.init();
        APP.form.control.init();
        APP.search.ui.init();
    },
    render: function()
    {
        APP.user.ui.render(); 
        APP.sidebar.ui.render();
        APP.sidebar.ui.hideIfMobile();

        APP.history.ui.render();
        APP.list.ui.render();
        APP.sinhNhat.ui.render();
        APP.yeuThich.ui.render();
        APP.view.ui.render();
        APP.ui.scrollTop();
    },
    setManHinh: function(manHinh)
    {
        APP.state.manHinhHienTai = manHinh;
        APP.ui.render();
        APP.ui.scrollTop();
    },
    hideAllForms: function()
    {
        [
            'formKhachHang_input_form',
            'khuNha_edit_form',
            'themMoiKhuNha_form',
            'themMoiPhong_form',
            'hopDong_form'
        ].forEach(function(id)
        {
            if ($('#' + id))
            {
                hide(id);
            }
        });

        document
            .querySelectorAll('.formKhachHang, .formKhuNha, .formPhong, .formHopDong')
            .forEach(function(form)
            {
                form.style.display = 'none';
            });
    },
    scrollTop: function()
    {
        window.scrollTo(
        {
            top: 0,
            left: 0,
            behavior: 'auto'
        });
    },
    hideAllTabs: function()
    {
        document
            .querySelectorAll('#view > .view__tab')
            .forEach(function(tab)
            {
                tab.style.display = 'none';
            });
    }
};