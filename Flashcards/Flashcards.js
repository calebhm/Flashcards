$(document).ready(function(){
    $('#new').on('click', function(event){
        if($('#topic').val() && $('#question').val() && $('#answer').val()){
            var topic = $("#topic").val().replace(/</g, "&lt;").replace(/>/g, "&gt;"),
                question = $("#question").val().replace(/</g, "&lt;").replace(/>/g, "&gt;"),
                answer = $("#answer").val().replace(/</g, "&lt;").replace(/>/g, "&gt;"),
                newCard = "<div class='card'><i class='close fa fa-window-close-o'></i><h1 class ='topic'>"+topic+"</h1><hr><p class='question'>"+question+"</p><p class='answer'>"+answer+"</p></div>";
            $('body').append(newCard);
            $('#topic').val('');
            $('#question').val('');
            $('#answer').val('');
        }
    event.stopPropagation();
    });
    $("body").on('click', '.close', function(event){
        $(this).parent().fadeOut(250, function(){
            $(this).remove();
        });
    event.stopPropagation(); 
    });
});