function calcularInteresSimple(capital, interes, periodos){
  const interesPorcentaje = (capital * interes) / 100;
  console.log("interes: " + interesPorcentaje)
  const interesSimple = (capital * interesPorcentaje) * periodos;
  return interesSimple;
}

function calcularInteresCompuesto(capital, interes, periodos){
  const interesCompuesto = capital * ((1 + interes)**periodos);
  return interesCompuesto;
}

function calcularInteresSimpleHTML(){
  const inputCapital = document.getElementById("input-capital");
  const valueCapital = inputCapital.value;

  const inputInteres = document.getElementById("input-interes");
  const valueInteres = inputInteres.value;

  const inputPeriodos = document.getElementById("input-periodos");
  const valuePeriodos = inputPeriodos.value;

  const interesSimple = calcularInteresSimple(valueCapital, valueInteres, valuePeriodos);
  
  console.log({
    valueCapital,
    valueInteres,
    valuePeriodos
  })

  const result = document.getElementById("result-simple");
  result.innerText = "Tu capital usando interés simple en las condiciones que estableciste aumentaría hasta: " + interesSimple  + "$";
}

function calcularInteresCompuestoHTML(){
  const inputCapital = document.getElementById("input-capital");
  const valueCapital = inputCapital.value;

  const inputInteres = document.getElementById("input-interes");
  const valueInteres = inputInteres.value;

  const inputPeriodos = document.getElementById("input-periodos");
  const valuePeriodos = inputPeriodos.value;

  const interesCompuesto = calcularInteresCompuesto(valueCapital, valueInteres, valuePeriodos);
  
  console.log({
    valueCapital,
    valueInteres,
    valuePeriodos
  })

  const result = document.getElementById("result-compuesto");
  result.innerText = "Tu capital usando interés compuesto en las condiciones que estableciste aumentaría hasta: " + interesCompuesto + "$";
}