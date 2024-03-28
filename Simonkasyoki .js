function isPalindrome(str) {
    
    const cleanedStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    
    // Check if the cleaned string is equal to its reverse
    return cleanedStr === cleanedStr.split('').reverse().join('');
}

// Test cases
console.log(isPalindrome("radar")); // true
console.log(isPalindrome("Hello")); // false
console.log(isPalindrome("A man, a plan, a canal, Panama!")); // true
console.log(isPalindrome("12321")); // true
console.log(isPalindrome("Racecar")); // true
