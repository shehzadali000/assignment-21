// CHAPTER 21 (CHANGING CASE)

// 1.

// var allLower = userInput.toLowerCase();

// 2.

// x = x.toLowerCase();

// 3.

// y = y.toUpperCase();

// 4.

// var originalString = "YourOriginalString";
// var lowerCaseString = originalString.toLowerCase();

// 5.

// var array = ["YourStringElement"];
// var lowerCaseVariable = array[0].toLowerCase();

// 6.

// var yourString = "YourStringHere";
// var upperCaseString = yourString.toUpperCase();
// alert(upperCaseString);

// 7.

// var cityName = "kaRacHi";
// var capitalisedCityName = cityName.charAt(0).toUpperCase() + cityName.slice(1).toLowerCase();

// 8.

// CHAPTER 22 - 25 (STRINGS)

// 1.

// var sameWords = "captain";
// var slicedString = sameWords.slice(1, 3);

// 2.

// var sameWords = "captain";
// var numberOfCharacters = sameWords.length;

// 3.

// var animal = "elephant";
// var seg = animal.slice(1, 5);

// 4.

// var yourString = "YourStringHere";
// var numberOfCharacters = yourString.length;

// 5.

// var yourString = "YourStringHere";


// var numberOfCharacters = yourString.length;


// var slicedString = yourString.slice(1, -3);

// 6.

// var text = "To be or not to be.";
// var indx = text.indexOf("be");
// console.log(indx); 

// 7.

// var text = "To be or not to be.";
// var indx = text.lastIndexOf("be");
// console.log(indx);

// 8.

// var text = "Let's go, go, go!";
// var indx = text.lastIndexOf("go");
// console.log(indx); 

// 9.

// if (indexNum >= 0 && indexNum < yourString.length) {
   
// }

// 10.

// var str = "abcde";
// var charAtIndex2 = str.charAt(2);
// console.log(charAtIndex2);

// 11.

// var text = "YourStringHere";
// var cha = text.charAt(9);

// 12.

// var str = "YourStringHere";
// var x = str.charAt(str.length - 1);

// 13.

// var input = "YourStringHere";
// var cha = input.charAt(4);



// Assignment # 21-25

// STRING METHOD

// 1.

// var firstName = prompt("Enter your first name:");


// var lastName = prompt("Enter your last name:");


// var fullName = firstName + " " + lastName;

// alert("Hello, " + fullName + "! Welcome!");


// 2.



// var favoritePhoneModel = prompt("Enter your favorite mobile phone model:");


// var inputLength = favoritePhoneModel.length;


// document.write("<p>The length of your favorite mobile phone model input is: " + inputLength + "</p>");

// 3.


// var word = "Pakistani";


// var index = word.indexOf("n");


// document.write("<p>The index of letter 'n' in the word 'Pakistani' is: " + index + "</p>");

// 4.


// var word = "Hello World";


// var lastIndex = word.lastIndexOf("l");


// document.write("<p>The last index of letter 'l' in the word 'Hello World' is: " + lastIndex + "</p>");

// 5.


// var word = "Pakistani";


// var character = word.charAt(3);


// document.write("<p>The character at the 3rd index in the word 'Pakistani' is: " + character + "</p>");

// 6.


// var word = "Hyderabad";


// var newWord = word.replace("Hyder", "Islam");


// document.write("<p>The modified word is: " + newWord + "</p>");

// 7.


// var message = "Ali and Sami are best friends. They play cricket and football together.";


// var newMessage = message.replace(/and/g, "&");


// document.write("<p>The modified message is: " + newMessage + "</p>");

// 8.


// var str = "472";
// var num = Number(str);


// document.write("<p>String value: " + str + ", Type: " + typeof str + "</p>");
// document.write("<p>Number value: " + num + ", Type: " + typeof num + "</p>");

// 9.


// var userInput = prompt("Enter some text:");


// var capitalizedInput = userInput.toUpperCase();


// document.write("<p>Original input: " + userInput + "</p>");
// document.write("<p>Capitalized input: " + capitalizedInput + "</p>");

// 10.

// 11.


// var num = 35.36;


// var numAsString = num.toString().replace(".", "");

// document.write("<p>Original number: " + num + "</p>");
// document.write("<p>Converted string without dot: " + numAsString + "</p>");

// 12.
// 16.


// var university = "University of Karachi";


// var universityArray = university.split(" ");


// document.write("<p>Elements of the array:</p>");
// document.write("<ul>");
// for (var i = 0; i < universityArray.length; i++) {
//     document.write("<li>" + universityArray[i] + "</li>");
// }
// document.write("</ul>");


// 17.


// function displayLastCharacter() {
    
//     var userInput = prompt("Enter some text:");

  
//     var lastCharacter = userInput.charAt(userInput.length - 1);

   
//     document.write("<p>The last character of your input '" + userInput + "' is: " + lastCharacter + "</p>");
// }

// displayLastCharacter();

// 18.


