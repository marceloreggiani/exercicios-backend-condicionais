//valor do produto comprado.
const valorDoProduto = 1000;
//quantidade de parcelas
const quantidadeDoParcelamento = 5;
//valor pago
const valorPago = 400;

const valorTotalDevido = valorDoProduto - valorPago; //600

const valorParcelas = valorDoProduto / quantidadeDoParcelamento; // 200

const parcelasRestantes = (valorTotalDevido / valorParcelas);

console.log(`Valor Restante é de : R$ ${(valorTotalDevido).toFixed(2)}`);
console.log(`Quantidade de Parcelas Restantes são: ${parcelasRestantes} parcelas`);