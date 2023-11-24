/*
 * @lc app=leetcode.cn id=9 lang=typescript
 *
 * [9] 回文数
 */

// @lc code=start
function isPalindrome(x: number): boolean {
  let s = x + ''
  for (let i = 0; i < s.length; i++) {
    if (i >= Math.floor(s.length / 2)) {
      return true
    }
    if (s[i] === s[s.length - 1 - i]) {
      continue
    } else {
      return false
    }
  }
};
// @lc code=end

