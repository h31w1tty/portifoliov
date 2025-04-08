document.addEventListener("DOMContentLoaded", function () {
    const listaVersoes = [
        { nome: "Portfólio V1", link: "https://h31w1tty.github.io/portifoliov1" },
        { nome: "Portfólio V2", link: "https://h31w1tty.github.io" },
        { nome: "Em Breve", link: "#" }
    ];

    const divPrincipal = document.querySelector(".divPrincipal");
    divPrincipal.innerHTML = ""; // Limpa o conteúdo para evitar duplicação

    listaVersoes.forEach(versao => {

        const divItem = document.createElement("div");
        divItem.classList.add("divItem");
        const p = document.createElement("p");
        p.textContent = versao.nome;

        const linkPC = document.createElement("a");
        linkPC.classList.add("pc");
        linkPC.href = versao.link;
        linkPC.textContent = versao.link;

        const linkCel = document.createElement("a");
        linkCel.classList.add("celular");
        linkCel.href = versao.link;
        linkCel.textContent = "visitar";

        divItem.appendChild(p);
        divItem.appendChild(linkPC);
        divItem.appendChild(linkCel);
        divItem.appendChild(document.createElement("br"));
        divItem.appendChild(document.createElement("br"));
        divItem.appendChild(document.createElement("br"));
        divPrincipal.appendChild(divItem);
    });
});
