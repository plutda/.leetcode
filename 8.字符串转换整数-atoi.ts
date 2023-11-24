/*
 * @lc app=leetcode.cn id=8 lang=typescript
 *
 * [8] 字符串转换整数 (atoi)
 */

// @lc code=start
function myAtoi(s: string): number {
  let res = ''
  for (let i = 0; i < s.length; i++) {
    const isNumber = (s.charCodeAt(i) >= 48) && (s.charCodeAt(i) <= 57)
    if(s[i] === ' ') {
      if (i > 0 && !/^\s+$/.test(s.slice(0, i))) {
        break
      } else {
        continue
      }
    }
    if(s[i] === '-' || s[i] === '+') {
      if (i > 0 && !/^\s+$/.test(s.slice(0, i))) {
        break
      } else {
        res += s[i]
        continue
      }
    }
    if(isNumber) {
      if (!res.length && s[i] === '0') {
        continue
      } else {
        res += s[i]
      }
    } else {
      break
    }
  }
  if (res[0] === '+') {
    res = res.slice(1)
  }
  if (res[0] === '-' && res.length === 1) {
    return 0
  }
  const num = Number(res)
  if (num < 0 && num < (-Math.pow(2, 31))) {
    return -Math.pow(2, 31)
  }
  if (num > 0 && num >= Math.pow(2, 31)) {
    return Math.pow(2, 31) - 1
  }
  return num
};
console.log(myAtoi("   -42"))
// @lc code=end

