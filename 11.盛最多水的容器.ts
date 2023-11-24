/*
 * @lc app=leetcode.cn id=11 lang=typescript
 *
 * [11] 盛最多水的容器
 */

// @lc code=start
// fdsfds
function maxArea(height: number[]): number {
  let start = 0
  let end = height.length - 1
  let area = 0
  while (start <= end) {
    const temp = (end - start) * Math.min(height[start], height[end])
    if (temp >= area) {
      area = temp
    }
    if (height[start] < height[end]) {
      start += 1
    } else {
      end -= 1
    }
  }
  return area
};

console.log('maxArea:', maxArea([1,8,6,2,5,4,8,3,7]))
// @lc code=end

