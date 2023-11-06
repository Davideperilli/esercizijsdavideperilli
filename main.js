
// esercizio 0
let number = 23
let stringa = 'ciao'
let niente = null
let falso = false
let non = NaN
console.log(stringa && number);

// esercizio 1
let a = 10 ;
let b = -2 ;
let c = 31 ;
let d = 22 ;
let e = 15 ;
let f = -6 ; 
let g = 7 ;
let tmax = Math.max(a,b,c,d,e,f,g);
let tmin = Math.min(a,b,c,d,e,f,g);
console.log(tmax)
console.log(tmin)

// esercizio 2
let voto = 25;
if (voto < 18) {

    console.log (`insufficiente`)

} else if(voto >= 18 && voto <=21) {

    console.log (`sufficiente`)

} else if(voto >= 22 && voto <=24) {

    console.log (`buono`)

} else if(voto >= 25 && voto <=27) {

    console.log (`distinto`) 

} else if(voto >= 28 && voto <=29) {

    console.log (`ottimo`)

} else if(voto = 30) {

    console.log (`eccellente`)

} 

let v = 22;
switch(true){
    case v >= 18:
    console.log(`insufficiente`);
     breack;

} switch(true){
    case v >=18 && v <=21:
    console.log(`sufficiente`);
     breack;

} switch(true){
    case v >=22 && v <=24:
    console.log(`buono`);
    breack;

} switch(true){
    case v >=25 && v <=27:
    console.log(`distinto`);
    breack;
} switch(true){
    case v >=28 && v <=29:
    console.log(`ottimo`);
    breack;
} switch(true){
    case v =30:
    console.log(`eccellente`);
    breack;
}


//esercizio3
let i = 2;
 for (i=2; i<=20; i++){

    if (i % 2 == 0){

        console.log(i)

    }

}


// esercizio4

let giocatore1 = `davide`;
let giocatore2 = `filippo`;
let tiri = 3 

let tirigiocatore1 = (Math.floor(Math.random() * (6 - 1 + 1)+1))+(Math.floor(Math.random()*(6 - 1 + 1)))+(Math.floor(Math.random() * (6 - 1 + 1)+1))

 console.log(tirigiocatore1);

let tirigiocatore2 = (Math.floor(Math.random() * (6 - 1 + 1)+1))+(Math.floor(Math.random()*(6 - 1 + 1)))+(Math.floor(Math.random() * (6 - 1 + 1)+1)) 

console.log(tirigiocatore2);
if(tirigiocatore1 < tirigioatore2){
    console.log(`${giocatore1} hai perso`)
}else{
    console.log(`${giocatore2} hai vinto`)
}