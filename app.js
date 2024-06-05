//class activity
//question n answer
//Q1
// let age=prompt("Enter your age");
// if(age>18){
//     console.log("you are eligible for the vote");
// }
// else if(age<18){
//     console.log("you are not eligible for the vote")
// };
//Q2
// let temperature=prompt("whats THE Temperature is?");
// if(temperature>25){
//     console.log("it is hot day")
// }
// else if(temperature<25){
//     console.log("it is normal day")
// };

//Q3
// let score=+prompt("Enter your score");
// if(score>=60){
//     console.log("you passed the test");
// }

// else {
//     console.log("you are failed")
// };

//Q4
// let raining=prompt("is it raining? type true or false");
// if(raining=="true"){
//     console.log("Remember to bring an umbrella.");
// }
// else if(raining!=="false"){
//     console.log("not bring umbrella")
// };

//Q5
// let age=prompt("Enter your age");
// if(age>18){
//     console.log("you  are adult");
// }
// else if (age ==60){
//     console.log("you are adult");

// }
// else {
//     console.log("you are minor")
// };

//Q6
// let number=prompt("Input a number");
// if(number>0){
//     console.log("It is positive");
// }
// else if(number<0){
//     console.log("IT is negative")
// }
// else{
//     console.log("It is  zero")
// }

// // Q4
// let raining=true
// if(raining==true){
//     console.log("remember to bring umbrella")
// }
// else{
//     console.log("enjoy the sunny weather")
// }

// //logical operators
// //& and
// //|| or
//! not
// let score=prompt("Enter your score")
// if(score>=80 || score<=60){//& ,||
//     console.log("you are passed");
// }
// else{
//     console.log("you are failed")
// };
// let itsraining=true
// if(!itsraining){
//     console.log("it is not raining enjoy the day")
// }
// else{
//     console.log("dont forget your umbrella")
// }
//
// let wieght=prompt("enter weight");
// let time=prompt("your time");
// let age=prompt("your age");
// let gender=prompt("male");
// // if(wieght>300 && time<6 ){
// //     alert("come to our tryout");
// // }
// // else{
// //     alert("come to ur cookout")
// // };


// if(wieght>300&& time<6&& age>17 && gender==="male"){
//     alert("come to our tryout");
// }
// else{
//     alert("come to our cookout")
// };

// if(!(wieght>300 || time<6 )){
//        alert("come to our tryout");
//     }
// else{
//     alert("come to ur cookout")
//     };
// nested statements
// let x=10;
// let y=5;
// if (x > 5) {
//     if (y > 2) {
//         console.log("Both x and y are greater than their respective thresholds.");
//     } else {
//         console.log("x is greater than 5, but y is not greater than 2.");
//     }
// } else {
//     console.log("x is not greater than 5, so the inner condition is not checked.");
// }

// let x=20;
// let y=20;
// let a=12;
// let b=8;
// let g=10;
// let h=g;
// if(x===y){
//     if(a===b){
//         g=h
//         console.log("both are correct")
//     }
//     else{
//         g!=h
//         console.log("x is equal to y but a is not equalto b")
//     }
// }
// else{

//     console.log("both are incorrect")
// }

// let temperature=15;
// let isSunny=true;
// if(temperature>25){
//     console.log("its hot outside")
//     if(isSunny){
//         console.log("dont forget to wear sunsscreen")
//     }
//     else{
//         console.log('you might still  want to wear sunscreen.')
//     }
// }
// else if(temperature >= 15 && temperature <= 25){
//     console.log("It's a pleasant day.");
//   if(isSunny){
//     console.log("Enjoy the sunshine!");
//   }
//   else{
//     console.log("Even if it's cloudy, it's still nice outside.");
// }
// }
// else{
//     console.log("It's a bit chilly.");
//     if (isSunny) {
//         console.log("Don't be fooled by the sun, it's still cool.");
//     } else {
//         console.log("It might be cloudy, so bring a jacket just in case.");
//     }
// }
// let word=45

//class activity

// //Q1
// let cityName=prompt("enter your city");
// if(cityName=="karachi"){
//     alert("Welcome to city of lights")
// }
// else{
//     alert("you are not in karachi!")
// }
// //Q2
// let gender=prompt("enter your gender");
// if(gender=="male"){
// document.write("Good morning Sir");}
// else if(gender=="female"){
//     document.write("Good mornig M'am")
// }
// //Q4
// let signalColor=prompt("enter color");
// if(signalColor=="red"){
//     alert("must stop")
// }
// else if(signalColor=="yellow"||signalColor=="green"){
//     alert("ready to move")
//     if(signalColor=="green"){
//         alert("move now")

//     }





// //chap=15
// //arrays :all data type can store 
// //collection of items
// // var city0 = "Atlanta"; var city1 = "Baltimore"; var city2 = "Chicago"; var city3 = "Denver"; var city4 = "Los Angeles"; var city5 = "Seattle";
// let cities=["atlanta","baltimore","chicago","denver","seattle","lo angeles"]
// console.log(cities[0].length);
// console.log(cities[1].length);
// let number=[1,2,4 ,7,8];
// console.log(number[6].length);//undefined


