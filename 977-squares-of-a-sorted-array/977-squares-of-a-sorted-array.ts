function sortedSquares(nums: number[]): number[] {
    let neg_sq = [];
    let res = [];
    for (let i = 0; i < nums.length; i++) {
        let sq = nums[i] * nums[i]
        if (nums[i] < 0) {
            neg_sq.unshift(sq);
            continue;
        }
        
        while (neg_sq[0] < sq) {
            res.push(neg_sq.shift());
        }
        res.push(sq);
    }
    res.push(...neg_sq);
    return res;
};