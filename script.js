// function showMessage(){
//     alert('hello everyone!');
// }
// showMessage();
// showMessage();


//  LOCAL VAIABLE 

// function showMessage(){
//     let message = "hello, I'm javascript!";
//     alert(message);
// }
// showMessage();
// alert(message);

//OUTER VARIABLE//

// let userName = 'john';

// function showMessage(){
//     let message = 'Hello,' + userName;
//     alert(message);
// }
// showMessage();


// let userName = 'john';

// function showMessage(){
//     userName = "bob";
//     let message = 'hello' + userName;
//     alert(message);
// }
// alert(userName);
// showMessage();
// alert(userName);


// let userName = 'john';
// function showMessage(){
//     let message = 'hello,' + userName;
//     alert(message);
// }
// showMessage();
// alert(userName);


// function showMessage(count){
//     alert(count ?? "unknown");
// }
// showMessage(0);
// showMessage(null);
// showMessage();


// function sum(a, b){
//     return a+b;
// }
// let res = sum(1, 2);
// alert(res);


// function checkAge(age){
//     if(age >= 18){
//         return true;
//     }else{
//         return confirm('do you have permission from your parents');
//     }
// }
// let age = prompt('how old are you?', 18);


// if(checkAge(age)){
//     alert('access granted');
// }else{
//     alert('access denied');
// }

// function showPrimes(n){
//     nextPrime: for(let i=2; i<n; i++){
//         for(let j=2; j<i; j++){
//             if(i%j == 0) continue nextPrime;
//         }
//         alert(i);
//     }
// }

// var student = "Nitin";
// console.log(student);
// console.log(window.student);

//execution content
// let student = "Nimisha";

// function getName() {
//     //let student = "Nimisha";  
//     const student = "0";
//     function getNumber() {
//         let student = "sneha"
//         //var student = "sneha";
//         console.log(student);
//     }
//     //console.log(student);
//     getNumber();
// }
// getName();

// for(let i=0; i<10; i++){
//     console.log(i);
// }

//  assignment operator

// let x=1;

// comparision operator//

// == compares values
// === compares values as well as datatype

// (10>5)? console.log("true"): console.log("false");

//logical operator
//&&, ||
//5>2 && 3>1 && 6<5
// (5>10) && console.log("yes")


// console.log(student);
// let student = "Nilesh";
// console.log(student);


// function getName() {
//     //let student = "Nimisha";  
//     //const student = "0";
//     function getNumber() {
//         //let student = "sneha"
//         var student = "sneha";
//         //console.log(student);
//     }
//     //console.log(student);
//     getNumber();
// }



// //console.log(student);
// getName();

// function sayHi(){
//     alert("Hello");
// }

// let sayHi = function(){
//     alert("Hello");
// };

// function sayHi(){
//     alert("Hello");
// }
// alert(sayHi);

// function sayHi(){
//     alert("Hello");
// }
// let func = sayHi;
// func();
// sayHi();

// function ask(question, yes, no){
//     if(confirm(question)) yes() 
//     else no();
// }
// function showOk(){
//     alert("you agreed.");
// }
// function showCancel(){
//     alert("you canceled the execution.");
// }
// ask("do you agree?", showOk, showCancel);

// var student = "shivani";
// (function(){
//     console.log(student)
//      student = "nilesh";
//     console.log(student)
// }())

// var student = "nilesh";
// function getAnswer(){
//     console.log(student)
//     let student = "shivani";
//     console.log(student)
// }
// getAnswer();

// var car1 = "Tesla";
// (function(){
//     car3 = "volvo";
//     console.log(car3);
//     var car2 = "Creta";
//     car2 = "audi";
//     console.log(car1);
// }())
// console.log(car2);
// // console.log(car3);
// var car1 = "bmw"

// ========================================DOM(Document object manipulation) manipulaation=====================================================

// select any Element   // function predefined
// add any new Element
// edit any Element
// delete any element

// document.title = "rajesh website"

// document.getElementById
// document.getElementsByClassName
// document.getElementsByTagName
// document.querySelector
// document.querySelectorAll

//document.getElementById('main-header').style.color = "red"
//Header.style.color = "red"

// let x1 = {}
// console.log(x1);

// let x = new Object()
// console.log(x);

