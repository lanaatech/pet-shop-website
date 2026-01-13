document.addEventListener('DOMContentLoaded', () => {
    const grid = document.getElementById('grid-galeria');
    const btn = document.getElementById('btn-carregar');

    async function carregarGaleria() {
        try {
            // Buscando 4 cães
            const dogRes = await fetch('https://dog.ceo/api/breeds/image/random/4');
            const dogData = await dogRes.json();

            // Buscando 4 gatos
            const catRes = await fetch('https://api.thecatapi.com/v1/images/search?limit=4');
            const catData = await catRes.json();

            // Criando os elementos de imagem para cães
            dogData.message.forEach(url => {
                const img = document.createElement('img');
                img.src = url;
                img.alt = 'Cachorro fofo';
                grid.appendChild(img);
            });

            // Criando os elementos de imagem para gatos
            catData.forEach(cat => {
                const img = document.createElement('img');
                img.src = cat.url;
                img.alt = 'Gato fofo';
                grid.appendChild(img);
            });

        } catch (error) {
            console.error("Erro ao carregar a galeria pet:", error);
        }
    }

    // Carrega ao abrir a página
    carregarGaleria();

    // Carrega mais ao clicar no botão
    btn.addEventListener('click', carregarGaleria);
});