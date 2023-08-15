// Your code here

Array.prototype.myEach = function(callback) {
  for (let i = 0; i < this.length; i++) {
    callback(this[i]) 
  }
}

function double(num) {
  return(num * 2)
  }
// [1,2,3].myEach(double)

Array.prototype.myMap = function(callback) {
  let result = [];

  this.myEach(function(num) {
  result.push(callback(num));
  });
  return result;
}

console.log([1,2,3].myMap(double));


// [1,2,3].each do |ele|
// end


Array.prototype.myReduce = function(callback, initialValue) {
  let sum = 0; 
  if (initialValue){
    sum += initialValue 
  }; //and or initialValue is its not 0?
  this.myEach(function(num) {
    sum = callback(sum, num);
  });
  return sum;
};

function helper(num1, num2){
  return num1 + num2;
};

console.log([1,2,3].myReduce(helper));


// def myeach(prc) 
//   i = 0
//   while i < self.length 
//    prc.call(self[i]) 
//  end   
// end

// double = Proc.new{|ele| puts ele * 2}
// [1,2,3].myeach(double) 