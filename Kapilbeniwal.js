console.log("Greatefull to be in Bexcard ");

                        // COMMENTS
// 1. In-line comment

/* 2. this is
multi-line
comment
*/

//----------------------------------------------------------------------------------------------

                        // DATA TYPES AND VARIABLES

//let , var , const
// var =  A variable declared with var can be reassigned and updated.
// let =  A variable declared with let can be reassigned but not redeclared 
// const = A variable declared with const cannot be reassigned or redeclared.



var k ; //declaring
k = 10 ; // assigning or initializing
k++; //increment by 1
console.log(k);

//  We can re-assign the value of var :
var c=34;
c=65; // redeclared 
var c="fndkj"; //reassigned
console.log(c);

var a = "kapilbeniwal";
a=5;
a=166316431645.354511552211;
console.log(a);

//----------------------------------------

const b = 5; // finAL(constant) like java

//----------------------------------------

let i = 1; // global scope
// let i = 5 ; //This will throw an error as -> variable with let not redeclared 
i='kapil beniwal '+3;
console.log(i);  // op=1

let x  = 5.5;
x /=3;
console.log(x);

        //Primitive data types
    let name = 'kapil';  //op -> string
    let checked = true;  //op -> boolean
    let no = 23;  //op -> number
    let xy = undefined; //op -> Undefined
    let zy = null; // op -> object
    console.log(xy,zy);
console.log("//----------------------------------------");
    console.log(typeof name);
    console.log(typeof checked);
    console.log(typeof no);
    console.log(typeof xy);
    console.log(typeof zy);
console.log("//----------------------------------------");


//----------------------------------------


        // When adding a number and a string, JavaScript will treat the number as a string.
let r = "Hello" + 16;
console.log(r);

let o = 16 + "Bexcard";
console.log(o);

//----------------------------------------

                    //STIRNG LITERALS
console.log("hello I am trying to put \"doube cots\" inside the \"double cots\" ");
console.log(' "Hello" ');
console.log(" 'Bexcard' ");
console.log(` " 'JavaScript' " `);
console.log("First Line\n\t Second Line\nThird line");

//----------------------------------------

var myString = "Here's the start. " + "and Here's the end ";
console.log(myString);

//----------------------------------------

var myString2 = "Hello everyone";
myString2 += " How all are you";
console.log(myString2);

//----------------------------------------

var ourString = "this is demo " +myString+ "of the "+ myString2+ " like this";
console.log(ourString);

//----------------------------------------

var newString = myString += myString2;
console.log(newString);

//----------------------------------------

//length of String
var str = "Kapil";
console.log("Length of the string - Kapil is : "+str.length);

//----------------------------------------

//character at certanin postion
var str2 = "Beniwal";
console.log("The 1th letter in the string - Beniwal is : "+str2[0]);
console.log("The 5th letter in the string - Beniwal is : "+str2[5]);
console.log("The last letter of the String - Beniwal is : "+str2[str2.length-1]);

str2="Kapil Beniwal";
console.log(str2);


/*
Extracting String Parts
There are 3 methods for extracting a part of a string:

1. slice(start, end)
2. substring(start, end)
3. substr(start, length)
*/
     // 1. slice(start, end)
//slice() extracts a part of a string and returns the extracted part in a new string.
let text = "Apple, Banana, Kiwi";
let part = text.slice(7, 13);
console.log(part); // Banana

let text2 = "Apple, Banana, Kiwi";
let part2 = text.slice(7);
console.log(part2); //Banana, Kiwi

let text3 = "Apple, Banana, Kiwi";
let part3 = text.slice(-12); 
console.log(part3); //Banana, Kiwi

//This example slices out a portion of a string from position -12 to position -6:
let text4 = "Apple, Banana, Kiwi";
let part4 = text.slice(-12, -6);
console.log(part4); //Banana

//----------------------------------------

/*
        2.  substring() -> is similar to slice().      
The difference is that start and end values less than 0 are treated as 0 in substring().

Example
*/
let strr = "Apple, Banana, Kiwi";
let par = strr.substring(7, 11); //-
console.log(par); // Bana

//----**-***------***-----------**--***----***------***---***---**--**--------------*--------

// if-else if-else ladder

function ifElseIfElseLadder(n){

    if(n<0)
        return "It is a Negative number";
    else if(n>=0 && n%2==0)
        return "it is a Even number";
    else
        return "It is a Odd number"        
}
console.log(ifElseIfElseLadder(-1));

//----**-***------***-----------**--***----***------***---***---**--**--------------*--------
 
//Switch statement
function nbnb(val){
var answer = "";
switch(val){
    case 1 :
        answer = "Hello0000000";
        break;
    case 2 :
        answer = "Good";
        break;
    case 3 :
        answer = "Afternoon";
        break;
    default :
        answer = "Anything extra act like an else block";
        break;
    }
    return answer;
}
        console.log(nbnb(5));








