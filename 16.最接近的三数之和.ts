/*
 * @lc app=leetcode.cn id=16 lang=typescript
 *
 * [16] 最接近的三数之和
 */

// @lc code=start
// function threeSumClosest(nums: number[], target: number): number {
//   if (nums.length === 3) {
//     return nums[0] + nums[1] + nums[2]
//   }
//   let sortedNums = nums.sort((a, b) => a - b)
//   let min
//   // let start = 0, end = nums.length - 1
//   for(let i = 0; i < sortedNums.length - 2; i++) {
//     let twoTarget = target - sortedNums[i]
//     let start = i + 1, end = sortedNums.length - 1
//     let sum = sortedNums[start] + sortedNums[end]
//     let threeSum
//     debugger
//     if (sum < twoTarget) {
//       while((end - start > 1) && getAbs(start + 1, end) < getAbs(start, end)) {
//         start++
//       }
//       threeSum = sortedNums[i] + sortedNums[start] + sortedNums[end]
//       if (min === undefined || Math.abs(min - target) > Math.abs(threeSum - target)) {
//         min = threeSum
//       }
//     } else if (sum > twoTarget) {
//       while((end - start > 1) && getAbs(start, end - 1) < getAbs(start, end)) {
//         end--
//       }
//       threeSum = sortedNums[i] + sortedNums[start] + sortedNums[end]
//       if (min === undefined || Math.abs(min - target) > Math.abs(threeSum - target)) {
//         min = threeSum
//       }
//     } else {
//       return sortedNums[i] + sortedNums[start] + sortedNums[end]
//     }
//     function getAbs(s, e) {
//       let sum = sortedNums[s] + sortedNums[e]
//       return Math.abs(sum - twoTarget)
//     }
//   }
//   return min
// };

function threeSumClosest(nums: number[], target: number): number {
  if (nums.length === 3) {
    return nums[0] + nums[1] + nums[2]
  }
  let sortedNums = nums.sort((a, b) => a - b)
  let best = Math.max()
  for(let i = 0; i < sortedNums.length - 2; i++) {
    let start = i + 1, end = sortedNums.length - 1
    while (start < end) {
      let s = sortedNums[i] + sortedNums[start] + sortedNums[end]
      if (s === target) {
        return s
      }
      update(s)
      if (s < target) {
        start++
      } else {
        end--
      }
    }
  }
  function update(cur) {
    if (Math.abs(cur - target) < Math.abs(best - target)) {
      best = cur
    }
  }
  return best
}
console.log(threeSumClosest([-1,2,1,-4], 1))
// @lc code=end

