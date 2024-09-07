// Cria função de clique pesquisar 
function pesquisar() {

    // Registra um evento de console para confirmar que a função foi chamada
    console.log("Clicou!");

    // Obtém a seção HTML onde os resultados serão exibidos, utilizando seu ID
    let section = document.getElementById("resultados-pesquisa");
    console.log(section); // Verifica se a seção foi encontrada corretamente

    // Obtém o valor a entrada digitada
    let campoPesquisa = document.getElementById("campo-pesquisa").value;
    console.log(campoPesquisa); 
    campoPesquisa = campoPesquisa.toLowerCase();

    if(!campoPesquisa){
        section.innerHTML = "<p>Nada foi encontrado. Busque por um método de estudo.</p>";
        return;
    }


    // Inicializa uma string vazia para armazenar os resultados da pesquisa
    let resultados = "";
    let titulo = "";
    let descricao = "";
    let titulo_link = "";
    let tags = "";
    // Itera sobre cada item de dado na lista de dados (assumindo que 'dados' é um array)
    for (let dado of dados) {

        titulo = dado.titulo.toLowerCase();
        descricao = dado.descricao.toLowerCase();
        titulo_link = dado.titulo_link.toLowerCase();
        tags = dado.tags.toLowerCase();

        // Se titulo inclui campoPesquisa então faça 
        if(titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || titulo_link.includes(campoPesquisa) || tags.includes(campoPesquisa)){

            // Constrói o HTML para cada item de resultado, formatando os dados
            resultados += `
            <div class="item-resultado">
                <h2>${dado.titulo}</h2>
                <p class="descricao-meta">${dado.descricao}</p>
                <a href=${dado.link} target="_blank">${dado.titulo_link}</a>
            </div>
            `;
        };

        
    }

    if(!resultados){
        resultados = "<p>Nada foi encontrado.</p>"
    }

    // Atribui todo o HTML construído à seção de resultados, substituindo o conteúdo anterior
    section.innerHTML = resultados;
}