//----**-***------***-----------**--***----***------***---***---**--**--------------*--------

//----------------------------------------
    // How to make function and call it

function myXyz( adverb , adjective ){
    var Str = adverb;
    return Str ;
}
console.log(myXyz("hello","How are you"));

//----------------------------------------

function letHave(x,y,z){

    return x+" hvuihdvjdvb  "+y;
}
console.log(letHave("Kapil...","Beniwal...","Bexcard..."));

 //----------------------------------------

function toCelsius(fahrenheit) { // fahrenheit is the parameter of toCelsius function
    return (5/9)*(fahrenheit-32);
 }
 console.log(toCelsius(89)); //call the function
                            // 89 is the argument of toCelsius function

     //----------------------------------------
var myGlobal = 10; //Globally accessceble
check();//call the check function

function check(){
    var mycheckGlobal = 10;
     var deed = hereWeAre(); //it will call the hereWeAre function
     console.log(deed);
}

function hereWeAre(){
    var demo = "";
   // if(typeof myGlobal != "hello"){
  //      demo += "my Global is "+myGlobal+" and hello also added";
  //      return demo;
  //  }
    if(typeof mycheckGlobal != myGlobal){
       demo += "my Global is "+ 10;
       return demo;
    }
    else {
      return "no worries";
    }
}
         //----------------------------------------
var outerWear = "Hoodie";

function cloths(){
    var outerWear = "Jacket";
    return outerWear;
}
console.log(cloths()); // Jacket
console.log(outerWear); // Hoodie

//----------------------------------------

function checkBoolean(hello){
    if(hello){
        return "Yes this this true";
    }else{
    return "No this is false";
    }
}
console.log(checkBoolean(false));


function stringCheck(name){
    if(name=="kapil")
        return "correct name";
    else
        return "wrong name";
}
console.log(stringCheck("kapil"));



var bool = false;
var age = 18
if(age >=10){
    bool = true;
}
if(bool)
    console.log("eligible to vote");
else
    console.log("Not eligible to vote");


function isLessOrNot(a,b){
    return a < b; //it will return true or false acc' to the given number
}
console.log(isLessOrNot(10,15));


//----------------------------------------
       // Strictly equality operator

// 5=="5" -> true
// 5=='5' -> true
// 5==5   -> true

// 7 === '7' -> false
// 7 === "7" -> false
// 7 === 7  -> true

//Comparing two JavaScript objects always returns "false".
let t = new String("John");
let y = new String("John");
console.log(t===y); // false

if('3'==='3') 
    console.log("Yes !! This is matched");
else 
    console.log("No this is not matched");

//----------------------------------------





//----**-***------***-----------**--***----***------***---***---**--**--------------*--------

//FOR LOOP 
//blocK LEVEL scope
for(let i = 0 ; i < 5 ;i++ ){
    console.log("hello world "+(i+1));
}
//console.log(i); //IT WILL give answer 1 because in line no.12 we declare i as a global variable,op=1


//while loop

var num = 0 ;
var I = 0;
while(I <= 10){
    num += I;
    I++;
}
console.log(num);

//----------------------------------------
   //How to make an array & Iterate over it
   var myArray = ["Kapil",25,"Beniwal"];
  // console.log(myArray);
  for(var h=0 ; h<myArray.length ; h++)
  {
    console.log(myArray[h]+" ");
  }
 //----------------------------------------
  
    //Nested array , Multi-dimentional array
var multiArray = [["I","Love",3000],["Tonny","Starck",3500]];
console.log(multiArray);

 //----------------------------------------
    //Modify the array element by their index
 var numArray = [10,20,30,40];
 numArray[0] = 100; // now the array will become [100,20,30,40]
 console.log(numArray);

 //----------------------------------------
    //Accessing perticular element in Multi-dimentional array

//             0           1                   2
//           0  1  2    0  1  2      0        1        2
var arr = [[10,20,30],[50,60,70],["Kapil","Bexcard","India"]];
arr[1][1] = 155212;
console.log(arr[1][1]) // 60
console.log(arr[2][0]) // Kapil
console.log(arr[0][1]) // 20

//----------------------------------------

    // push() -> to add into last in our exsisting array
var exsistingArray = ["My","name","is"];
exsistingArray.push(["Kapil","Beniwal"]);
exsistingArray.push(5);
console.log(exsistingArray);

//----------------------------------------

    //pop() -> remove the last element
var popArray = [100,1,200,2];
popArray.pop(); // 2 will remove
console.log(popArray);

//----------------------------------------

   // shift() -> remove the first element
var shiftArray = [500,4,6,8,10];
shiftArray.shift(); // 500 will remove
console.log(shiftArray);


//----------------------------------------

   // unshift() -> add element at the first place (0th index)
var nArray = [1,2,3,4];
nArray.unshift(100);
nArray.unshift(["my", "Hero"]);
console.log(nArray);


//----**-***------***-----------**--***----***------***---***---**--**--------------*--------

        //Objects in JavaScript
    
