console.log('JS funziona')

const calculatorListElement = document.getElementById('calculator-list')

let number = 100;

for (let i = 0; i < number; i++) {
    let num = i + 1;

/*creo un 'li' */
    const liElementList = document.createElement('li')

/*do il valore a 'li' */
    /*liElementList.innerHTML = num;*/

/*aggiungo 'li' alla lista*/
    calculatorListElement.append(liElementList);
    
    
    let multipleOf3 = num % 3;
    let multipleOf5 = num % 5;
    let multipleOf15 = num % 15;

/* i multipli di 15 si chiameranno fizzbuzz*/
    if (multipleOf15 == 0) {
        num = 'fizzbuzz'
        liElementList.innerHTML = num;
        console.log('fizzbuzz')

/* i multipli di 5 si chiameranno buzz*/        
    } else if (multipleOf5 == 0) {
        num = 'buzz'
        liElementList.innerHTML = num;
        console.log('buzz')

/* i multipli di 3 si chiameranno fizz*/        
    } else if (multipleOf3 == 0) {
        num = 'fizz'
        liElementList.innerHTML = num;
        console.log('fizz')

/*gli altri numeri appariranno come numeri*/        
    } else {
        liElementList.innerHTML = num;
        console.log(num)
    }

    


}





































