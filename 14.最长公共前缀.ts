/*
 * @lc app=leetcode.cn id=14 lang=typescript
 *
 * [14] 最长公共前缀
 */

// @lc code=start
function longestCommonPrefix(strs: string[]): string {
  let prefix = strs.sort((a, b) => a.length - b.length)[0]
  let res = ''
  for (let i = 0; i < strs.length; i++) {
      if (strs[i].indexOf(prefix) === 0) {
          if (i === strs.length - 1) {
              res = prefix
              break
          }
          continue
      } else {
          // if (prefix.length === 1) {
          //     break
          // }
          prefix = prefix.slice(0, -1)
          // 重新开始循环
          i = 0
          continue
      }
  }
  return res
};

console.log(111, longestCommonPrefix(["dag","dacecar","dar"]))
// @lc code=end

