function checkInclusion(s1: string, s2: string): boolean {
    let tracker = {};
    for (let i=0; i < s1.length; i++) {
        tracker[s1[i]] = ++tracker[s1[i]] || 1;
    }
    
    let count = s1.length;
    let left = 0,
        right = 0;
    
    while (right < s2.length) {
        if (tracker[s2[right++]]-- > 0) count--;
        while (count === 0) {
            if (right - left === s1.length) return true;
            if (++tracker[s2[left++]] > 0) count++;        
        }
    }
    return false;
};