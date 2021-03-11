module.exports = function towelSort (matrix) {
  return !matrix ? [] : matrix.map((e,i) => { return i % 2 === 1 ? e.reverse() : e }).reduce((sum, cur) => { return sum.concat(cur) }, [] );
}
