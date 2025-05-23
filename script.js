// variables 1.declaration 2.assigning
// 3 keywords to declare variable 1.var 2.let 3.const
// var a=10;
//  var a=90; //this gives the latest value i.e a=90
// console.log(a);
// console.log("a"); //in this the var value changes from 10 to 90 

// let b=20;
// let b=4; //using let again will give an error
// console.log(b); //in this the var value changes from 20 to 4

// const c=80;
// c=800;
// console.log(c); //whereelse if you try to change the value of const it doesnt change unlike the the let and var because it is constant

// data types// 1.primitive and non primitive 
// let a;  //here my variable is undefined
// console.log(a);

// nonprimivite data type 1.object 2.array 3.function
//  objects
//  let obj={
//     name:"Alice",
//     age:23
//  };
//  console.log(obj);
 
//  array
// let arr = [1,2,3,4];
// console.log(arr);

// //function

// function add(){
//     console.log(2+1)
// }
// add();//calling the function is imp 

//operators 1.arthematic (+ - * % /)
// let a=10;
// let b=20;
// c=a*b;
// console.log(c);

// let c=10;
// let d=20;
// e=c+d;
// console.log(e);

// let a=10;
// let b=20;
// c=a-b;
// console.log(c);


// let a=10;
// let b=20;
// c=a%b;
// console.log(c);


// let a=3;
// let b=2;
// c=a**b; //this gives a to the power b
// console.log(c);

// let a=2;
// let b=3;
// c=++b; //it increment by b from 3 to 4
// console.log(c)

// let a=2;
// let b=3;
// b++; 
// console.log(b)

//assignment operator ( == += -+ *= %= /=)
// let a=12;
// a**=2;
// console.log(a);

//comparisional operator( == != >= <=  === !==) operator will return a boolean value
//=== check same data type and val
//!== any one of the statement should be true
// let a=2;
// let b="2";
// console.log(a!==b);

// let a=3;
// let b="3";
// console.log(a===b); //here we get false though the values are same but the data types are different where a is a integer and b is a string.
    
//logical operator ( && || !)

// let a=true && true;
// console.log(a); //it give true value

// let a=true || true;
// console.log(a)  //it give true 

// let a=!false;
// console.log(a); // it gives me the opposite state

//ternary operator
//variable name = (condition)?(true):(false);
let age=21;
let vote=(age>20)?"yes vote " : "Not eligible to vote";
console.log(vote);

//to check if the number is even or odd
let num=8;
let number=(num%2==0)?"Even":"Odd";
console.log(number);

//typeof
// let a=10;
// console.log(typeof a); //here it gives the type of variable being used

//control flow 1.loops 2.conditional statemet 3.jump state

//loop 1.for in ,for of,for,while,do while
// let a=10;
// while(a<=15){
//     console.log(a);
//     a++;
// }

//do while
// let a=10;
// do{
//     console.log(a);
//     a++;
// }while(a==12);

//for loop(declaration;condition;incr/decr)
// for(let i=0;i<=10;i++){
//     console.log(i);
// }

//for in loop 
// let obj={name:"ada",age:"20",eyes:"brown"};
// for(let keys in obj){
//     console.log(keys+":" +obj[keys]);
// }

//for of
// let arr=[1,2,3,4,5];
// for(let a of arr){
//     console.log(a);
// }

//jump break continue and return stmt
//break exist a loop or a case in switch
// for(let i=1;i<=5;i++){
//     if(i==3){
//         break;
//     }
//     console.log(i);
// }

//continue
for(let i=1;i<=5;i++){
    if(i==3){
        
    }
    console.log(i);
}