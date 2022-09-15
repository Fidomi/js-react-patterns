import Observable from './oberserver.js';

function logger(data) {
  console.log(`${Date.now()} ${data}`);
}

function logger2(data) {
  console.log(`Logger2 ${data}`);
}

Observable.subscribe(logger);
Observable.subscribe(logger2);
Observable.notify('Demain il pleut');
