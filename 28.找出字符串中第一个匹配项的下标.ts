/*
 * @lc app=leetcode.cn id=28 lang=typescript
 *
 * [28] 找出字符串中第一个匹配项的下标
 */

// @lc code=start
function strStr(haystack: string, needle: string): number {
  let flag = 0
  while (flag <= haystack.length - needle.length) {
    let flag1 = flag
    let flag2 = flag + needle.length - 1
    let flag3 = 0
    let flag4 = needle.length - 1

    while (haystack[flag1] === needle[flag3] && haystack[flag2] === needle[flag4]) {
      if ((flag1 === flag2) || (flag + 1 === flag2)) {
        return flag
      }
      flag1++
      flag2--
      flag3++
      flag4--
    }
    flag++
  }
  return -1
};
console.log('hh:', strStr('hello', 'll'))
// @lc code=end

