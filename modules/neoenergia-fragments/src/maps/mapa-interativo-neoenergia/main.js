const infoStates = [
  {
    id: "RN",
    nome: "Rio Grande do Norte",
    parques: "Otis 1 e 2, Caetilê 1 e 3",
    distribuição: "Neoenergia Coelba",
    hidroEletrica: "Itapebi",
    transmissao: "Afluente T, Narandiba, Rio Formoso",
    liberizados: "Neoenergia Comercialização",
  },
  {
    id: "BA",
    nome: "Bahia",
    parques: "Otis 1 e 2, Caetilê 1 e 3",
    distribuição: "Neoenergia Coelba",
    hidroEletrica: "Itapebi",
    transmissao: "Afluente T, Narandiba, Rio Formoso",
    liberizados: "Neoenergia Comercialização",
  },
  {
    id: "SP",
    nome: "São Paulo",
    parques: "Otis 1 e 2, Caetilê 1 e 3",
    distribuição: "Neoenergia Coelba",
    hidroEletrica: "Itapebi",
    transmissao: "Afluente T, Narandiba, Rio Formoso",
    liberizados: "Neoenergia Comercialização",
  },
  {
    id: "MS",
    nome: "Mato grosso do Sul",
    parques: "Otis 1 e 2, Caetilê 1 e 3",
    distribuição: "Neoenergia Coelba",
    hidroEletrica: "Itapebi",
    transmissao: "Afluente T, Narandiba, Rio Formoso",
    liberizados: "Neoenergia Comercialização",
  },
  {
    id: "PE",
    nome: "Pernambuco",
    parques: "Otis 1 e 2, Caetilê 1 e 3",
    distribuição: "Neoenergia Coelba",
    hidroEletrica: "Itapebi",
    transmissao: "Afluente T, Narandiba, Rio Formoso",
    liberizados: "Neoenergia Comercialização",
  },
  {
    id: "DF",
    nome: "Brasilia",
    parques: "Otis 1 e 2, Caetilê 1 e 3",
    distribuição: "Neoenergia Coelba",
    hidroEletrica: "Itapebi",
    transmissao: "Afluente T, Narandiba, Rio Formoso",
    liberizados: "Neoenergia Comercialização",
  },
];

const todosEstados = document.querySelectorAll("a");
const infoContent = document.getElementById("info_region");

todosEstados.forEach((item) => {
  item.addEventListener("click", (event) => {
    const el = event.target || event.srcElement;
    const id = el.id;

    insertContent(id);
  });
});

function insertContent(id) {
  infoStates.forEach((item) => {
    if (item.id === id) {
      infoContent.innerHTML = `
        <div class="content_info">
            <span class="material-symbols-outlined"> location_on </span>
            <h3>${item.nome}</h3>

            <span class="material-symbols-outlined"> wind_power </span>
            <p>Parques Eólicos: ${item.parques}</p>

            <span class="material-symbols-outlined"> emoji_objects </span>
            <p>Distribuição: ${item.distribuição}</p>

            <span class="material-symbols-outlined"> water </span>
            <p>Hidroelétrica: ${item.hidroEletrica}</p>

            <span class="material-symbols-outlined"> cell_tower </span>
            <p>Transmissão: ${item.transmissao}</p>

            <span class="material-symbols-outlined"> public </span>
            <p>Liberizados: ${item.liberizados}</p>
          </div>
          `;
    }
  });
}
