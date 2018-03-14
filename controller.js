$(document).ready(function() {
    popAg();
});

function popAg(){
    $('#agentCl').empty();
    $.post("popAg.php", function(data, status){
        window.alert(data);
        var array = data.split(";");
        for(i=0; i<array.length-1; i+=2){
            window.alert(array[i+1]);
            $('#agentCl').append($('<option>', {
                value: array[i],
                text: array[i+1]
            }));
        } 
    });
}

function sendAg() {
    var name = $("#nameAg").val();
    $("#nameAg").val("");
    $.post("sendAg.php?name="+name, function(data, status){
        $('#divAlert').append("<div class='alert alert-success alert-dismissible fade in'><a href='#' class='close' data-dismiss='alert' aria-label='close'>&times;</a>Agente "+name+" correttamente aggiunto al database!</div>");
    });
    popAg();
}

function sendCl() {
    var rag = $("#ragCl").val();
    var reg = $("#regCl").val();
    var agent = $("#agentCl").val();
    $("#ragCl").val("");
    $("#regCl").val("");
    $.post("sendCl.php?rag="+rag+"&reg="+reg+"&agent="+agent, function(data, status){
        $('#divAlert').append("<div class='alert alert-info alert-dismissible fade in'><a href='#' class='close' data-dismiss='alert' aria-label='close'>&times;</a>Cliente "+rag+" correttamente aggiunto al database!</div>");
    });
}