const delimiter = "$";
class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs: string[]): string {
        let encodedString = "";
        for (const str of strs) {
            const length = str.length;
            encodedString += `${length}${delimiter}${str}`;
        }
        return encodedString;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str: string): string[] {
        let decodedStrings: string[] = [],
            itr = 0;
        while (itr < str.length) {
            // Find the length
            const lenIndex = str.indexOf(delimiter, itr);
            const length = str.substring(itr, lenIndex);

            itr = lenIndex + 1;
            
            let len = parseInt(length);
            let string = str.substring(itr, itr + len);
            itr = itr + len;

            decodedStrings.push(string);
        }
        return decodedStrings;
    }
}
