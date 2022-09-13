export function isValidEmail(email) {
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
    console.log('Successfully updated email!');
    return true;
  } else {
    console.error('You have entered an invalid email address!');
    return false;
  }
}

export function isAllLetters(input, property) {
  let isLettersOnly = /^[A-Za-z\s]*$/.test(input);
  let is3charsLongMinimum = input.length >= 3;
  if (isLettersOnly && is3charsLongMinimum) {
    console.log(`Successfully updated ${property}!`);
    return true;
  } else {
    console.log(`${property} must be 3 characters minimum and only letters!`);
    return false;
  }
}

export function isValidAge(age) {
  if (isNaN(age)) {
    console.error('Age is not a number');
    return false;
  } else if (age > 18) {
    console.log('Successfully updated the age!');
    return true;
  } else {
    console.error('Age must be above 18.');
    return false;
  }
}

export function formatProperty(target, property) {
  return `${new Date()} | The value of ${property}} is ${target[property]}`;
}
