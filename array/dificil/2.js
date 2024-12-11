function media(array) {
    let soma = array.reduce((acc, num) => acc + num, 0);
    return soma / array.length;
}
console.log(media([1, 2, 3, 4, 5]));
