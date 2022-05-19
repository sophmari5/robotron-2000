//BRACO
const subBraco = document.getElementById("btnMenosBraco")
const addBraco = document.getElementById("btnMaisBraco")

subBraco.addEventListener("click", diminuiBraco);
addBraco.addEventListener("click", aumentaBraco);

function diminuiBraco(){
    const visorBraco = document.getElementById("visorBraco")
    visorBraco.value = parseInt(visorBraco.value) - 1
}

function aumentaBraco(){
    const visorBraco = document.getElementById("visorBraco")
    visorBraco.value = parseInt(visorBraco.value) + 1
}

//BLINDAGEM
const subBlindagem = document.getElementById("btnMenosBlindagem")
const addBlindagem = document.getElementById("btnMaisBlindagem")

subBlindagem.addEventListener("click", diminuiBlindagem);
addBlindagem.addEventListener("click", aumentaBlindagem);

function diminuiBlindagem(){
    const visorBlindagem = document.getElementById("visorBlindagem")
    visorBlindagem.value = parseInt(visorBlindagem.value) - 1
}

function aumentaBlindagem(){
    const visorBlindagem = document.getElementById("visorBlindagem")
    visorBlindagem.value = parseInt(visorBlindagem.value) + 1
}