// Your code here

Array.prototype.myEach = function(callback) {
  for (let i = 0; i < this.length; i++) {
    callback(this[i]) 
  }
}

function double(num) {
  console.log(num * 2)
  }
// [1,2,3].myEach(double)

Array.prototype.myMap = function(callback) {
  let result = [];
  for (let i = 0; i < this.length; i++) {
    result.push(callback(this[i]));
  }
  return result;
}

[1,2,3].myMap(myEach)
// [1,2,3].each do |ele|
// end



// def myeach(prc) 
//   i = 0
//   while i < self.length 
//    prc.call(self[i]) 
//  end   
// end

// double = Proc.new{|ele| puts ele * 2}
// [1,2,3].myeach(double) 