// let student = {
//     name: "aviral",
//     age: 18,
//     getName: function(){
//         console.log("aviral")
//     }
// }

// console,log(student.name)
// console.log(student.age)
// student.getName()

// //spread syntax
// let newObject = {...obj1, ...obj2}
// console.log(newObject)

// const team = "India"
// team = "England"

// const worldCup = {
//     mtches: 41,
//     venue:"Austrelia"
// }

// worldCup.mtches = 45;
// worldCup = {
//     matches: 0,
//     venue: "SA"
// }

///////arrrrayyyys

// let obj ={
//     name: "raj",
//     age: 56
// }
// delete Object.name;
// console.log(obj);
// // console.log(obj.age);
// // console.log(Object.keys(obj).length)

// let arr = [1,2,3,"hjh", false];
// console.log(arr);

// arr[0] = "akash";
// console.log(arr);

// arr.push("rajesh")
// console.log(arr)

// arr.pop("rajesh")
// console.log(arr)

// delete arr[4];
// console.log(arr[4]);
// console.log(arr.length);

//splice --- can do everything. insert, remove, or replace
//slice ---- return array of remove element

// var fruits = ["apple", "banana", "grapes"]
// fruits.splice(1,1,"papaya", "orange")
// // fruits.splice(-1,1);
// console.log(fruits);

// var a = [1,2,3,4,5];
// a.slice(0,3);

// var a = [];
// a.unshift(1);
// a.unshift(22);
// a.shift();
// a.unshift(3,[4,5]);
// a.shift();
// a.shift();
// a.shift();

// var data = ["A","B","C","D"];
// data.unshift("X");
// data.push("Y");
// console.log(data)

// var val1 = [1,2,3];
// var val2 = [6,7,8];
// var result = val1.concat(val2);
// console.log(result);

// const arr = [1,4,8,6,2,6,3,8,9];
// console.log(arr.includes(3));
// console.log(arr.indexOf(8));
// console.log(arr.lastIndexOf(8));

// var sum = 0;
// var arr = [10, 15, 20, 30];
// arr.forEach(function myFunction(element) {
//     sum = sum + element;
// });
// console.log(sum);

///Splice////

// var arr = [1,52,76,89];
// var result2 = arr.splice(0,2);
// console.log(result2);

// var arr = ["india", "england", "austrelia","pakistan","netherland"];
// var res = arr.splice(3,0,"pakistan","netherland");
// console.log(res);

// for(var x=1; x<5; x++)
// console.log(x);

// let x =20;
// x *=3;
// document.getElementById('res').innerHTML = x;

// (function(){
//         var a =b=3;
// })();
// console.log("a defined?" + (typeof a !=='undefined'));
// console.log("b defined?" + (typeof b !=='undefined'));

// var data = ["A", "B","C","D"];
// data.unshift("X");
// data.push("Y");


// function reverse(s){
//         let s1 = "";
//         for(let i=s.length-1; i>=0; i--){
//                 s1 = s1+s1[i];
//         }
//         console.log(s1);
// }
// reverse("Tauseef");


// function checkAnagram(s1, s2) {
//         // if(s1.length !== s2.length) return false
//         if (s1.split("").sort().join("") === s2.split("").sort().join("")) {
//                 console.log("Anagram")
//         }
//         else {
//                 console.log("not it anagram")
//         }
// }
// checkAnagram("dig", "igdqwertyuio");
// checkAnagram("act", "tac")
// checkAnagram("actor", "tractor")

//         //flaaten an array
// let arr = [1,2,3, [4,5], [8,9], 10,11]
// console.log(arr.flat());
//result[1,2,3,4,5,8,9,10,11]


////////////INTERVIEW QUESTION////////

// let arr1 = ["A", "B", "C","D"]
// let result = arr1.map(function(elem){
//         return elem + "X"
// })
// console.log(result)
// console.log(arr1)

// let arr2 = ["A", "B", "C","D"]
// let result2 = arr2.forEach(function(elem){
//         return elem + "X"
// })
// console.log(result2)
// console.log(arr2)

// for(let alpha in arr2){
//         console.log(alpha)
// }

// for(let alpha of arr2){
//         console.log(alpha)
// }

// var arr3 = ["A", "B", "C", "D"]
// arr3.name = "aviral"
// console.log(arr3)

// let obj = {}
// obj.name = "aviral"
// obj.age = 80

