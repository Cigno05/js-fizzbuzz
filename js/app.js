console.log('JS funziona')

/* stampa in consoloe i numeri da 1 a 100*/
let number = 100;

for (let i = 0; i < number; i++) {
    let num = i + 1;
    console.log(num)
}
console.log('fine stampa da 1 a 100')

/*i multipli di 3 stampi 'fizz' al posto del numero*/
for (let i = 0; i < number; i++) {
    let num = i + 1;
    let multipleOf3 = num % 3;
    if(multipleOf3 == 0) {
        console.log(num)
    }
}
console.log('fine stampa multipli di 3')


/*i multipli di 5 stampi 'buzz' al posto del numero*/
for (let i = 0; i < number; i++) {
    let num = i + 1;
    let multipleOf5 = num % 5;
    if(multipleOf5 == 0) {
        console.log(num)
    }
}
console.log('fine stampa multipli di 5')



/*i multipli di 3 e 5 stampi 'fizzbuzz' al posto del numero*/

for (let i = 0; i < number; i++) {
    let num = i + 1;
    let multipleOf3And5 = (num % 3 + num % 5);
    if(multipleOf3And5 == 0) {
        console.log(num)
    }
}
console.log('fine stampa multipli di 3 e 5')



































