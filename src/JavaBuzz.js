var JavaBuzz = function() {}

JavaBuzz.prototype.call = function(number) {
  if (this.isDivisibleByFifteen(number)) {
    return 'FizzBuzz'
  } 
  else if (this.isDivisibleByThree(number)) {
    return 'Fizz'
  }
  else if (this.isDivisibleByFive(number)) {
    return 'Buzz'
  }
  else {
    return number;
  }
}

JavaBuzz.prototype.isDivisibleByFifteen = function(number) {
  return (number % 15 == 0);
}

JavaBuzz.prototype.isDivisibleByThree = function(number) {
  return (number % 3 == 0);
}

JavaBuzz.prototype.isDivisibleByFive = function(number) {
  return (number % 5 == 0);
}


