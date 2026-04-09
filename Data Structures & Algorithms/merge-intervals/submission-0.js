class Solution {
    /**
     * @param {number[][]} intervals
     * @return {number[][]}
     */
    merge(intervals) {
        intervals.sort((a,b)=>a[0]-b[0]);
        let result=[];
        for(let int of intervals){
            if(!result.length || result[result.length -1][1]<int[0]){
                result.push(int)
            }   else{
                result[result.length -1][1] = Math.max(result[result.length -1][1], int[1]);
            }

        }
        return result;
    }
}
