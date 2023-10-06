export default class MinHeap {
    public length: number;
    public arr: number[];

    constructor() {
        this.length = 0;
        this.arr = [];
    }

    insert(value: number): void {
        // insert at the end
        this.arr.push(value);
        this.length += 1;

        this.heapifyUp(this.length - 1);
    }

    delete(): number {
        // move last node to root
        const val = this.arr[0];
        this.arr[0] = this.arr[this.length - 1];

        this.arr.pop();
        this.length -= 1;
        this.heapifyDown(0);

        return val;
    }

    heapifyUp(idx: number): void {
        if (idx === 0) {
            return;
        }

        const parent = this.arr[this.parent(idx)];
        const child = this.arr[idx];

        if (parent < child) {
            return;
        }

        // swap parent
        this.arr[this.parent(idx)] = child;
        this.arr[idx] = parent;

        return this.heapifyUp(this.parent(idx));
    }

    heapifyDown(idx: number): void {
        const lIdx = this.leftChild(idx);
        const rIdx = this.rightChild(idx);

        if (
            !(this.arr[lIdx] < this.arr[idx] || this.arr[rIdx] < this.arr[idx])
        ) {
            return;
        }

        if (this.arr[lIdx] < this.arr[rIdx] && lIdx < this.length) {
            const child = this.arr[lIdx];
            this.arr[lIdx] = this.arr[idx];
            this.arr[idx] = child;
            return this.heapifyDown(lIdx);
        } else if (rIdx < this.length) {
            const child = this.arr[rIdx];
            this.arr[rIdx] = this.arr[idx];
            this.arr[idx] = child;
            return this.heapifyDown(rIdx);
        }
    }

    private parent(idx: number): number {
        return Math.floor((idx - 1) / 2);
    }

    private leftChild(parentIdx: number): number {
        return parentIdx * 2 + 1;
    }

    private rightChild(parentIdx: number): number {
        return parentIdx * 2 + 2;
    }
}
