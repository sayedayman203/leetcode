function search(nums: number[], target: number): number {
    let  min = 0,
         max = nums.length -1;
    while (min <= max) {
        let avg = Math.floor((max + min) / 2);
        if (nums[avg] === target) {
            return avg;
        } else if (nums[avg] > target) {
            max = avg-1;
        } else {
            min = avg+1;
        }
    }
    return -1;
};