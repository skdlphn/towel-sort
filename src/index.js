
// You should implement your task here.

module.exports = function towelSort (matrix = []) {
    return matrix.length === 0 ? [] : matrix.reduce((prevVal, item, index) => {
      if(index % 2 !== 0){
          item = item.reverse();
      }
      prevVal.push(...item);
      return prevVal;
  }, []);
};
