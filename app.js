// chapter 1
// Alerts
// Q1. Write a script to greet your website visitor using JS alert box. 
// alert("Hello! How are you?")
// Q2. Write a script to display following message on your web page: 
// alert("Error! Please enter a valid password.")
// Q3. Write a script to display following message on your web page: (Hint : Use line break) 
// alert("Welcome To JS Land....\nHappy Coding!")
// Q4. Write a script to display following messages in sequence: 
// alert("Welcome to JS Land")
// alert("Happy Coding!\n Prevent This page from creating additional Dialogues")
// Q5. Generate the following message through browser’s developer console: 
// alert("Hello..I can run JS through my web browser console")
// Q6. Make use of alerts in your new/existing HTML & CSS project.
// alert("Hello! How are you?")
// alert("Error! Please enter a valid password.")
// alert("Welcome To JS Land....\nHappy Coding!")
// Q7. Practice placement of <script></script> element in following sections of your project in exercise 6:
//  a. Head 
//  b. Body (before your page’s HTML) 
// c. Body (inside your page’s HTML) 
// d. Body (after your page’s HTML) 
// By changing placement of script, same results appear.


// chapter 2
// VARIABLES FOR STRINGS 
//Q1. Declare a variable called username. 
// var username="Wajeeha";
//Q2. Declare a variable called myName & assign to it a string that represents your Full Name. 
// var myName="Wajeeha Masood";
//Q3. Write script to 
// a) Declare a JS variable, titled message. 
// b) Assign “Hello World” to variable message 
// c) Display the message in alert box
// var message= "Hello World!"
// alert(message)
//Q4. Write a script to save student’s bio data in JS variables and show the data in alert boxes. 
// var name="Wajeeha";
// var age= "22 years old";
// var message="Certified Mobile Application Development";
// alert(name)
// alert(age)
// alert(message)
//Q5. Write a script to display the following alert using one JS variable: 
// alert("PIZZA \nPIZZ \nPIZ \nPI \nP")
//Q6. Declare a variable called email and assign to it a string that represents your Email Address(e.g. example@example.com). Show the blow mentioned message in an alert box.(Hint: use string concatenation) 
// var email= ("wajeehamasood570@gmail.com");
// alert("My"+ " email address" + " is " + email)
//Q7. Declare a variable called book & give it the value “A smarter way to learn JavaScript”. Display the following message in an alert box: 
// var book= "A smarter way to learn Java script"
// alert("I am trying to learn from the book " + book) 
//Q8. Write a script to display this in browser through JS 
// document.write("Yah! I can write HTML content through Javascript.")
//Q9. Store following string in a variable and show in alert and browser through JS 
// alert("▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬")


// chapter 3
// Q1. Declare a variable called age & assign to it your age. Show your age in an alert box. 
// var age= 22; 
// alert("I am " + age + " years old.")
//Q2. Declare & initialize a variable to keep track of how many times a visitor has visited a web page. Show his/her number of visits on your web page. For example: “You have visited this site N times”. 
// var visit =14;
//alert("you have visited this page " + visit+ " times")
//Q3.Declare a variable called birthYear & assign to it your birth year. Show the following message in your browser: 
// var birthyear=1998;
// document.write("My birth year is " + birthyear);
// document.write("<br>");
// document.write("Data type of my declared variable is Numbers");
//Q4. A visitor visits an online clothing store www.xyzClothing.com .
//  Write a script to store in variables the following information: 
//  a. Visitor’s name 
//  b. Product title
//   c. Quantity i.e. how many products a visitor wants to order 
//   Show the following message in your browser: 
//   “John Doe ordered 5 T-shirt(s) on XYZ Clothing store”. 

// var customername= "Bilal";
// var product= "Jeans";
// var quantity= 2;
// document.write(customername + " ordered " + quantity + " " +  product + " on XYZ Clothing Shop");

