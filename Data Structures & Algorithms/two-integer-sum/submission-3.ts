class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
        const diffMap = new Map<number, number>();
        for (let index = 0; index < nums.length; index++) {
            const num = nums[index];
            const diff = target - num;
            const prevIndex = diffMap.get(diff);
            if (prevIndex != undefined) {
                return [prevIndex, index];
            }

            diffMap.set(num, index);
        }

        return [];
    }
}
