//loops practice

// const items=["hairpins","pony","catcher","hairband"];
// for(let i=0;i<=4;i++){
//    alert("these are items"+""+items)
// }
//flags

// let cleanestCities=["Cheyenne", "Santa Fe", "Tucson", "Great Falls", "Honolulu"]
// let cityToCheck="new york";
//  let matchFound="no"
// for( let i=0;i<=4;i++){
//     if(cityToCheck===cleanestCities[i]){
//         matchFound="yes";
//         alert("it is one of the cleanest cities");
//      break;
//     }

//  else if(matchFound==="no"){
//     alert("it is not on the list");
//     break;
// }
// }


// for( let i=0;i>=5;i++){
//     if(cityToCheck===cleanestCities[i]){
//         matchFound=true;
//         alert("it is one of the cleanest cities");
//      break;
//     }}
// if(matchFound===false){
//         alert("it is not on the list");
     
//     }
// let cleanestCities=["Cheyenne", "Santa Fe", "Tucson", "Great Falls", "Honolulu"]
// let cityToCheck="new york";
//  let matchFound=false
//  for( leti=0;i<cleanestCities.length;i++){
//     if (cityToCheck===cleanestCities[i]) {
//         matchFound=true;
//         alert("it is one of the cleanest cities");
//     }
//     if(matchFound===false){
//                alert("it is not on the list");
             
//             }

//  }
//pattrens
//1
//1,2
//1,2,3
//1,2,3,,4
//1,2,3,4,5
// for(let a=1;a<=5;a++){
//     for(let b=1;b<=a;b++){
//         document.write(b+"")
//     }
//     document.write("<br>")

// }
// for(let a=5;a>=1;a--){
//     for(let b=a;b>=1;b--){
//         document.write(b+"")
//     }
//     document.write("<br>")

// }

//
// let intro="Aisha";
// for(let i=0;i<intro.length;i++){
//     console.log(intro[i]);
// }
// let num1=5;
// let num2=3;
// console.log("sum of num1 & sum of num2:"+""+(num1+num2));
// console.log("multiplyby 2:"+""+((num1+num2)*2))

// let length="10"
// let width="5"
// console.log("lxb is:"+(length*width))
// //
// let a=5
// let b=10
// let c=++a*b--;
// console.log(a)
// console.log(b)
// console.log(c)


//Assignment
    // //Q1
    // let fruits=["apple","banana","peach","orange","strawberry"];
    // document.write("element at index 0 is "+"" + fruits[0])
    // document.write(" <br>element at index 0 is  "+ "" +fruits[1])
    // document.write(" <br>element at index 0 is  "+ "" +fruits[2])
    // document.write(" <br> element at index 0 is  "+ "" +fruits[3])
    // document.write(" <br> element at index 0 is  "+ "" +fruits[4])
 //     Q2
 //parta
//  document.write("<h2>COUNTING</h2>");
//  for(let i=0;i<=15;i++){
//     document.write(i+""+ ",")
//  }
//partb
// document.write("<h2> REVERSE COUNTING </h2>");
// for(let i=15;i>=0;i--){
//     document.write(i+""+",")
// }
// part c
// document.write("<h2> even conting </h2>")
// for(let i=0;i<=20;i+=2){
//     document.write(i+""+",")
// }
//part d
// document.write("<h2> odd conting </h2>")
// for(let i=1;i<=20;i+=2){
//     document.write(i+""+",")
// }
//part e
// document.write("<h2> series conting </h2>")
// for(let i=2;i<=20;i+=2){
//     document.write(i+"k"+""+",")
// }
// //  Q3
// let things=["cake","donuts","chips","nimco","paties"];
// let userInput=prompt("   WELCOME! to ABC bakery,What you want  to order sir/mam");
// let found=things.includes(userInput);
// if(found){
//     document.write(userInput+ "" +"is available in our bakery")
// }
// else{
//     document.write("sorry"+userInput+"is not avialable in our bakery")
// }