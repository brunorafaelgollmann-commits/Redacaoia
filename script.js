function corrigirRedacao() {

  const textarea = document.getElementById("redacao");
  const resultado = document.getElementById("resultado");

  if (!textarea || !resultado) {
    alert("Erro: HTML não encontrado corretamente");
    return;
  }

  const texto = textarea.value?.toLowerCase() || "";

  if (texto.trim() === "") {
    resultado.innerHTML = "Escreva uma redação primeiro.";
    return;
  }

  const palavras = texto.split(/\s+/);
  const tamanho = palavras.length;

  let c1 = 150;
  let c2 = 120;
  let c3 = 100;
  let c4 = 100;
  let c5 = 80;

  // segurança anti NaN
  if (isNaN(tamanho)) return;

  // C2
  if (!texto.includes("educação")) c2 -= 80;

  // C3
  if (texto.includes("porque")) c3 += 10;
  if (texto.includes("desigualdade")) c3 += 20;

  // C4
  if (texto.includes("além disso")) c4 += 20;

  // C5
  if (texto.includes("governo")) c5 += 30;

  const nota = c1 + c2 + c3 + c4 + c5;
  const notaFinal = Number.isFinite(nota) ? nota : 0;

  resultado.innerHTML = `
    <h2>Resultado</h2>
    <p><b>Nota:</b> ${notaFinal}/1000</p>
    <p>C1: ${c1}</p>
    <p>C2: ${c2}</p>
    <p>C3: ${c3}</p>
    <p>C4: ${c4}</p>
    <p>C5: ${c5}</p>
  `;
}