interface Button {
  render(): void;
  onClick(): void;
}
abstract class Dialog {
  abstract createButton(): Button;
  render() {
    const okButton = this.createButton();
    okButton.onClick();
    okButton.render();
  }
}
class WindowsDialog extends Dialog {
  createButton(): Button {
    return new WindowsButton();
  }
}
class WebDialog extends Dialog {
  createButton(): Button {
    return new HTMLButton();
  }
}
class WindowsButton implements Button {
  render() {
    console.log("WindowsButton render");
  }
  onClick() {
    console.log("WindowsButton onClick");
  }
}
class HTMLButton implements Button {
  render() {
    console.log("HTMLButton render");
  }
  onClick() {
    console.log("HTMLButton onClick");
  }
}
class App {
  dialog: any;
  constructor() {
    this.dialog = "";
  }
  init(config: string) {
    if (config === "Windows") {
      this.dialog = new WindowsDialog();
    } else if (config === "Web") {
      this.dialog = new WebDialog();
    } else {
      console.log("Error! Unknown operating system.");
    }
  }
  main(config: string) {
    this.init(config);
    this.dialog.render();
  }
}
const configWindows = "Windows";
const configWeb = "Web";
const myApp = new App();
myApp.main(configWeb);
myApp.main(configWindows);
