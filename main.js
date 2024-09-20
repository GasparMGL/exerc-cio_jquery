$(document).ready(function() {
    // Prevenir o reload da página
    $('form').on('submit', function(event) {
        event.preventDefault(); 
        
        const taskName = $('input').val();
        
        // Adiciona a tarefa na lista
        if (taskName) {
            $('#lista-tarefa').append(`<li> • ${taskName} </li>`);
            $('input').val(''); // Limpar o campo de input
        }
    });

    // Função para riscar a tarefa ao clicar
    $('#lista-tarefa').on('click', 'li', function() {
        $(this).toggleClass('finalizado'); 
    });

    // Limpar todas as tarefas
    $('button[type="reset"]').on('click', function() {
        $('#lista-tarefa').empty();
    });
});