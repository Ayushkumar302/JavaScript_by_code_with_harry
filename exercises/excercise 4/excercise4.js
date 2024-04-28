// let h = document.getElementById("hour")
// setInterval(() => {
//     let date = new Date();
//     let hours = date.getHours();
//     let minutes = date.getMinutes();
//     let seconds = date.getSeconds();

    // h.innerHTML = `${hours}:${minutes}:${seconds}`
// }, 1000);

let time = document.getElementById("hour")

const clock = ()=>{
    let d = new Date();
    let hours =  String(d.getHours()).padStart(2, '0');
    let minutes = String(d.getMinutes()).padStart(2, '0');
    let seconds =  String(d.getSeconds()).padStart(2, '0');    
    time.innerHTML=`${hours}:${minutes}:${seconds}`
    date.innerHTML = d.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });

}
setInterval(clock,100)