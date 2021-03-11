module.exports = function towelSort (matrix) {

  if(!matrix) return [];

  matrix = matrix.map((e,i) => { return i % 2 === 1 ? e.reverse() :	e }).reduce((sum, cur) => { return sum.concat(cur) }, [] );

  return matrix;
}
