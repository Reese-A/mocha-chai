var expect = chai.expect;
var should = chai.should();

describe('add()', function () {
  it('should add two numbers together', function () {
    var sum = add(4, 2);
    expect(sum).to.equal(6);
    add.should.be.a('function');
  });
});

describe('minus()', function() {
  it('should subtract the second number from the first number', function(){
    var difference = minus(4, 2);
    expect(difference).to.equal(2);
    minus.should.be.a('function');
  });
});

describe('times()', function() {
  it('should multiply two numbers together', function(){
    var product = times(3,4);
    expect(product).to.equal(12);
    times.should.be.a('function');
  });
});

describe('divide()', function () {
  it('should divide the second number from the first number and return the quotient', function () {
    var quotient = divide(6,3);
    expect(quotient).to.equal(2);
    divide.should.be.a('function');
  });
});