//Que-1
// const loadscript = (src) => {
//   return new Promise((resolve, reject) => {
//     const script = document.createElement("script");
//     script.src = src;
//     script.onload = () => {
//       resolve(src);
//     };
//     document.head.appendChild(script);
//   });
// };

// const main2 = async () => {
//   let p1 = await loadscript(
//     "https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.20/lodash.js"
//   );
//   console.log(p1);
//   console.log(new Date());
// };
// main2();

//que 2
// let a = function ayush() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       reject(new Error("it got rejected"));
//     }, 3000);
//   });
// };

// let b = async () => {
//   try {
//     let c = await a();
//     console.log(c);
//   } catch (err) {
//     console.log(err);
//   }
// };
// b();


// que 4

let p1 = async()=>{
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(10)
        }, 2000);
    })
}

let p2 = async()=>{
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(20)
        }, 1000);
    })
}

let p3 = async()=>{
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(30)
        }, 3000);
    })
}


const  run = async()=>{
    console.time("run");
    let a1 =  p1()
    let a2 =  p2()
    let a3 =  p3()
    let a1a2a3 = await Promise.all([a1,a2,a3])
    console.log(a1a2a3);
    // console.log(a1,a2,a3);
    console.timeEnd("run");
}
run()
