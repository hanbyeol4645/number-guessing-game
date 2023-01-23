const machine_number = document.getElementById('generateField');
const guessField = document.querySelector('#guessField');
const playButton=document.querySelector('.guess_Fieid button')

function game(){   
    const machine= machine_number.value;
    const random = Math.floor(Math.random() * machine+1);
    const guess =guessField.value;
    
    const result= document.getElementById('winLose');
    
     if (random == guess) {
        result.innerHTML = 'You chose:'+guess+', the machine chose:'+random+'.'+'<br> You Win';
     }else {
        result.innerHTML = 'You chose:'+guess+', the machine chose:'+random+'.'+'<br> You Lose';
     }

}


playButton.addEventListener("click",game);


