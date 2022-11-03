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

                //OUTER VARIABLE

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