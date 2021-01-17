

// let form is the object variable that stores DOM elements of the form
let form = {
    submit_button: document.getElementById('submit_button'),
    name: document.getElementById('event_name'),
    location: document.getElementById('location'),
    start_date: document.getElementById('start_date'),
    start_time: document.getElementById('start_time'),
    time_zone: document.getElementById('time_zone'),
    end_time: document.getElementById('end_time'),
    end_date: document.getElementById('end_date')
};

let display_table = {
    dom: document.getElementById('display'),
    numRows: 1
};

display_table.addRow = function(values) {
  
    let row = display_table.dom.insertRow(display_table.numRows);
    
    for (let i = 0; i < values.length; i++) {
        cell = row.insertCell(i);
        cell.innerHTML = values[i];
    }
    
    // push adds array of values to the array of rows
    // makes sure that the rows array is having the right length
    // so it adds rows pragmaticaly (pravilno)
    display_table.numRows++
    
}

// FUTURE TO ADD FUNCTIONALITY TO CHANGE THE ALREADY CREATED VALUE
// 


// function add2(x){
//     return x + 2
// }

// let add2 = (x) => x + 2;

// form.submit_button.addEventListener('click', (event) => display_table.addRow(event, 5));

form.submit_button.addEventListener(
    'click', 
    function(event) {
        event.preventDefault();
        display_table.addRow([
            form.name.value,
            form.location.value,
            form.start_date.value,
            form.start_time.value,
            form.time_zone.value,
            form.end_time.value,
            form.end_date.value
        ]);
    }
);

// display_table.addRow([1,2,3,4,5,6,7])
// figure out if QR code can store
// values[]
