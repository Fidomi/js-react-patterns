import singletonCounter from './singletonCounter.js';

let singletonCounter2 = new singletonCounter.constructor(55);
console.log('singletonCounter', singletonCounter);
console.log('singletonCounter.instance', singletonCounter2.instance);

const decrementCounter = () => {
  singletonCounter.decrement();
  console.log('decrement >>>  counter = ', singletonCounter.getCount());
};

export default decrementCounter;
