APP.header = APP.header || {};
APP.header.ui = APP.header.ui || {};
APP.header.ui =
{
    init: function()
    {
        div({id: 'root_header', className: 'header'});
            table();
        $('#root_header').innerHTML =         
            `<table>
                <tr>
                    <td>
                        <img src="assets/img/home.png" style="Height:25px;margin-right:10px;">
                    </td>
                    <td>
                        <span style="position:relative;background:yellow;">`
                            + TimKiem_TextBox1.Show() +
                            `<span style="position:absolute;z-index:103;right:5px;top:0px;color:rgba(0,0,0,0.3);" 
                                onclick="TimKiem_TextBox1.Clear();TimKiemDanhBa();">
                                x
                            </span>
                        </span>
                    </td>
                    <td></td>
                </tr>
            </table>`;
    },
    render: function()
    {

    }
};
