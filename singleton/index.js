import singletonCounter from './singletonCounter.js';
import incrementCounter from './increment.js';
import decrementCounter from './decrement.js';
import singletonCounterv2 from './singleCounterv2.js';

singletonCounter.increment();
console.log('index increment>>>  counter = ', singletonCounter.getCount());
incrementCounter();
singletonCounter.decrement();
console.log('index decrement>>>  counter = ', singletonCounter.getCount());
decrementCounter();

singletonCounterv2.increment();
console.log('index singletonCounterv2 = ', singletonCounterv2.getCount());
