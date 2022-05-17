function intersect(nums1: number[], nums2: number[]): number[] {
    let nums1_tracker = {};
    nums1.map(n => {
        if (nums1_tracker[n]) {
            nums1_tracker[n]++;
        } else {
            nums1_tracker[n] = 1;
        }
    })
    
    let nums2_tracker = {};
    return nums2.filter(n => {
        if (nums1_tracker[n] && (!nums2_tracker[n] || nums2_tracker[n] < nums1_tracker[n])) {
            if (nums2_tracker[n]) {
            nums2_tracker[n]++;
        } else {
            nums2_tracker[n] = 1;
        }
            return true;
        }
        return false;
    })
    
};