var countdownGenerator = function (x) {
  let messages = ["T-minus ", "Blast Off!", "Rockets already gone, bub!"]
  let count = 0
  let sec = x
  return function() {
    if (count < x) {
      console.log(messages[0] + sec)
      count++
      sec--
    } else if (count == x) {
      console.log(messages[1])
      count++
      } else {
        console.log(messages[2])
      }
  }
}

var countdown = countdownGenerator(3);
countdown(); // T-minus 3...
countdown(); // T-minus 2...
countdown(); // T-minus 1...
countdown(); // Blast Off!
countdown(); // Rockets already gone, bub!
countdown(); // Rockets already gone, bub!
