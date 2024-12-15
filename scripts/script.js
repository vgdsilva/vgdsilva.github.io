// Lista com descrição e cor
const listaDeTags = [
    { descricao: "DotNet", cor: "#512BD4" }, // Cor padrão para .NET
    { descricao: "C#", cor: "#178600" },     // Cor padrão para C#
    { descricao: "Vue.js", cor: "#42b883" }  // Cor padrão para Vue.js
];

// Função para criar os links
function criarTags(lista) {
    const container = document.getElementById("tags-list");

    // Itera sobre cada item da lista
    lista.forEach(item => {
        // Cria um elemento 'a'
        const link = document.createElement("a");
        link.textContent = item.descricao; // Define o texto do link
        link.href = "#"; // Define o link (pode ser customizado)
        link.style.backgroundColor = item.cor; // Define a cor de fundo
        link.style.color = "white";
        link.className = "social-button";
        // link.style.color = "#fff"; // Cor do texto (pode ajustar conforme necessário)
        // link.style.padding = "10px"; // Adiciona padding para melhor visualização
        // link.style.margin = "5px"; // Espaçamento entre os links
        // link.style.display = "inline-block"; // Garante o layout horizontal
        // link.style.textDecoration = "none"; // Remove sublinhado do link

        // Adiciona o link ao container
        container.appendChild(link);
    });
}

// Chama a função para criar as tags
criarTags(listaDeTags);