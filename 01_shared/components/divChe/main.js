const divChe_init = () =>
{
    let style = document.createElement('style');
        style.textContent = `
            .div-che {
                position:fixed;
                top:0px;
                left:0px;
                width:100%;
                height:100%;
                z-index:100;
                display:none;
                background:rgba(0,0,0,0.3)
            }
        `;
        document.head.appendChild(style);
}

const divChe = ({id = 'divChe'}) =>
{
    let divChe = document.createElement('div');
    divChe.id = id;
    divChe.className = 'div-che';
    document.body.appendChild(divChe);
}