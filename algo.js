// Largest Positive Integer That Exists With Its Negative



// Given an integer array nums that does not contain any zeros, find the largest positive integer k such that -k also exists in the array.

// Return the positive integer k. If there is no such integer, return -1.







/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxK = function(nums) {

    nums.sort((a,b) => b-a)

    for(let num of nums){
        let largest = num

        if(nums.includes(- largest)){
            return largest
        }
    }

    return -1
};



/**

    sort the nums array descending order
    for loop
        see if nums.icludes(- nums[i]) return nums[i]
    else return -1

 */