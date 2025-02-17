let Fruite= ['Mango', 'Apple', 'Orange', 'Banana', 'Olive'];

for (let i=0; i<5; i++){
    console.log(Fruite[i]);
}

//for in loop

let person={
    name:'Nobita',
    age: 20,
    country: 'Bangladesh',
}
for(let i in person){
    console.log(person[i])
}

//even & odd

let numbers=[22,24,33,68,39,100];
for(let i=0; i<numbers.length; i++){

if(numbers[i]%2==0){
    console.log(numbers[i]+'=this is even numbers');

}
else{
    console.log(numbers[i]+'=this is odd numbers');
}
}

//positive & negative

let numbrs=[2,12,15,28,37,-100,-3,-56,-17];
for(let i=0; i<numbrs.length; i++){

    if(numbrs[i]>0){
        console.log(numbrs[i]+'=this is positive numbers');
    }
    else{
        console.log(numbrs[i]+'=this is negative numbers');
    }
}

//age

let age=[10,15,12,22,28,85,18];

for(let i=0; i<age.length; i++){
    if(age[i]>=18){
        console.log(age[i]+'=You are eligible to vote');
    }
    else{
        console.log(age[i]+='you are not eligible to vote');
    }
}

//leap year

let year= [2006, 2017, 2023, 2020, 2025];

for(let i=0; i<year.length; i++){
    if((year[i]%4==0 && year[i] % 100 !== 0) || (year[i] % 400 === 0)){
        console.log(year[i]+'= leap year');
    }
    else{
        console.log(year[i]+'= not a leap year');
    }
}
