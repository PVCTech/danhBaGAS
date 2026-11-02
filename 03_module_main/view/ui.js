APP.view = APP.view || {};
APP.view.ui = 
{
    tabHistory: [],
    init: function()
    {
        div({
            id: 'view',
            className: 'view',
            parentId: 'main'
        });

        //các module cũng init luôn:


        
        //APP.view.ui.showLoading();
    },
    render: function()
    {
        let timKiem = APP.sidebar.ui.moduleList.find(md => md.module == APP.state.manHinhHienTai);
        if (timKiem) this.showTab(APP.state.manHinhHienTai);
    },
    showLoading: function()
    {
        APP.view.ui.showTab('home', 'startupScreen', 'loading');
    },
    addTab: function(module, el, override = 0)
    {
        let id  = module + '_tab';
        if ($('#' + id))
        {
            console.log('APP.view.ui.addTab: tab id: ' + id + ' đã tồn tại. Chế dộ ghi đè: ' + override);            
            if (override == 0) return;
            var existingTab = $('#' + id);
            existingTab.innerHTML = '';
            existingTab.appendChild(el);
            return;
        }

        const tab = document.createElement('div');
        tab.className = 'view__tab';
        tab.classList.add('hide');
        tab.id = id;
        tab.appendChild(el);
        $('#view').appendChild(tab);
    },
    addElementToTab: function(module, el)
    {
        let id  = module + '_tab';
        if ($('#' + id))
        {
            $('#' + id).appendChild(el);
        }
        else
        {
            APP.view.ui.addTab(vaiTro, module, type, el);
        }
    },
    hasTab: function(module)
    {
        const id = module + '_tab';
        return document.getElementById(id) !== null;
    },
    showTab: function(module)
    {
        const tabId = module + '_tab';
        APP.state.manHinhHienTai = module;

        const tabs = document.querySelectorAll('#view > .view__tab');
        tabs.forEach(function(tab)
        {
            tab.style.display = 'none';
        });

        const tab = $('#' + tabId);
        if (!tab)
        {
            console.log('APP.view.ui: Màn hình này chưa có hoặc chưa sẵn sàng: ' + tabId);
            toast('APP.view.ui: Màn hình này chưa có hoặc chưa sẵn sàng');
            return;
        }
        tab.style.display = '';
        tab.classList.remove('hide');
        this.addTabHistory(module); 
    },
    addTabHistory: function(module)
    {
        this.remveTabHistory(module);
        APP.view.ui.tabHistory.push(module);
        if (APP.view.ui.tabHistory.length > 1) APP.footer.ui.backButton.enable();
    },
    remveTabHistory: function(module)
    {
        APP.view.ui.tabHistory = APP.view.ui.tabHistory.filter(x => x !== module);
        if (APP.view.ui.tabHistory.length <= 1) APP.footer.ui.backButton.disable();
    },
    clearTab: function(module)
    {
        this.remveTabHistory(module);
        const tab = $(`#${module}_tab`);
        if (tab) tab.innerHTML = `Chưa có dữ liệu`;
    },
    removeTab: function(module)
    {
        const tabId = module + '_tab';
        const tab = $('#' + tabId);
        if (!tab) 
        {
            return;
        }
        else
        {
            tab.remove();
        }
        this.remveTabHistory(module);
    },
    clearAllTab: function()
    {
        APP.sidebar.ui.moduleList.forEach(md => {
            this.clearTab(md.module);
        });
    },
    clear: function()
    {
        $('#view').innerHTML = '';
        APP.view.ui.tabHistory = [];
    },
    back: function()
    {
        if (APP.view.ui.tabHistory.length > 1) this.remveTabHistory(APP.state.manHinhHienTai);
        if (APP.view.ui.tabHistory.length > 0) 
        {
            this.showTab(APP.view.ui.tabHistory[APP.view.ui.tabHistory.length - 1]);
        }
    }
};
