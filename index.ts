// Define an interface for a shape
interface Shape {
  calculateArea(): number;
}

// Implement a Circle class that implements the Shape interface
class Circle implements Shape {
  // Properties
  private radius: number;

  // Constructor
  constructor(radius: number) {
    this.radius = radius;
  }

  // Method to calculate the area
  calculateArea(): number {
    return Math.PI * Math.pow(this.radius, 2);
  }
}

// Implement a Rectangle class that implements the Shape interface
class Rectangle implements Shape {
  // Properties
  private width: number;
  private height: number;

  // Constructor
  constructor(width: number, height: number) {
    this.width = width;
    this.height = height;
  }

  // Method to calculate the area
  calculateArea(): number {
    return this.width * this.height;
  }
}

// Usage of the classes
const circle = new Circle(5);
console.log(`Circle Area: ${circle.calculateArea()}`);

const rectangle = new Rectangle(4, 6);
console.log(`Rectangle Area: ${rectangle.calculateArea()}`);

