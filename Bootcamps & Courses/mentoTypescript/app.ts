let button = document.getElementById('button');
let input1 = document.getElementById('input1') as HTMLInputElement;
let input2 = document.getElementById('input2') as HTMLInputElement;

function adicionarNumeros(num1: number, num2: number, printarResultado: boolean, frase: string) {
    let resultado = num1 + num2;
    if (printarResultado) {
        console.log(frase + resultado)
    }
    return resultado
}

let printarResultado = true;
let frase = 'O resultado é igual a: '

if (button) {
    button.addEventListener('click', () => {
        if (input1 && input2) {
            console.log(adicionarNumeros(Number(input1.value), Number(input2.value), printarResultado, frase));
        }
    })
}
