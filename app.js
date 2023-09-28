var firstName = 'Taylor';
console.log(firstName);
const usStates = 50;
console.log(usStates);
let add = 5 + 4;
console.log(add);
// practicing addition!!
function sayHello(HelloWorld) {
    alert('HelloWorld');
};
sayHello();
function checkAge(name, age) {
    if (age < 21) {
        alert("Sorry " + name + " , you aren't old enough to view this page!");
    }
};
let output1 = checkAge("Charles", 21);
let output2 = checkAge("Abby", 27);
let output3 = checkAge("James", 18);
let output4 = checkAge("John", 17);
checkAge();
var veggies = ['carrot', 'bean', 'potato', 'squash']
for (var i = 0; i < veggies.length; i++) {
console.log(veggies[i]);
};
let pet={
    name:'teddy',
    breed:'doodle'
};
console.log(pet);
let nameAge =[ 
    {name:'Pam', age: '40'},
    {name: 'Bob', age: '20'},
    {name: 'Mac', age:'22'},
    {name: 'Devin', age:'34'},
    {name:'Maddie', age: '19'}
];
for (let i=0; i < nameAge.length; i++){
    checkAge(nameAge[i].name, nameAge[i].age);
};
function getLength(word){
    return word.legth;
}
let wordLength = getLength('helloworld');
if (wordLength % 2 == 0){
    console.log('this world is nice and even!');
}   else{
    console.log('this world is an odd place!');
};