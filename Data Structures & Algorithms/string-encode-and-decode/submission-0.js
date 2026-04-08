class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let result = '';
        for(let str of strs){
            result+= str.length + "#" + str;
        }
        return result
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        const result = [];
        let i=0;
        while(i<str.length){
            let j=i;
            while(str[j]!=='#'){
                j++;
            }
            const length = parseInt(str.substring(i,j));
            i=j+1;
            result.push(str.substring(i,length+i));
            i=i+length;
        }
        return result;
    }
}