let myDog = {
//properties : values    or    key : value pair
    "name of" : "Oreo",
    "Bread" : "Huskey",
    "tail" : 1,
    "legs" : 4,
    "friends" : ["Everyone !"]
}; 
console.log(myDog);


//----------------------------------------------------------------------------
          // find key + prop in the array of containing objects
var obj = [

{
    "name" : "Kapil",
    "age" : 23,
    "district" : "Ajmer"
},
{
    "name" : "Johnathan",
    "age" : 43,
    "district" : "Uk"
},
{
    "name" : "samtax",
    "age" : 32,
    "district" : "Brazil"
}
];

function keyValue(name,prop){
    for(var i=0 ; i<obj.length ; i++)
    {
        if(obj[i].name===name)
            return obj[i][prop] || "prop is not their";
    }
    return "No such data found";
}
console.log(keyValue("Kapil","age"));

//----------------------------------------------------------------------------


//Testing Objects for Properties -> .hasOwnProperty() method
function checkObj(property){
    if(myDog.hasOwnProperty(property)){
        return "Testing Objects for Properties : "+myDog[property];
    }else{
        return "NOt found";
    }
}
console.log(checkObj("Bread"));

//how to retrive values form the object of respective properties by " dot notation" & "bracket notation"
console.log(myDog["name of"]); // Oreo
console.log(myDog.tail);  // 1 
console.log(myDog.legs); // 4

//how to update the values....
myDog.Bread = "Bull Dog";

// add property + value to object....
myDog.Ears = 2;
myDog["bark like"] = "bhow-bhow";

// delete property + value of  object....
delete myDog.Ears;
//console.log(myDog.Ears); //output -> undefined




function phoneticLookup(val){
    var result = "";

    var lookup = {
        "Kapil" : "Accio",
        "Ajeet" : "Paris",
        "Sudipto" : "Spain"
    };
    result = lookup[val];
    return result;
}
console.log(phoneticLookup("Kapil"));



var myMusic = [
    {
        "artist" : "Kapil",
        "title" : "Guitarist",
        "relase_yr" : 2023,
        "formats" :["CD","8T","LP"],
    },
    //new record
    {
        "artist" : "Beniwal",
        "title" : "Piono man",
        "relase_yr" : 2022,
        "formats" :["Youtube"]
    }
];
console.log(myMusic);

//-------------------------------------------------------------

// Nested Objects

var myStorage = {
    "car" : {
        "inside" : {
            "glove box" : "maps",
            "Passenger seat" : "crumbs"
        },
        "outside" : {
            "trunk" : "jack"
        }
    }
};
var nestedObjects = myStorage.car.outside["trunk"];
console.log("Nested Objects : " + nestedObjects);





//----**-***------***-----------**--***----***------***---***---**--**--------------*--------


// //   "dskf toCelsius(34)"
//  console.log(`dsfd ${toCelsius(54)}`);

// (
// //   "amit'jkdjd"

// //   'amit"kapil'

 y=5;
 console.log("hello "+y);

 //let & const

 let v=5;
 v=10;
 v="hksisk";
 console.log(v);
 //let v="dgfh";
 //let v=6;



//  We cannot re-assign the value of const : (give runtime error)
 const z=3;
 //z=5;
 console.log(z);
 //const b =6;

//-------------------------------------------------------------

const person = ["John", "Doe", 46];
console.log(person[1]);

//-------------------------------------------------------------

    //Ransdom positive number 
console.log(Math.floor(Math.random()*10)); //random number 1 to 9

//-------------------------------------------------------------

    //Random number between the range
function randomInRange(min , max){
    return Math.floor(Math.random()*(max-min+1)) + min;
}
console.log(randomInRange(1,15));

//-------------------------------------------------------------

    //parseInt() -> String to Integer
var st = "50";
var stu = parseInt(st);
console.log(st+" was the String now converted to Integer : "+stu);

//-------------------------------------------------------------

    //convert Binary number to Integer
var binary = "1011";
var BinryCnvt = parseInt(binary,2);
console.log(BinryCnvt);

//-------------------------------------------------------------

    //multiple Ternory operator
function checkWithTurnory(n){
    return n > 0 ? "Positive" : n < 0 ? "Negative" : "Zero";
}
console.log(checkWithTurnory(0));

//-------------------------------------------------------------

    function RestOperator(arg){
        var sum = 0;
        for(let i = 0 ; i<arg.length ; i++)
        {
            sum += arg[i];
        }
        return sum;
    }
    
    var array = [1,2,3,4,5];
    console.log(RestOperator(array));

    function checkWithTurnoryy(n){
    return n > 0 ? "positive" : n < 0 ? "negative" : "zero";
}
console.log(checkWithTurnoryy(10));

const objjj = {
    a : 'one' , b : 'two' , c: 'three'
};
console.log(objjj); //op -> { a: 'one', b: 'two', c: 'three' }
