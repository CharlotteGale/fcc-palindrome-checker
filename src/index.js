const checkBtn = document.getElementById('check-btn');
const result = document.getElementById('result');
const textInput = document.getElementById('text-input');

function cleanStr(word) {
     return word.replace(/[^a-z0-9_]/gi, '').toLowerCase();
}

function isPalindrome(word) {
     // call the cleanStr function
     word = cleanStr(word);

     // pointers
     let left = 0;
     let right = word.length -1;

     // compare characters
     while (left < right) {
          if (word[left] !== word[right]) {
               return `${word} is not a palindrome`;
          }
          left++;
          right--;
     }
     return `${word} is a palindrome`;
}

function checkForPalindrome() {
     const userInput = textInput.value; 

     if (userInput === '') {
          alert("Please input a value."); 
     } else {
          const cleanedInput = cleanStr(userInput); 
          const palindromeResult = isPalindrome(cleanedInput); 

          if (palindromeResult === `${cleanedInput} is a palindrome`) {
               result.innerText = `${userInput} is a palindrome`; 
          } else {
               result.innerText = `${userInput} is not a palindrome`; 
          }
     }
}

checkBtn.addEventListener("click", checkForPalindrome)