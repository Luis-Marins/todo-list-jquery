const form = document.getElementById('form-tarefas');
const tarefa = [];

let itens = '';

form.addEventListener('submit', function(e) {
  e.preventDefault();

  adicionaItem();
  atualizaLista();
});

function adicionaItem() {
  const inputNomeTarefa = document.getElementById('nome-tarefa');

  if (tarefa.includes(inputNomeTarefa.value)) {
    alert(`A tarefa: ${inputNomeTarefa.value} já foi inserida`);
  } else {

    tarefa.push(inputNomeTarefa.value);

    let item = `<li>${inputNomeTarefa.value}</li>`;
    itens += item;
  }
  inputNomeTarefa.value = '';
}

function atualizaLista() {
  const listaTarefas = document.getElementById('lista-tarefas');
  listaTarefas.innerHTML = itens;
}

$(document).on('mouseenter', 'ul#lista-tarefas li', function() {
  $(this).css('cursor', 'pointer');
});

$(document).on('click', 'ul#lista-tarefas li', function() {
  $(this).toggleClass('completed');
});
