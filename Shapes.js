class Shape {
    area() {
        return 0;
        
    }
  
    perimeter() {
      return 0;
    }
  
    toString() {
        return Object.getPrototypeOf(this).constructor.name;
    }

    imprimir() {
        return `La figura es ${this.toString()}, su area es de ${this.area()}, y su perímetro es ${this.perimeter()}`; 
    
    }
}

  
class Circle extends Shape {
    constructor(r) {
        super();
        this.radius = r;
    }

    area() {
        return Math.PI * this.radius ** 2;
    }

   
}
  
class Rectangle extends Shape {
    constructor(w, h) {
        super();
        this.width = w;
        this.height = h;
    }

    area() {
        return this.width * this.height;
    }

    perimeter() {
        return 2 * this.width + 2 * this.height;
    }
}
  
class Square extends Rectangle {
    constructor(l) {
        super(l, l);
    }
}
  
class Triangle extends Shape {
    constructor(b, h) {
        super();
        this.base = b; 
        this.height = h;
    }

    area() {
        return this.base * this.height / 2;
    }

    perimeter(){
        return this.base + this.height;
    }
}

class Triangle2 extends Triangle {
    constructor (a,b,c,h){
        super();
        this.ladoA = a;
        this.ladoB = b;
        this.ladoC = c;
        this.height = h;
    }

    area(){
        return this.ladoA * this.height / 2;
    }
    
    perimeter(){
        return this.ladoA + this.ladoB + this.ladoC;
    }
}

class Rombo extends Shape {
    constructor(D,d,l) {
        super();
        this.D = D;
        this.d = d;
        this.lado = l;
    }

    area(){
        return this.D * this.d / 2;
    }

    perimeter(){
        return this.lado * 4;
    }
}

class Paralelogramo extends Rectangle {
    constructor(w,h) {
        super(w,h);
    }

}

export {Circle, Rectangle, Square, Triangle, Triangle2, Rombo, Paralelogramo};
