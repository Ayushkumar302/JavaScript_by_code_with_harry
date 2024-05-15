// Ques - 1
// write js prog to print following after 2 seconds
// hello
// world

// const a = (text)=>{
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(text)
//             }, 2000)
//     })
// }

// (
//  async()=>{
//    let text =  await a("hello")
//    console.log(text)
//    text = await a("world")
//    console.log(text)
//   }
// )()

// ques-2
// to find average of numbers in array using spread op

function avaerga(a, b, c) {
  let sum = a + b + c;
  let avg = sum / 3;
  return avg;
}
let x = [10, 20, 30];
console.log(avaerga(...x));

//que3
//interest calculator using js
const interest = (amount, rate, time) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let interest =( amount * rate * time)/100;
      resolve(interest);
    }, 2000);
  });
};
interest(1000, 5, 1).then((result) => {
  console.log(result);
  return result;
});
