var orange = 30;
orange *= 10;
// console.log(orange)

const frined = ["Arifa", "Asma", "Nusrat", "Sumaiya", "Sadia", "Mim"];
// console.log(frined);
for (const num of frined) {
  // console.log(num)
}

for (let i = 0; i < 5; i++) {
  // console.log(i)
}
// console.time("time");
// const startTime= performance.now()
for (let i = 0; i <= 500; i++) {
  //   console.log(i);
}
// const endTime= performance.now()
// console.timeEnd("time");

// console.log(`This code took  ${endTime- startTime} ms` )

const firstArra = [];
const secendArray = [];

for (let i = 0; i <= 5000000; i++) {
  if (i < 300000) {
    firstArra.push(i);
  }
  secendArray.push(i);
}
console.log(firstArra.length)
console.log(secendArray.length)
console.time("task");
console.timeEnd("task");