// let info=["aisha",45,"sawera","maria",49];
// // console.log


// // (info[3].length);

// let mixedArray=["tom",6,"hen",true]
// // console.log(mixedArray)
// console.log(mixedArray[2].length)

//arrays methods
//in round brackects
//console.log(cities.push("pakistan"))
// let cities=["atlanta","baltimore","chicago","denver","seattle","lo angeles"]
// // console.log(cities.push("nepal"));
// // // cities.pop("nepal")
// // console.log(cities)
// cities.push(12,67)
// console.log(cities)
// console.log(cities.toString());

//
//array method
//concat
// let myGirls=["hira","maria"];
// let myBoys=["ali","umer"]
// let myChild=myBoys.concat(myGirls);
// console.log(myBoys);
// console.log(myChild);

//unshift
// add the text at start
// let fruits=["apple","bannana","strawberry"]
// fruits.unshift("lemon","gauva")
// console.log(fruits)

//shift
// delete text at start
// let number=[12,23,8,45];
// console.log(number);
// console.log(number.shift())
//to donot show which value is deleted and print the array without it
// number.shift ()
// console.log(number)

//slice
//piece return of array
// let fruits=["peach","lemon","apple","mango","banana"]
// let piece_of_array=fruits.slice(0,-3)
// console.log(piece_of_array);

//splice
// add n remove in original array
// let fruits = ["peach", "lemon", "apple", "mango", "banana", "strawberry"];
// let name = fruits.splice(2, 2, "cherry");
// console.log(fruits)
// console.log(name)
//
// class work
// let companies=["bloomberg","microsoft","uber","google" ,"IBM","Netflix"]
// let company1=[companies.shift()]
// console.log(companies)
// console.log(company1)
// //
// let remove=[companies.splice(2,1,"ola")]
// console.log(companies)
// console.log(remove)
//
// let add=[companies.push("amazon")]
// console.log(companies)

//loops
// for(let i=0;i>20;i++){
//     document.write("hello world")
// }
// for(let i=14; i<141;i=i+14){
//     console.log(i)
// }
// for(let i=24;i<241;i=i+24){
//     console.log(i)
// }
// let cleanestCities=["Cheyenne", "Santa Fe", "Tucson", "Great Falls", "Honolulu"]
// 

//  for (let i = 0; i <= 4; i++)
//   {    if (cityToCheck === cleanestCities[3]) 
//     {    alert("It's one of the cleanest cities");    } 
//     else{
//         alert("IT IS not ONE OF THE CLEANEST CITY")
//     }
// //  }

// let monthsName=["jan","feb","march","april","may","june","july","august","sep","oct","nov","dec"]
// let monthToCheck="june";
// for(let i=0;i>=4;i++){
//     if(monthToCheck===monthsName[5]){
//         alert("Its my birthday month")
//     }
//     else if(monthToCheck===monthsName[2]){
//         alert("my birthday is not  month")
//     }
   
// }
//
// let qualification=["ssc","hsc","bcs","bs","bcom","ms","mphill","phd"]
// document.write("<h3> Qualification</h3>")
// document.write("<ol>");
// for(let i=0;i<=7;i++){
//     document.write("<li> <b>"+qualification[i]+" </b></li>")
// }
// document.write("</ol>")
//
// let qualification=["mango","peach","gauva","apple","melon","cherry","banana","orange"]
// document.write("<h3> Qualification</h3>")
// document.write("<ul>");
// for(let i=0;i<=7;i++){
//     document.write("<li> <b>"+qualification[i]+" </b></li>")
// }
// document.write("</ul>")
// let colorName=["red","black","green","blue","yellow"]
// document.write("original array is"+colorName);
// let color_to_add=prompt("enter the color of your choice")
// colorName.unshift(color_to_add)
// document.write(" <br> <br> updated array is"+colorName)

//
// let colorName=["red","black","green","blue","yellow"]
// document.write("original array is"+colorName);

// colorName.unshift("brown","pink")
// colorName.shift("brown")
// document.write(" <br> <br> updated array is"+colorName)
//
// let colorName=["red","black","green","blue","yellow"]
// document.write("original array is"+colorName);

// colorName.push("brown","purple")
//colorName.pop("purple")
// document.write(" <br> <br> updated array is"+colorName)
//
// let colorName=["red","black","green","blue","yellow"]
// document.write("original array is"+colorName);
// let index_to_add=prompt("at wich index color will be add")
// let color_to_add=prompt("enter the color of your choice")
// colorName.splice(index_to_add,0,color_to_add)
// document.write(" <br> <br> updated array is"+colorName)

// let colorName=["red","black","green","blue","yellow"]
// document.write("original array is"+colorName);
// let index_to_add=prompt("at wich index color will be  delete")

// colorName.splice(index_to_add,4,)
// document.write(" <br> <br> updated array is"+colorName)
//
// let scores=["320","230","430","120"]
// document.write("<h3>scores of student</h3>"+scores)
// scores.sort()
// document.write("<h3>ordered scores of student</h3>"+scores)
