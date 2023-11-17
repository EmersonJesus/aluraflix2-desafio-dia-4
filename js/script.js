var listaFilmes = [];
var listaTrailers = [];
var listaNomes = [];

function adicionarFilme() {
  var filme = document.getElementById("filme").value;
  var trailer = document.getElementById("trailer").value;
  var nome = document.getElementById("nome").value;
  var elementoListaFilmes = document.getElementById("listaFilmes");

  if (!filme.endsWith("jpg") && !filme.endsWith("jpeg")) {
    alert(
      "Endereço  de imagem inválido. Insira um endereço de imagem válido no formato JPG ou JPEG."
    );
  } else if (
    !trailer.startsWith("youtube", 12) &&
    !trailer.startsWith("yout", 8)
  ) {
    alert(
      "O link do trailer é inválido. Esta plataforma aceita apenas trailers do Youtube."
    );
  } else {
    listaFilmes.push(filme);
    listaTrailers.push(trailer);
    listaNomes.push(nome);

    elementoListaFilmes.innerHTML = "";
    for (var i = 0; i < listaFilmes.length; i++) {
      elementoListaFilmes.innerHTML += `
      <div>
        <img src="${listaFilmes[i]}" onclick="abrirTrailer(${i})">
        <div class="page-subtitle"><p>${listaNomes[i]}</p></div>
        <div class="form-wrapper"><button onclick="excluirFilme(${i}, this)">Excluir</button></div>
      </div>`;
    }

    document.getElementById("nome").value = "";
    document.getElementById("filme").value = "";
    document.getElementById("trailer").value = "";
  }
}

function abrirTrailer(i) {
  var trailerUrl = listaTrailers[i];
  window.open(trailerUrl, "_blank");
}

function excluirFilme(i, botaoExcluir) {
  listaFilmes.splice(i, 1);
  listaTrailers.splice(i, 1);
  listaNomes.splice(i, 1);
  botaoExcluir.style.display = "none";
  botaoExcluir.parentNode.parentNode.remove();
}
