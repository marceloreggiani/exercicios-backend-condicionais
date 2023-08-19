const jogada1 = "pedra"
const jogada2 = "pedra"


if (jogada1 === jogada2) {
    console.log("Deu Empate");
} else if (jogada1 === "pedra" && jogada2 === "tesoura") {
    console.log(jogada1);
} else if (jogada1 === "papel" && jogada2 === "pedra") {
    console.log(jogada1);
} else if (jogada1 === "tesoura" && jogada2 === "papel") {
    console.log(jogada1);
} else {
    console.log(jogada2);
}