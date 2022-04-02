// Looping a Triangle
for(let i=0; i<7; i++) {
  console.log("#".repeat(i+1))
}

// FizzBuzz
for(let i=1; i<=100; i++) {
  if(!(i%3) && !(i%5)) {
    console.log("FizzBuzz")
  }
  else if (!(i%3)) {
    console.log("Fizz")
  }
  else if (!(i%5)) {
    console.log("Buzz")
  }
  else {
    console.log(i)
  }
}

// Chessboard
let size=9
for(let i=1; i<=size; i++) {
  let line=""
  for(let j=1; j<=size; j++) {
    const both_even_or_odd = ((i%2 !== 0 && j%2 !== 0) || (i%2 == 0 && j%2 ==0))
    line = line + (both_even_or_odd ? " " : "#")
  }
  console.log(line)
}
