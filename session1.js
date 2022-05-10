// global variables
var a = "test";
var b = 1;
const finalValue = 5;

if(b=1)
{
    console.log(b);
    let local = 'im local';
    console.log(local);
}

console.log(b);
console.log(local);

var counter = 0;
var whilecount = 5;

while(whilecount) {
    console.log(whilecount);
    whilecount--;
}

var list = ["name", "name2", "name3"];

list.push("name4");
list.pop();

for(let i in list) {
    console.log(list[i]);
}

var s1 = "first";
var s2 = "second";

if(s1 === s2) {
    console.log("true");
}

function sum(a, b) {
    return a + b;
}

console.log(sum(3,5));

var total = (a,b) => a+b;

console.log(total(2,3));

var jsonString = '["name":"grecia", "phone": "135435"]';

var jsonobj = JSON.parse(jsonString);

console.log(jsonobj);

for(let key in jsonobj) {
    console.log("value of key is " + key + " and value is " + jsonobj[key]);    
}
