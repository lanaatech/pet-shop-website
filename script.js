let links = document.querySelectorAll('.itens');
let linkInicio = document.querySelectorAll('.itens')[0];
let linkProdutos = document.querySelectorAll('.itens')[1];
let linkGaleria = document.querySelectorAll('.itens')[2];
let linkContato = document.querySelectorAll('.itens')[3];

//função para navegação do menu principal entre páginas
function navegador() {
    links.forEach(linkCliado => {
        linkCliado.addEventListener('click', (e) => {
            const alvo = e.target;
            if (alvo === linkInicio) {
                window.location.href = 'index.html';
            } else if (alvo === linkProdutos) {
                window.location.href = 'produtos.html';
            } else if (alvo === linkGaleria) {
                window.location.href = 'galeria.html';
            } else if (alvo === linkContato) {
                window.location.href = 'contato.html';
            }
    });
});
}

navegador();

//evento para redirecionamento do botão principal para página de contato
let botaoPrincipal = document.getElementById('botao-principal');
botaoPrincipal.addEventListener('click', () => {
    window.location.href = 'contato.html';
});

//evento para os botões "saiba mais" das seções de serviços
let botoesSaberMais = document.querySelectorAll('.botao-saber-mais');
botoesSaberMais.forEach(botao => {
    botao.addEventListener('click', () => {
        window.location.href = 'produtos.html';
    });
});

//evento para o botão de promoções
let botaoPromocoes = document.querySelector('.promocoes button');
botaoPromocoes.addEventListener('click', () => {
    alert('Promoções indisponiveis no momento. Volte mais tarde!');
});
