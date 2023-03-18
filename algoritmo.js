

function Calcular(base,altura){
    const area=base*altura;
    const perimetro=2*(base*altura);

    return [area,perimetro];
}

let resultado= Calcular(5,9);
console.log(resultado[0]);  