//Q1.  Declare 3 variables in one statement. 
// var a = 55, b = 6, c = 33;
//Q2. Declare 5 legal & 5 illegal variable names. 
// Legal Variable names
// var 123 = 20;
// var abc = 3;
// var $12 ="jiya"
// var _aji = 12;
// var q223e = "black"
// IlLegal Variable names
// var  hq = 45;   (starting with a space)
// var useralert = "usman";
// Q3. Display this in your browser
//  a)  A heading stating “Rules for naming JS variables” 
// b)  Variable names can only contain ______, ______, ______ and ______. 
// For example $my_1stVariable 
// c) Variables must begin with a ______, ______ or _____. 
// For example $name, _name or name 
// d) Variable names are case _________ 
// e) Variable names should not be JS _________   

// document.write("<h1> Rules For naming JS Variable </h1>");
// document.write("<br>");
// document.write("<br>");
// document.write("A variable name can contain only letters, numbers, dollar signs, and underscores.")
// document.write("<br>");
// document.write("Variable must begin with a letter, $ or _ .")
// document.write("<br>");
// document.write("Variable names are case sensitive")
// document.write("<br>");
// document.write("Variable name should not contain any JS keyword.")


// chapter 5
//MATH EXPRESSIONS 



// Q1.Write a program that take two numbers & add them in a new variable. Show the result in your browser.
// var a=3;
// var b= 5;
// x= a+b;
// document.write("Sum of " + a + " and " + b + "" + " is " + x);


//Q2.Repeat task1 for subtraction, multiplication, division & modulus.
// var a=2;
// var b= 2;
// x= a-b;
// document.write("difference of " + a + " and " + b + "" + " is " + x);

// var a=3;
// var b= 5;
// x= a/b;
// document.write("Division of " + a + " and " + b + "" + " is " + x);

// var a=3;
// var b= 5;
// x= a*b;
// document.write("Product of " + a + " and " + b + "" + " is " + x);

// var a=3;
// var b= 5;
// x= a%b;
// document.write("Remainder of " + a + " and " + b + "" + " is " + x);

//Q3.Do the following using JS Mathematic Expressions
// a. Declare a variable.
// b. Show the value of variable in your browser like “Value
// after variable declaration is: ??”.
// c. Initialize the variable with some number.
// d. Show the value of variable in your browser like “Initial
// value: 5”.
// e. Increment the variable.
// f. Show the value of variable in your browser like “Value
// after increment is: 6”.
// g. Add 7 to the variable.
// h. Show the value of variable in your browser like “Value
// after addition is: 13”.
// i. Decrement the variable.
// j. Show the value of variable in your browser like “Value
// after decrement is: 12”.
// k. Show the remainder after dividing the variable’s value
// by 3.
// l. Output : “The remainder is : 0”.
// .......................Code...........................

// var num;
// document.write("Value after variable decleration is: " + num);
// var num=5;
// document.write("<br>");
// document.write("initial value is: " + num);
// document.write("<br>");
// num=num+1;
// document.write("Value after increment is: " + num);
// document.write("<br>");
// num=num+7;
// document.write("Value after addition is: " + num);
// document.write("<br>");
// num=num-1;
// document.write("Value after deccrement is: " + num);
// document.write("<br>");
// num=num%3;
// document.write("Remainder is: " + num);
// 



//Q4. Cost of one movie ticket is 600 PKR. 
// Write a script to store ticket price in a variable 
// & calculate the cost of buying 5 tickets to a movie. 
//.............code..........................
// var cost = 600;
// var quantity = 5;
// var x= cost*quantity;
// document.write("Total cost to buy " + quantity + " movie tickets are " + x );


//Q5. Write a script to display multiplication table of any number in your browser.
    // var a=5;
// var i=1;
// for (i=1; i<=10; i++)
// {
//     document.write(a + "" + "*" + "" + i + " = " + a*i +"<br>" );
// }

//Q6.  The Temperature Converter: It’s hot out! Let’s make a converter based on the steps here.
// a. Store a Celsius temperature into a variable.
// b. Convert it to Fahrenheit & output “NNoC is NNoF”.
// c. Now store a Fahrenheit temperature into a variable.
// d. Convert it to Celsius & output “NNoF is NNoC”.

