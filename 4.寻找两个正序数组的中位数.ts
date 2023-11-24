/*
 * @lc app=leetcode.cn id=4 lang=typescript
 *
 * [4] 寻找两个正序数组的中位数
 */

// @lc code=start
function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
  const sum = nums1.concat(nums2).sort((a: number, b: number) => a - b)
  const middle = Math.floor(sum.length / 2)
  if (middle === (sum.length / 2)) {
    return (sum[middle - 1] + sum[middle]) / 2
  } else {
    return sum[middle]
  }
};
// @lc code=end

