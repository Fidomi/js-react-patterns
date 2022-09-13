import {
  isValidEmail,
  isAllLetters,
  isValidAge,
  formatProperty,
} from './validator.js';

const user = {
  firstName: 'John',
  lastName: 'Doe',
  username: 'johndoe',
  age: 42,
  email: 'john@doe.com',
};

const userProxy = new Proxy(user, {
  get: (target, property) => formatProperty(target, property),
  set: (target, property, value) => {
    if (
      property === 'firstName' ||
      property === 'lastName' ||
      property === 'username'
    ) {
      isAllLetters(value, property) ? (target[property] = value) : null;
    }
    if (property === 'email') {
      isValidEmail(value) ? (target[property] = value) : null;
    }
    if (property === 'age') {
      isValidAge(value) ? (target[property] = value) : null;
    }
    return true;
  },
});

userProxy.age = 19;
userProxy.username = 'Madona';
userProxy.email = 'mado@madona.fr';
