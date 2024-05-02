// inheritance - means
// 1. class can inherit from another class
// 2. class can inherit from multiple classes


// Superclass
class Animal {
    constructor(name , color) {
      this.name = name;
      this.color = color;
    }
  
    run(){
        console.log(`${this.name} is running`);
    }

    speak() {
      console.log(`${this.name} makes a sound`);
    }

  }
  

  class Monkey extends Animal {
    eatBanana(){
        console.log(`${this.name} is eating banana`);
    }
    hide(){
        console.log(`${this.name} is hiding`);
    }
   
  }
  


  let ani = new Animal("bruno","brown")
  let m = new Monkey("Chimpu","orange")
  ani.speak()
  m.eatBanana()
  m.hide()
//   ani.hide()//throw an error 
  
 
  