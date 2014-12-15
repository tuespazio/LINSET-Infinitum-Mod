/*
    LINSET Infinitum Mod v1.0 por Eder Or (H@cK.32) - www.multiaportes.com
*/
var flag = false;
var icela;

function accionMA(codigo)
{
    if(codigo == 0)
    {
        if(!flag)
        {
            document.getElementById('msg-ma').setAttribute('class', 'cj-ma hlp-ma visible');
            document.getElementById('mensaje-ma').innerHTML = 'Cerrar';
            flag = true;
        }
        else
        {
            document.getElementById('msg-ma').setAttribute('class', 'cj-ma hlp-ma oculto');
            document.getElementById('mensaje-ma').innerHTML = '¿D&oacute;nde est&aacute; la clave?';
            flag = false;
        }
    }
    else if(codigo == 1)
        history.back();
    else if(codigo == 2)
        close();
}
function initUpdateMA()
{
    if(document.getElementById('llave-ma').value.length < 8)
        alert('La clave debe tener al menos 8 caracteres');
    else
        document.getElementById('datos-ma').submit();
}
function getSecsPerOperacion(dbg)
{
    if(typeof(sessionStorage) === "undefined")
    {
        (dbg === 'debug-ma')? document.getElementById('iota').innerHTML = (Math.random()%66).toFixed(5) : document.getElementById('iota').innerHTML = 0.66667;
    }
    else
    {
        if(sessionStorage.segundosMA == null)
            (dbg === 'debug-ma')? sessionStorage.segundosMA = (Math.random()%66).toFixed(5) : sessionStorage.segundosMA = 0.66667;
        document.getElementById('iota').innerHTML = sessionStorage.segundosMA;
    }
}