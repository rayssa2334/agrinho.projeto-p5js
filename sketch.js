function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
}function setup() {
  createCanvas(800, 400); // Definindo o tamanho da tela
}

function draw() {
  // Fundo
  background(135, 206, 235); // Cor do céu (azul claro)

  // Desenhando o lado do campo (à esquerda)
  drawField(0, height / 2);

  // Desenhando o lado da cidade (à direita)
  drawCity(width / 2, height / 2);
  
  // Desenha o título
  textSize(32);
  textAlign(CENTER, CENTER);
  fill(0);
  text("Campo vs Cidade", width / 2, 30);
}

function drawField(x, y) {
  // Fundo do campo (verde)
  fill(85, 107, 47); // Cor do solo (verde)
  noStroke();
  rect(x, y, width / 2, height / 2); // Solo
  
  // Desenhando árvores
  drawTree(x + 100, y - 30);  // Árvore à esquerda
  drawTree(x + 200, y - 50);  // Árvore central
  drawTree(x + 300, y - 30);  // Árvore à direita
  
  // Desenhando um celeiro
  drawBarn(x + 150, y - 80);
  
  // Desenhando uma cerca (opcional)
  drawFence(x + 50, y + 20);
}

function drawCity(x, y) {
  // Fundo da cidade (cinza para representar o asfalto)
  fill(169, 169, 169);
  noStroke();
  rect(x, y, width / 2, height / 2); // Solo da cidade
  
  // Desenhando prédios
  drawBuilding(x + 50, y - 100); // Prédio à esquerda
  drawBuilding(x + 200, y - 120); // Prédio central
  drawBuilding(x + 350, y - 90); // Prédio à direita
  
  // Desenhando uma estrada
  fill(128, 128, 128); // Cor da estrada (cinza)
  rect(x, y + 30, width / 2, 40); // Estrada
  
  // Desenhando carros
  drawCar(x + 60, y + 40); // Carro à esquerda
  drawCar(x + 300, y + 40); // Carro à direita
}

function drawTree(x, y) {
  // Tronco da árvore
  fill(139, 69, 19); // Cor do tronco (marrom)
  rect(x - 10, y, 20, 40); // Tronco
  
  // Folhas da árvore
  fill(34, 139, 34); // Cor das folhas (verde)
  ellipse(x, y - 20, 60, 60); // Folhas
}

function drawBarn(x, y) {
  // Corpo do celeiro
  fill(255, 0, 0); // Cor do celeiro (vermelho)
  rect(x, y - 80, 100, 80); // Corpo principal
  
  // Telhado
  fill(139, 69, 19); // Cor do telhado (marrom)
  triangle(x - 10, y - 80, x + 50, y - 150, x + 110, y - 80); // Telhado triangular
  
  // Porta do celeiro
  fill(139, 69, 19); // Cor da porta (marrom)
  rect(x + 35, y, 30, 40); // Porta
  
  // Janelas do celeiro
  fill(255); // Cor das janelas (branco)
  rect(x + 10, y - 50, 20, 20); // Janela esquerda
  rect(x + 70, y - 50, 20, 20); // Janela direita
}

function drawBuilding(x, y) {
  // Corpo do prédio
  fill(150, 150, 150); // Cor do prédio (cinza)
  rect(x, y, 50, 100); // Corpo principal do prédio
  
  // Janelas do prédio
  fill(255); // Cor das janelas
  rect(x + 10, y + 10, 10, 10); // Janela superior esquerda
  rect(x + 30, y + 10, 10, 10); // Janela superior direita
  rect(x + 10, y + 40, 10, 10); // Janela inferior esquerda
  rect(x + 30, y + 40, 10, 10); // Janela inferior direita
}

function drawCar(x, y) {
  // Corpo do carro
  fill(255, 0, 0); // Cor do carro (vermelho)
  rect(x, y, 40, 20); // Corpo do carro
  
  // Rodas do carro
  fill(0); // Cor das rodas (preto)
  ellipse(x + 10, y + 20, 10, 10); // Roda esquerda
  ellipse(x + 30, y + 20, 10, 10); // Roda direita
}

function drawFence(x, y) {
  // Desenhando a cerca (retângulos pequenos)
  fill(139, 69, 19); // Cor da cerca (marrom)
  for (let i = 0; i < 5; i++) {
    rect(x + i * 40, y, 30, 10); // Poste da cerca
  }
}
