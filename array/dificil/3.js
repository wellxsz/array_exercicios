function inverter(array) {
    let resultado = [];
    for (let i = array.length - 1; i >= 0; i--) {
        resultado.push(array[i]);
    }
    return resultado;
}
console.log(inverter([1, 2, 3, 4]));
