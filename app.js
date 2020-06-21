// chapter 21 - 25

// Question 01
// var Fname= window.prompt("Enter your first name")
// var Lname= window.prompt("Enter your last name")
// fullname = Fname + " " +Lname
// alert("Hello"+ " "+fullname+"!"+"\n"+"Have a good day..." )

// Question 02
// var x = prompt("Enter your favourite monile phone model")
// favourite = "My favourite phone is:" + " " + x + "<br>"
// document.write(favourite)
// for (i = 0; i < x.length; i++) {
//     count = i + 1

// } document.write("Length of string:" + " " + count + "<br>")

// Question 03
// var name= "Pakistan"
// document.write("String:" +name+ "<br>" + "index of 'n':" + name.indexOf("n"))

// Question 04
// var string= "Hello world"
// document.write("String:" +string+ "<br>" + "last index of 'l':" +string.lastIndexOf("l"))

// Question 05
// var x = "Pakistani"
// document.write("String:" +x+ "<br>" +"Caracter at index 3:"+ x.slice(3,4))

// Question 06
// var Fname = prompt("Enter first name:")
// var Lname = prompt("Enter last name:")
// fullname = Fname.concat(Lname)
// document.write("Hello"+ " "+fullname+"!"+"\n"+"Have a good day..." )

// Question 07
// var city = "Hyderabad"
// var replace = "Islam" + city.slice(5,9)
// document.write("City: " + city + "<br>" + "After replacement: " +replace)

// Question 08
// var message="Ali and Sami are best friends. They play cricket and football together."
// var x = message.replace(/and/g,"&")
// document.write("message: " + message + "<br>" +"After replacement: "+ x)

// Question 09
// var num = 472
// var str = (""+num)
// document.write("Type of '472' is : "+typeof str)
// document.write("<br><br> Type of "+num+" is : "+typeof num)

// Question 10
// var str_1 = window.prompt("Enter a string")
// document.write("User input: " + str_1)
// document.write("<br>String in Uppercase: "+str_1.toUpperCase(str_1))

// Question 11
// var str_2 = window.prompt("Enter a string")
// document.write("User input: " + str_2)
// document.write("<br>String in Titlecase: "+str_2.charAt(0).toUpperCase()+ str_2.substr(1).toLowerCase())

// Question 12
// var num_1 = 35.36
// document.write("Number: " + num_1 +"<br>Result: "+num_1.toString().replace(".",""))

// Question 13
// var str_1 = prompt("Enter any string: ")
// document.write("<br><br>" + str_1)
// var display;
// var arr = [];
// var spilt = str_1.split([])
// document.write("<br><br>" + spilt)
// for (var i = 0; i < str_1.length; i++) {
//     arr[i] = str_1.charCodeAt(i);
//     while (arr[i] == 33 || arr[i] == 44 || arr[i] == 46 || arr[i] == 64) {
//         alert("Please enter a valid username: ");
//         break;
//     }
// }

// Question 14
// var item = new Array()
// item[0] = "cake"
// item[1] = "apple pie"
// item[2] = "cookie"
// item[3] = "chips"
// item[4] = "patties"
// document.write(item)
// document.write(item.length)
// document.write(item[1])
// var search = prompt("What do you want: ")
// for (var i = 0; i < item.length; i++) {
//     while (item[i] == search) {
//         alert("Your item is in the list:")
//         break;
//     }
// }

// Question 15
// var pass=prompt("Enter the password")
// if(pass[0]==parseInt(pass)){
//     alert("Password can not begin with a number ")
// }
// else if(pass.length<6){
//     alert("Please enter a strong password")
// }
// else{
//     alert("Your Password is valid")
// }

// Question 16
// var str_1 = "University Of Karachi";
// var arr =str_1.split([]);
// document.write("<br>\n"+arr)

// Chapter 26 - 30

// Question 01
// var numbers=prompt("Enter the number")
// document.write("<br>Number: ",numbers,"<br>Round of: ",Math.round(numbers),"<br>Floor value: ",Math.floor(numbers),"<br>Ceil value: ",Math.ceil(numbers))

