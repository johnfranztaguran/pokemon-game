const _ = require('lodash');

const items = [
  { name: 'product 1', amount: 3 },
  { name: 'product 2', amount: 4 },
  { name: 'product 3', amount: 5 },
  { name: 'product 6', amount: 10 },
  { name: 'product 6', amount: 10 }
];

const totalSum = _.sumBy(items, 'amount');
console.log('totalSum', totalSum);

const calculateBaseIndex = (from, to) => {
  const newArray = items.slice(from, to);
  const totalSum = _.sumBy(newArray, 'amount');
  return totalSum;
}

console.log(calculateBaseIndex(1, 4));
