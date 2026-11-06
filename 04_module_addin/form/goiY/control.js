APP.form = APP.form || {};
APP.form.goiY = APP.form.goiY || {};
APP.form.goiY.data = [];
APP.form.goiY.control = 
{
    init: function()
    {
        APP.form.goiY.ui.init();
    },
    bindEvents: function()
    {
        
    },
    select: function(id, ten, timKiem)
    {
        let noiDung = APP.form.goiY.noiDung;
        $('#form_input_goiY_timKiem').value = timKiem;
        $('#form_input_goiY_ten').value = ten;
        APP.form.state[noiDung] = {id: id, ten: ten, timKiem: timKiem};
        APP.form.ui.renderListField(noiDung);
        APP.form.goiY.ui.hide();
    },
    save: function()
    {
        let noiDung = APP.form.goiY.noiDung;
        let ten = $('#form_input_goiY_ten').value;
        if (ten == '')
        {
            $('#form_input_goiY_timKiem').value = '';
            APP.form.state[noiDung] = {id: '', ten: '', timKiem: ''};
        }
        else
        {
            APP.form.state[noiDung].ten = ten;
            APP.form.state[noiDung].timKiem = $('#form_input_goiY_timKiem').value;
        }
        APP.form.ui.renderListField(noiDung);
    }
}