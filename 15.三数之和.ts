/*
 * @lc app=leetcode.cn id=15 lang=typescript
 *
 * [15] 三数之和
 */

// @lc code=start
function threeSum(nums: number[]): number[][] {
  let res = []
  let sortedNums = nums.sort((a, b) => a - b)
  for (let i = 0; i < sortedNums.length; i ++) {
    let target = 0 - nums[i]
    let startFlag = i + 1, endFlag = sortedNums.length - 1
    if (i > 0 && sortedNums[i] === sortedNums[i - 1]) {
      continue
    }
    // prev.push(sortedNums[i])
    while (startFlag < endFlag) {
      let left = nums[startFlag], right = nums[endFlag]
      if (sortedNums[startFlag] + sortedNums[endFlag] < target) {
        startFlag++
      } else if (sortedNums[startFlag] + sortedNums[endFlag] > target) {
        endFlag--
      } else {
        res.push([nums[i], sortedNums[startFlag], sortedNums[endFlag]])
        startFlag++
        endFlag--
        while(sortedNums[startFlag] === left && startFlag < endFlag) startFlag++
        while(sortedNums[endFlag] === right && startFlag < endFlag) endFlag--
      }
    }
  }
  return res
};
// @lc code=end

