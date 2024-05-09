function ciao() {       //creazione funzione senza return e senza parametri
console.log("ciao")
console.log("ciao sono marco")    
}

ciao()                        //ecco come richiamare la funzione e posso richiamarlo ogni volta che voglio
ciao()
ciao()
ciao()

                                   // dichiarare una funzione con un return
function sommaDiDUeNumeri() {
    const risultato= 5+6
    return risultato
}
const vediamo = sommaDiDUeNumeri()
console.log("il risultato è",vediamo)
console.log(sommaDiDUeNumeri())               
                                                           //due modi per stampare il risultato                   

function persone(name) {
    if (name) {
    console.log("ma ciao " + name)                              //esempio di funzione completa con aggiunta di condizione tramite if
} else{
    console.log("inserisci il nome")
}
}persone("riccardo")
persone("mario")
persone()
    
function somma(num1,num2) {
    // const result= num1+num2             questo dato non influisce sul risultato serve solo a spiegarmi meglio la cosa in fase di apprendimento
    // return result 
    return num1+num2
}
console.log("risultato", somma(2,7) )
console.log("risultato", somma(5,7))
console.log("risultato", somma(5,7)+somma(8,10))             //somma più un'altra somma




