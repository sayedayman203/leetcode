function canConstruct(ransomNote: string, magazine: string): boolean {
    if (ransomNote.length > magazine.length) {
        return false;
    }
    
    let tracker = {};
    ransomNote.split('').map(x => {
        if (tracker[x]) {
            tracker[x]++;
        } else {
            tracker[x] = 1;
        }
    })
    
    for (let i = 0, j=0; i < magazine.length; i++) {
        let c = magazine[i];
        
        if (tracker[c] === undefined || tracker[c] === 0) {
            continue;
        }
        
        tracker[c]--;
        j++;
        
        if (j === ransomNote.length) {
            return true;
        }
    }
    return false;
};