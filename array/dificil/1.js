function intersecao(array1, array2) {
    return array1.filter(element => array2.includes(element));
}
console.log(intersecao([1, 2, 3], [2, 3, 4]));
