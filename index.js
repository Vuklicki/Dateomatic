const init = function () {

    document.getElementById('reset-button').addEventListener('click', reset);
    
    document.getElementById('submit-button').addEventListener('click', send);
}



// Resets the Form if the data filled in is not Accurate

////// ********* Issue to fix-->(program it so it can reset the data no matter
////// ********* if all the inputs are filled)

const reset = function(ev) {

    ev.preventDefault();


    document.getElementById('user-form').reset();
}

const send = function(ev) { 
    
    ev.preventDefault();
    
    ev.stopPropagation();

    let ret = validate();

    if (ret) {

        document.getElementById('user-form').submit();

    }else{

        let err = document.querySelector('.error');
        
        let input = err.querySelector('input');
        
        err.setAttribute('data-errormsg', ' ... Missing ${input.placeholder}');
    }
    
}


const validate = function(ev) {
    let valid = false;

    let event = document.getElementById('event-name');
    let location = document.getElementById('location');
    let starting_date = document.getElementById('start-date');
    let starting_time = document.getElementById('start-time');
    let time_zone = document.getElementById('time-zone');
    let ending_time = document.getElementById('end-time');
    let ending_date = document.getElementById('end-date');


    return true;
    

}