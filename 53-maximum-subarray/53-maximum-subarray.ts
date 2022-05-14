function maxSubArray(nums: number[], min = 0, max = null): number {
    if (max === null) {
        max = nums.length -1;
    }
    
    // base
    if (min >= max) {
        return nums[min];
    }
    
    let avg = Math.floor((min+max) / 2);
    
    // left
    let left_max = -Infinity;
    let left_sum = 0;
    for (let i = avg; i >= min; i--) {
        left_sum += nums[i];
        if (left_sum > left_max) {
            left_max = left_sum;
        }
    }
    
    // right
    let right_max = -Infinity;
    let right_sum = 0;
    for (let i = avg + 1; i <= max; i++) {
        right_sum += nums[i];
        if (right_sum > right_max) {
            right_max = right_sum;
        }
    }
    
    return Math.max(left_max+right_max, maxSubArray(nums, min, avg),  maxSubArray(nums, avg + 1, max))
};