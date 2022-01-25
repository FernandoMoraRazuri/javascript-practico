const lista1 = [
  1,
  2, 
  3, 
  2, 
  4, 
  2,
  1,
  4,
  3,
];



function calcularModa(lista){
  const listaCount = {};

  lista.map(
    function (elemento) {
      if(listaCount[elemento]){
        listaCount[elemento] += 1;
      } else {
        listaCount[elemento] = 1;
      }
    }
  );

  const listaArray = Object.entries(listaCount).sort(
    function (valorAcumulado, nuevoValor) {
      return valorAcumulado[1] - nuevoValor[1];
    }
  );

  const moda = listaArray[listaArray.length - 1];
  return moda[0];
}

function calcularModaHTML(){
  const input = document.getElementById("input-moda");
  const lista = input.value;

  const arrayLista = lista.split(',').map(function(item){
    return parseInt(item, 10);
  });

  console.log({
    lista,
    input,
    arrayLista
  })

  const modaFinal = calcularModa(arrayLista);
  
  const result = document.getElementById("result");
  result.innerText = "La moda es: " + modaFinal;
}