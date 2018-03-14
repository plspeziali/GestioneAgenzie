function sendAg() {
    var name = $("#nameAg").val();
    $("#nameAg").val("");
    $.post("sendAg.php?name="+name, function(data, status){
        $('#divAlert').append("<div class='alert alert-success alert-dismissible fade in'><a href='#' class='close' data-dismiss='alert' aria-label='close'>&times;</a>Agente "+name+" correttamente aggiunto al database!</div>");
    });
}

function sendCl() {
    var name = $("#nameAg").val();
    $("#nameAg").val("");
    $.post("sendAg.php?name="+name, function(data, status){
        $('#divAlert').append("<div class='alert alert-info alert-dismissible fade in'><a href='#' class='close' data-dismiss='alert' aria-label='close'>&times;</a>Agente "+name+" correttamente aggiunto al database!</div>");
    });
}