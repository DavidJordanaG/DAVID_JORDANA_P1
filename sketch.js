
var comptador = 0;//comptador per guardar temps de proces

var x = 0;//variables posició
var y = 0;
var x1=0;
var y1=0;
var x2=0;
var y2=0;
var x3=0;
var y3=0;
var x4=0;
var y4=0;
var x5=0;
var y5=0;
var x6=0;
var y6=0;
var x7=0;
var y7=0;
var x8=0;
var y8=0;
var x9=0;
var y9=0;
var x10=0;
var y10=0;
var x11=0;
var y11=0;
var x12=0;
var y12=0;
var x13=0;
var y13=0;
var x14=0;
var y14=0;
var x15=0;
var y15=0;
var x16=0;
var y16=0;
var x17=0;
var y17=0;
var x18=0;
var y18=0;
var x19=0;
var y19=0;

//variables color
let blau = "#093f64";
let groc = "#f1b92f";
let vermell = "#d83532";
let negre = "#000002";
let fons = "#ecebeb";

var r1;//1
var r2;

var r11;//2
var r21;

var r12;//3
var r22;

var r31;//4
var r32;

var r41;//5
var r42;

var r51;//6
var r52;

var r61;//7
var r62;

var r71;//8
var r72;

var r81;//9
var r82;

var r91;//10
var r92;

var ar1;//11
var ar2;

var ar11;//12
var ar21;

var ar12;//13
var ar22;

var ar31;//14
var ar32;

var ar41;//15
var ar42;

var ar51;//16
var ar52;

var ar61;//17
var ar62;

var ar71;//18
var ar72;

var ar81;//19
var ar82;

var ar91;//20
var ar92;


function setup() {
  r1 = random(0, 330); //creo dues variables que guarden els valors1
  r2 = random(0, 550); //aleatoris de la posició

  r11 = random(0, 330); //creo dues variables que guarden els valors2
  r21 = random(0, 550); //aleatoris de la posició

  r12 = random(0, 330); //creo dues variables que guarden els valors3
  r22 = random(0, 550); //aleatoris de la posició

  r31 = random(0, 330); //creo dues variables que guarden els valors4
  r32 = random(0, 550); //aleatoris de la posició

  r41 = random(0, 330); //creo dues variables que guarden els valors5
  r42 = random(0, 550); //aleatoris de la posició

  r51 = random(0, 330); //creo dues variables que guarden els valors6
  r52 = random(0, 550); //aleatoris de la posició

  r61 = random(0, 330); //creo dues variables que guarden els valors7
  r62 = random(0, 550); //aleatoris de la posició

  r71 = random(0, 330); //creo dues variables que guarden els valors8
  r72 = random(0, 550); //aleatoris de la posició

  r81 = random(0, 330); //creo dues variables que guarden els valors9
  r82 = random(0, 550); //aleatoris de la posició

  r91 = random(0, 330); //creo dues variables que guarden els valors10
  r92 = random(0, 550); //aleatoris de la posició

  ar1 = random(0, 330); //creo dues variables que guarden els valors11
  ar2 = random(0, 550); //aleatoris de la posició

  ar11 = random(0, 330); //creo dues variables que guarden els valors12
  ar21 = random(0, 550); //aleatoris de la posició

  ar12 = random(0, 330); //creo dues variables que guarden els valors13
  ar22 = random(0, 550); //aleatoris de la posició

  ar31 = random(0, 330); //creo dues variables que guarden els valors14
  ar32 = random(0, 550); //aleatoris de la posició

  ar41 = random(0, 330); //creo dues variables que guarden els valors15
  ar42 = random(0, 550); //aleatoris de la posició

  ar51 = random(0, 330); //creo dues variables que guarden els valors16
  ar52 = random(0, 550); //aleatoris de la posició

  ar61 = random(0, 330); //creo dues variables que guarden els valors17
  ar62 = random(0, 550); //aleatoris de la posició

  ar71 = random(0, 330); //creo dues variables que guarden els valors18
  ar72 = random(0, 550); //aleatoris de la posició

  ar81 = random(0, 330); //creo dues variables que guarden els valors19
  ar82 = random(0, 550); //aleatoris de la posició

  ar91 = random(0, 330); //creo dues variables que guarden els valors20
  ar92 = random(0, 550); //aleatoris de la posició

  


}