//..............code..........................
// document.write("<h1> Temperature coverter </h1>");
// document.write("<br>");
// document.write("<br>");
// var c = +prompt("Enter temperature in celsius");
// var f = +prompt("Enter temperature in farenheit");
// c1= (f-32)*5/9;
// f1= (c*9/5)+32;
// document.write(c + "C " + " is " + f1 + "F");
// document.write("<br>");
// document.write(f + "F " + " is " + c1 + "C");
// document.write("<br>");



//Q7. Write a program to implement checkout process of a shopping cart system for an e-commerce website. Store the following in variables
// a. Price of item 1
// b. Price of item 2
// c. Ordered quantity of item 1
// d. Ordered Quantity of item 2
// e. Shipping charges
// Compute the total cost & show the receipt in your browser.

//.................code............................................
// var p1= 200;
// var p1= 500;
// var q1= 2;
// var q2= 5;
// var dc = 100;
// document.write("<h1> Shopping Cart </h1>");
// document.write("<br>");
// document.write("<br>");
// var total =  (p1*q1) + (p2*q2) + 100;
// document.write("Price of 1 item is: " + p1);
// document.write("<br>");
// document.write("Price of 2 item is: " + p2);
// document.write("<br>");
// document.write("quantity of 1 item is: " + q1);
// document.write("<br>");
// document.write("quantity of 2 item is: " + q2);
// document.write("<br>");
// document.write("Shipping charges is: " + dc);
// document.write("<br>");
// document.write("<br>");
// document.write("total cost of your order is" + total);


//Q8.Store total marks & marks obtained by a student in 2 variables. Compute the percentage & show the result in your browser
// var total_marks= 200;
// var s1 = +prompt("Enter marks of first subject");
// var s2 = +prompt("Enter marks of second subject");
// document.write("<h1> Markssheet </h1>");
// document.write("<br>");
// document.write("<br>");
// var marks = s1+s2;
// var per = (marks*100)/total_marks;
// document.write("Total Marks:  " +  total_marks);
// document.write("<br>");
// document.write("Percentage: " + per);



//Q9. Assume we have 10 US dollars & 25 Saudi Riyals. Write a script to convert the total currency to Pakistani Rupees.
// Perform all calculations in a single expression.


// var dollar= 10;
// var riyal = 25;
// var pkr_d = 104.80;
// var pkr_r = 128;
// x = (dollar*pkr_d) + (riyal*pkr_r);
// document.write("<h1> Currency in PKR </h1>");
// document.write("<br>");
// document.write("The total currency is: " + x + " PKR ");



//Q10. Write a program to initialize a variable with some number and do arithmetic in following sequence:
// a. Add 5
// b. Multiply by 10
// c. Divide the result by 2
// Perform all calculations in a single expression


// var a= +prompt("Enter any number: ");
// x = ((a+5)*10)/2;
// document.write("Result is: " + x);

//Q11. The Age Calculator: Forgot how old someone is?
// Calculate it!
// a. Store the current year in a variable.
// b. Store their birth year in a variable.
// c. Calculate their 2 possible ages based on the stored values.


// document.write("<h1> Age Calculator</h1>");
// document.write("<br>");document.write("<br>");
// var current_year = +prompt("enter current year: ");
// var birth_year = +prompt("enter birth year: ");
// document.write("Current year: " + current_year);
// document.write("<br>");
// document.write("Birth year: " + birth_year);
// var age = current_year - birth_year;
// document.write("<br>");
// document.write("Your age is: " + age);


// Q12.  The Geometrizer: Calculate properties of a circle.
// a. Store a radius into a variable.
// b. Calculate the circumference based on the radius, and
// output “The circumference is NN”.
// (Hint : Circumference of a circle = 2 π r , π = 3.142)
// Calculate the area based on the radius, and output “The
// area is NN”. (Hint : Area of a circle = π r2, π = 3.142)


