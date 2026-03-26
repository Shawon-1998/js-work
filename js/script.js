
// class pract start..........

// let age = 20;
// let nationality = true;
// let district = "Barishal";

// if (age > 18) {
//   if (nationality == false) {
//     if ("Barishal" == false) {
//       console.log("Congrats")
//     } else {
//       console.log("shit")
//     }
//   } else {
//     console.log("Better luck next time")
//   }
// } else {
//   console.log("No you are not")
// }





// class hw start...........


// let number = document.getElementById("yo").innerHTML =prompt("Enter your number") ;

// // let number = prompt("Enter your number")
// if (number > 100) {
//   window.alert(" 404 Error ")
// } else if (number > 90){
//   document.write("Your grade S+")
// } else if (number >= 80) {
//  document.write("Your grade is A+")
// } else if (number >= 70) {
//   document.write("Your grade is A")
// } else if (number >= 60) {
//   document.write("Your grade is A-")
// } else if (number >= 50) {
//   document.write("Your grade is B-")
// } else if (number >= 40) {
//  document.write("Your grade is D")
// } else if (number > 32) {
//  document.write("Your grade is pass")
// } else {
//  document.write("You are fail")
// }





//  innerhtml start..........


// let = document.getElementById("yo")

// yo.innerHTML = "T-14"

// console.log("yo")





//  pract .........

// let price = 930;
// let discount = 0.13;
// let memberShip = true;
// let sum = price - (price * discount);

// if(memberShip == true){
//   console.log(sum)
// }else{
//   console.log(price)
// }





// ternary...............

// let price = 400;
// let memberShip = true;
// let discount = memberShip ? 0.21 : 0;
// let total = price - (price * discount)
// console.log(total)







// class 25 hw.........

// let number = prompt("Enter your number");

// if (number > 100) {
//  alert(" 404 Error ")
// } else if (number >= 90){
//  document.getElementById("yo").innerHTML= "Your grade S+"
// } else if (number >= 80) {
//  document.getElementById("yo").innerHTML="Your grade is A+"
// } else if (number >= 70) {
//  document.getElementById("yo").innerHTML="Your grade is A"
// } else if (number >= 60) {
//   document.getElementById("yo").innerHTML="Your grade is A-"
// } else if (number >= 50) {
//  document.getElementById("yo").innerHTML="Your grade is B-"
// } else if (number >= 40) {
// document.getElementById("yo").innerHTML="Your grade is D"
// } else if (number > 32) {
//  document.getElementById("yo").innerHTML="Your grade is pass"
// } else {
//  document.getElementById("yo").innerHTML="You are fail"
// }







// let number = prompt("Enter your number");
// let result = true;

// switch (true) {
//   case (number >= 90):
//     console.log("you got S+");
//     break;
//   case (number >= 80):
//     console.log("you got A+");
//     break;
//   case (number >= 70):
//     console.log("you got A");
//     break;
//   case (number >= 60):
//     console.log("you got A-");
//     break;
//   case (number >= 50):
//     console.log("you got B");
//     break;
//   case (number >= 40):
//     console.log("you got D");
//     break;
//   case (number >= 33):
//     console.log("you barely pass");
//     break;
//   default:
//     console.log("you are fail")
// }




// let num = (a,b) => a * b;
// console.log(result = num(5,9))



// let num = (a,b) => a * b;
// console.log(num(5,9)




// let myFunction = (a,b)=> {
//   return  a * b
// }
// console.log(myFunction(78,56))



// let myFunction = (a,b) => {
//   console.log(a*b)
// }
// myFunction(10,30)




// let myFunction = (...a) => 
//   console.log(a)

// myFunction(1,2,3)





// let damn = document.getElementById("demo");
// let yeppi = document.getElementById("yep");
// let Ryam = document.getElementById("image");

//  function handleClick() {

// yep.innerHTML= "Get the hell out of here.You skinny boy."
// demo.innerHTML= "Nice choice"
// demo.style.color="red"

//  }

//  damn.addEventListener("click",handleClick);
//  yeppi.addEventListener("click",handleClick)
//  Ryam.addEventListener("click",handleClick)







// const power = function(base, exponent) {
// let result = 1;
// for (let count = 0; count < exponent; count++) {
// result *= base;
// }
// return result;
// };
// console.log(power(2, 10));







// function greet (){
//   let message ="hello";
//   console.log(message);

// }
// greet()







// function test(){
// if (true){
//   var y= 20;
// }
// console.log(y)
// }
// test()








// let x = 10;
// if (true){
//   let y = 20;
//   var z = 30;
//   // console.log(x+y+z);
// }
// console.log(x+z)






