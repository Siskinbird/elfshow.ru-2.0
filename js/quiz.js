let questForm = $('#quest-form');
let option1 = document.getElementById('option1');
let option2 = document.getElementById('option2');
let option3 = document.getElementById('option3');
let option4 = document.getElementById('option4');
let message = document.getElementById('message');

document.getElementById('test-btn').addEventListener('click', (event) => {
    event.preventDefault();
})

let values = []

function disableTextarea() {
    message.disabled = true;
    document.getElementById("message").readonly = true;
  }

option4.addEventListener('click', () => {
        message.disabled = false;
        message.focus();
})

const saveValue = () => {
    let options = document.getElementsByName('option');
    for(let i = 0; i < options.length; i++) {    
        if(options[i].checked) {
        switch (i) {
            case 0:
            values.push(options[i].checked);
            break;

            case 1:
            values.push(options[i].value);
            break;

            case 2:
            values.push(options[i].value);
            break;

            case 3:
            values.push(message.value);
            break;  
        } 
    }
    }
    console.log(values)
    return values;
}
