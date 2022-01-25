function calcularMediaAritmetica(lista){
  const sumaLista = lista.reduce(
    function (valorAcumulado = 0, nuevoElmento) {
      return valorAcumulado + nuevoElmento
    }
  );

  const promedioLista = sumaLista / lista.length;
  return promedioLista;
}

function esPar(numerito) {
  if (numerito % 2 === 0){
    return true;
  } else {
    return false;
  }
}

let mediana;

function calcularMediana(lista){
  lista.sort();
  // ordenar la lsita

  const mitadLista = parseInt(lista.length / 2);

  if (esPar(lista.length)) {
    const elemento1 = lista[mitadLista];
    const elemento2 = lista[mitadLista - 1];
  
    const promedioElemento1y2 = calcularMediaAritmetica([
      elemento1,
      elemento2
    ]);
  
    mediana = promedioElemento1y2;
    return mediana;

  } else {
    // si es impar
    mediana = lista[mitadLista];
    return mediana;
  }
}

function calcularMedianaHTML(){
  const input = document.getElementById("input-mediana");
  const lista = input.value;

  const arrayLista = lista.split(',').map(function(item){
    return parseInt(item, 10);
  });

  console.log({
    lista,
    input,
    arrayLista
  })

  const medianaFinal = calcularMediana(arrayLista);
  
  const result = document.getElementById("result");
  result.innerText = "La mediana es de: " + medianaFinal;
}