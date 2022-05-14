function searchInsert(nums: number[], target: number): number {
    let min = 0,
        max = nums.length - 1;
    let index = -1
    while (min <= max) {
        let avg = Math.floor((min+max) /2);
        if (nums[avg] === target) {
            return avg;
        } else if (nums[avg] > target){
            index = avg;
            max = avg - 1;
        } else {
            index = avg + 1;
            min = avg + 1;
        }
    }
    return index;
};