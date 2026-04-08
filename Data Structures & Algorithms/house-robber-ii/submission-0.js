class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums) {
        if(nums.length === 1) return nums[0];
        function robLinear(arr){
        let prev1 = 0, prev2 = 0;
        for(let num of arr){
            let curr = Math.max(prev1, prev2+num);
            prev2 = prev1;
            prev1 = curr;
        }
        return prev1;
        }
        return Math.max(robLinear(nums.slice(0,nums.length - 1)),
        robLinear(nums.slice(1)))
    }
}
