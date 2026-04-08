class Solution {
    /**
     * @param {number[]} cost
     * @return {number}
     */
    minCostClimbingStairs(cost) {
        let prev1=0,prev2=0;
        for(let c of cost){
            let t = c+Math.min(prev1,prev2);
            prev2=prev1;
            prev1=t;
        }
        return Math.min(prev1,prev2);
    }
}
