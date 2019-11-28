var cores = [
    'black',
    'gray',
    'green',
    'red',
    'yellow',
    'gold',

]



// var tbody = document.querySelector("#tabelaDeCores tbody");

// var conteudoTbody = "";
// cores.forEach(function(item){
//     conteudoTbody = conteudoTbody + "<tr><td>" + item + "</td></tr>";
// });
// tbody.innerHTML = conteudoTbody;



cores.forEach(function(item){
    var tr = document.createElement("tr");
    var td = document.createElement("td"); 
    var conteudoNovo = document.createTextNode(item);
    td.appendChild(conteudoNovo)
    tr.appendChild(td)
    document.querySelector('#tabelaDeCores tbody').appendChild(tr)
});