function containsDuplicate(nums: number[]): boolean {
    let ht = {};
    
    return nums.some((n) => {
        if (ht[n]) {
            return true;
        } else {
            ht[n] = true;
            return false;
        }
    });
};