/**
 Do not return anything, modify nums in-place instead.
 */
function moveZeroes(nums: number[]): void {
    let zeros =0
    for (let i =0; i < nums.length - zeros;) {
        if (nums[i] === 0) {
            zeros++;
            nums.splice(i,1)
            nums.push(0);
        } else {
            i++;
        }
    }
};