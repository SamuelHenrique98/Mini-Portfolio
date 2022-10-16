const abas = document.querySelectorAll('.aba');

abas.forEach(aba => {
    aba.addEventListener("click", function(){
        if(aba.classList.contains("selecionado")){
            return;
        }//ele previne que código redundante rode
        selecionarAba(aba)
        mostrarInformacoesDaAba(aba)
    });
});

function selecionarAba(aba) {
    const abaSelecionada = document.querySelector('.aba.selecionado');
    abaSelecionada.classList.remove('selecionado');    
    aba.classList.add('selecionado');
    const informacaoSelecionada = document.querySelector(".informacao.selecionado");
    informacaoSelecionada.classList.remove("selecionado");
}

function mostrarInformacoesDaAba(aba) {
    const idDoElementoDeInformacaoDaAba = `informacao-${aba.id}`;
    const informacaoASerMostrada = document.getElementById(idDoElementoDeInformacaoDaAba);
    informacaoASerMostrada.classList.add('selecionado');
}