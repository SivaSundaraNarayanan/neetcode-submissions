class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        if(s.length != t.length) return false;


        const count = new Array<number>(26).fill(0);

        for (const char of s) {
            count[char.charCodeAt(0) - 97]++;
        }


        for (const char of t) {
            count[char.charCodeAt(0) - 97]--;
            if (count[char.charCodeAt(0) - 97] < 0) {
                return false;
            }
        }


        return true;
    }
}
