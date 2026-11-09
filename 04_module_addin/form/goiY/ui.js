APP.form = APP.form || {};
APP.form.goiY = APP.form.goiY || {};
APP.form.goiY.noiDung = '';

APP.form.goiY.ui = 
{
    header:
    {
        init: function()
        {
            PVCComponent.div({id: 'form__input__goiY__header__container', className: 'form__input__goiY__header__container', parent: document.body});
        },
        show: function()
        {
            $('#form__input__goiY__header__container').style.display = 'block';
            PVCComponent.hide('header');
        },
        hide: function()
        {
            $('#form__input__goiY__header__container').style.display = 'none';
            PVCComponent.show('header');
        }
    },
    init: function()
    {
        const main = document.createElement('div');
        main.className = 'tab__main';        
        main.innerHTML = `
            <div class="form_input_goiY_list" style="display:flex; flex-direction: column;" id="form_input_goiY_list">
            </div>`;
        APP.view.ui.addTab('form_input_goiY', main);
        
        $('#form__input__goiY__header__container').innerHTML = `
            <table style="height: var(--header-height); width:100%;" id="form_input_goiY_header">
                <tr>                    
                    <td>
                        <div style="position:relative;">
                            <input type="text" class="inputBox" id="form_input_goiY_ten" 
                                onclick="APP.form.goiY.ui.hideTimKiem();"
                                onkeyup="APP.form.goiY.ui.filter();"
                                class="form__input__goiY__header__ten" autocomplete="nope">
                            <span class="image-button form__input__goiY__header__ten__clear"
                                onclick="APP.form.goiY.ui.clearTen();">
                                x
                            </span>
                        </div>
                    </td>
                    <td style="max-width:150px;">
                        <div class="form_input_goiY_timKiem_button" 
                            id="form_input_goiY_timKiem_button" onclick="APP.form.goiY.ui.showTimKiem();">
                            &nbsp;
                        </div>
                        <input type="text"
                            class="inputBox form__input__goiY__header__timKiem" id="form_input_goiY_timKiem" autocomplete="nope">
                    </td>
                    <td style="width:40px;" onclick="APP.form.goiY.ui.hide();">
                        ${APP.form.goiY.ui.assets.img.save}
                    </td>
                </tr>
            </table>
        `;
    },
    render: function(noiDung)
    {
        APP.form.goiY.noiDung = noiDung;
        APP.form.goiY.ui.header.show();
        $('#form_input_goiY_ten').value = '';
        $('#form_input_goiY_timKiem').value = '';
        this.renderList();
        this.show();
    },
    reRender: function()
    {
        this.render(APP.form.goiY.noiDung);
    },
    filter: function()
    {
        const search = $('#form_input_goiY_ten').value;
        if (search.length < 2)
        {
            this.showAllList();
        }
        else
        {
            this.hideAllList();
            let list = APP.form.ui.listField[APP.form.goiY.noiDung].list;
            list.forEach(item => {
                if (ATrongB(search, item.timKiem) || ATrongB(search, item.ten))
                {
                    $('#form_input_goiY_list_' + item.id).classList.remove('hidden');
                }
            });
        }
    },
    show: function()
    {
        APP.view.ui.showTab('form_input_goiY', main);
    },
    showTimKiem: function()
    {
        $('#form_input_goiY_timKiem_button').style.display = 'none';
        $('#form_input_goiY_timKiem').style.display = 'block';
    },
    hideTimKiem: function()
    {
        $('#form_input_goiY_timKiem_button').style.display = 'block';
        $('#form_input_goiY_timKiem').style.display = 'none';
    },
    clearTen: function()
    {
        $('#form_input_goiY_ten').value = '';
        $('#form_input_goiY_timKiem').value = '';
        APP.form.state[APP.form.goiY.noiDung] = {id: '', ten: '', timKiem: ''};
        
        APP.form.goiY.ui.reRender();
        $('#form_input_goiY_ten').focus();            
    },
    clear: function()
    {

    },
    hide: function()
    {
        APP.form.goiY.control.save();
        this.clear();
        APP.form.goiY.ui.header.hide();
        APP.view.ui.back();
    },
    renderList: function()
    {
        let list = APP.form.ui.listField[APP.form.goiY.noiDung].list;
        let ht = '';
        for (let i=0; i<list.length; i++)
        {
            let selected = ' on-color-background';
            if (String(APP.form.state[APP.form.goiY.noiDung].id) === String(list[i].id))
            {
                selected  = '';
                $('#form_input_goiY_timKiem').value = list[i].timKiem;
                $('#form_input_goiY_ten').value = list[i].ten;
            }
            ht += `
            <div id="form_input_goiY_list_${list[i].id}" onclick="APP.form.goiY.control.select('${list[i].id}', '${escapeHtml(list[i].ten)}', '${list[i].timKiem}')"
                class="form_input_goiY_list__row inputBox button_01 ${selected}">
                    ${list[i].ten}
            </div>`;
        }
        $('#form_input_goiY_list').innerHTML = ht;
    },
    showAllList: function()
    {
        let list = APP.form.ui.listField[APP.form.goiY.noiDung].list;
        list.forEach(item => {
            $('#form_input_goiY_list_' + item.id).classList.remove('hidden');
        });        
    },
    hideAllList: function()
    {
        let list = APP.form.ui.listField[APP.form.goiY.noiDung].list;
        list.forEach(item => {
            $('#form_input_goiY_list_' + item.id).classList.add('hidden');
        }); 
    },
    assets:
    {
        img:
        {
            save: `<svg x="0" y="0" viewbox = "0 0 100 100"  style="height:35px; opacity: 1;" class="image-button">
                <circle cx="50" cy="50" r="43.5" fill="none" style="stroke: white;" stroke-width="13"/>	
                <path stroke="none" fill="rgba(0,0,0,0.7)" d="M19,48 h24 l12,9 l22,-30 l15,-4 l-42,48"/>
                <path stroke="rgba(0,0,0,0.5)" stroke-width="0.5"  style="fill: white;" 
                    d="M14,46 L33,46 L45,55 L67,25 L85,21 L49,73z"/>
            </svg>`
        }
    }
}