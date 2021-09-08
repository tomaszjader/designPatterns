class Car {}
class Manual {}
interface Builder {
  reset(): void;
  setSeats(): void;
  setEngine(): void;
  setTripComputer(): void;
  setGPS(): void;
}
class CarBuilder {
  car: Car;
  constructor() {
    this.car = new Car();
  }
  reset(): void {}
  setSeats(): void {}
  setEngine(): void {}
  setTripComputer(): void {}
  setGPS(): void {}
  getProduct(): Car {
    const product = this.car;
    this.reset();
    return product;
  }
}
class CarManualBuilder {
  manual: Manual;
  constructor() {
    this.manual = new Car();
  }
  reset(): void {}
  setSeats(): void {}
  setEngine(): void {}
  setTripComputer(): void {}
  setGPS(): void {}
  getProduct(): Car {
    const product = this.manual;
    this.reset();
    return product;
  }
}
class Director {
  builder: any;
  constructor(builder?: Builder) {
    this.builder = builder;
  }
  constructSportsCar(builder: Builder): void {
    builder.reset();
    builder.setSeats();
    builder.setEngine();
    builder.setTripComputer();
    builder.setGPS();
  }
  constructSUV(builder: Builder): void {}
}

class Application {
  makeCar(): void {
    const director: Director = new Director();

    const builder = new CarBuilder();
    director.constructSportsCar(builder);
    const car = builder.getProduct();

    const builder1 = new CarManualBuilder();
    director.constructSportsCar(builder1);

    // Finalny produkt zwykle pobiera się od obiektu
    // budowniczego, ponieważ kierownik nic o nim nie wie i
    // nie jest zależny od konkretnych budowniczych czy
    // konkretnych produktów.
    const manual: Manual = builder.getProduct();
  }
}
