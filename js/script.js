console.log('JS OK')
/* Visualizzare in pagina 5 numeri casuali  diversi tra loro. Da lì parte un timer di 30 secondi.
Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite i prompt().
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati. */
let display = document.getElementById('countdown');


let countDown = 10;
display = setInterval(function(){
  console.log(countDown);
countDown--;
  if (countDown === 0) {
    clearInterval(display)
    alert('tempo scaduto')
  }
}, 1000);