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
function circunferenciaCirculo(radio){
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


// Aqui interactuamos con el HTML

// Cuadrado
function calcularPerimetroCuadrado(){
  const input = document.getElementById("input-cuadrado");
  const value = input.value;

  const perimetro = perimetroCuadrado(value);
  alert(perimetro + " cm");
}

  function calcularAreaCuadrado(){
    const input = document.getElementById("input-cuadrado");
    const value = input.value;
  
    const area = areaCuadrado(value);
    alert(area + " cm");
}

//Triangulo
function calcularPerimetroTriangulo(){
  const input01 = document.getElementById("input-triangulo-01");
  const value01 = parseInt(input01.value);

  const input02 = document.getElementById("input-triangulo-02");
  const value02 = parseInt(input02.value);

  const input03 = document.getElementById("input-triangulo-03");
  const value03 = parseInt(input03.value);

  const perimetro = perimetroTriangulo(value01, value02, value03);
  alert("El perímetro de tu triángulo mide: " + perimetro + " cm");
}

function calcularAreaTriangulo(){
  const input01 = document.getElementById("input-triangulo-03");
  const value01 = input01.value;

  const input02 = document.getElementById("input-triangulo-04");
  const value02 = input02.value;

  const area = areaTriangulo(value01, value02);
  alert(area + " cm");
}

//Circulo
function calcularDiametroCirculo(){
  const input = document.getElementById("input-circulo");
  const value = input.value;
  
  const diametro = diametroCirculo(value);
  alert(diametro + " cm");
}


function calcularPerimetroCirculo(){
  const input = document.getElementById("input-circulo");
  const value = input.value;

  const perimetro = circunferenciaCirculo(value);
  alert(perimetro + " cm");
}

function calcularAreaCirculo(){
  const input = document.getElementById("input-circulo");
  const value = input.value;

  const area = areaCirculo(value);
  alert(area + " cm");
}

// RETO TRIANGULO ISOSCELES

function calcularPerimetroTrianguloIs(){
  const input01 = document.getElementById("input-triangulo-is-01");
  const value01 = parseInt(input01.value);

  const input02 = document.getElementById("input-triangulo-is-02");
  const value02 = parseInt(input02.value);

  const input03 = document.getElementById("input-triangulo-is-03");
  const value03 = parseInt(input03.value);

  const perimetro = perimetroTriangulo(value01, value02, value03);
  alert("El perímetro de tu triángulo mide: " + perimetro + " cm");
}

function alturaTrianguloIsosceles(lado1, base) {
  return Math.sqrt((lado1**2) - ((base**2) / 4));
}

function calcularAlturaTrianguloIsosceles(){
  const input01 = document.getElementById("input-triangulo-is-01");
  const value01 = input01.value;

  const input02 = document.getElementById("input-triangulo-is-02");
  const value02 = input02.value;

  const input03 = document.getElementById("input-triangulo-is-03");
  const value03 = input03.value;

  console.log(value01, value02, value03);

  if(value01 == value02 && value01 != value03){
    const altura = alturaTrianguloIsosceles(value01, value03);
    alert("La altura de tu triángulo es de: " + parseInt(altura) + " cm");
  }
  else {
    alert("Tu figura no es un triángulo isósceles, por favor prueba en otra opción");
  }
}
