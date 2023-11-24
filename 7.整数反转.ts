/*
 * @lc app=leetcode.cn id=7 lang=typescript
 *
 * [7] 整数反转
 * -321 -> -123
 * 320 -> 23
 */

// @lc code=start
// function reverse(x: number): number {
//   function rev (n:number) {
//     return n.toString().split('').reverse().join('')
//   }
//   let res = 0
//   if(x < 0) {
//     res = -rev(Math.abs(x))
//   } else if(x % 10 === 0) {
//     res = +rev(x).slice(1)
//   } else {
//     res = +rev(x)
//   }
//   const MAX = Math.pow(2, 31) - 1
//   const MIN = -Math.pow(2, 31)
//   if(res < MIN || res > MAX) {
//     return 0
//   }
//   return res
// };

function reverse(x: number):number {
  let n = 0;
  while(x != 0) {
    n = n*10 + x%10;
    x = parseInt((x/10).toString());
  }
  const MAX = Math.pow(2, 31) - 1
  const MIN = -Math.pow(2, 31)
  return (n < MIN || n > MAX)? 0 : n;
}
// @lc code=end

console.log(reverse(1534))
