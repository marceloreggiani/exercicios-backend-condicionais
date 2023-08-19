const aposentada = false;
const portadoraDeDoenca = false;
const totalDeRendimentos = 2855971; //emCentavos

if (aposentada === true || portadoraDeDoenca === true) {
    console.log("ISENTO");
} else if (totalDeRendimentos <= 2855970) {
    console.log("VAZA LEAO! JA TA DIFICIL SEM VOCE");
} else {
    console.log("PEGA LEAO");
}