function removerDuplicados(array) {
    return [...new Set(array)];
}
console.log(removerDuplicados([1, 2, 2, 3, 4, 4]));
