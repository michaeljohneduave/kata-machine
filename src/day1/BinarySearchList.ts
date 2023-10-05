export default function bs_list(haystack: number[], needle: number): boolean {
    let index = 0;

    let lo = 0;
    let hi = haystack.length;
    do {
        const m = Math.floor(lo + (hi + lo) / 2);

        if (haystack[m] === needle) {
            return true;
        // right side
        } else if (haystack[m] < needle) {
            lo = m + 1;
        // left side
        } else {
            hi = m;
        }
    } while (lo < hi)

    return false;

}