function draw() {
  createCanvas(430, 650);
  background(fons);
  noStroke();

  if (comptador < 1) { // els guardo en x i y amb l'if pq no variin
    x = r1;
    y = r2;

    x1=r11;
    y1=r21;

    x2=r12;
    y2=r22;

    x3=r31;
    y3=r32;

    x4=r41;
    y4=r42;

    x5=r51;
    y5=r52;

    x6=r61;
    y6=r62;

    x7=r71;
    y7=r72;

    x8=r81;
    y8=r82;

    x9=r91;
    y9=r92;

    x10=ar1;
    y10=ar2;

    x11=ar11;
    y11=ar12;

    x12=ar21;
    y12=ar22;

    x13=ar31;
    y13=ar32;

    x14=ar41
    y14=ar42;

    x15=ar51;
    y15=ar52;

    x16=ar61;
    y16=ar62;

    x17=ar71;
    y17=ar72;

    x18=ar81;
    y18=ar82;

    x19=ar91;
    y19=ar92;
  }

  if (comptador>600){
    textFont("Coiny");
    text("Lorem ipsum dolor sit amet, consectetur.",200,600);
    text("Nunc auctor nisl nec sodales dictum.",200,610);
    text("In hac habitasse platea dictumst.",200,620);
    text("Ut malesuada a metus sit amet dapibus.",200,630);
  }

  if (comptador > 100) { // un cop arriba el comptador a 100 vaig restant
    if (x != 0 & y != 0) { //valors a les variables pq s'acosti a la posició correcte
      if (y > 0) {
        y--;
      }
      if (x > 0) {
        x--;
      }
    }
    if (x1 != 0 & y1 != 0) { //valors a les variables pq s'acosti a la posició correcte
      if (y1 > 0) {
        y1--;
      }
      if (x1 > 0) {
        x1--;
      }
    }
    if (x2 != 0 & y2 != 0) { //valors a les variables pq s'acosti a la posició correcte
      if (y2 > 0) {
        y2--;
      }
      if (x2 > 0) {
        x2--;
      }
    }
    if (x3 != 0 & y3 != 0) { //valors a les variables pq s'acosti a la posició correcte
      if (y3 > 0) {
        y3--;
      }
      if (x3 > 0) {
        x3--;
      }
    }
    if (x4 != 0 & y4 != 0) { //valors a les variables pq s'acosti a la posició correcte
      if (y4 > 0) {
        y4--;
      }
      if (x4 > 0) {
        x4--;
      }
    }
    if (x5 != 0 & y5 != 0) { //valors a les variables pq s'acosti a la posició correcte
      if (y5 > 0) {
        y5--;
      }
      if (x5 > 0) {
        x5--;
      }
    }
    if (x6 != 0 & y6 != 0) { //valors a les variables pq s'acosti a la posició correcte
      if (y6 > 0) {
        y6--;
      }
      if (x6 > 0) {
        x6--;
      }
    }
    if (x7 != 0 & y7 != 0) { //valors a les variables pq s'acosti a la posició correcte
      if (y7 > 0) {
        y7--;
      }
      if (x7 > 0) {
        x7--;
      }
    }
    if (x8 != 0 & y8 != 0) { //valors a les variables pq s'acosti a la posició correcte
      if (y8 > 0) {
        y8--;
      }
      if (x8 > 0) {
        x8--;
      }
    }
    if (x9 != 0 & y9 != 0) { //valors a les variables pq s'acosti a la posició correcte
      if (y9 > 0) {
        y9--;
      }
      if (x9 > 0) {
        x9--;
      }
    }
    if (x10 != 0 & y10 != 0) { //valors a les variables pq s'acosti a la posició correcte
      if (y10 > 0) {
        y10--;
      }
      if (x10 > 0) {
        x10--;
      }
    }
    if (x11 != 0 & y11 != 0) { //valors a les variables pq s'acosti a la posició correcte
      if (y11 > 0) {
        y11--;
      }
      if (x11 > 0) {
        x11--;
      }
    }
    if (x12 != 0 & y12 != 0) { //valors a les variables pq s'acosti a la posició correcte
      if (y12 > 0) {
        y12--;
      }
      if (x12 > 0) {
        x12--;
      }
    }
    if (x13 != 0 & y13 != 0) { //valors a les variables pq s'acosti a la posició correcte
      if (y13 > 0) {
        y13--;
      }
      if (x13 > 0) {
        x13--;
      }
    }
    if (x14 != 0 & y14 != 0) { //valors a les variables pq s'acosti a la posició correcte
      if (y14 > 0) {
        y14--;
      }
      if (x14 > 0) {
        x14--;
      }
    }
    if (x15 != 0 & y15 != 0) { //valors a les variables pq s'acosti a la posició correcte
      if (y15 > 0) {
        y15--;
      }
      if (x15 > 0) {
        x15--;
      }
    }
    if (x16 != 0 & y16 != 0) { //valors a les variables pq s'acosti a la posició correcte
      if (y16 > 0) {
        y16--;
      }
      if (x16 > 0) {
        x16--;
      }
    }
    if (x17 != 0 & y17 != 0) { //valors a les variables pq s'acosti a la posició correcte
      if (y17 > 0) {
        y17--;
      }
      if (x17 > 0) {
        x17--;
      }
    }
    if (x18 != 0 & y18 != 0) { //valors a les variables pq s'acosti a la posició correcte
      if (y18 > 0) {
        y18--;
      }
      if (x18 > 0) {
        x18--;
      }
    }
    if (x19 != 0 & y19 != 0) { //valors a les variables pq s'acosti a la posició correcte
      if (y19 > 0) {
        y19--;
      }
      if (x19 > 0) {
        x19--;
      }
    }
  }
 
  push();//crido les figures i sels hi fa un translate cap a la posicio original
  translate(x, y);
  triangle1();
  pop();

  push();
  translate(x1,y1);
  quad1();
  pop();

  push();
  translate(x2,y2);
  quad2();
  pop();

  push();
  translate(x3, y3);
  rect1();
  pop();

  push();
  translate(x4, y4);
  rect2();
  pop();

  push();
  translate(x5, y5);
  rect3();
  pop();

  push();
  translate(x6, y6);
  rect4();
  pop();

  push();
  translate(x7, y7);
  rect5();
  pop();

  push();
  translate(x8, y8);
  rect6();
  pop();

  push();
  translate(x9, y9);
  rect7();
  pop();

  push();
  translate(x10, y10);
  rect8();
  pop();

  push();
  translate(x11, y11);
  quad3();
  pop();

  push();
  translate(x12, y12);
  triangle2();
  pop();

  push();
  translate(x13, y13);
  triangle3();
  pop();

  push();
  translate(x14, y14);
  triangle4();
  pop();

  push();
  translate(x15, y15);
  rect9();
  pop();

  push();
  translate(x16, y16);
  quad4();
  pop();

  push();
  translate(x17, y17);
  quad5();
  pop();

  push();
  translate(x18, y18);
  triangle5();
  pop();

  push();
  translate(x19, y19);
  rect10();
  pop();


  comptador++;
  print(comptador + " x = " + x + " y = " + y);

}

