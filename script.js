function calcppmvega() {
  const ppm = parseFloat(document.querySelector("input").value);

  const resultadopp = (ppm * 46.2) / 100;
  document.querySelector(".resultadopp").innerHTML =
    "Plant Prod: " + Math.round(resultadopp) + " ppm";

  const resultadocalnit = (ppm * 32.8) / 100;
  document.querySelector(".resultadocalnit").innerHTML =
    "Nitrato de Cálcio: " + Math.round(resultadocalnit) + " ppm";

  const resultadosulfmag = (ppm * 22) / 100;
  document.querySelector(".resultadosulfmag").innerHTML =
    "Sulfato de Magnésio: " + Math.round(resultadosulfmag) + " ppm";
}

function calcppmflora() {
  const ppm = parseFloat(document.querySelector("input").value);

  const resultadopp = (ppm * 40.7) / 100;
  document.querySelector(".resultadopp").innerHTML =
    "Plant Prod: " + Math.round(resultadopp) + " ppm";

  const resultadocalnit = (ppm * 18.5) / 100;
  document.querySelector(".resultadocalnit").innerHTML =
    "Nitrato de Cálcio: " + Math.round(resultadocalnit) + " ppm";

  const resultadosulfmag = (ppm * 18.5) / 100;
  document.querySelector(".resultadosulfmag").innerHTML =
    "Sulfato de Magnésio: " + Math.round(resultadosulfmag) + " ppm";

  const resultadomkp = (ppm * 23) / 100;
  document.querySelector(".resultadomkp").innerHTML =
    "MKP: " + Math.round(resultadomkp) + " ppm";
}
