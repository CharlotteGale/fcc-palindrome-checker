const checkBtn = document.getElementById('check-btn');
const result = document.getElementById('result');
const textInput = document.getElementById('text-input');

function cleanStr(word) {
     return word.replace(/[^a-z0-9]/gi, '').toLowerCase();
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

function checkForPalindrome(userInput) {
     const userInput = textInput.value;

     if (userInput === '') {
          result.innerText = 'Please enter some text';
     } else {
          const palindromeResult = isPalindrome(userInput);
          result.innerText = palindromeResult;
     }
}

checkBtn.addEventListener("click", checkForPalindrome)