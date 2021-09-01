abstract class Shape {
  x: number;
  y: number;
  color: string;

  public constructor(x?: number | Shape, y?: number, color?: string) {
    if (typeof x === "undefined" || x === null) {
      this.x = 0;
      this.y = 0;
      this.color = " ";
    } else if (typeof x === "number") {
      this.x = x || 0;
      this.y = y || 0;
      this.color = color || " ";
      if (typeof y !== "undefined") {
        if (typeof color !== "undefined") {
        }
      }
    } else {
      this.x = x.x;
      this.y = x.y;
      this.color = x.color;
    }
  }
  abstract clone(): Shape;
}
class Rectangle extends Shape {
  width: number;
  height: number;
  constructor(source?: Rectangle) {
    super(source);
    if (typeof source === "undefined" || source === null) {
      this.width = 0;
      this.height = 0;
    } else {
      this.width = source.width;
      this.height = source.height;
    }
  }
  clone(): Shape {
    return new Rectangle();
  }
}
class Circle extends Shape {
  radius: number;
  constructor(source?: Circle) {
    super(source);
    if (typeof source === "undefined" || source === null) {
      this.radius = 0;
    } else {
      this.radius = source.radius;
    }
  }
  clone(): Shape {
    return new Circle();
  }
}

class Application {
  shapes: Array<Shape>;
  constructor() {
    const circle = new Circle();
    this.shapes = [];
    circle.x = 10;
    circle.y = 10;
    circle.radius = 20;
    this.shapes.push(circle);
    const anotcherCircle = circle.clone();
    this.shapes.push(anotcherCircle);
    const rectangle = new Rectangle();
    rectangle.width = 10;
    rectangle.height = 20;
    this.shapes.push(rectangle);
  }
  businessLogic(): void {
    const shapesCopy = new Array<Shape>();
    for (let i = 0; i < this.shapes.length; i++) {
      shapesCopy.push(this.shapes[i].clone());
      console.log(shapesCopy[i]);
    }
  }
}
const app = new Application();
app.businessLogic();
console.log(app.shapes);
