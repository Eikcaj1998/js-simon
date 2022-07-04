console.log('JS OK')
/* Visualizzare in pagina 5 numeri casuali  diversi tra loro. 
Da lì parte un timer di 30 secondi.
Dopo 30 secondi l'utente deve inserire, uno alla volta, 
i numeri che ha visto precedentemente, tramite i prompt().
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e
 quali dei numeri da indovinare sono stati individuati. */

const display = document.getElementById('display');
let seconds = 3;
const totalNumber = 5;
const questNumber = document.getElementById('quest-number')
const maxNumber = 100 ;
display.innerText = seconds;
let userInputNumbers = [];
let userNumber;
//genero numeri casuali
function generateNumber(totalNumber, maxNumber){
    const numbers=[]
    while (numbers.length < totalNumber){
        let randomNumber;
        do{
            randomNumber= Math.floor(Math.random() * maxNumber)+1;
        }while(numbers.includes(randomNumber))
        numbers.push(randomNumber)
    }
    return numbers
}
const numbers = generateNumber(totalNumber , maxNumber);
console.log(numbers)
    for(let i = 1 ; i <= maxNumber ; i++){
        questNumber.innerText = numbers;
    }
//metto un countdown
const countDown = setInterval(function(){
  console.log(seconds);
display.innerText = --seconds;
  if (seconds === 0) {
      questNumber.classList.add("d-none")
      clearInterval(countDown)
    }
}, 1000);
//chiedo all'utendte i numeri
setTimeout(function(){
    for (let i = 0; i < totalNumber; i++) {
            userNumber = prompt('scrivi i numeri che ricordi')
            console.log(userNumber)
            //metto una validazione
            /* while (userInputNumbers.includes(userNumber)) {
                alert("Hai già inserito questo numero!");
                userNumber = parseInt(prompt("scrivi i numeri che ricordi"));
            }
            while (isNaN(userNumber)) {
                alert("Devi inserire un numero...");
                userNumber = parseInt(prompt("scrivi i numeri che ricordi"));
            }  */
            //Array numeri inseriti dall'utente
             userInputNumbers.push(userNumber);    
             if(numbers === userNumber){
                 alert('hai indovinato corretamente tutti i numeri')
                 questNumber.classList.remove("d-none")
             }else{
                 alert('hai sbagliato i numeri ritenta')
                 questNumber.classList.remove("d-none")
             }
    }
},3001)
