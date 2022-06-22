function validaArrays(arr, num) {
    try {
        if (!arr && !num)
            throw new ReferenceError("Envie os parâmetros corretamente");

        if (typeof arr !== 'object')
            throw new TypeError('Envie um elemento do tipo Array');

        if (arr.length !== num)
            throw new RangeError('O tamanho do array é inválido');

        return arr;

    } catch (error) {
        if (error instanceof ReferenceError) {
            console.log(error.message);
            console.log(error.stack);
        } else if (error instanceof TypeError) {
            console.log(error.message);
            console.log(error.stack);
        } else if (error instanceof RangeError) {
            console.log(error.message);
            console.log(error.stack);
        }
    }
}

console.log(validaArrays([1, 2, 3], 0));