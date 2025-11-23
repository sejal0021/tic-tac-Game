let gameover = new Audio("gameover.mp3");
let turn = "X";
let gameOver = false

const changeTurn = () => {
    return turn === "X"? "0": "X"
}

const checkWin = () => {

    let cardtext = document.getElementsByClassName("card-text");
    let wins =[
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6],

    ]
    wins.forEach( e => {
        if((cardtext[e[0]].innerText === cardtext[e[1]].innerText) && (cardtext[e[1]].innerText === cardtext[e[2]].innerText) && (cardtext[e[0]].innerText !== '' )  )
        {
            gameOver = true;
            let t = document.querySelector(".info");
            t.style.backgroundColor ='#D3482A'
            
            document.querySelector(".info").innerText = cardtext[e[0]].innerText + ' WON '

            document.querySelector('.imge').getElementsByTagName('img')[0].style.width = '100px';
        }
    })
    
}

let boxes = document.getElementsByClassName("card");
Array.from(boxes).forEach(element =>{
    let boxtext = element.querySelector('.card-text');
    element.addEventListener('click', ()=>{
        if(boxtext.innerText === ''){
            
            if(turn === 'X')
                boxtext.style.color = 'red';   
            else     
                boxtext.style.color = 'cyan';       
            
            
                boxtext.innerText = turn;
            turn = changeTurn();            
            checkWin(); 
            if(!gameOver){                
                document.getElementsByClassName("info")[0].innerText  = turn  + "'s turn";
            }          
                
        }
    })
})

reset.addEventListener('click', ()=>{
    let cardtexts = document.querySelectorAll('.card-text');
    Array.from(cardtexts).forEach(element => {
        element.innerText = "";
    });
    turn = "X";
    gameOver = false;
    if(!gameOver){                
        document.getElementsByClassName("info")[0].innerText  = turn  + "'s turn";
    }  
    document.querySelector('.imge').getElementsByTagName('img')[0].style.width = '0px';

    let t = document.querySelector(".info");
    t.style.backgroundColor ='rgb(63, 63, 95)'

})