describe('JavaBuzz', function() {
  var javabuzz;

  describe('#call', function() {

    it('returns Fizz when passed number divisible by 3', function() {
      javabuzz = new JavaBuzz();
      expect(javabuzz.call(3)).toEqual('Fizz'); 
    });
  });
});