//Question  02
// var num=prompt("Enter negative number")
// document.write("<br>Number: ",num,"<br>Round of: ",Math.round(num),"<br>Floor value: ",Math.floor(num),"<br>Ceil value: ",Math.ceil(num))

//Question 03
// var absolute=prompt("Enter the number")
// document.write("<br> abs is: ",Math.abs(absolute))

//Question 04
// var dice="The number of dice is: "
// document.write("<br>",dice,(Math.round(Math.random(dice)*10)))

//Question 05
// var coin="Random coin value is: "
// var toss=(Math.round(Math.random(coin)*10))
// document.write("<br>",toss,"<br>")
// if(toss<=2){
//     document.write(coin," Head")
// }
// else{
//     document.write(coin," Tail")
// }

//Question6
// document.write("<br> The random number is: ",(Math.round(Math.random()*100)))

//Question 08
// var x = (Math.floor(Math.random()*10)+1)
// var guess = 1
// var y = prompt("Enter any number between 1-10: ")

// if (x==y){
//     alert("You guessed the right number in: "+guess+" guessess")
// }else if(x>y){
//     guess++;
//     alert("OOPS sorry try a smaller number: ")
// }else{
//     guess++;
//     alert("OOPS sorry try a greater number: ")
// }

// chapter 31-34

// Question 01
// var tdate = new Date()
// console.log(tdate)

// Question 02
// const monthNames = ["January", "February", "March", "April", "May", "June",
//   "July", "August", "September", "October", "November", "December"
// ];
// const d = new Date();
// console.log("Current month is: " + monthNames[d.getMonth()])

// Question 03
// var d=new Date()
// var k=d.toString()
// document.write("<br>Today is: ",k.slice(0,3))

// Question 04
// var d=new Date()
// var k=d.toString()
// var l=k.slice(0,3)
// if(l=="Sat"|l=="Sun"){
//     document.write("<br>It's a funday")
// }

//Question  11
// var w=new Date()
// var w2= new Date()
// w.setHours(17)
// document.write("<br> Current date ",w,"<br> 1 hour ago it was: ",w2)

//Question 12
// var dates=new Date()
// document.write("Current date: ",dates)
// dates.setFullYear(1920,06,17)
// document.write("<br> 100 years back it was ",dates)

//Question 13
// var d=new Date()
// var age=prompt("Enter your age: ")
// document.write("<br>Your birth year is : ", (d.getFullYear()-age))

//Question 14
var name=prompt("Enter your name")
var d=new Date()
var months=["jan","Feb","Mar","Apr","May","June","July","Aug","Sep","Oct","Nov","Dec"]
var numberofunit=300
var charges=200
var netamount=numberofunit*charges
var late=100
var gross=netamount+late
document.write("<h2>K-electric bill</h2><br>Customer Name : ",name,"<br>Month: ",months[d.getMonth()],"<br>Numbers of unit: ",numberofunit,"<br>Charges per unit: ",charges,"<br>net amount Payable(Within due date) : ",netamount,"<br>Late payment surcharge: ",late,"<br>Gross amount payable: ",gross)

// Chapter 35-38

//Question 01
// function first(){
//     d=new Date()
//     return d
// }
// document.write("<br>",first())

//Question 02
// var take=prompt("Enter first name")
// var last=prompt("Enter last name")
// function input(){
//     alert("Welcome! "+take+" "+last)
// }
// input()

//Question 03
// var num=+prompt("enter number")
// var num1=+prompt("enter number")
// function adding(){
//     b=num+num1
//     return b
// }
// document.write("<br>",adding())

//Question 04
// function calc(num1,opr,num2){
//     if(opr=="+"){
//         return num1+num2
//     }
//     else if(opr=="-"){
//         return num1-num2
//     }
//     else if(opr=="*"){
//         return num1*num2
//     }
//     else if(opr=="/"){
//         return num1/num2
//     }
// }
// document.write("<br>",calc(2,"+",2))