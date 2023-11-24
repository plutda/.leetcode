/*
 * @lc app=leetcode.cn id=5 lang=typescript
 *
 * [5] 最长回文子串
 */

// @lc code=start
// function longestPalindrome(s: string): string {
  // let result = ''
  // if (s.length === 1) return s;
  // if (s.length === 2) return s[0] === s[1] ? s : s[0];
  // for (let i = 0; i < s.length; i++) {
  //   let str = s[i]
  //   for (let j = i + 1; j < s.length; j++) {
  //     str += s[j]
  //     if (isPalindrome(str) && str.length > result.length) {
  //       result = str
  //     }
  //   }
  // }
  // if (result === '') return s[0]
  // return result
// };

// function isPalindrome(str: string): boolean {
//   let left = 0
//   let right = str.length - 1
//   while (left < right) {
//     if (str[left] !== str[right]) {
//       return false
//     }
//     left++
//     right--
//   }
//   return true
// }
var longestPalindrome = function(s) {
  var res = "";
  for (var i = 0; i < s.length; i++) {
      // 以 s[i] 为中心的最长回文子串
      var s1 = palindrome(s, i, i);
      // 以 s[i] 和 s[i+1] 为中心的最长回文子串
      var s2 = palindrome(s, i, i + 1);
      // res = longest(res, s1, s2)
      res = res.length > s1.length ? res : s1;
      res = res.length > s2.length ? res : s2;
  }
  return res;
};

function palindrome(s, left, right) {
  while (left >= 0 && right < s.length && s[left] == s[right]) {
      left--;
      right++;
  }
  return s.substring(left + 1, right);
}
// @lc code=end

