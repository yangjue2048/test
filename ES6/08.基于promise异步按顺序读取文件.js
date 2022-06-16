import thenFs from "then-fs";

thenFs.readFile('./files/1.txt', 'utf-8')
// 捕获错误
.catch((err) => {
  console.log(err.message);
})
.then((r1) => {
  console.log(r1)
  return thenFs.readFile('./files/2.txt', 'utf-8')
})
.then((r2) => {
  console.log(r2)
  return thenFs.readFile('./files/3.txt', 'utf-8')
})
.then((r3) => {
  console.log(r3)
})
