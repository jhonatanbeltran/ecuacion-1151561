function capturar(){
    function Numero(a,b,c){
        this.a=a;
        this.b=b;
        this.c=c;
    }
    var capturea= document.getElementById("a").value;
    var captureb = document.getElementById("b").value;
    var capturec = document.getElementById("c").value;
    

    numero1 = new Numero(capturea,captureb,capturec);
    console.log(numero1);
    agregar();
}

//function proceso(){
  //  var solucion= ((-1*-b) +(Math.sqrt((Math.pow(b,2) - (4*a*c)))))/(2*a);
//}



var baseDatos=[];

function agregar(){
    baseDatos.push( numero1);
    console.log(baseDatos);

   document.getElementById("tabla").innerHTML += '<tbody><td>'+numero1.a+'</td><td>'+numero1.b+'</td><td>'+numero1.c+'</td></tbody>';
    
};