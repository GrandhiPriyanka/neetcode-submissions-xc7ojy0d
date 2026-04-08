class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const map = new Map();
        for(let num of nums){
            if(!map.has(num)){
                map.set(num,num)
            } else {
                return true
            }
        }
        return false
    }
}