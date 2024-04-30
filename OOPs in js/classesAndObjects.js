//class means template/blueprint for creating objects.
//class is a logical entity.
//class is a user defined data type.
//class is a collection of objects.

// objects means that we can create many objects from a class.
// We can create multiple objects from a class.
// Objects are created at runtime.

class RailwayForm{
    submit(){
        alert("form submitted")
    }
    cancel() {
        alert("form cancelled")
    }
}

let john = new RailwayForm()
john.submit()

// john.cancel()

let jane = new RailwayForm()
jane.submit()
jane.cancel()