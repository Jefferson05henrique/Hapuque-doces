let produtoAtual = "";
let quantidade = 1;
let saborSelecionado = null;

// SABORES PERSONALIZADOS (você pode trocar imagens e nomes)
const saboresPorProduto = {
  "pão de mel": [
    { nome: "Chocolate", img: "/assets/img/chocolate.jpg" },
    { nome: "Brigadeiro", img: "/assets/img/brigadeiro.jpg" },
    { nome: "Beijinho", img: "/assets/img/beijinho.jpg" }
  ],

  "Trufas": [
    { nome: "Morango", img: "/assets/img/morango.jpg" },
    { nome: "Uva", img: "/assets/img/uva.jpg" },
    { nome: "Maracujá", img: "/assets/img/maracuja.jpg" }
  ],

  "Cupcake": [
    { nome: "Chocolate", img: "/assets/img/chocolate.jpg" },
    { nome: "Brigadeiro", img: "/assets/img/brigadeiro.jpg" },
    { nome: "Beijinho", img: "/assets/img/beijinho.jpg" }
  ],

  "Pirulitos": [
    { nome: "Morango", img: "/assets/img/morango.jpg" },
    { nome: "Uva", img: "/assets/img/uva.jpg" },
    { nome: "Maracujá", img: "/assets/img/maracuja.jpg" } 
  ],

  "Docinhos": [
    { nome: "Chocolate", img: "/assets/img/chocolate.jpg" },
    { nome: "Brigadeiro", img: "/assets/img/brigadeiro.jpg" },
    { nome: "Beijinho", img: "/assets/img/beijinho.jpg" }
  ],

  "Mini Brownie": [
    { nome: "Morango", img: "/assets/img/morango.jpg" },
    { nome: "Uva", img: "/assets/img/uva.jpg" },
    { nome: "Maracujá", img: "/assets/img/maracuja.jpg" } 
  ]
};

// ABRIR MODAL
function abrirModal(produto) {
    produtoAtual = produto;
    document.getElementById("produtoTitulo").innerText = produto;

    quantidade = 1;
    document.getElementById("qtdAtual").innerText = quantidade;

    const container = document.getElementById("listaSabores");
    container.innerHTML = "";

    const lista = saboresPorProduto[produto];

    lista.forEach((sabor, index) => {
        const div = document.createElement("div");
        div.classList.add("sabor-card");
        div.onclick = () => selecionarSabor(index);

        div.innerHTML = `
            <img src="${sabor.img}" alt="${sabor.nome}">
            <p>${sabor.nome}</p>
        `;

        container.appendChild(div);
    });

    saborSelecionado = null;
    document.getElementById("modalSabores").style.display = "block";
}

// FECHAR MODAL
function fecharModal() {
    document.getElementById("modalSabores").style.display = "none";
}

// SELECIONAR SABOR
function selecionarSabor(index) {
    const cards = document.querySelectorAll(".sabor-card");

    cards.forEach(c => c.classList.remove("selecionado"));
    cards[index].classList.add("selecionado");

    const lista = saboresPorProduto[produtoAtual];
    saborSelecionado = lista[index];
}

// ALTERAR QUANTIDADE
function alterarQtd(valor) {
    quantidade += valor;
    if (quantidade < 1) quantidade = 1;
    document.getElementById("qtdAtual").innerText = quantidade;
}

// ADICIONAR AO CARRINHO
function addCarrinho() {
    if (!saborSelecionado) {
        alert("Escolha um sabor!");
        return;
    }

    const item = {
        produto: produtoAtual,
        sabor: saborSelecionado.nome,
        img: saborSelecionado.img,
        quantidade: quantidade
    };

    let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];
    carrinho.push(item);
    localStorage.setItem("carrinho", JSON.stringify(carrinho));

    alert("Adicionado ao carrinho!");
    fecharModal();
}
