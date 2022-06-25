interface Rect {
  readonly id: string;
  color?: string;
  size: {
    width: number;
    height: number;
  };
}

const rect1: Rect = {
  id: '0001',
  size: {
    width: 20,
    height: 20,
  },
};
rect1.color = 'red';

const rect2: Rect = {
  id: '0002',
  color: 'red',
  size: {
    width: 10,
    height: 5,
  },
};

const rect3 = {} as Rect;
const rect4 = <Rect>{};

interface RectWithArea extends Rect {
  getArea: () => number,
}

const rect5: RectWithArea = {
  id: '0005',
  size: {
    width: 30,
    height: 20,
  },
  getArea(): number {
    return this.size.width * this.size.height;
  },
};

interface IClock {
  time: Date,
  setTime(date: Date): void
}

class Clock implements IClock {
  time: Date = new Date();
  setTime(date: Date): void {
    this.time = date;
  };
}

interface Styles {
  [key: string]: string,
}

const css = {
  border: '1px solid black',
  marginTop: '2px',
  borderRadius: '5px',
};
