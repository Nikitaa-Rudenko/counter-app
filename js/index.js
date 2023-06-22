let button__counter__add = document.querySelector('.button__counter__add');

let button__counter__reset = document.querySelector('.button__counter__reset');

button__counter__add.addEventListener("click", function(){

    let output = document.querySelector(".counter");

    let counter = Number(output.innerHTML) +1;

    output.innerHTML = counter;
});

button__counter__reset.addEventListener("click", function(){

    let output = document.querySelector(".counter");

    let counter = output.innerHTML = 0;
})

console.log(button__counter__add)
console.log(button__counter__reset)