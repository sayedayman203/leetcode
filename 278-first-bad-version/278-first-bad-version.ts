/**
 * The knows API is defined in the parent class Relation.
 * isBadVersion(version: number): boolean {
 *     ...
 * };
 */

var solution = function(isBadVersion: any) {

    return function(n: number): number {
        let firstBad = -1;
        let min = 0,
            max = n;
        while (min <= max) {
            let avg = Math.floor((min + max) / 2);
            if (isBadVersion(avg)) {
                firstBad = avg;
                max = avg - 1;
            } else {
                min = avg + 1;
            }
        }
        return firstBad;
    };
};