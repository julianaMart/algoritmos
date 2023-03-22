//Solicitar nombre e imprimirlo
let nombre;

nombre=prompt("Escriba su nombre");

console.log("El nombre ingresado es: "+ nombre);    
//////////////////////////////////////////////////////////////
//Calcular area y y perimetro de un rectangulo
function Calcular(base,altura){
    const area=base*altura;
    const perimetro=2*(base*altura);

    return [area,perimetro];
}
//////////////////////////////////////////////////////////////////
//Calcular la hipotenusa de triangulo rectangulo
function CalcularHipotenusa(a,b){
    const hipotenusa=Math.sqrt(a**2+b**2);
    return hipotenusa;

}

let resultado= Calcular(5,9);
console.log("El area del rectangulo es: "+resultado[0]);  
let resultadohipo=CalcularHipotenusa(10,20);
console.log("La hipotenusa es: "+resultadohipo);

///////////////////////////////////////////////////////////////////
//Suma,resta,división y multiplicacion de dos números


function calculadora (a,b){
    document.writeln(a+b);
    document.writeln(a-b);
    document.writeln(a*b);
    document.writeln(a/b);

    console.log(a+b);
    console.warn(a-b);
    console.error(a*b);
    console.info(a/b);
}


calculadora(2,3);


/////////////////////////////////////////////////////////////////////////
//Media de 3 números
function media(){

    let x=document.parseInt(getElementById('x').value);
    let y=document.parseInt(getElementById('y').value);
    let z=document.parseInt(getElementById('z').value);
    
    //Cast
    
    let promedio=(x+y+z)/3
    
    return promedio;
}




///////////////////////////////////////////////////////////////7
//Tiempo

