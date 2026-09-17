class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums: number[], k: number): number[] {
        const frequencyMap = new Array<Set<number>>();
        const countMap = new Array<number>();

        for (const num of nums) {
            const countIndex = countMap[num] ?? 0;
            const nextCountIndex = countIndex + 1;

            countMap[num] = nextCountIndex;

            if (!frequencyMap[countIndex]) {
                frequencyMap[countIndex] = new Set();
            }
            frequencyMap[countIndex]?.delete(num);

            if (!frequencyMap[nextCountIndex]) {
                frequencyMap[nextCountIndex] = new Set();
            }
            frequencyMap[nextCountIndex]?.add(num);
        }

        const result = [];

        console.log(frequencyMap);

        for (let itr = frequencyMap.length - 1; itr > 0; itr--) {
            for (const val of frequencyMap[itr]) {
                result.push(val);
                if (result.length == k) {
                    return result;
                }
            }
        }

        return result;
    }
}
