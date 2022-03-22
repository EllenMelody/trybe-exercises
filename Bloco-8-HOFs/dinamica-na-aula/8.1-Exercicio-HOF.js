const wake = () => {
    return 'Acordando!!!';
}

const coff = () => {
    return 'Bora tomar café!!!';
}

const sleep = () => {
    return 'Partiu dormir';
}

const doingThings = (funcao, funcao2, funcao3) => {
    console.log(funcao);
    console.log(funcao2);
    console.log(funcao3);
}

doingThings(wake(),wake(), wake());