// console.log(obj);

// var arr2 = ["A", "D", "C", "Z"]
// // arr2[3]= "X"
// arr2.name = "aviral"
// arr2.age = 80
// arr2[10]= 100
// console.log(arr2)
// console.log(arr2.length)

//objects
// for(let alpha in arr2){
//         console.log(alpha)
// }
//         //Arrays
// for(let alpha of arr2){
//         console.log(alpha)
// }

//Anagrams ???? better way

// s1 = "madam"
// s2 = "daamm"

// function checkAnagrams(s1, s2) {
//         if (s1.length != s2.length) return false

//         let letterCount = {};

//         for (let letter of s1) {
//                 (letterCount[letter] === undefined) ? letterCount[letter] = 1 : letter
//         }

//         for (let letter of s2) {
//                 if (letterCount[letter] === undefined || letterCount[letter] < 1) {
//                         return false
//                 }
//                 letterCount[letter]--
//         }
//         return true
// }

// let letterCount
// console.log(checkAnagrams("madam", "daamm"));

// function sum(x, ...restOfTheValues){
//         console.log(restOfTheValues)
//         for(let value of restOfTheValues){
//                 console.log(value)
//         }
//         console.log(x);
// }
// sum(1,2,3,4,5,6,7,8,9)

//CLOSURES//

// function y(age){
//         console.log(age)
// }

// function x() {
//         let name = "aviral"
//         let age = 80;
//         let isInstructor = false;
//         function y() {
//                 function z() {
//                         console.log();
//                 }
//                 cconsole.dir(z)
//                 z()
//         }
//         y()
// }
// x()

// function x(){
//         return function y(){
//                 return 10
//         }
// }
// let result = x()();
// console.log(result)
// let newResult = result()
// console.log(newResult)

//currying//

// function  sum(x){
//         return function(y){
//                 console.log(x+y);
//         }
// }
// sum(10)
// sum(10)(20)
// sum(10)(20)(30)

//constructors//

// function createStudentFactory(name, age){
//         return {
//                 name: name,
//                 age: age
//         }
// }
// console.log(createStudentFactory("sarang", 23))
// console.log(createStudentFactory("raj", 25))

// let obj1 = {
//     name: "aviral"
// }
// function x(){
//     return this
//     function y(){
//         return this
//     }
//     y.call(obj1)
// }

// var newX = x.bind(obj1)
// console.log(x())

//      arrow function

// function getName(){
//     return "aviral"
// }
// console.log(getName())

// var getNameArrow = () => 5
// console.log(getNameArrow());

// ====================javascript Errors================================
// =====================Math Object===================

// ====================Date Object===========
// let date = new Date(0)
// console.log(date);

// let date = new Date(year,month,date,hour,minute,second,ms);

// let date = new Date(1992,1,1,09,20,20,0);
// console.log(date);

// let date = new Date(1992,0);
// console.log(date);

// let date1 = new Date(28*3600*1000);
// let date2 = new Date('1945-06-12');
// let date3 = new Date(1992,11);

// console.log(date2);
// console.log(date2.getFullYear());
// console.log(date2.getMonth());
// console.log(date2.getDate());
// console.log(date2.getHours());
// console.log(date2.getMinutes());
// console.log(date2.getSeconds());
// console.log(date2.getMilliseconds());

// let start = new Date();

// for(let i=0; i<10000; i++){
//     let x=0;
//     x = x+1;
// }
// let end = new Date();
// console.log(end - start);

//==================Async JavaScript===========

// console.log("1")
// setTimeout(() =>{
//     console.log("6")
// }, 5000)

// setTimeout(() =>{
//     console.log("5")
// }, 2000)

// function x(){
//     console.log("2");
//     console.log("3");
//     console.log("4");
// }
// x();

// console.log("1");

// setTimeout( () => {
// console.log("7");
// }, 0)
// setTimeout( () => {
//     console.log("6");
//     }, 0)

// function x(){
// console.log("2");
// console.log("3");
// console.log("4");
// }
// x()

let obj = {
    name: "avirl",
    age: 50,
    student: ["tauseef", "sameer", "nimisha"]
}
console.log(obj)

console.log(JSON.stringify(obj))
var backendValue = JSON.stringify(obj)

console.log(JSON.parse(backendValue))
