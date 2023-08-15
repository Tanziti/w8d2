// Your code here

Array.prototype.uniq = function(){
  let result = [];
  let i = 0;
  while ( i < this.length) {
    if (!result.includes(this[i])) {
      result.push(this[i])
    };

    i++ 

  };
  return result;
};

// console.log([1, 1, 2, 2, 3, 3].uniq());

Array.prototype.twoSum = function() {
  let result = []; 
  let i = 0;
  while (i < this.length - 1) {
    let y = i + 1;
    while (y < this.length) {
      if (this[i] + this[y] === 0) {
        result.push([i, y]);
      } 
      y++;
    }
    i++;
  }
  return result;
}

// console.log([-1, 0, 2, -2, 1].twoSum())

Array.prototype.transpose = function(){
  let result = []; 
  let i = 0;

  while (i < this.length) {
      let j = 0; 
      subarr = [];
    while (j < this.length) {
    subarr.push(this[j][i])
    j++;
    }
    result.push(subarr);
    i++;
  }
  return result;
}

console.log([[0, 1, 2], [3, 4, 5], [6, 7, 8]].transpose())