const _ = require('lodash');

const user1 = {
  id: 1,
  name: 'Алексей',
  age: 33,
  role: {
    value: 'ADMIN',
    desc: 'Администратор',
  },
};

const user2 = { ...user1 };
const user3 = Object.assign({}, user2);
const user4 = JSON.parse(JSON.stringify(user3));
const user5 = _.clone(user4);
const user6 = _.cloneDeep(user5);

const isFullCopy = (a = {}, b = {}, param = 'role') => (a[param] !== b[param]);

console.log(`... : ${isFullCopy(user1, user2)}`); // => true
console.log(`Object.assign : ${isFullCopy(user2, user3)}`); // => true
console.log(`lodash.clone : ${isFullCopy(user4, user5)}`); // => true
console.log(`JSON.parse + JSON.stringify : ${isFullCopy(user3, user4)}`); // => false
console.log(`lodash.cloneDeep : ${isFullCopy(user5, user6)}`); // => false
