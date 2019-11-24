console.log('Running 3MD.js');

function main(){ 
const container = document.querySelector('#container');


   for (let i = 1; i <= 100; i++) {
    const miniDiv = document.createElement('div');
    miniDiv.id = "miniDiv"+i;
    if(i%3===0 && i%5===0) {
        miniDiv.innerText = i+"  FizzBuzz";
        miniDiv.classList.add("fizzbuzz");
    } else if (i%5===0){
        miniDiv.innerText = i+"  Buzz";
        miniDiv.classList.add("buzz");
    } else if (i%3===0 ) {
        miniDiv.innerText = i+"  Fizz";
        miniDiv.classList.add("fizz");
    } else {
        miniDiv.innerText = i;
        miniDiv.classList.add("regular");
    }
    container.appendChild(miniDiv);
}
}
main();