/*
 * @lc app=leetcode.cn id=27 lang=typescript
 *
 * [27] 移除元素
 */

// @lc code=start
function removeElement(nums: number[], val: number): number {
  // let flag = 0
  // while (flag < nums.length) {
    // if (nums[flag] === val) {
    //   nums.splice(flag, 1)
    // } else {
    //   flag++
    // }
  // }
  // return nums.length

  let flag1 = 0, flag2 = 0
  while (flag2 < nums.length) {
    if (nums[flag2] !== val) {
      nums[flag1] = nums[flag2]
      flag1++
      flag2++
    } else {
      flag2++
    }
  }
  return flag1
};
// console.log("removeElement", removeElement([3,2,2,3], 3))
// console.log("removeElement", removeElement([3,2,2,3], 3))
// @lc code=end