// let myArr =["Shawon","Mahdi","rakib","gazzali","jisan","rabbi","fush"]

// // let newArr = myArr.splice(2,0,"myesha","vondo");
// // console.log(newArr)
// let [a,b,c,d,e,f,g,h]= myArr
// console.log(a,b,c,d,e,f,g,h)





// for (i = 1; i <= 20; i++) {

//   document.write(`Multipication Of : ${i + "<br>"}`);

//   for (j = 1; j <= 20; j++) {

//     //  console.log( i*j)

//     document.write(i + " * " + j + " = " + i * j + "<br>")

//     //  document.write(i + "X" + j + "=" + i*j)

//   }

// }


// let bulb = true;
// function handleClick() {

//   if(bulb == true){
//     // document.getElementById("bulb").src="https://cdn.pixabay.com/photo/2013/07/13/10/45/bulb-157717_640.png";

//     document.getElementById("bulb").src="https://cdn.pixabay.com/photo/2025/08/28/16/33/bulb-9802403_1280.png";

//     bulb = false
//   }
// else{
//     // document.getElementById("bulb").src="https://cdn.pixabay.com/photo/2013/07/13/10/45/bulb-157718_640.png";

//     document.getElementById("bulb").src="https://cdn.pixabay.com/photo/2025/08/28/16/33/bulb-9802401_1280.png";

//     bulb= true
//   }
// }

// // document.getElementById("btn").addEventListener("click",handleClick);

// btn.addEventListener("click",handleClick);




// let image = document.getElementById("bulb");
// function myFunc(){

//   if(image.src.match("bulb-9802403_1280")){
//     image.src ="https://cdn.pixabay.com/photo/2025/08/28/16/33/bulb-9802401_1280.png"
//   }
// else{
//   image.src= "https://cdn.pixabay.com/photo/2025/08/28/16/33/bulb-9802403_1280.png"
// }
// }

//  btn.addEventListener("click",myFunc);


// let bgg = document.querySelector(".one");
// let btn = document.getElementById("btn");

// function handleClick(){

//   btn.style.color="red"

// bgg.classList.toggle("two") 

// }




// let count = 0
// const handleClick=()=>{
//   count++
//   console.log(count)
// }

//  btn.addEventListener("click", handleClick);

// let dateToday = 'Friday';

// switch (dateToday) {
//   case 'wednesday':
//      console.log("Leiser time");
//     break;
//   case 'saturday':
//      console.log("No weekend");
//     break;
//   case 'sunday':
//      console.log(" weekend");
//     break;
//   case 'monday':
//      console.log("Pizza night");
//     break;
//   case 'tuesday':
//      console.log("Gaming night");
//     break;

//     default :
//     console.log("Nothing is match")
// }

// let numberId = 1;
// switch (numberId) {
//   case 1: console.log("let's move");
//   case 2: console.log("let's move there");
//   case 3: console.log("let's move here");
// }

// function getAccess(role) {
//   switch (role) {
//     case "admin":
//       return "Full access (create, edit, delete)";

//     case "editor":
//       return "Edit & view access";

//     case "viewer":
//       return "Only view access";

//     default:
//       return "No access";
//   }
// }

// console.log(getAccess("shawon"));

// let city ="Nepal"
// switch (city){
//   case "Natore":
//   case "Dhaka":
//   case "Rangpur":
//   case "Khulna":
//     console.log("All these are in Bangladesh")
//   case "KualaLampur":
//     console.log("It's in Srilanka")
//     default :
//     console.log("Not sure where the place is?")
// }

// let result=prompt("enter your grade")

// if (result >= 90){
//   console.log("You got A+")
// }
// else  if (result >= 80){
//   console.log("You got A-")
// }
// else if (result >= 70){
//   console.log("You got B+")
// }
// else{
//   console.log("fail")
// }

// let isLoggedIn =true ;
// let isAdmin = false;
// let message = isLoggedIn ?(!isAdmin ?"welcome Admin":"Welcome User")
// :"Please Login"
// console.log(message)

// if(isLoggedIn==true){

//   if(isAdmin==true){
//     console.log("welcome Admin")
//   }
//   else{
//     console.log("wecome user")
//   }
// }else{
//   console.log("Login fail")
// }

// let sum = 0;
// for (let i = 1; i <= 100; i++) {
//     if (i % 2 === 1) {
//       sum += i
//       console.log("sum", sum )
//     }
// }
// let language = "JavaScript"
// for(let i=0; i<language.length;i++){
//     console.log(language.charAt(i))
// }


const {about,myFunction} = require('../js/main')


about(12,13)
myFunction()