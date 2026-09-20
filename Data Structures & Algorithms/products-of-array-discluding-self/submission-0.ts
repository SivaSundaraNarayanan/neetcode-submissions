class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums: number[]): number[] {
        const products: number[] = Array(nums.length).fill(1);
        let leftProduct = 1, rightProduct = 1;
        for (let itr = 0; itr < nums.length; itr++) {
            products[itr] *= leftProduct;
            leftProduct *= nums[itr];
        }

        for (let itr = nums.length - 1; itr >= 0; itr--) {
            products[itr] *= rightProduct;
            rightProduct *= nums[itr];
        }
        


        return products;
    }
}