// var r = prompt("Enter radius of a circle: ");
// document.write("Radius of a circle is: " + r);
// var pi = 3.14;
// var cir = 2*pi*r;
// document.write("<br>");
// document.write("Circumference of a circle is: " + cir);
// document.write("<br>");
// area = pi*r*r;
// document.write("Area of a circle is: " + area);

//Q13.  The Lifetime Supply Calculator: Ever wonder how much a “lifetime supply” of your favorite snack is? Wonder no more.
// a. Store your favorite snack into a variable
// b. Store your current age into a variable.
// c. Store a maximum age into a variable.
// d. Store an estimated amount per day (as a number).
// e. Calculate how many would you eat total for the rest of
// your life.


// var fav_snack = "Popcorn";
// var current_age = 22;
// var max_age = 65;
// var perday  = 2;
// var lifetime = ((max_age-current_age)*365)*2;
// document.write("Favourite Sanck: " + fav_snack);
// document.write("<br>");
// document.write("Current age: " + current_age);
// document.write("<br>");
// document.write("Maximum Age: " + max_age);
// document.write("<br>");
// document.write("Amount of snack per day: " + perday);
// document.write("<br>");
// document.write("you will need " + lifetime + " " + fav_snack + " for the rest of your life.");



// chapter 6-9.....................................
// Q1. Write a program to take a number in a variable, do the required arithmetic to display the following result in your browser:
// var a= 2;
// document.write("Result: ");
// document.write("<br>");
// document.write("The value of a is: " + a);
// document.write("<br>");
// document.write("<hr>");
// document.write("<br>");
// document.write("The value of ++a is: " + ++a);
// document.write("<br>");
// document.write("Now The value of a is: " + a);
// document.write("<br>");
// document.write("The value of a++ is: " + a++);
// document.write("<br>");
// document.write("now The value of a is: " + a);
// document.write("<br>");
// document.write("The value of --a is: " + --a);
// document.write("<br>");
// document.write("Now The value of a is: " + a);
// document.write("<br>");
// document.write("The value of a-- is: " + a--);
// document.write("<br>");
// document.write("Now The value of a is: " + a);
// document.write("<br>");

//Q2.What will be the output in variables a, b & result after execution of the following script:
// var a = 2, b = 1;
// var result = --a - --b + ++b + b--;
// Explain the output at each stage:
// --a;
// --a - --b;
// --a - --b + ++b;
// --a - --b + ++b + b--;


//var a = 2, b = 1;
// var result = --a - --b + ++b + b--;
// var result = 1 - 0 + 1 + 1;
// document.write("The value of a is: " + a);
// document.write("<br>");
// document.write("The value of b is: " + b);
// document.write("<br>");
// document.write("Result is: " + result);
// document.write("<br>");


//Q3.  Write a program that takes input a name from user & greet the user.

// var name = prompt("Enter your name : ", "enter your name");
// alert("Hello! " + name)


//Q4. Write a program to take input a number from user & display it’s multiplication table on your browser. If user does not enter a new_number, multiplication table of 5 should be displayed by default.


// var num = +prompt("Enter table number");
    // document.write("Table of " + num);
    // document.write("<br>");
    // document.write("<br>");
    // for(i=1; i<=10; i=i++)
    //     {
    //         document.write(num + " * " + i + " = " + num*i);
    //     }
    // var num2 = +prompt("Enter table number");
    // if(num2==num)
    //    {
            // num2 = 5;
            // for(i=1; i<=10; i=i++)
    //       {
    //         document.write(num2 + " * " + i + " = " + num2*i);
    //       }
     //   }


//Q5. Take
// a) Take three subjects name from user and store them in 3
// different variables.
// b) Total marks for each subject is 100, store it in another
// variable.
// c) Take obtained marks for first subject from user and
// stored it in different variable.
// d) Take obtained marks for remaining 2 subjects from user
// and store them in variables.
// e) Now calculate total marks and percentage and show the
// result in browser like this.(Hint: user table)


