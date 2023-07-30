
//Q1 Answer

// var str1 = 'Today is';
// var str2 = '      a beautiful day     ';
// var str3 = ' In Hawaii.     ';

// // Remove leading and trailing spaces from str2 and str3
// str2 = str2.trim();
// str3 = str3.trim();

// // Concatenate the strings
// var Result = str1 + ' ' + str2 + ' ' + str3;

// console.log(Result); // Output: 'Today is a beautiful day In Hawaii.'



//Q2 answer

// var enteredAlphabet = 'd'; // Change this value to test different characters

// // Convert the enteredAlphabet to lowercase to handle both 'd' and 'D' cases
// enteredAlphabet = enteredAlphabet.toLowerCase();

// // Check if the entered character is an alphabet
// if ((enteredAlphabet >= 'a' && enteredAlphabet <= 'z')) {
//   switch (enteredAlphabet) {
//     case 'a':
//     case 'e':
//     case 'i':
//     case 'o':
//     case 'u':
//       console.log(enteredAlphabet + ' is a vowel.');
//       break;
//     default:
//       console.log(enteredAlphabet + ' is a consonant.');
//       break;
//   }
// } else {
//   console.log(enteredAlphabet + ' is not an alphabet.');
// }



//Q3 answer

// function calculator() {
//   var num1 = parseFloat(prompt('Enter the first number:'));
//   var num2 = parseFloat(prompt('Enter the second number:'));
//   var operator = prompt('Enter the operator (+, -, *, /):');

//   switch (operator) {
//     case '+':
//       var result = num1 + num2;
//       console.log('Result: ' + result);
//       break;
//     case '-':
//       var result = num1 - num2;
//       console.log('Result: ' + result);
//       break;
//     case '*':
//       var result = num1 * num2;
//       console.log('Result: ' + result);
//       break;
//     case '/':
//       if (num2 !== 0) {
//         var result = num1 / num2;
//         console.log('Result: ' + result);
//       } else {
//         console.log('Error: Cannot divide by zero.');
//       }
//       break;
//     default:
//       console.log('Error: Invalid operator.');
//       break;
//   }
// }

// calculator();


//Q4
// Function to check the type of the triangle
// function checkTriangleType(sideA, sideB, sideC) {
//     if (sideA === sideB && sideB === sideC) {
//       return "Equilateral Triangle";
//     } else if (sideA === sideB || sideA === sideC || sideB === sideC) {
//       return "Isosceles Triangle";
//     } else {
//       return "Scalene Triangle";
//     }
//   }
  
//   // Input sides of the triangle
//   var sideA = parseFloat(prompt("Enter the length of side A:"));
//   var sideB = parseFloat(prompt("Enter the length of side B:"));
//   var sideC = parseFloat(prompt("Enter the length of side C:"));
  
//   // Check and display the type of the triangle
//   var triangleType = checkTriangleType(sideA, sideB, sideC);
//   console.log("The triangle is a " + triangleType);
  

//Q5
// function calculateElectricityBill(units) 

// {
//     var totalBill = 0;
  
//     if (units <= 50) {
//       totalBill = units * 0.5;
//     } else if (units <= 150) {
//       totalBill = 50 * 0.5 + (units - 50) * 0.75;
//     } else if (units <= 250) {
//       totalBill = 50 * 0.5 + 100 * 0.75 + (units - 150) * 1.2;
//     } else {
//       totalBill = 50 * 0.5 + 100 * 0.75 + 100 * 1.2 + (units - 250) * 1.5;
//     }
  
//     // Add 20% surcharge
//     var surcharge = totalBill * 0.2;
//     totalBill += surcharge;
  
//     return totalBill;
//   }
  
//   var units = parseInt(prompt('Enter the total units consumed:'));
//   var totalBill = calculateElectricityBill(units);
//   console.log('Result = INR ' + totalBill.toFixed(2));
  