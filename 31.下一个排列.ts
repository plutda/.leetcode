/*
 * @lc app=leetcode.cn id=31 lang=typescript
 *
 * [31] 下一个排列
 */

// @lc code=start
/**
 Do not return anything, modify nums in-place instead.
 */
function nextPermutation(nums: number[]): void {
  if (nums.length <= 1) return;
  let smallOne = nums.length - 2, bigOne = nums.length - 1, flag = nums.length - 1;
  while (smallOne >= 0 && nums[smallOne] >= nums[bigOne]) {
    smallOne--
    bigOne--
  }
  if(smallOne >= 0) {
    swap(smallOne, flag);
  }
  while (bigOne !== flag) {
    bigOne++
    flag--
    swap(bigOne, flag);
  }

  function swap(a, b) {
    const temp = a;
    nums[a] = nums[b];
    nums[b] = nums[temp];
  }
};
// @lc code=end

