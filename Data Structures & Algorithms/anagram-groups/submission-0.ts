class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
        const anagrams = new Map<string, string[][][number]>();

        for (let itr = 0; itr < strs.length; itr++) {
            const str = strs[itr];
            const charArray = Array(26).fill(0);

            for (const char of str) {
                charArray[char.charCodeAt(0) - 97]++;
            }

            const strIndex = charArray.join("$");

            if (!anagrams.get(strIndex)) {
                anagrams.set(strIndex, []);
            }

            anagrams.get(strIndex)!.push(str);
        }

        return Array.from(anagrams.values());
    }
}
