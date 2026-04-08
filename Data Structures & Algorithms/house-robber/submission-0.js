class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums) {
        let prev1 = 0, prev2 = 0;
        for(let num of nums){
            let curr = Math.max(prev1, prev2+num);
            prev2 = prev1;
            prev1 = curr;
        }
        return prev1;
    }
}