function triangle1() { //vermell

  fill(vermell);
  triangle(80, 180, 140, 120, 140, 180);
}

function quad1() { //blau
  fill(blau);
  quad(80, 180, 140, 180, 140, 270, 80, 320);
}

function quad2() { //groc
  fill(groc);
  quad(140, 180, 140, 90, 200, 40, 200, 180);
}

function rect1() { //blau
  fill(blau);
  rect(200, 90, 30, 60);
}

function rect2() { //groc
  fill(groc);
  rect(230, 115, 65, 65);
}

function rect3() { //negre
  fill(negre);
  rect(140, 180, 90, 90);
}

function rect4() { //vermell
  fill(vermell);
  rect(140, 270, 60, 60);
}

function rect5() { //blau
  fill(blau);
  rect(140, 330, 60, 60);
}

function rect6() { //blau
  fill(blau);
  rect(200, 270, 30, 60);
}

function rect7() { //groc
  fill(groc);
  rect(200, 330, 30, 60);
}

function rect8() { //negre
  fill(negre);
  rect(200, 390, 30, 30);
}

function quad3() { //vermell
  fill(vermell);
  quad(230, 330, 290, 330, 290, 420, 230, 480);
}

function triangle2() { //groc
  fill(groc);
  triangle(230, 330, 290, 330, 290, 270);
}

