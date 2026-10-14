const APP = {};
APP.config = APP.config || {};
APP.config = 
{
    id: '00148',
    publicUrl: 'https://pvcapp.github.io/00148',
    showIcon: true,
    mobileMode: window.innerWidth <= 981
};


/*
index.html:
<!DOCTYPE html>
<html lang="vi">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width,initial-scale=1">
        <title>Nhà cho thuê</title>
        
        <link rel="stylesheet" 
            href="../00_core/root.css">
        <link rel="stylesheet" 
            href="../00_core/layout.css">    
        <script src="../00_core/root.js"></script>
        <script src="../00_core/config.js"></script>
        <script src="../00_core/dom.js"></script>
        
        <link rel="stylesheet" 
            href="../01_shared/components/alert/style.css">
        <script src="../01_shared/components/alert/main.js"></script>

        <link rel="stylesheet" 
            href="../01_shared/components/toast/style.css">
        <script src="../01_shared/components/toast/main.js"></script>

        <script src="../01_shared/components/ai/chat.js"></script>

        <link rel="stylesheet" 
               href="../01_shared/components/dashboard/style.css">
        <script src="../01_shared/components/dashboard/main.js"></script>
            <link rel="stylesheet" 
                   href="../01_shared/components/dashboard/card/style.css">
            <script src="../01_shared/components/dashboard/card/main.js"></script>
                <link rel="stylesheet" 
                       href="../01_shared/components/dashboard/card/numberCard_01/style.css">
                <script src="../01_shared/components/dashboard/card/numberCard_01/main.js"></script>
                <link rel="stylesheet" 
                       href="../01_shared/components/dashboard/card/numberCard_02/style.css">
                <script src="../01_shared/components/dashboard/card/numberCard_02/main.js"></script>
                <link rel="stylesheet" 
                       href="../01_shared/components/dashboard/card/detailCard_01/style.css">
                <script src="../01_shared/components/dashboard/card/detailCard_01/main.js"></script>

                <link rel="stylesheet" 
                       href="../01_shared/components/dashboard/table/table_01/style.css">
                <script src="../01_shared/components/dashboard/table/table_01/main.js"></script>

        
        <link rel="stylesheet" href="../01_shared/style.css">
        <script src="../01_shared/functions.js"></script> 

        <link rel="stylesheet" 
               href="../01_shared/components/loading/loading-bar/style.css">
        <script src="../01_shared/components/loading/loading-bar/ui.js"></script> 
       
        <script src="../01_shared/components/loading/loading-screen/main.js"></script> 
            <link rel="stylesheet"
                   href="../01_shared/components/loading/loading-screen/loading-screen_02/style.css">
            <script src="../01_shared/components/loading/loading-screen/loading-screen_02/main.js"></script> 
        
            <script src="../01_shared/components/loading/loading-text/main.js"></script> 
            <link rel="stylesheet"
                   href="../01_shared/components/loading/loading-text/loading-text_01/style.css">
            <script src="../01_shared/components/loading/loading-text/loading-text_01/main.js"></script> 
            <link rel="stylesheet"
                   href="../01_shared/components/loading/loading-text/loading-text_02/style.css">
            <script src="../01_shared/components/loading/loading-text/loading-text_02/main.js"></script> 

        <link rel="stylesheet"
               href="../01_shared/components/form/style.css">
        <script src="../01_shared/components/form/main.js"></script>
            <link rel="stylesheet"
                   href="../01_shared/components/form/button/style.css">
            <script src="../01_shared/components/form/button/main.js"></script>
                <link rel="stylesheet"
                       href="../01_shared/components/form/button/button_01/style.css">
                <script src="../01_shared/components/form/button/button_01/main.js"></script>
                <link rel="stylesheet"
                       href="../01_shared/components/form/button/onlyIconButton_01/style.css">
                <script src="../01_shared/components/form/button/onlyIconButton_01/main.js"></script>
            <link rel="stylesheet"
                   href="../01_shared/components/form/date-picker/style.css">
            <script src="../01_shared/components/form/date-picker/main.js"></script>
            <script src="../01_shared/components/form/formField/main.js"></script>
                <link rel="stylesheet"
                       href="../01_shared/components/form/formField/formField_01/style.css">
                <script src="../01_shared/components/form/formField/formField_01/main.js"></script>


        
        
        <script src="../02_APP/ui.js"></script>
        <script src="../02_APP/cache.js"></script>
        <script src="../02_APP/control.js"></script>

        <script src="../03_module_main/user/ui.js"></script>
        <script src="../03_module_main/user/control.js"></script>

        <link rel="stylesheet" 
            href="../03_module_main/user/menu/style.css">
        <script src="../03_module_main/user/menu/ui.js"></script>
        <script src="../03_module_main/user/menu/control.js"></script>

        <link rel="stylesheet" 
            href="../03_module_main/user/login/style.css">
        <script src="../03_module_main/user/login/ui.js"></script>
        <script src="../03_module_main/user/login/control.js"></script>

        <link rel="stylesheet" 
            href="../03_module_main/user/changePassword/style.css">
        <script src="../03_module_main/user/changePassword/ui.js"></script>
        <script src="../03_module_main/user/changePassword/control.js"></script>
        
        <script src="../03_module_main/loading_screen/main.js"></script>

        <link rel="stylesheet" 
            href="../03_module_main/header/style.css">
        <script src="../03_module_main/header/ui.js"></script>
        <script src="../03_module_main/header/control.js"></script>

        <link rel="stylesheet"
            href="../03_module_main/actionbar/style.css">
        <script src="../03_module_main/actionbar/ui.js"></script>
        <script src="../03_module_main/actionbar/control.js"></script>

        <link rel="stylesheet"
            href="../03_module_main/sidebar/style.css">
        <script src="../03_module_main/sidebar/ui.js"></script>
        <script src="../03_module_main/sidebar/control.js"></script>

        <link rel="stylesheet"
            href="../03_module_main/view/style.css">
        <script src="../03_module_main/view/ui.js"></script>
        <script src="../03_module_main/view/control.js"></script>

        <link rel="stylesheet"
            href="../03_module_main/footer/style.css">
        <script src="../03_module_main/footer/ui.js"></script>
        <script src="../03_module_main/footer/control.js"></script>
        

        <script src="../04_module_features/chuNha/ui.js"></script>
        <script src="../04_module_features/chuNha/control.js"></script>
        
        <script src="../04_module_features/chuNha/dashboard/ui.js"></script>
        <script src="../04_module_features/chuNha/dashboard/control.js"></script>
        <script src="../04_module_features/chuNha/dashboard/api.js"></script>

        
        
        <script src="../04_module_features/chuNha/sidebar/ui.js"></script>
        <script src="../04_module_features/chuNha/sidebar/control.js"></script>

        <script src="../04_module_features/chuNha/khuNha/ui.js"></script>
        <script src="../04_module_features/chuNha/khuNha/control.js"></script>
            <script src="../04_module_features/chuNha/khuNha/form/ui.js"></script>
            <script src="../04_module_features/chuNha/khuNha/form/control.js"></script>
            <script src="../04_module_features/chuNha/khuNha/form/api.js"></script>
            <script src="../04_module_features/chuNha/khuNha/list/ui.js"></script>
            <script src="../04_module_features/chuNha/khuNha/list/control.js"></script>

        <script src="../04_module_features/chuNha/phong/ui.js"></script>
        <script src="../04_module_features/chuNha/phong/control.js"></script>
            <script src="../04_module_features/chuNha/phong/list/ui.js"></script>
            <script src="../04_module_features/chuNha/phong/list/control.js"></script>
            <script src="../04_module_features/chuNha/phong/form/ui.js"></script>
            <script src="../04_module_features/chuNha/phong/form/control.js"></script>
            <script src="../04_module_features/chuNha/phong/form/api.js"></script>

        <script src="../04_module_features/chuNha/hopDong/ui.js"></script>
        <script src="../04_module_features/chuNha/hopDong/control.js"></script>
        <script src="../04_module_features/chuNha/hopDong/api.js"></script>

        
        
        <link rel="stylesheet"
            href="../04_module_features/chuNha/khachHang/style.css">
        <script src="../04_module_features/chuNha/khachHang/ui.js"></script>
        <script src="../04_module_features/chuNha/khachHang/control.js"></script>
            <script src="../04_module_features/chuNha/khachHang/list/ui.js"></script>
            <script src="../04_module_features/chuNha/khachHang/list/control.js"></script>

            <script src="../04_module_features/chuNha/khachHang/detail/ui.js"></script>
            <script src="../04_module_features/chuNha/khachHang/detail/control.js"></script>
            <script src="../04_module_features/chuNha/khachHang/detail/api.js"></script>

            <script src="../04_module_features/chuNha/khachHang/form/ui.js"></script>
            <script src="../04_module_features/chuNha/khachHang/form/control.js"></script>
            <script src="../04_module_features/chuNha/khachHang/form/api.js"></script>
        
            <script src="../04_module_features/chuNha/setting/ui.js"></script>
            <script src="../04_module_features/chuNha/setting/control.js"></script>

        <script src="../04_module_features/khachHang/main.js"></script>
        <link rel="stylesheet" href="../06_style/table.css">
        <script>
            document.addEventListener("DOMContentLoaded", function() {
                APP.control.init();
                APP.control.startup();
            });
        </script>
    </head>

    <body>

    </body>
</html>
*/