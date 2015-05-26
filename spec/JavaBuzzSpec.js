describe('JavaBuzz', function() {
  var javabuzz;

  describe('#call', function() {
    javabuzz = new JavaBuzz();
    
    it('returns Fizz when passed number divisible by 3', function() {
      expect(javabuzz.call(3)).toEqual('Fizz'); 
    });

    it('returns Buzz when passed number divisible by 5', function() {
      expect(javabuzz.call(5)).toEqual('Buzz');
    });

    it('returns FizzBuzz when passed number divisible by 15', function() {
      expect(javabuzz.call(15)).toEqual('FizzBuzz');
    });

    it('returns the number when it is not divisible by 3, 5, or 15', function() {
      expect(javabuzz.call(19)).toEqual(19);
    });
  });
});
