class TypeScript {
  version: string;

  constructor(version: string) {
    this.version = version;
  }

  info(name: string): string {
    return `[${name}]: TypeScript version is ${this.version}`;
  }
}

class Car {
  readonly model: string;
  readonly numberOfWheels: number = 4;

  constructor(model: string) {
    this.model = model;
  }
}

class CarAnalogue {
  readonly numberOfWheels: number = 4;

  constructor(readonly model: string) {
    this.model = model;
  }
}

class Animal {
  protected voice: string = '';
  public color: string = 'black';

  constructor() {
    this.go();
  }

  private go() {
    console.log('Go');
  }
}

class Cat extends Animal {
  public setVoice(voice: string): void {
    this.voice = voice;
  }
}

const cat = new Cat();
cat.setVoice('test');
console.log(cat.color);

abstract class Component {
  abstract render(): void;
  abstract info(): string;
}

class AppComponent extends Component {
  render(): void {
    console.log('Component on render');
  }

  info(): string {
    return 'This is info';
  }
}
