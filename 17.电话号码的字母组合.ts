/*
 * @lc app=leetcode.cn id=17 lang=typescript
 *
 * [17] 电话号码的字母组合
 */

// @lc code=start
function letterCombinations(digits: string): string[] {
  let res = []
  let track = ''
  let map = {
    '2': "abc",
    '3': "def",
    '4': "ghi",
    '5': "jkl",
    '6': "mno",
    '7': "pqrs",
    '8': "tuv",
    '9': "wxyz"
  }
  backTrack(digits, track, res, map, 0)
  return res
};

function backTrack(digits, track, res, map, index) {
  for (let i = index; i < digits.length; i ++) {
    let char = map[digits[i]]
    for (let j = 0; j < char.length; j++) {
      if (track[i] === char[j]) {
        break
      }
      track += char[j]
      if (track.length === digits.length) {
        res.push(track)
      }
      backTrack(digits, track, res, map, i + 1)
      track = track.slice(0, track.length - 1)
    }
  }
};

// @lc code=end

