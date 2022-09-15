let button = document.getElementById('testing');




function unblocker() {
    document.getElementById('closed').style.display = 'block';
};


button.addEventListener('click', unblocker);


function random(number) {
    return Math.floor(Math.random() * (number+1));
  };