function substitiuNumerosPares(array) {
    if (!array.length) return console.log(-1);

    const naoZero = (num) => num !== 0;
    const numPar = (num) => num % 2 === 0;

    for (let i = 0; i < array.length; i++) {
        if (numPar(array[i]) && naoZero(array[i])) {
            console.log(`trocamos ${array[i]} por 0...`);
            array[i] = 0;
        } else if (!naoZero(array[i])) {
            console.log('Ops, você já vale 0.');
        }
    }
    console.log(array);
}

substitiuNumerosPares([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);