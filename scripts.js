console.log("Compra ticket");
const formulario = document.forms['miFormulario'];
console.log(formulario);
function calcular(){
    let nombre = formulario['nombre'];
    let apellido = formulario['apellido'];
    let cantidad = formulario['cantidad'];
    let categoria = formulario['categoria'];

    let resumen = document.getElementById('resumen');
    let textoResumen = "Total a Pagar: $"

    let descuento = 0;
    let total = 0;
    if (validar()) {
        switch (parseInt(categoria.value)){
            case 1:
                descuento = 200 * 0.8;
                total = (200 - descuento)*cantidad.value;
                textoResumen += " "+total;
                resumen.innerHTML = textoResumen;
                break;
            case 2:
                descuento = 200 * 0.5;
                total = (200 - descuento)*cantidad.value;
                textoResumen += " "+total;
                resumen.innerHTML = textoResumen;
                break;
            case 3:
                descuento = 200 * 0.15;
                total = (200 - descuento)*cantidad.value;
                textoResumen += " "+total;
                resumen.innerHTML = textoResumen;
                break;
        }
    }
    
    console.log(`Nombre: ${nombre.value}
    Apellido: ${apellido.value}
    Cantidad: ${cantidad.value}
    Categoria: ${categoria.value}`)
};

function borrar(){
    formulario['nombre'].value = "";
    formulario['apellido'].value = "";
    formulario['correo'].value = "";
    formulario['cantidad'].value = "";
    console.log(formulario['categoria'].text);
    formulario['categoria'].value = 1;
    document.getElementById('resumen').innerHTML = "Total a Pagar: $";

}

function validar(){
    for(elemento of formulario){
        if(elemento.value == ""){
            alert(`Complete el campo ${elemento.id}`);
            elemento.className = "form-control fs-4 border border-danger border-2";
            elemento.focus();
            elemento.style.outline = "solid #FDA08B";
            console.log(elemento.className);
            return false
        }
    }
    return true;
}
function restablecerInput(elemento){
    elemento.className = "form-control fs-4";
    elemento.style = "";
}