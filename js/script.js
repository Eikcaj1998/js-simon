console.log('JS OK')
/* Visualizzare in pagina 5 numeri casuali  diversi tra loro. 
Da lì parte un timer di 30 secondi.
Dopo 30 secondi l'utente deve inserire, uno alla volta, 
i numeri che ha visto precedentemente, tramite i prompt().
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e
 quali dei numeri da indovinare sono stati individuati. */
const display = document.getElementById('display');

let seconds = 3;
display.innerText= seconds;
const countDown = setInterval(function(){
  console.log(seconds);
display.innerText = --seconds;
  if (seconds === 0) {
    clearInterval(countDown)

   prompt('qual\'è il primo numero')
   prompt('qual\'è il secondo numero')
   prompt('qual\'è il terzo numero')
   prompt('qual\'è il quarto numero')
   prompt('qual\'è il quinto numero')
  }
}, 1000);
