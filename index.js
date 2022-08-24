import {Circle, Rectangle, Square, Triangle, Triangle2, Rombo, Paralelogramo} from './Shapes.js';

const triangle = new Triangle(10, 5);
console.log(triangle.area());
console.log(triangle.imprimir());

const triangle2 = new Triangle2(9,19,13,5);
console.log(triangle2.area());
console.log(triangle2.imprimir());

const square = new Square(10);
console.log(`Area: ${square.area()} - Perimeter: ${square.perimeter()}`);
console.log(square.imprimir());


const rectangle = new Rectangle(10, 10);
console.log(`Area: ${rectangle.area()} - Perimeter: ${rectangle.perimeter()}`);
console.log(rectangle.imprimir());


const circle = new Circle(10);
console.log(circle.perimeter());
console.log(circle.imprimir());

const rombo = new Rombo(10,5,15);
console.log(`Area: ${rombo.area()} - Perimeter: ${rombo.perimeter()}`);
console.log(rombo.imprimir());

const paralelogramo = new Paralelogramo(10,10);
console.log(`Area: ${paralelogramo.area()} - Perimeter: ${paralelogramo.perimeter()}`);
console.log(paralelogramo.imprimir());



