const botonConvertir = document.getElementById('btnconvertir');
const montoInput = document.getElementById('monto');
const monedaSelect = document.getElementById('moneda');
const resultado = document.getElementById('resultado');

botonConvertir.addEventListener('click', async () => {
    const monto = montoInput.value;
    const moneda = monedaSelect.value;

    try {
        const respuesta = await fetch('https://mindicador.cl/api/');
        const datos = await respuesta.json();

        let tipoCambio;
        if (moneda === 'EUR') {
            tipoCambio = datos.euro.valor; 
        } else {
            tipoCambio = datos.dolar.valor;
        }

        const resultadoConversion = (monto / tipoCambio).toFixed(2);
        resultado.textContent = `${resultadoConversion} ${moneda}`;
    } catch (error) {
        console.error('Error al obtener los datos:', error);
        resultado.textContent = 'Error al realizar la conversión';
    }
});