/*
 * @lc app=leetcode.cn id=6 lang=typescript
 *
 * [6] Z 字形变换
 */

/*
  输入：s = "PAYPALISHIRING", numRows = 4
  输出："PINALSIGYAHRPI"
  解释：
  P     I    N
  A   L S  I G
  Y A   H R
  P     I
*/

// @lc code=start
function convert(s: string, numRows: number): string {
  if (numRows === 1) {
    return s
  }
  let rowStrList = []
  // true 表示向下
  let down = true
  // 行号
  let row = 0
  for (let i = 0; i < numRows; i++) {
    rowStrList.push('')
  }
  for (let j = 0; j < s.length; j++) {
    rowStrList[row] += s[j]
    row = down ? (row + 1) : (row - 1)
    if (row === 0) {
      down = true
    }
    if (row === numRows - 1) {
      down = false
    }
  }
  console.log('rowStrList:', rowStrList)
  return rowStrList.join('')
};

console.log(convert("AP", 1))
// @lc code=end
