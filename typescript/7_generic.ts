const arrayOfNums: Array<number> = [ 1, 1, 2, 3, 5 ];
const arrayOfStrings: Array<string> = [ 'Hello', 'Alex' ];

function reverse<T>(array: T[]): T[] {
  return array.reverse();
}

reverse(arrayOfNums);
reverse(arrayOfStrings);
