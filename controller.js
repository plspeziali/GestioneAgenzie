$(document).ready(function() {
    configure();
});

function configure(){
    popAg();
    popTabAg();
    popTabCl();
}

function popAg(){
    $('#agentCl').empty();
    $.post("popAg.php", function(data, status){
        var array = data.split(";");
        for(i=0; i<array.length-1; i+=2){
            $('#agentCl').append('<option value="'+array[i]+'">'+array[i+1]+'</option>');
        } 
    });
}

function popTabAg(){
    $('#tabAg').empty();
    $.post("popAg.php", function(data, status){
        var array = data.split(";");
        for(i=0; i<array.length-1; i+=2){
            $('#tabAg').append("<tr><td>"+array[i+1]+"</td></tr>");
        } 
    });
}

function popTabCl(){
    $('#tabCl').empty();
    $.post("popTabCl.php", function(data, status){
        var array = data.split(";");
        for(i=0; i<array.length-1; i+=3){
            $('#tabCl').append("<tr><td>"+array[i]+"</td><td>"+array[i+1]+"</td><td>"+array[i+2]+"</td></tr>");
        } 
    });
}

function sendAg() {
    var name = $("#nameAg").val();
    $("#nameAg").val("");
    $.post("sendAg.php?name="+name, function(data, status){
        $('#divAlert').append("<div class='alert alert-success alert-dismissible fade in'><a href='#' class='close' data-dismiss='alert' aria-label='close'>&times;</a>Agente "+name+" correttamente aggiunto al database!</div>");
    });
    configure();
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
    configure();
}