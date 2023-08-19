const primeiroNome = "Mario";
const sobrenome = "Lugi";
const apelido = "Bross";

if (apelido) {
    console.log(apelido);
} else if (sobrenome) {
    console.log(primeiroNome + " " + sobrenome);
} else {
    console.log(primeiroNome);
}