APP.ui = 
{
    init: function()
    {    
        //render modal dialogs
        toast_init();
        canhBao_init();
        datePicker_init();
        divChe_init();
        
        //Render layout: header, sidebar, view, footer
        APP.loadingScreen.init();
        APP.header.control.init();  
        
        APP.sidebar.control.init();
        APP.actionbar.control.init();
        APP.user.control.init();

        APP.view.control.init();
        APP.footer.control.init();


        APP.list.ui.init();
        APP.detail.control.init();
    },
    render: function()
    {
        APP.user.ui.render();
        const manHinhHienTai = APP.state.manHinhHienTai || 'home';
        if (!manHinhHienTai) return;
        
        APP.sidebar.ui.hideIfMobile();
        APP.sidebar.control.setSelectedButton('sidebar_' + manHinhHienTai);
        APP.view.ui.showTab(manHinhHienTai);
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
            .querySelectorAll('#ui_main .tab')
            .forEach(function(tab)
            {
                tab.style.display = 'none';
            });
    }
};