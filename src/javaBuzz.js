var FizzBuzz = function(){
  FizzBuzz.prototype.isDivisibleByThree = function(number){
    return this._isDivisibleBy(number, 3);
  };
  FizzBuzz.prototype.isDivisibleByFive = function(number){
    return this._isDivisibleBy(number, 5);
  };
  FizzBuzz.prototype.isDivisibleByThreeAndFive = function(number){
    return this._isDivisibleBy(number, 15);
  };
  FizzBuzz.prototype._isDivisibleBy = function(number, divisor){
  return(number % divisor === 0);
  };
  FizzBuzz.prototype.says = function(number){
    if(this.isDivisibleByThreeAndFive(number))
    return "FizzBuzz";
    else if(this.isDivisibleByFive(number))
    return "Buzz";
    else if(this.isDivisibleByThree(number))
    return "Fizz";
    else
    return number;
  };
};
