class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        const set = new Set(nums);
        let maxLength = 0;
        for (const num of set){
            if(!set.has(num-1)){
                let current = num;
                let currentLength = 1;
                while(set.has(current + 1) ){
                    current++;
                    currentLength++
                }
                maxLength = Math.max(maxLength, currentLength);
            }

        }
        return maxLength;
    }
}
