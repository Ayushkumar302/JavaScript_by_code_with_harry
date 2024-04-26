// insertion methods in dom -  

//1. innerHTML
let a = document.getElementsByTagName('div')[0]
// a.innerHTML = a.innerHTML + '<h1>hello world</h1>'

//2. createElement
let div = document.createElement('div')
div.innerHTML =  '<h3>hello world!!!!</h3>'
// a.append(div)
// a.prepend(div)
// a.before(div);
// a.after(div)
// a.replaceWith(div)

