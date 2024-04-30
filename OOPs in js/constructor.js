// constructor means 
// A constructor in JavaScript is a special method used for creating and initializing objects created from a class or a constructor function, allowing 
// you to set initial values and define behavior for new instances
//  of the object

class RailwayForm {
    constructor(givenname , trainNo) {
        console.log("contructor called...");
        this.name = givenname;
        this.trainNo = trainNo;
      }
    submit() {
      alert(`${this.name} your form is submitted for train number ${this.trainNo}`);
    }
    cancel() {
      alert(`${this.name} your form is canceled for train number ${this.trainNo}`);
    }
   
  }
  
  let johnForm = new RailwayForm("john",12332);
  let janeForm = new RailwayForm("jane",13441);

  
  johnForm.submit();
  janeForm.submit();
  janeForm.cancel();
  