// var s1 = +prompt("Enter maths marks: ");
// var s2 = +prompt("Enter english marks: ");
// var s3 = +prompt("Enter urdu marks: ");
// var totalmarks = 300;
// var obtained_marks = s1+s2+s3;
// var percentage = (obtained_marks*100)/totalmarks;
// document.write("<hr>");
// document.write("<table>");
// document.write("<tr>");
// document.write("<th> subject </th>");
// document.write("<th> total marks </th>");
// document.write("<th> obtained marks </th>");
// document.write("<th> Percentage </th>");
// document.write("</tr>");
// document.write("<br>");
// document.write("<tr>");
// document.write("<td>English</td>");
// document.write("<td> 300 </td>");
// document.write("<td>");
// document.write(s1);
// document.write("</td>");
// document.write("<td>");
// var percentage = (s1*100)/totalmarks;
// document.write(percentage);
// document.write("</td>");
// document.write("</tr>");
// document.write("<tr>");
// document.write("<td>urdu</td>");
// document.write("<td> 300 </td>");
// document.write("<td>");
// document.write(s2);
// document.write("</td>");
// document.write("<td>");
// var percentage = (s2*100)/totalmarks;
// document.write(percentage);
// document.write("</td>");
// document.write("</tr>");
// document.write("<br>");
// document.write("<tr>");
// document.write("<td>maths</td>");
// document.write("<td> 300 </td>");
// document.write("<td>");
// document.write(s3);
// document.write("</td>");
// document.write("<td>");
// var percentage = (s3*100)/totalmarks;
// document.write(percentage);
// document.write("</td>");
// document.write("</tr>");

// Chapter 9-11.......................................

// Q1.  Write a program to take “city” name as input from user. If user enters “Karachi”, welcome the user like this: “Welcome to city of lights”


// var wel = prompt("Enter your City name: ", "enter city name");
// if(wel=="karachi")
//     {
//         document.write("Welcome to the city of Lights ");
//     }

//Q2. Write a program to take “gender” as input from user. If the user is male, give the message: Good Morning Sir. If the user is female, give the message: Good Morning Ma’am. 
// var gen=prompt("Enter your gender");
// if(gen=="male")
//     {
//         document.write("Good Morning Sir!");

//     }
// else    

//     {
//         document.write("Good Morning Madam!");
//     }


//Q3. Write a program to take input color of road traffic signal from the user & show the message according to this table:

// document.write("<hr>");
// document.write("<table>");
// document.write("<tr>");
// document.write("<th> signal color </th>");
// document.write("<th> message </th>");
// document.write("</tr>");
// document.write("<br>");
// document.write("<tr>");
// document.write("<td>Red</td>");
// document.write("<td>Must Stop</td>");
// document.write("</tr>");
// document.write("<tr>");
// document.write("<td>Yellow</td>");
// document.write("<td>Ready to move</td>");
// document.write("</tr>");
// document.write("<br>");
// document.write("<tr>");
// document.write("<td>Green</td>");
// document.write("<td>Move now</td>");
// document.write("</tr>");



//Q4.  Write a program to take input remaining fuel in car (in  litres) from user. If the current fuel is less than 0.25litres, show the message “Please refill the fuel in your car”


// var fuel = +prompt("enter Remaining Fuel in liters");
// if(fuel<0.25)
//     {
//         document.write("Please Re-fill the fuel in your car");
//     }
// else
//     {
//         document.write("Fuel is Enough");
//     }



//Q5. Run this script, & check whether alert message would bedisplayed or not. Record the outputs.


// var a =4;
// if(++a==5)
//     {
//         alert("given condition for a variable a is true");
//     }

//     var b = 82;
//     if (b++ === 83){
//     alert("given condition for variable b is true");
//     }
    
