class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const obj = {};
        for(let num of nums){
            if(!obj[num]){
                obj[num] = 1
            }   else{
                obj[num] ++;
            }
        }
        return Object.keys(obj).sort((a,b)=>obj[b]-obj[a]).splice(0,k).map(Number)
    }
}