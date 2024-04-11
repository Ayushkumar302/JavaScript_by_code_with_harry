// write a program to print marks of a student in an object using for loop
// const student = {
//     john : 70,
//     sam : 85,
//     tom : 92
// }
// for (let i = 0; i < Object.keys(student).length; i++) {
//    console.log("marks of ",Object.keys(student)[i] , " are",student[Object.keys(student)[i]]);
    
// }

const student = {
    john : 70,
    sam : 85,
    tom : 92
    
}
for (const key in student) {
   console.log("marks of",key,"are",student[key]);
}

//que 4

// function mean(a,b,c,d,e) {
//     return   (a + b + c + d + e) / 5 ;
// }
// console.log(mean(3,6,9,12,15));

const mean = (a,b,c,d,e)=>{
return  (a+b+c+d+e)/5
}
console.log(mean(3,6,9,12,15))
