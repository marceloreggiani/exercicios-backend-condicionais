//tipo de pagamento (dinheiro, credito, debito, cheque).
const tipoDePagamento = "debito";

//valor da mercadoria (centavos)
const valorDoProduto = 130; // Optei por informar 130 no lugar de 13000 e ter de criar uma variavel para formatar o numero (const numeroFormatado = (numero / 100).toFixed(2);) e deixar o programa maior.

if (tipoDePagamento === "credito") {
    const valorFinal = valorDoProduto - (valorDoProduto * 0.05)
    console.log(`O valor a ser pago é: R$ ${valorFinal.toFixed(2)} reais`);
} else if (tipoDePagamento === "debito") {
    const valorFinal = valorDoProduto - (valorDoProduto * 0.1)
    console.log(`O valor a ser pago é: R$ ${valorFinal.toFixed(2)} reais`);
} else {
    const valorFinal = valorDoProduto - (valorDoProduto * 0.03)
    console.log(`O valor a ser pago é: R$ ${valorFinal.toFixed(2)} reais`);
}