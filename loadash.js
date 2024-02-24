// Load the full build.
var _ = require('lodash');


// chunk method divides the array into the chunk array of the provided size.
console.log(`Chunk Method: ${_.chunk(['a', 'b', 'c', 'd'], 2)}`);
// => [['a', 'b'], ['c', 'd']]


// compact method removes all the falsey values from the array.The values false, null, 0, "", undefined, and NaN are falsey.
console.log(`Compact Method: ${_.compact([0, 1, false, 2, '', 3])}`);
// => [1, 2, 3]


// concat method creates a new array concatenating array with any additional arrays and/or values.
var array = [1];
var other = _.concat(array, 2, [3], [[4]]);
console.log(`Concat Method: Other Array ${other}`);
// => [1, 2, 3, [4]]
console.log(`concat Method: Orignal Array ${array}`);
// => [1]


// difference method creates an array of array values not included in the other given arrays using SameValueZero for equality comparisons.
console.log(`Difference Method: ${_.difference([2, 1], [2, 3])}`);
// => [1]


// differenceBy method creates an array of array values not included in the other given arrays using SameValueZero for equality comparisons.
console.log(`DifferenceBy Method: ${_.differenceBy([2.1, 1.2], [2.3, 3.4], Math.floor)}`);
// => [1.2]
 
// The `_.property` iteratee shorthand.
console.log(`DifferenceBy Method: ${JSON.stringify(_.differenceBy([{ 'x': 2 }, { 'x': 1 }], [{ 'x': 1 }], 'x'))}`);
// => [{ 'x': 2 }]


// clone method creates a shallow clone of value.
var objects = [{ 'a': 1 }, { 'b': 2 }];
 
var shallow = _.clone(objects);
console.log(`clone Method: ${shallow[0] === objects[0]}`);
// => true


// cloneDeep method creates a deep clone of value.
var objects = [{ 'a': 1 }, { 'b': 2 }];
 
var deep = _.cloneDeep(objects);
console.log(`cloneDeep Method: ${deep[0] === objects[0]}`);
// => false


// uniq method creates a duplicate-free version of an array, in which only the first occurrence of each element is kept.
console.log(`uniq Method: ${_.uniq([2, 1, 2])}`);
// => [2, 1]


// uniqBy method creates a duplicate-free version of an array, in which only the first occurrence of each element is kept.
const users = [
    { id: 10, name: 'Phil', age: 32 },
    { id: 8, name: 'Jason', age: 44 },
    { id: 11, name: 'Rye', age: 28 },
    { id: 10, name: 'Phil', age: 32 },
  ];
  
  const uniqueUsers = _.uniqBy(users, 'id');
  console.log(uniqueUsers);

// differenceBy method creates an array of array values not included in the other given arrays using SameValueZero for equality comparisons.
  const allUsers = [
    { id: 1, name: 'Phil' },
    { id: 2, name: 'John' },
    { id: 3, name: 'Rogg' },
  ];
  const activeUsers = [
    { id: 1, name: 'Phil' },
    { id: 2, name: 'John' },
  ];
  const inactiveUsers = _.differenceBy(allUsers, activeUsers, 'id');
  console.log(inactiveUsers);
  // [ { id: 3, name: 'Rogg' } ]



  var users2 = [
    { 'user': 'barney', 'age': 36, 'active': true },
    { 'user': 'fred',   'age': 40, 'active': false }
  ];
   
  console.log(_.filter(users2, function(o) { return !o.active; }));
  // => objects for ['fred']
   
  // The `_.matches` iteratee shorthand.
console.log(  _.filter(users2, { 'age': 36, 'active': true }));
  // => objects for ['barney']
   
  // The `_.matchesProperty` iteratee shorthand.
  console.log(_.filter(users2, ['active', false]));
  // => objects for ['fred']
   
  // The `_.property` iteratee shorthand.
console.log(  _.filter(users2, 'active'));
  // => objects for ['barney']


  const orderData = {
  internal: [
    { userId: 1, date: '2021-09-09', amount: 230.0, type: 'prepaid' },
    { userId: 2, date: '2021-07-07', amount: 130.0, type: 'prepaid' },
  ],
  external: [
    { userId: 3, date: '2021-08-08', amount: 30.0, type: 'postpaid' },
    { userId: 4, date: '2021-06-06', amount: 330.0, type: 'postpaid' },
  ],
};

// find user ids that placed postpaid orders (internal or external)
const postpaidUserIds = [];

for (const [orderType, orders] of Object.entries(orderData)) {
  postpaidUserIds.push(orders.filter((order) => order.type === 'postpaid'));
}
console.log(postpaidUserIds);


// lastIndexOf method gets the index at which the last occurrence of value is found in array using SameValueZero for equality comparisons. If fromIndex is negative, it's used as the offset from the end of array.
const integers = [2, 4, 1, 6, -1, 10, 3, -1, 7];
const index = _.lastIndexOf(integers, -1);
console.log(`lastIndexOf Method: ${index}`); // 7


// zip method creates an array of grouped elements, the first of which contains the first elements of the given arrays, the second of which contains the second elements of the given arrays, and so on.
const animals = ['duck', 'sheep'];
const sizes = ['small', 'large'];
const weight = ['less', 'more'];

const groupedAnimals = _.zip(animals, sizes, weight);
console.log(`zip Method: ${groupedAnimals}`);
// [ [ 'duck', 'small', 'less' ], [ 'sheep', 'large', 'more' ] ]