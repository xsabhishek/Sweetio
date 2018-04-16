//Calculator Function code
module.exports = function my_calculator(operator,value1,value2) {
    var result;
    if (typeof operator === 'string' && typeof value1 === 'number' && typeof value2 === 'number')
      {
        if ( operator === '+' )
        {
          result = value1 + value2;
          return result;
        }

        if ( operator === '-' )
        {
          result = value1 - value2;
          return result;
        }

        if ( operator === '/' )
        {
          result = value1 / value2;
          return result;
        }

        if ( operator === '*' )
        {
          result = value1 * value2;
          return result;
        }
      }
}
