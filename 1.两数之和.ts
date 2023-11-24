/*
 * @lc app=leetcode.cn id=1 lang=typescript
 *
 * [1] 两数之和
 */

// @lc code=start
function twoSum(nums: number[], target: number): number[] {
  let sortedNums = nums.map((num, index) => ({ num, index })).sort((a, b) => a.num - b.num);
  let left = 0;
  let right = sortedNums.length - 1;
  while (left < right) {
    let sum = sortedNums[left].num + sortedNums[right].num;
    if (sum === target) {
      return [sortedNums[left].index, sortedNums[right].index];
    } else if (sum < target) {
      left++;
    } else {
      right--;
    }
  }
  return [];
};
console.log("twoSum([3,2,4], 9)", twoSum([3,2,4], 6))
// twoSum([2, 7, 11, 15], 9)
// @lc code=end

