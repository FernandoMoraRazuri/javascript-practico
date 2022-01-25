function calcularMediaAritmetica(lista){
  const sumaLista = lista.reduce(
    function (valorAcumulado = 0, nuevoElmento) {
      return valorAcumulado + nuevoElmento
    }
  );

  const promedioLista = sumaLista / lista.length;
  return promedioLista;
}

function calcularRangoMedio(lista){
  lista.sort();

  const listaFirst = lista[0];
  const listaLast = lista[lista.length - 1];

  const rangoMedio = calcularMediaAritmetica([listaFirst, listaLast]);
  console.log({
    rangoMedio,
    listaFirst,
    listaLast
  });
  return rangoMedio;
}

function calcularRangoMedioHTML(){
  const input = document.getElementById("input-rango-medio");
  const listaRangoMedio = input.value;

  const arrayLista = listaRangoMedio.split(',').map(function(item){
    return parseInt(item, 10);
  });

  console.log({
    listaRangoMedio,
    input,
    arrayLista
  })

  const rangoMedioFinal = calcularRangoMedio(arrayLista);
  
  const result = document.getElementById("result");
  result.innerText = "El rango medio es: " + rangoMedioFinal;
}