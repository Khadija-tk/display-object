// 1  creation of an object
const one = {
    name : "Ayesha",
    age : 22,
    skinColor :"Honey Brown"
};
//display of an object
document.getElementById("one").innerHTML = one;
//..............

// 2  create an object
const two = {
    name: "Ayesha",
    age : 22,
    liveIn : "Samundri"
}
//displaying properties
document.getElementById('two').innerHTML = two.name +", "+ two.age+", "+two.liveIn+"."
//...............

// 3  creation of an object
const three = {
    name : "Ayesha",
    age : 22,
    liveIn : " Samundri"
}
//Build a Text
let text = "";
for (let x in three) {
    text += three [x] + " ";
};
//display of text
document.getElementById('three').innerHTML = text;

//3.1
const three1 = {
    name : "Ayesha",
    age : 22,
    color : "Honey Brown"
}
//text
let text1 = " ";
for ( let x in three1){
    text1 += three1 [x] + " ";
}
//display of text
document.getElementById('three1').innerHTML = text1;
// 3.2
const three2 = {
    name : "Nimra",
    age : 22,
    skinColor: " Ivory"
}
//text
let text2 = " ";
for( let x in three2){
    text2 += three2 [x] +" ";
}
//display
document.getElementById('three2').innerHTML = text2
// 3.3 
const three3 = {
    name: "Nimra",
    age: 19,
    eyeColor : "Brown"
}
//text
let text3 = " ";
for (let x in three3){
    text3 += three3 [x] +" ";
}
//display
document.getElementById('three3').innerHTML = text3;
//.........
// 4 ARRAY creation
const five = {
    name : "Nimra",
    age : 23,
    color : "Ivory"
}
//array creation
const myArray = Object.values(five);//ahhhhh dont put 'five' in strings its hell
//display of array
document.getElementById("four").innerHTML = myArray;

