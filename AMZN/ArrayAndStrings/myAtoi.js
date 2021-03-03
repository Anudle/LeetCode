var myAtoi = function(str) {
  str = str.trim();
  if (!str) return 0;
  var sign = 1;
  var i = 0;
  var answer = 0;
  if (str[i] == '+') {
    sign = 1;
    i++;
  } else if (str[i] == '-') {
    sign = -1;
    i++;
  }

  for (; i < str.length; i++) {
    var temp = str.charCodeAt(i) - 48;
    if (temp > 9 || temp < 0) break;
    if (answer > 2147483647 / 10 || answer > (2147483647 - temp) / 10)
      return sign == 1 ? 2147483647 : -2147483648;
    else answer = answer * 10 + temp;
  }
  return answer * sign;
};

// Input: s = "42"
// Output: 42
// Explanation: The underlined characters are what is read in, the caret is the current reader position.
// Step 1: "42" (no characters read because there is no leading whitespace)
// Step 2: "42" (no characters read because there is neither a '-' nor '+')

// Step 3: "42" ("42" is read in)

// The parsed integer is 42.
// Since 42 is in the range [-231, 231 - 1], the final result is 42.

console.log(myAtoi('     dafdaf-+12'))

