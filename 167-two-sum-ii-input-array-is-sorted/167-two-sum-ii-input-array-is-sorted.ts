function twoSum(numbers: number[], target: number): number[] {
    const tracker = {};
    for (let i=0; i < numbers.length; i++) {
        const remain = target - numbers[i];
        if (tracker[remain] !== undefined) {
            return [tracker[remain], i+1];
        } else {
            tracker[numbers[i]] = i+1;
        }
    }
    return [];
};