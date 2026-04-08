class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let p = '';
        for (let str of s) {
            console.log(str)
            if (this.isAlphaNumeric(str)) {
                console.log(str)
                p += str;
            }
        }
        console.log(p);
        console.log(p.split('').reverse().join(''))
        return p.toLowerCase() === p.split('').reverse().join('').toLowerCase()
    }
    isAlphaNumeric(char) {
        const code = char.charCodeAt(0);

        return (
            (code >= 48 && code <= 57) ||  // 0-9
            (code >= 65 && code <= 90) ||  // A-Z
            (code >= 97 && code <= 122)    // a-z
        );
    }

}
