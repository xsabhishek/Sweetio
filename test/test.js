// my_calculator function test cases

var assert = require('chai').assert;
var calc = require('../calculator');

describe('Basic Sanity Check',function(){
  var result;

  it('No Input Given to function',function(){
      result = calc();
      assert.equal(result,undefined);
  });

  it('More than three arguments are passed to a function',function(){
      result = calc('+',1,2,3,4,5);
      assert.equal(result,3);
  });

  it('No Operator argument is passed to a function',function(){
      result = calc(1,2,3,4,5);
      assert.equal(result,undefined);
      assert.isUndefined(result,'No operator is defined');
  });

  it('Return value from function is a number',function(){
      result = calc('+',6,4);
      assert.typeOf(result,'number');
      assert.isNotString(result);
      assert.isNumber(result);
  });

  it('Mix of string and numeric arguments are passed to a function',function(){
      result = calc('+','-',2);
      assert.isUndefined(result,'No operator is defined');
  });

  it('All input args to the function are string',function(){
      result = calc('-','6','4');
      assert.equal(result,undefined);
  });

});

describe('ADDITION',function(){
  var result;

  it('Sanity check for ADDITION',function(){
      result = calc('+',6,4);
      assert.equal(result,10);
      assert.isFinite(result);
  });

  it('Test to check the addition of +ve and -ve input value',function(){
      result = calc('+',-6,4);
      assert.equal(result,-2);
  });

  it('Test to check the -ve input values',function(){
      result = calc('+',-6,-4);
      assert.equal(result,-10);
  });

  it('Test to check the fraction input values greater than 16 digits',function(){
      result = calc('+',1.11111111111111111,1.11111111111111111);
      assert.equal(result,2.22222222222222222);
  });

  it('Test to check the BODMAS Calculation',function(){
      result = calc('+',(5+5)/2,12+(4/2));
      assert.equal(result,19);
  });

});

describe('SUBTRACTION',function(){
  var result;

  it('Sanity check for SUBTRACTION',function(){
      result = calc('-',6,4);
      assert.equal(result,2);
  });

  it('Test to check the -ve input value',function(){
      result = calc('-',-6,4);
      assert.equal(result,-10);
  });

  it('Test to check both -ve input values',function(){
      result = calc('-',-6,-4);
      assert.equal(result,-2);
  });

  it('Test to check the fraction input values greater than 16 digits',function(){
      result = calc('-',1.11111111111111111,1.11111111111111111);
      assert.equal(result,0);
  });

  it('Test to check the fraction input values greater than 16 digits',function(){
      result = calc('-',1.11111111111111111,3.33333333333333333);
      assert.equal(result,-2.22222222222222222);
  });
});

describe('MULTIPLICATION',function(){
  var result;

  it('Sanity check for MULTIPLICATION',function(){
      result = calc('*',6,4);
      assert.equal(result,24);
  });

  it('Test to check the -ve input value',function(){
      result = calc('*',-6,4);
      assert.equal(result,-24);
  });

  it('Test to check both -ve input values',function(){
      result = calc('*',-2,-5);
      assert.equal(result,10);
  });

});

describe('DIVISION',function(){
  var result;

  it('Sanity check for DIVISION',function(){
      result = calc('/',6,3);
      assert.equal(result,2);
  });

  it('Test to check the -ve input value',function(){
      result = calc('/',-6,3);
      assert.equal(result,-2);
  });

  it('Test to check both -ve input values',function(){
      result = calc('/',-6,-3);
      assert.equal(result,2);
  });

  it('Test to check the division with -ve input value',function(){
      result = calc('/',6,-3);
      assert.equal(result,-2);
  });

  it('Test to check division by zero',function(){
      result = calc('/',-6,-0);
      assert.equal(result,'Infinity');
  });

  it('Test to check division of zero by any number',function(){
      result = calc('/',0,6);
      assert.equal(result,0);
  });

});
