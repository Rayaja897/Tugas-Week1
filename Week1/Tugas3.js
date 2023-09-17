const num = 5

let line = ""
if (typeof num !== 'number' || isNaN(num)) {
  return console.log("Parameter harus angka!")
}
for (let i = 1; i <= num; i++) {
  for (let j = 1; j <= i; j++) {
    line += j
  }
  line += "\n"
}
console.log(line)