class Counter {
  constructor(counter) {
    this.counter = counter;
  }

  getCount() {
    return this.counter;
  }

  increment() {
    return ++this.counter;
  }

  decrement() {
    return --this.counter;
  }
}
//This is not a "real" singleton but it is encapsuled in a module so it does the same job
const singletonCounter = new Counter(0);

//Exporting an instance of the Counter class.
export default singletonCounter;
