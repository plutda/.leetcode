/*
 * @lc app=leetcode.cn id=12 lang=typescript
 *
 * [12] 整数转罗马数字
 */

// @lc code=start

String.prototype.repeat = function (i) {
  return new Array(i + 1).join(this)
}
function intToRoman(num: number): string {
  const l1 = num % 1000
  const l2 = l1 % 100
  const l3 = l2 % 10
  const t1 = Math.floor(num / 1000)
  const t2 = Math.floor(l1 / 100)
  const t3 = Math.floor(l2 / 10)
  let res = ''
  if (t1) {
    res += 'M'.repeat(t1)
  }
  if (t2) {
    if(t2 === 4) {
      res += 'CD'
    }
    if(t2 === 9) {
      res += 'CM'
    }
    if(t2 === 5) {
      res += 'D'
    }
    if(t2 !== 4 && t2 < 5) {
      res += 'C'.repeat(t2)
    }
    if(t2 !== 9 && t2 > 5) {
      res += 'D' + 'C'.repeat(t2 - 5)
    }
  }
  if (t3) {
    if(t3 === 4) {
      res += 'XL'
    }
    if(t3 === 9) {
      res += 'XC'
    }
    if(t3 === 5) {
      res += 'L'
    }
    if(t3 !== 4 && t3 < 5) {
      res += 'X'.repeat(t3)
    }
    if(t3 !== 9 && t3 > 5) {
      res += 'L' + 'X'.repeat(t3 - 5)
    }
  }
  if(l3) {
    if(l3 === 4) {
      res += 'IV'
    }
    if(l3 === 9) {
      res += 'IX'
    }
    if(l3 === 5) {
      res += 'V'
    }
    if(l3 !== 4 && l3 < 5) {
      res += 'I'.repeat(l3)
    }
    if(l3 !== 9 && l3 > 5) {
      res += 'V' + 'I'.repeat(l3 - 5)
    }
  }
  return res
};

console.log('intToRoman:', intToRoman(1994))
// @lc code=end

