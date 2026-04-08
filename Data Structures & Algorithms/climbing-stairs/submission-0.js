class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    climbStairs(n) {
        let prev1 = 1, prev2 = 1;
        for(let i = 2; i<=n; i++){
            let t = prev1+prev2;
            prev2=prev1;
            prev1=t;
        }
        return prev1;
    }
}
