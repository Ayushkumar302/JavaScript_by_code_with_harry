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

//**********INSERT ADJACENT methods */
//1. insertAdjacentHTML
//2. insertAdjacentElement
//3. insertAdjacentText

containerTwo.insertAdjacentHTML('beforebegin', '<div class="test">beforebegin</div>')
containerTwo.insertAdjacentHTML('beforeend', '<div class="test">beforend</div>')
containerTwo.insertAdjacentHTML('afterbegin', '<div class="test">afterbegin</div>')
containerTwo.insertAdjacentHTML('afterend', '<div class="test">afterend</div>')


