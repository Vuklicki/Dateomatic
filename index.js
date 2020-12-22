var submit = document.getElementById('submit_button');
submit.addEventListener('click', displayEvents, );


var row = 1;

function displayEvents(ev) {

    ev.preventDefault();

    var name = document.getElementById('event_name').value;
    var location = document.getElementById('location').value;
   // var start_date = docuemnt.getElementById('start_date').value;
   // var start_time = document.getElementById('start_time').value;
    var time_zone = document.getElementById('time_zone').value;
   // var end_time = document.getElementById('end_time').value;
   // var end_date = docuemnt.getElementById('end_date').value;

    if  (!name || !location || !time_zone) {
        alert("Please fill all the boxes");
        return;
    }

    var dispaly = document.getElementById('display');
    
    var newRow = dispaly.insertRow(row);
    
    var cell1 = newRow.insertCell(0);
    var cell2 = newRow.insertCell(1);
    //  this is for start_date ---> var cell3 = newRow.insertCell(2)    
    //  start_time ----> var cell4 = newRow.insertCell(3);
    var cell5 = newRow.insertCell(2);
   // var cell6 = newRow.insertCell(5);
    
    
    cell1.innerHTML = name;
    cell2.innerHTML = location;
    cell5.innerHTML = time_zone;
   // cell6.innerHTML = end_time;

    row++;


    
}



///// Right now I can upload to the rows but I have to figure out
//// why it can only have 3 cells or 3 rows








// Resets the Form if the data filled in is not Accurate

// //// ********* Issue to fix-->(program it so it can reset the data no matter
// //// ********* if all the inputs are filled)

// const reset = function(ev) {

//     ev.preventDefault();


//     document.getElementById('user_form').reset();
// }

// const send = function(ev) { 
    
//     ev.preventDefault();
    
//     ev.stopPropagation();

//     let ret = validate();

//     if (ret) {

      
//         document.getElementById('user_form').submit();
        

//     }else{

//         let err = document.querySelector('.error');
        
//         let input = err.querySelector('input');
        
//         err.setAttribute('data-errormsg', ' ... Missing ${input.placeholder}');
//     }
    
// }

// const init = function () {

//     document.getElementById('reset_button').addEventListener('click', reset);
     
//      document.getElementById('submit_button').addEventListener('click', send);
     
//  }
 


// const validate = function(ev) {
//     let valid = false;

//     let event_name = document.getElementById('event_name');
//     let location = document.getElementById('location');
//     let starting_date = document.getElementById('start_date');
//     let starting_time = document.getElementById('start_time');
//     let time_zone = document.getElementById('time_zone');
//     let ending_time = document.getElementById('end_time');
//     let ending_date = document.getElementById('end_date');
    


//     return true;
    

// }


// I want to store as excel sheet

//   | event name | location | startd D | end D |
//  1.    Wedding    Nikaragua   10/4/2020    15/4/2020
//  2     
//  3     
//  4     




// let myForm = document.getElementsByName('User_Froma');
    
//     myForm.addEventListener('submit', (ev) => {
//         ev.preventDefault()
//         var event_name1 = myForm.event_name.value;

//         myForm.Miodrag.value = event_name1;
        

// });