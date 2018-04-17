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