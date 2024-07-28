function calculateFuel() {
  // Obtém os valores de tempo e velocidade média do usuário
  const time = parseFloat(document.getElementById("time").value);
  const speed = parseFloat(document.getElementById("speed").value);
  
  // Constante para o consumo do carro
  const consumption = 12; // 12 km/L
  
  // Calcula a distância percorrida
  const distance = time * speed;
  
  // Calcula a quantidade de combustível gasto
  const fuelSpent = distance / consumption;
  
  // Mostra o resultado com 3 casas decimais
  document.getElementById("result").textContent = `Quantidade de combustível gasto: ${fuelSpent.toFixed(3)} litros`;
}
