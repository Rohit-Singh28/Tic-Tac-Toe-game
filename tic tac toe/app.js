let boxes = document.querySelectorAll(".box");
let btn = document.querySelector("button");
let para = document.querySelector("p");
let outerbox =document.querySelector(".outerBox");

let turn = "x";
let game = true;


const chanceTurn = () => {

    if (turn === 'x') {
        turn = 'o';
    }
    else {
        turn = 'x';
    }
}

function winner(){
    let text = document.getElementsByClassName("textBox");
    console.log(text);
    let wins = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [2, 4, 6],[0,4,8]
    ]
    wins.forEach(e => {
        
        if (
            (text[e[0]].innerText === text[e[1]].innerText) &&
            (text[e[1]].innerText === text[e[2]].innerText) &&
            (text[e[0]].innerText !== '')
        ) {
            game = false ;
            if (turn === 'o') {
                para.innerText = (` X won & ${turn} loose`);
                outerbox.classList.add("win");

            }
            else {
                para.innerText = (` O won & ${turn} loose`);
                outerbox.classList.add("win");

            }
           
        }
    })
}


for (box of boxes) {
        let text = box.querySelector(".textBox");
        box.addEventListener("click", () => {
           
            if (text.innerText === "") {
                text.innerText = turn;
                chanceTurn();
                para.innerText = `${turn} chance`;

                winner();
            }
        })
}

btn.addEventListener("click" , () => {
    for(box of boxes){
        let text = box.querySelector(".textBox");
        text.innerText = "";
    }
    turn = 'x';
    para.innerText = `${turn} chance` ;
    outerbox.classList.remove("win");

})
