$(document).ready(function() {
    $('header button').click(function(){
        $('section').slideDown();
    })

    $('#fechar').click(function(){
        $('section').slideUp();
    })

    $(document).ready(function() {
        // Adicionar tarefa
        $('#adicionartarefa').click(function() {
          var task = $('#nova-tarefa').val();
          if (task !== '') {
            var listItem = $('<li></li>').text(task);
            var deleteButton = $('<button class="deleteTaskButton">Excluir</button>');

            listItem.append(deleteButton);
            $('#tarefa-lista').append(listItem);
            $('#nova-tarefa').val('');
          }
        });
      
        // Excluir tarefa
        $('#tarefa-lista').on('click', '.deleteTaskButton', function() {
          $(this).parent().remove();
        });
      
        // Marcar como concluído
        $('#tarefa-lista').on('click', 'li', function() {
          $(this).toggleClass('completed');
        });
        
      });
})
