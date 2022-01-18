// Codigo del cuadrado
console.group('Cuadrados')

// const ladoCuadrado = 5;
// console.log('Los lados del cuadrado miden: ' + ladoCuadrado + 'cm');

function perimetroCuadrado(lado){
  return lado * 4;
}

// console.log("El perimetro del cuadrado es: " + perimetroCuadrado + 'cm');

function areaCuadrado(lado){
  return lado * lado;
}

// console.log("El area del cuadrado es: " + areaCuadrado + 'cm^2');

console.groupEnd();


// Codigo del triangulo
console.group('Triangulo');

// const ladoTriangulo1 = 6;
// const ladoTriangulo2 = 6;
// const baseTriangulo = 4;

// console.log(
//   'Los lados del triangulo miden: ' 
// + ladoTriangulo1 + 'cm, ' 
// + ladoTriangulo2 + 'cm, ' 
// + baseTriangulo + 'cm'
// );

// const alturaTriangulo = 5.5;
// console.log("La altura del triangulo es de: " + alturaTriangulo);

function perimetroTriangulo(lado1, lado2, base){
  return lado1 + lado2 + base;
}

// console.log("El perimetro del triangulo es: " + perimetroTriangulo + 'cm');

function areaTriangulo(base, altura){
  return (base * altura) / 2;
} 

// console.log("El area del triangulo es de: " + areaTriangulo + " cm^2")

console.groupEnd();

// Codigo del circulo

console.group("Circulo");

// Radio
// const radioCirculo = 4;
// console.log("El radio del circulo es de: " + radioCirculo + " cm");

// Diametro
function diametroCirculo(radio){
  return radio * 2;
}

//PI
const PI = Math.PI;
console.log("PI es: " + PI);

// Circunferencia
function circunferencia(radio){
  const diametro = diametroCirculo(radio);
  return diametro * PI;
}

// const circunferenciaCirculo = PI * diametroCirculo;
// console.log("La circunferencia del circulo es de: " + circunferenciaCirculo + " cm");

// Area
function areaCirculo(radio){
  return PI * (radio * radio);
}

// const areaCirculo = PI * (radioCirculo * radioCirculo)
// console.log("El area del circulo es de: " + areaCirculo + " cm^2");

console.groupEnd();