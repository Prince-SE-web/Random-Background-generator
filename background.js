//variables
let body = document.querySelector('body');
// body.style.backgroundColor="black";
let digits = ['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F'];
let bodyColor = document.getElementById('color');
let changeBtn = document.querySelector('#btn');
let heading = document.querySelector('#heading');
let Color = document.getElementById('color');
let para = document.querySelector('.para');

//Events
changeBtn.addEventListener('click',()=>{
    let color = randomColor();
    body.style.backgroundColor = color;
    heading.style.color = "white";
    Color.innerText = color;
    para.style.color = "white";
});


//functions
function randomNum(){
    return Math.floor(Math.random()*16);
}


function randomColor(){
    let color="#";
    for(let i=0;i<6;i++){
        color+=digits[randomNum()];
    }
    return color;
}
