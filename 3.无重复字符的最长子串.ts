/*
 * @lc app=leetcode.cn id=3 lang=typescript
 *
 * [3] 无重复字符的最长子串
 */

// @lc code=start
function lengthOfLongestSubstring(s: string): number {
  let flag1 = 0
  let flag2 = flag1
  let max = 0
  // let str = ''
  // let map = {}
  let map = new Set()
  while (flag2 < s.length) {
    // if (str.indexOf(s[flag2]) === -1) {
    // if(map[s[flag2]] === undefined){
    if (!map.has(s[flag2])){
      // str += s[flag2]
      // max = str.length > max ? str.length : max
      // map[s[flag2]] = true
      map.add(s[flag2])
      max = Math.max(flag2 - flag1 + 1, max)
      flag2++
    } else {
      // str = ''
      // map = {}
      map.clear()
      flag1++
      flag2 = flag1
    }
  }
  return max

  // let left = 0, right = 0, hs = new Set(), max = 0
  // if (s.length === 1) return 1
  // while (right < s.length) {
  //   if (hs.has(s[right])) {
  //     max = Math.max(right - left, max)
  //     hs.delete(s[left])
  //     left++
  //   } else {
  //     max = Math.max(right + 1 - left, max)
  //     hs.add(s[right])
  //     right++
  //   }
  // }
  // return max
};

console.log('length', lengthOfLongestSubstring('aab'))
// @lc code=end

