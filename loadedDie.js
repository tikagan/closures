function makeLoadedDie() {
  var list = [5, 4, 6, 1, 6, 4, 2, 3, 3, 5];
  index = -1
  console.log(list.length)

  return function() {
    if (index == list.length -1) {
      index = 0
      return list[index]
    } else {
      index += 1
      // console.log("index: ", index)
      // console.log("list[index]: ", list[index])
      return list[index]

      }
  }
}

var rollLoadedDie = makeLoadedDie();

console.log(rollLoadedDie())  // 5
console.log(rollLoadedDie())  // 4
console.log(rollLoadedDie())  // 6
console.log(rollLoadedDie())
console.log(rollLoadedDie())
console.log(rollLoadedDie())
console.log(rollLoadedDie())
console.log(rollLoadedDie())
console.log(rollLoadedDie())
console.log(rollLoadedDie())
console.log(rollLoadedDie())