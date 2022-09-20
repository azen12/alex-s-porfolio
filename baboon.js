let button = document.getElementById('testing');
let fname = document.getElementById('fname');
let lname = document.getElementById('lname');
let feedback = document.getElementById('feedback');
let forms = document.getElementById('forms');
let numberInput = document.getElementById('numbers');

button.addEventListener('click', unblocker);
forms.addEventListener('submit', onSubmit);

function onSubmit(event) {
    event.preventDefault();
    console.log(fname.value);
    console.log(lname.value);
    console.log(feedback.value);
    random();
};

function unblocker() {
    document.getElementById('closed').style.display = 'block';
};

function random() {
    let randoms = Math.floor(Math.random() * (numberInput.value) + 1);
    console.log(randoms);
};



