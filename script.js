//console.log('Vip');
document.getElementsByTagName('body')[0].style.background = 'red';

var button3 = document.getElementsByClassName('btn')[2];
var button4 = document.getElementsByClassName('btn')[3];

button4.addEventListener('click', lightIsOn);

function lightIsOn() {
    alert('Light is On');
}


button3.addEventListener('click', fanIsMoving);

function fanIsMoving() {
    alert('Fan is Moving!');
}


var x = 3;
x = 5

function paras() {
    var x = 4;

    return x;

}

function paraskamboj() {
    return x;
}


document.getElementById('demo').innerHTML = paras();
document.getElementById('demo1').innerHTML = paraskamboj();

 const y = 12;

console.log(y);

const z = 14; // number
const a = 12.3; //number
const name = 'Paras'; //string

const b = null; //

const c = true; //boolean
const d = false; //boolean
const e = undefined; //undefined
let f; //undefined

const chasMaa = 'chasmaa';
console.log('chasmaa');
console.log(chasMaa);


console.log('Type of z is' + ' ' + typeof z);
console.log(`Type of z is ${typeof z} and value of z is ${z}`);

document.getElementById('demo2').innerHTML = 'Type of z is' + ' ' + typeof z;
document.getElementById('demo3').innerHTML = `Type of z is ${typeof z} and value of z is ${z}`;

console.log(typeof f);

const firstNumber = 15;
const secondNumber = 30;
const totalOfNumbers = firstNumber + secondNumber;


const firstName = 'Paras ';
const lastName = 'Kamboj'
const fullName = firstName + lastName;

console.log(totalOfNumbers);

console.log(fullName);

const s = 'ParasKamboj';
console.log(s.length);

if(s.length == '11') {
    console.log('Length is 11');
} else {
    console.log('Lenght is not 11');
}

const day1 = 'Monday ';
const day2 = 'Tuesday ';
const day6 = 'Saturday';
const day7 = 'Sunday';

if(day1 == 'Monday') {
    console.log('Working day!');
} else if (day1 == 'Tuesday') {
    console.log('Tuesday');
} else if(day1 == 'Wednesday') {
    console.log('Today is Wednesday');
} else {
    console.log('Holiday');
}


if(day1 == 'Monday' || day2 == 'Tuesday') {
    console.log('Today is Working Day!');
} else {

    console.log('Today is Holiday!');
}

const sunnyDay = false;
const bothTeamsPresent = false;
if(sunnyDay && bothTeamsPresent) {
    console.log('Match is on');
} else {
    console.log('Match canceled!!!');
}

const corona = false;

if(!corona) {
    console.log('Office is open');
} else {
    console.log('Office Closed!');
}

const myName = 'Paras Kamboj'
console.log(myName.toUpperCase());
console.log(myName.toLowerCase());
console.log(myName.substring(0, 5).toUpperCase());
console.log(myName.substring(6, 12).toLowerCase());

document.getElementById('demo15').innerHTML = 'demo15 ' + myName;
document.getElementById('demo14').innerHTML = 'demo14 ' + myName.toUpperCase() + ' ' + myName.toLowerCase();

document.getElementById('demo13').innerHTML = myName.substring(6, 12).toLowerCase();

const unnumberedList = document.getElementById('unnumbered-list');
unnumberedList.style.background = 'green';

unnumberedList.getElementsByTagName('li')[0].style.background = 'blue';
unnumberedList.getElementsByTagName('li')[3].style.background = 'royalblue'

/*
function changeColorOfSecondListItem() {
    //some code....
}
*/

const changeColorOfSecondListItem = function() {
    
    const unnumberedList = document.getElementById('unnumbered-list');
    const secondListItem = unnumberedList.getElementsByTagName('li')[1];
    secondListItem.style.background = 'pink'; 
//alert('color changed');
}