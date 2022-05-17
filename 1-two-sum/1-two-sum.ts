function twoSum(nums: number[], target: number): number[] {
    const tracker = {};
    for (let i=0; i < nums.length; i++) {
        const remain = target - nums[i];
        if (tracker[remain] !== undefined) {
            return [tracker[remain], i];
        } else {
            tracker[nums[i]] = i;
        }
    }
    return [];
};