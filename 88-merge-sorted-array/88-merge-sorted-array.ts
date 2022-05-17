/**
 Do not return anything, modify nums1 in-place instead.
 */
function merge(nums1: number[], m: number, nums2: number[], n: number): void {
    let n_bk = n;

    if (nums1.length > m) {
        nums1.splice(m);
    }

    for(let i = 0, j = 0; i < m; i++) {
        while (nums1[i] > nums2[0]) {
          nums1.splice(i, 0, nums2.shift() as unknown as number);
          n_bk++;
            m++;   
          i++;
        }
    }

    if (n_bk > 0) {
        nums1.push(...nums2.slice(0, n_bk));
    }
};