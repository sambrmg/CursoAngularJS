var cores = [
    'black',
    'gray',
    'green',
    'red',
    'yellow',
    'gold',

]



var tbody = document.querySelector("#tabelaDeCores tbody");

var conteudoTbody = "";
cores.forEach(function(item){
    conteudoTbody = conteudoTbody + "<tr><td>" + item + "</td></tr>";
});
tbody.innerHTML = conteudoTbody;