const isFetching: boolean = true;
const isLoading: boolean = false;

const int: number = 33;
const float: number = 3.33;
const num: number = 3e33;

const message: string = 'Hello, TypeScript';

const fibList: number[] = [ 1, 1, 2, 3, 5, 8, 13 ];
const numList: Array<number> = [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ];

const words: string[] = [ 'Hello', 'TypeScript' ];

// Tuple
const contact: [string, number] = [ 'Alex', 1234567 ];

// Any
let anyVar: any = 33;
anyVar = 'TypeScript';
anyVar = [ 1, 2, 3, 4, 5, 6, 7 ];

const sayMyName = (name: string): void => console.log(name);
sayMyName('Heisenberg ');

// Never
const throwError = (msg: string): never => { throw new Error(msg) };
const infinite = (): never => { while (true) {} };

// Type
type Login = string;
const login: Login = 'admin';

type ID = string | number;
const id1: ID = 1234;
const id2: ID = 'qwerty';

// Null | Undefined
type SomeType = string | null | undefined;
