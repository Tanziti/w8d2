// Your code here

Array.prototype.uniq = function(){
  result = [];
  let i = 0;
  while ( i < this.length) {
    if (!result.includes(this[i])) {
      result.push(this[i])
    };

  };
  return result;
};

[1, 1, 2, 2, 3, 3].uniq();