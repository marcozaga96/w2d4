/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/

function area(l1,l2) {
    return l1*l2
}console.log("l'area del quadrato è:",area(3,5))

/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/

function crazySum(n1,n2) {
    return n1 + n2

}if (crazySum===30) {
    console.log("la somma dei numeri è:", crazySum(10, 20))

}else {
    console.log("la moltiplicazione è:", crazySum(10, 20)*(3))

}

/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

function crazyDiff(numero) {
    if (numero>19) {
        const differenzaAssoluta = Math.abs(numero - 19);
        return differenzaAssoluta * 3;
    } else {
        const differenzaAssoluta = Math.abs(numero - 19);
        return differenzaAssoluta;
    }
    
}
console.log(crazyDiff(2));

/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/

function boundary(n) {
    if (n>=20 && n <= 100) {
        risultato= "true";
        return risultato;
    } else if (n===400){
        risultato1= "true";
        return risultato1
    } else {
        risultato2= "false";
        return risultato2;
    }

} console.log(boundary(50))

/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

// function epify(stringa) {

//     if (stringa.starsWith("EPICODE")) {
//         return stringa;
//     } else {
//         return "EPICODE"+ stringa;
//     }
    
// }

// console.log("la stringa e", stringa)

/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

// function check3and7(numeroPositivo) {
//     if (numeroPositivo % 3 || 7) {
//         return numeroPositivo;
//     } else {
//         return undefined
//     }
// } console.log(numeroPositivo)

/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/

function reverseString(stringa) {
    const stringaSplit= stringa.split("");
    const reverseArray= stringaSplit.reverse();
    const joinArray= reverseArray.join("");
    return joinArray;
}
console.log(reverseString("epicode"))
    
/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
