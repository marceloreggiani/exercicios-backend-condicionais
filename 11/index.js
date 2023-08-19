//renda mensal do aluno, em centavos.
const rendaMensalEmCentavos = 300000;

// Tempo decorrido de contrato. Se for maior que 60 meses, o aluno não deve mais nada.
const mesesDecorridos = 60;

// Soma das parcelas já pagas pelo aluno nos meses anteriores (em centavos). Se for igual a 18 mil reais, o aluno não deve pagar mais nada, pois já quitou a dívida.
const totalJaPagoPeloAluno = 1000000;

let valorParcela = 0

if (rendaMensalEmCentavos > 200000 && totalJaPagoPeloAluno < 1800000 && mesesDecorridos < 60) {
    valorParcela = rendaMensalEmCentavos * 0.18 / 100
    console.log(`O valor da parcela deste mês é: R$ ${valorParcela.toFixed()} reais`);
} else if (rendaMensalEmCentavos < 200000 || totalJaPagoPeloAluno >= 1800000 || mesesDecorridos >= 60) {
    console.log("O valor da parcela desse mês é R$ 0 reais. Nenhum valor é devido pois a renda do estudante está abaixo do valor mínimo de R$ 2000 reais. Ou ja finalizou o pagamento dos R$ 18000");
}