function triangle3() { //groc
  fill(groc);
  triangle(290, 330, 350, 330, 290, 390);
}

function rect9() { //negre
  fill(negre)
  rect(290, 270, 60, 60);
}

function quad4() { //blau
  fill(blau);
  rect(290, 240, 60, 30);
}

function quad5() { //groc
  fill(groc);
  quad(80, 480, 140, 480, 140, 570, 80, 630);
}

function triangle4() { //negre
  fill(negre);
  triangle(80, 480, 140, 480, 140, 420);
}

function triangle5() { //blau
  fill(blau);
  triangle(140, 480, 200, 480, 140, 540);
}

function rect10() { //groc
  fill(groc);
  rect(200, 480, 30, 60);
}

function deviceShaken(){
  
  creadorRandom();
}
function mouseClicked(){
 
  creadorRandom();
}

function creadorRandom(){
  r1 = random(0, 330); //creo dues variables que guarden els valors1
  r2 = random(0, 550); //aleatoris de la posició

  r11 = random(0, 330); //creo dues variables que guarden els valors2
  r21 = random(0, 550); //aleatoris de la posició

  r12 = random(0, 330); //creo dues variables que guarden els valors3
  r22 = random(0, 550); //aleatoris de la posició

  r31 = random(0, 330); //creo dues variables que guarden els valors4
  r32 = random(0, 550); //aleatoris de la posició

  r41 = random(0, 330); //creo dues variables que guarden els valors5
  r42 = random(0, 550); //aleatoris de la posició

  r51 = random(0, 330); //creo dues variables que guarden els valors6
  r52 = random(0, 550); //aleatoris de la posició

  r61 = random(0, 330); //creo dues variables que guarden els valors7
  r62 = random(0, 550); //aleatoris de la posició

  r71 = random(0, 330); //creo dues variables que guarden els valors8
  r72 = random(0, 550); //aleatoris de la posició

  r81 = random(0, 330); //creo dues variables que guarden els valors9
  r82 = random(0, 550); //aleatoris de la posició

  r91 = random(0, 330); //creo dues variables que guarden els valors10
  r92 = random(0, 550); //aleatoris de la posició

  ar1 = random(0, 330); //creo dues variables que guarden els valors11
  ar2 = random(0, 550); //aleatoris de la posició

  ar11 = random(0, 330); //creo dues variables que guarden els valors12
  ar21 = random(0, 550); //aleatoris de la posició

  ar12 = random(0, 330); //creo dues variables que guarden els valors13
  ar22 = random(0, 550); //aleatoris de la posició

  ar31 = random(0, 330); //creo dues variables que guarden els valors14
  ar32 = random(0, 550); //aleatoris de la posició

  ar41 = random(0, 330); //creo dues variables que guarden els valors15
  ar42 = random(0, 550); //aleatoris de la posició

  ar51 = random(0, 330); //creo dues variables que guarden els valors16
  ar52 = random(0, 550); //aleatoris de la posició

  ar61 = random(0, 330); //creo dues variables que guarden els valors17
  ar62 = random(0, 550); //aleatoris de la posició

  ar71 = random(0, 330); //creo dues variables que guarden els valors18
  ar72 = random(0, 550); //aleatoris de la posició

  ar81 = random(0, 330); //creo dues variables que guarden els valors19
  ar82 = random(0, 550); //aleatoris de la posició

  ar91 = random(0, 330); //creo dues variables que guarden els valors20
  ar92 = random(0, 550); //aleatoris de la posició

  x = r1;
  y = r2;

  x1=r11;
  y1=r21;

  x2=r12;
  y2=r22;

  x3=r31;
  y3=r32;

  x4=r41;
  y4=r42;

  x5=r51;
  y5=r52;

  x6=r61;
  y6=r62;

  x7=r71;
  y7=r72;

  x8=r81;
  y8=r82;

  x9=r91;
  y9=r92;

  x10=ar1;
  y10=ar2;

  x11=ar11;
  y11=ar12;

  x12=ar21;
  y12=ar22;

  x13=ar31;
  y13=ar32;

  x14=ar41
  y14=ar42;

  x15=ar51;
  y15=ar52;

  x16=ar61;
  y16=ar62;

  x17=ar71;
  y17=ar72;

  x18=ar81;
  y18=ar82;

  x19=ar91;
  y19=ar92;
  comptador=0;
}