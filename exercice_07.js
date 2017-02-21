var fs = require("fs");
var http = require("http");
var sTexte="";

fs.readFile('provinces.json', function (err, data) {
   if (err) return console.error(err);
    var parser = JSON.parse(data);
    function afficheObject(monObjet){
        for (propriete in monObjet){
            sTexte += "<td>"+propriete+ "-" +monObjet[propriete]+"</td>";
        }
       // return sTexte;
    }
    afficheObject(parser);
});

http.createServer(function(request, response) {
  response.writeHead(200, {"Content-Type": "text/html"});
  response.write("<h1>Provinces</h1>");
    response.write("<table><tr>"+ sTexte +"</tr></table>");
  response.end();
}).listen(3000);

console.log("Program Ended");