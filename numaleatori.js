var temps= new Date();
var num = prompt("Dame el numero");
var aleatoris = new Array(500000);
var apareix= false;
for (var i=0; i < aleatoris.length; i++){
    aleatoris[i]=Math.round(Math.random()*500000);
}
for (var i=0; i < aleatoris.length; i++){
    if (aleatoris[i]==num){
        apareix=true;
    }
}
var temps2= new Date();
var tempsfinal=(temps2-temps)/3600;
var segons= Math.round(tempsfinal*100)/100;
if (apareix){
    alert("Apareix el numero i a tardat "+segons)
}
else alert("No apareix")