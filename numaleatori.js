var temps= new Date();
var num = prompt("Dame el numero");
<<<<<<< HEAD
var aleatoris = new Array(700000);
var apareix= false;
for (var i=0; i < aleatoris.length; i++){
    aleatoris[i]=Math.round(Math.random()*700000);
=======
var aleatoris = new Array(1000000);
var apareix= false;
for (var i=0; i < aleatoris.length; i++){
    aleatoris[i]=Math.round(Math.random()*1000000);
>>>>>>> temps
}
for (var i=0; i < aleatoris.length; i++){
    if (aleatoris[i]%2==0 && aleatoris[i]==num){
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