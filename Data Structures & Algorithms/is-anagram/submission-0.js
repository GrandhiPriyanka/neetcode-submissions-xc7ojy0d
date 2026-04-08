class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length !== t.length)   return false;
        const map = {};
        for(let char of s){
            if(map[char]) map[char]++
            else map[char] = 1
        }
        for(let char of t){
            if(map[char]) map[char]--
            else return false
        }
        return true;
    }
}