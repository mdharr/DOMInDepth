const isPalindrome = s => {
    let result = s
    if(result.length === 1) {
        return true
    }
    result = s.toLowerCase().replace(/[^a-z]/g, '')
    const firstChar = result[0]
    const lastChar = result[result.length-1]
    const remaining = result.slice(1, result.length-1)
    const isEqual = firstChar === lastChar
    return isEqual ? isPalindrome(remaining) : false
};
  
  console.log(isPalindrome('A man, a plan, a canal: Panama')); // true
  console.log(isPalindrome('race a car')); // false
  console.log(isPalindrome('ab_a')); // true
  console.log(isPalindrome(' ')); // true