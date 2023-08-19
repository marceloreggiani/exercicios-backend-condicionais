const caractere = "E";

if (caractere === "A" || caractere === "E" || caractere === "I" || caractere === "O" || caractere === "U") {
    console.log("Vogal maiúscula");
} else if (caractere === "a" || caractere === "e" || caractere === "i" || caractere === "o" || caractere === "u") {
    console.log("Vogal minúscula");
} else if (!isNaN(Number(caractere))) { // pesquisei essa solução na internet. Pegar explicação detalhada monitoria
    console.log("Número"); // entendi o conceito de que nega o numero e mesmo como caracter.  Mas ainda achei confuso.
} else {
    console.log("Consoante");
}
