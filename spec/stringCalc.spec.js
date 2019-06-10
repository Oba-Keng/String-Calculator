var add = require('./stringCalc.js');
var addler = add.add;


describe('a string calculator',function(){
     

it('should return 0 for an empty string', function(){
 

    
expect(addler('')).toEqual(0);

})
it('should return the sum of two numbers', function(){


expect(addler('25,30')).toEqual(55);
})
it('should return the sum of multiple numbers', function(){


expect(addler('25,30,89,37,4')).toEqual(185);
})

it('should replace comma with a line break', function(){


expect(addler('35\n23')).toEqual(58);
 })

 it('negatives not allowed', function(){


expect(function(){addler('-35\n23')}).toThrow(new Error('negatives not allowed'));
 })
 it('numbers greater than 1000 are ignore', function(){


    expect(addler('1001\n23')).toEqual(23);
})


});