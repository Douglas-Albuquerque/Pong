//Variável da Bolinha
let xBol = 300; //posição inicial da bolinha do eixo x
let yBol = 200; //posição inicial da bolinha do eixo y
let diaBol = 23; //diametro da bolinha
let raio = diaBol /2; //variáel para definir o raio da bolinha

//velocidade da Bolinha
let velBolx = 6; //velocidade da colinha no eixo X
let velBoly = 6;//velocidade da bolinha no eixo Y

//Variáveis das Raquetes
let xraq1 = 5; // define a posição no eixo X que a raquete aparecerá
let yraq1 = 150; // define a posição no eixo y que a raquete aparecerá
let compraq1 = 10; // define o tamanho horizontal da raquete
let altraq1 = 90; // define o tamanho vertical da raquete
let Colidiu = false; // variavel para verificar colisão da bola com a raquete

//Variávei da Raquete CPU
let xRaqueteCPU = 585;
let yRaqueteCPU = 150;
let VelocidadeYCPU;
let chanceDeErrar = 0;

//Variáveis do Placar
let meusPontos = 0;
let pontosCPU = 0;
let dCPU = 0;

//Sons do Jogo
let raquetada;
let ponto;
let trilha;

function preload(){
  trilha = loadSound("trilha.mp3");
  raquetada = loadSound("raquetada.mp3");
  ponto = loadSound("ponto.mp3");
}


function setup() {
  createCanvas(600,400);
  trilha.loop();
}

function draw() { 
  background(0);
  MostrarBolinha();
  MovimentaBolinha();
  VerificarcolisaoBol();
  //VerificacolisaoRaq();
  MosRaquete(xraq1,yraq1);
  MovRaquete01();
  VerificaColisaoRaquete(xraq1, yraq1);
  MosRaquete(xRaqueteCPU, yRaqueteCPU);
  MovimentaRaqueteCPU();
  VerificaColisaoRaquete(xRaqueteCPU, yRaqueteCPU);
  MostrarPlacar();
  MarcaPonto();
}

function MostrarBolinha(){
  circle(xBol, yBol, diaBol);
}

function MovimentaBolinha(){
  xBol += velBolx;
  yBol += velBoly;
}
function VerificarcolisaoBol(){
  if (xBol + raio > width || xBol - raio < 0){
    velBolx *= -1
  }
   if (yBol + raio > height || yBol - raio < 0){p5
    velBoly *= -1
  }
}
function MosRaquete(x,y){
    rect(x,y, compraq1, altraq1);
  }

function MovRaquete01(){
  if (keyIsDown(UP_ARROW)){
    yraq1 -= 10;
  }
    if (keyIsDown(DOWN_ARROW)){
    yraq1 += 10;
    }
  }
function VerificacolisaoRaq(){
  if (xBol - raio < xraq1 + compraq1 && yBol - raio < yraq1 + altraq1 && yBol + raio > yraq1){
 velBolx *= -1
    raquetada.play();
}
}
function VerificaColisaoRaquete(x,y){
  Colidiu= collideRectCircle(x, y, compraq1, altraq1, xBol,yBol, raio);
  if(Colidiu){
     velBolx *= -1
    raquetada.play();
  }
}
function MovimentaRaqueteCPU(){
  VelocidadeYCPU = yBol -yRaqueteCPU - compraq1 /2 - dCPU;
  yRaqueteCPU += VelocidadeYCPU;
  if(pontosCPU > meusPontos){
    dCPU = 100;
  }
  if(pontosCPU < meusPontos && dCPU > 50){
    dCPU -=3;
  }
}

function MostrarPlacar(){
  stroke(255);
  textAlign(CENTER);
  textSize(16);
  fill(color(0,0,255));
  rect(130,10,40,20);
  fill(255);
  text(meusPontos, 150, 26);
  fill(color(0,0,255));
  rect(430,10,40,20)
  fill(255);
  text(pontosCPU,450, 26);
  
}
function MarcaPonto(){
  if(xBol > 590){
    meusPontos +=1;
    ponto.play();
}
  if (xBol < 10){
    pontosCPU += 1;
    ponto.play();
  }
}
