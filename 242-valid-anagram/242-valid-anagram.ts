function isAnagram(s: string, t: string): boolean {
  if (t.length !== s.length) {
    return false;
  }

  let tracker = {};
  t.split('').map((x) => {
    if (tracker[x]) {
      tracker[x]++;
    } else {
      tracker[x] = 1;
    }
  });

  for (let i = 0, j = 0; i < s.length; i++) {
    let c = s[i];

    if (tracker[c] === undefined || tracker[c] === 0) {
      return false
    }

    tracker[c]--;
    j++;
  }
  return true;
}