//     var c = 12;
//     if (c++ === 13){
//     alert("condition 1 is true");
//     }
//     if (c === 13){
//     alert("condition 2 is true");
//     }
//     if (++c < 14){
//     alert("condition 3 is true");
//     }
//     if(c === 14){
//     alert("condition 4 is true");
//     }
    
    
//     var materialCost = 20000;
//     var laborCost = 2000;
//     var totalCost = materialCost + laborCost;
//     if (totalCost === laborCost + materialCost){
//     alert("The cost equals");
//     }
    
    
//     if (true){
//     alert("True");
//     }
//     if (false){
//     alert("False");
//     }
    // if("car" < "cat"){
    // alert("car is smaller than cat");
    // }
    

    ///...............output......................
    // given condition for a variable a is true
    // condition 2 is truecondition 4 is true
    // the cost equals
    // True
    //car is smaller than cat

//Q6. Write a program to take input the marks obtained in three subjects & total marks. Compute & show the resulting percentage on your page. Take percentage & compute grade as per following table:


// var s1 = +prompt("Enter maths marks: ");
// var s2 = +prompt("Enter english marks: ");
// var s3 = +prompt("Enter urdu marks: ");
// var totalmarks = 300;
// var obtained_marks = s1+s2+s3;
// var percentage = (obtained_marks*100)/totalmarks;
// document.write("<h1> Marksheet </h1>");
// document.write("<br>");
// document.write("<br>");
// document.write("Total marks: " + totalmarks);
// document.write("<br>");
// document.write("Percentage: " + percentage + "%");
// document.write("<br>");
// if(percentage>=80)
//     {
//         document.write("Grade: A-One");
//         document.write("<br>");
//         document.write("Remarks: Excellent");
//     }
// else if(percentage>=70)
//     {
//         document.write("Grade: A");
//         document.write("<br>");
//         document.write("Remarks: Good");
//     }
// else if(percentage>=60)
//     {
//         document.write("Grade: B");
//         document.write("<br>");
//         document.write("Remarks: U need to improve");
//     }
// else
//     {
//         document.write("Grade: Fail");
//         document.write("<br>");
//         document.write("Remarks: Sorry");
//     }


//Q7.Guess game:
// Store a secret number (ranging from 1 to 10) in a variable.
// Prompt user to guess the secret number.
// a. If user guesses the same number, show “Bingo! Correct answer”.
// b. If the guessed number +1 is the secret number, show “Close enough to the correct answer”.

// var num = +prompt("enter any number of your choice: "); 
//     if(num==5)
//         {
//             document.write("Bingo! ");
//         }
//     else if(num==6)
//         {
//             document.write("u are too close");

//         }
//     else
//         {
//             document.write("Oops! try again ");
//         }       


//Q8. Write a program to check whether the given number is divisible by 3. Show the message to the user if the number is divisible by 3.


// var num = +prompt("Enter any number: ")
// ans= num%3;
// if(ans==0)
//     {
//         document.write("Number is divisile by 3");
//     }
// else    
//     {
//         document.write("Not divisible by 3");
//     }

//Q9. Write a program that checks whether the given input is an even number or an odd number.

// var num = +prompt("Enter any number: ")
// ans= num%2;
// if(ans==0)
//     {
//         document.write("Even number");
//     }
// else    
//     {
//         document.write("Odd number");
//     }


//Q10. Write a program that takes temperature as input and shows a message based on following criteria
// a. T > 40 then “It is too hot outside.”
// b. T > 30 then “The Weather today is Normal.”
// c. T > 20 then “Today’s Weather is cool.”
// d. T > 10 then “OMG! Today’s weather is so Cool.”

// var t = +prompt("enter temperature: "); 
//     if(t>40)
//         {
//             document.write("It's too hot outside! ");
//         }
//     else if(t>30)
//         {
//             document.write("the weather is normal");

//         }
//     else if(t>20)
//         {
//             document.write("the weather is cool ");
//         }       
//     else
//         {
//             document.write("Today weather is too cold");
//         }


//Q11. Write a program to create a calculator for +,-,*, / & % using if statements. Take the following input:
// a. First number
// b. Second number
// c. Operation (+, -, *, /, %)
// Compute & show the calculated result to user.



