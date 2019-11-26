console.log('Running 3MD.js');


const generators = document.getElementById('generator'); 
const cleaneris = document.getElementById('cleaner'); 
const start = document.getElementById('starts');
const stop = document.getElementById('stops');
const fizzs = document.getElementById('fizz');
const buzzs = document.getElementById('buzz'); 

const container = document.querySelector('#container');

generators.onclick = () => {
    const starts = parseInt(start.value);
    const stops = parseInt(stop.value);
    const fizz = parseInt(fizzs.value);
    const buzz = parseInt(buzzs.value);

   for (let i = starts; i <= stops; i++) {
    const miniDiv = document.createElement('div');
    miniDiv.id = "miniDiv"+i;
    if(i%fizz === 0  && i%buzz === 0) {
        miniDiv.innerText = i+"  FizzBuzz";
        miniDiv.classList.add("fizzbuzz");
    } else if (i%buzz === 0){
        miniDiv.innerText = i+"  Buzz";
        miniDiv.classList.add("buzz");
    } else if (i%fizz === 0 ) {
        miniDiv.innerText = i+"  Fizz";
        miniDiv.classList.add("fizz");
    } else {
        miniDiv.innerText = i;
        miniDiv.classList.add("regular");
    }
    container.appendChild(miniDiv);
} 
generators.disabled = true;
};
cleaneris.onclick = () => {
    let miniDiv = document.getElementById("container");
    while (miniDiv.firstChild) {
      miniDiv.removeChild(miniDiv.firstChild);
    }
    generators.disabled = false;
}