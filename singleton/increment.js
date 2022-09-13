import singletonCounter from './singletonCounter.js';

const incrementCounter = () => {
  singletonCounter.increment();
  console.log('increment >>>  counter = ', singletonCounter.getCount());
};

export default incrementCounter;