//  var num2 = +prompt("Enter first number: ");
//  var num1 = +prompt("Enter second number: ");
// var oper = prompt("Choose operation: + - * / ");
// if(oper=="+")
//     {
//         document.write("The sum of two numbers is: " + num1+num2);
//     }
// else if(oper=="-")
//     {
//         document.write("The sum of two numbers is: " + num1-num2);
//     }
// else if(oper=="*")
//     {
//         document.write("The sum of two numbers is: " + num1*num2);
//     }
// else
//     {
//         document.write("The sum of two numbers is: " + num1/num2);
//     }




// chapter 12-13...............................
// IF…ELSE & ELSE IF STATEMENT, TESTING SET OF CONDITION


//Q1.Write a program that takes a character (number or string) in a variable & checks whether the given input is a number, uppercase letter or lower case letter. (Hint: ASCII codes:- A=65, Z=90, a=97, z=122).


// var num = prompt("enter a number or letter");
// if(num<=65 || num>=90)
//     {
//         document.write("Uppercase Letter");
//     }
// else if(num<=97 || num>=122)
//     {
//         document.write("Lowercase Letter");
//     }
// else if(num<=48 || num>=57)
//     {
//         document.write("the entered value is digit");
//     }


//Q2. Write a JavaScript program that accept two integers and display the larger. Also show if the two integers are equal.


// var num1 = +prompt("enter a first number");
// var num2 = +prompt("enter a second number ");
// if(num1>num2)
// {
//     document.write("The largest number is " + num1);
// }
// else{
//     document.write("The largest number is " + num2);
// }


//Q3. Write a program that takes input a number from user & state whether the number is positive, negative or zero.


// var num = prompt("enter a number");
// if(num>0)
//     {
//         document.write("Number is positive");
//     }
// else if(num<0)
//     {
//         document.write("Number is negative");
//     }
// else if(num==0)
//     {
//         document.write("Number is zero");
//     }



//Q4. Write a program that takes a character (i.e. string of length 1) and returns true if it is a vowel, false otherwise


// var ch = prompt("enter a letter");
// if(ch=="a" || ch=="e" || ch=="i" || ch=="o" || ch=="u" )
//     {
//         document.write("The letter is a vowel.");
//     }
// else
//     {
//         document.write("The letter is not a vowel.");
//     }

//Q5. Write a program that
// a. Store correct password in a JS variable.
// b. Asks user to enter his/her password
// c. Validate the two passwords:
// i. Check if user has entered password. If not, then
// give message “ Please enter your password”
// ii. Check if both passwords are same. If they are
// same, show message “Correct! The password you
// entered matches the original password”. Show
// “Incorrect password” otherwise. 


// var num1 = prompt("enter a password","Please enter your password");
// var num2 = prompt("Confirm your password","Confirm your password");
// if(num1==num2)
//     {
//         document.write("The password u entered matched the original password.");
//     }
// else
//     {
//         document.write("Incorrrect password");
//     }


//Q6. This if/else statement does not work. Try to fix it:
// var greeting;
// var hour = 13;
// if (hour < 18) {
// greeting = "Good day";
// else
// greeting = "Good evening";
// }




// var greeting;
// var hour = 13;
// if (hour < 18) {
// greeting = "Good day";
// }
// else
// {
// greeting = "Good evening";
// }


//Q7.  Write a program that takes time as input from user in 24 hours clock format like: 1900 = 7pm. Implement the following case using if, else & else if statements


// var time = +prompt("Enter time in 24-hour format");

// if(time<12)
//     {
//         document.write("time is: " + time + ":00" + " = " + time + " AM");
//     }
// else if(time==12)
//     {
//         time2 = time - 12;
//         document.write("time is: " + time + ":00" + " = " + time2 + " AM");
//     }
// else
//     {
//     time1 = time - 12;
//     document.write("time is: " + time + ":00" + " = " + time1 + " PM");
//     }