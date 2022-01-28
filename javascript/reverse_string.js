function reverseString(str) {
  // type your code here

  let stringCount = str.length;
  let reversed = "";

  do {
      stringCount -= 1;
      reversed += str[stringCount];
  } while (stringCount > 0);

  console.log(reversed);
}
reverseString("catbaby");

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 'ih'");
  console.log("=>", reverseString("hi"));

  console.log("");

  console.log("Expecting: 'ybabtac'");
  console.log("=>", reverseString("catbaby"));
}

module.exports = reverseString;

// Please add your pseudocode to this file

/* pseudocode
::To help understand this untidy pseudocode.. think of the string count number is a label (NOT INDEX!) for each letter of your 'target'.
Exmaple: "hello" has string count of 5, label of the each letter is as:
h = 1
e = 2
l = 3
l = 4
o = 5

SET: 2 variables, one that has the string count of your 'target' (where iteration begins) and another one for holding the iterated value.
FOR: iterating each string of your 'target' => accessing to each letter.
IF: string count is correct, then do (current string count - 1) while string count is bigger than 0 => this will iterate your 'target' from 'right to left'.
THEN: store the iterated value (each letter) to the variable name 'reversed' (line 5).
DECREMENT: string count 
END IF: string count is 0
*/

// And a written explanation of your solution

/* 
The variable on line 9 tells the while loop to iterate over the index of the argument backwardly and then 
appends the each iterated value (cycles back to its variable).
*/
