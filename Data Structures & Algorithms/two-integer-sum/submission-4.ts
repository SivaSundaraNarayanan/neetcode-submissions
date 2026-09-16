class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
        const diffMap = {};
        for (const [index, num] of nums.entries()) {
            const diff = target - num;
            const prevIndex = diffMap[diff];
            if (prevIndex != undefined) {
                return [prevIndex, index];
            }

            diffMap[num] = index;
        }

        return [];
    }
}
