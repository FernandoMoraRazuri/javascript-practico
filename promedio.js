const lista1 = [
  100,
  200,
  300,
  500
];




function calcularMediaAritmetica(lista){
  // let sumaLista = 0;

  // for (let i = 0; i < lista.length; i++){
  // sumaLista = sumaLista + lista[i];
  // }  

  const sumaLista = lista.reduce(
    function (valorAcumulado = 0, nuevoElemento) {
      return valorAcumulado + nuevoElemento
    }
  );

  const promedioLista = sumaLista / lista.length;
  return promedioLista;
}

// Integracion en HTML

function calcularMediaAritmeticaHTML(){
  const input = document.getElementById("input-promedio");
  const lista = input.value;
  
  const arrayLista = lista.split(',').map(function(item){
    return parseInt(item, 10);
  });
  
  console.log({
    lista,
    input,
    arrayLista
  })

  const promedio = calcularMediaAritmetica(arrayLista);
  
  const result = document.getElementById("result");
  result.innerText = "El promedio es de: " + promedio;
}