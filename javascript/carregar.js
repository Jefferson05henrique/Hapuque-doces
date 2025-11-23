function carregarCarrinho() {
    let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];
    let container = document.getElementById("carrinhoContainer");

    container.innerHTML = "";

    let total = 0;

    if (carrinho.length === 0) {
        container.innerHTML = "<p class='carrinho-vazio'>Seu carrinho está vazio 😢</p>";
        document.getElementById("totalValor").innerText = "R$ 0,00";
        return;
    }

    carrinho.forEach((item, index) => {

        // preço padrão, depois você altera
        const preco = 8;
        total += preco * item.quantidade;

        container.innerHTML += `
            <div class="item-carrinho">
                <img src="${item.img}" class="img-carrinho">
                
                <div class="info">
                    <h3>${item.produto}</h3>
                    <p>Sabor: <strong>${item.sabor}</strong></p>
                    <p>Quantidade: <strong>${item.quantidade}</strong></p>
                </div>

                <button class="remover" onclick="removerItem(${index})">✕</button>
            </div>
        `;
    });

    document.getElementById("totalValor").innerText =
        "R$ " + total.toFixed(2).replace(".", ",");
}

function removerItem(index) {
    let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];
    carrinho.splice(index, 1);
    localStorage.setItem("carrinho", JSON.stringify(carrinho));
    carregarCarrinho();
}

carregarCarrinho();