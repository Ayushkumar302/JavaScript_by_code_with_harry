//  condition statements    
// if, if else , if else if

let age = prompt("Check your age if you are eligible for voting");
//prompt is a  function that shows up a dialog box and asks the user to input something. in chrome
// if (age>18) {
//     alert("You can vote");
// }
// else{
// alert("Sorry! You cannot vote ");
// }


if (age<0) {
    alert("invalid age");
}
else if(age<9){
alert("Sorry! You are a kid ");
}

else if (age>18 && age>=9) {
    alert("you can apply for voter card")
}

else{
    alert("you can vote")
}


//switch  case statement

let day=prompt('Enter today\'s date');
day=parseInt(day);

switch (day) {
    case 1:
        console.log('Monday')
        break;
    case 2:
        console.log('Tuesday')
        break;
    case 3: 
        console.log('Wednesday')
        break;
    default:
        console.log('Invalid Day')
}

/*
The switch statement is used to select one of many code blocks to execute. It allows you to test a value against multiple cases and, when found */