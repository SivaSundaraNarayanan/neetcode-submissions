class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s: string): boolean {
        const isAlphanumeric = (char: string) => /^[a-zA-Z0-9]$/.test(char);
        let start = 0,
            end = s.length - 1;
        while (start < end) {
            while (start < end && !isAlphanumeric(s[start])) {
                start++;
            }
            while (start < end && !isAlphanumeric(s[end])) {
                end--;
            }
            if (s[start].toLowerCase() !== s[end].toLowerCase()) {
                return false;
            }

            start++;
            end--;
        }
        return true;
    }
}
