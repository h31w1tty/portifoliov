document.addEventListener("DOMContentLoaded", function () {
    const listaVersoes = [
        { nome: "Primeira versão", link: "https://h31w1tty.github.io/portifoliov1" },
        { nome: "Segunda versão", link: "https://h31w1tty.github.io" },
        { nome: "Em Breve", link: "#" }
    ];

    const divPrincipal = document.querySelector(".divPrincipal");
    divPrincipal.innerHTML = ""; // Limpa o conteúdo para evitar duplicação

    listaVersoes.forEach(versao => {

        const divItem = document.createElement("div");//atribui a div dos itens a variável
        divItem.classList.add("divItem");//coloca classe para estilização a div dos itens usando a variavel para fazer isso

        divItem.onclick = function(){
            window.location.href = versao.link;
        }
        const p = document.createElement("p");
        p.textContent = versao.nome;

        divItem.appendChild(p);
        divPrincipal.appendChild(divItem);

        function abrirLink(onclick){

        }
    });
});
