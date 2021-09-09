interface Button {
  paint(): void;
}
interface Checkbox {
  paint(): void;
}
interface GUIFactory {
  createButton(): Button;
  createCheckbox(): Checkbox;
}
class WinFactory implements GUIFactory {
  createButton(): Button {
    return new WinButton();
  }
  createCheckbox(): Checkbox {
    return new WinCheckbox();
  }
}
class MacFactory implements GUIFactory {
  createButton(): Button {
    return new MacButton();
  }
  createCheckbox(): Checkbox {
    return new MacCheckbox();
  }
}
class WinButton implements Button {
  paint() {
    console.log("WinButton");
  }
}
class MacButton implements Button {
  paint() {
    console.log("MacButton");
  }
}
class WinCheckbox implements Checkbox {
  paint() {
    console.log("WinCheckbox");
  }
}
class MacCheckbox implements Checkbox {
  paint() {
    console.log("MacCheckbox");
  }
}
class Application {
  factory: GUIFactory;
  button: Button;
  checkbox: Checkbox;
  constructor(factory: GUIFactory) {
    this.factory = factory;
    this.button = this.factory.createButton();
    this.checkbox = this.factory.createCheckbox();
  }
  pain() {
    this.button.paint();
    this.checkbox.paint();
  }
}
class ApplicationConfigurator {
  main(config: string) {
    let factory: GUIFactory = {} as GUIFactory;
    let app: Application = {} as Application;
    if (config === "Windows") {
      factory = new WinFactory();
    } else if (config === "Mac") {
      factory = new MacFactory();
    } else {
      console.log("error");
    }
    app = new Application(factory);
    app.pain();
  }
}
const configWindows: string = "Windows";
const configMac: string = "Mac";
const app = new ApplicationConfigurator();
app.main(configWindows);
app.main(configMac);
