//class means template/blueprint for creating objects.
//class is a logical entity.
//class is a user defined data type.
//class is a collection of objects.

// objects means that we can create many objects from a class.
// We can create multiple objects from a class.
// Objects are created at runtime.

// class RailwayForm{
//     submit(){
//         alert("form submitted")
//     }
//     cancel() {
//         alert("form cancelled")
//     }
// }

// let john = new RailwayForm()
// john.submit()

// // john.cancel()

// let jane = new RailwayForm()
// jane.submit()
// jane.cancel()

class RailwayForm {
  submit() {
    alert(`${this.name} your form is submitted for train number ${this.trainNo}`);
  }
  cancel() {
    alert(`${this.name} your form is canceled for train number ${this.trainNo}`);
  }
  fill(givenname , trainNo) {
    this.name = givenname;
    this.trainNo = trainNo;
  }
}

let johnForm = new RailwayForm();
johnForm.fill("John",12142)

let janeForm = new RailwayForm();
janeForm.fill("Jane",14333)

johnForm.submit();
janeForm.submit();
janeForm.cancel();
