class MyPriorityQueue<T> {
    private heap: T[];
    private compare: (a: T, b: T) => number;

    constructor(compareFn: (a: T, b: T) => number) {
        this.heap = [];
        this.compare = compareFn;
    }

    size(): number { return this.heap.length }

    isEmpty(): boolean { return this.heap.length === 0 }

    lastIndex(): number { return this.heap.length - 1 }

    enqueue(item: T): void {
        this.heap.push(item);
        this._bubbleUp(this.lastIndex())
    }

    dequeue(): T | undefined {
        if (this.heap.length === 0) return undefined;
        if (this.heap.length === 1) return this.heap.pop();

        [this.heap[0], this.heap[this.lastIndex()]] = [this.heap[this.lastIndex()], this.heap[0]];
        const removedItem = this.heap.pop();

        this._bubbleDown(0);
        return removedItem;
    }

    private _bubbleUp(index: number) {
        let i = index;
        while (i > 0) {
            const parentIndex = Math.floor((i-1) / 2)
            if (this.compare(this.heap[i], this.heap[parentIndex]) < 0) {
                [this.heap[i], this.heap[parentIndex]] = [this.heap[parentIndex], this.heap[i]]
                i = parentIndex;
            } else {
                break;
            }
        }
    }

    private _bubbleDown(index: number) {
        let i = index;

        while (true) {
            const leftChildIndex = 2 * i + 1;
            const rightChildIndex = 2 * i + 2;
            let smallest = i;

            if (leftChildIndex <= this.lastIndex() && this.compare(this.heap[smallest], this.heap[leftChildIndex]) > 0) {
                smallest = leftChildIndex;
            } 
            
            if (rightChildIndex <= this.lastIndex() &&             this.compare(this.heap[smallest], this.heap[rightChildIndex]) > 0)
            {
                smallest = rightChildIndex;
            } 

            if (smallest === i) return;
            
            [this.heap[i], this.heap[smallest]] = [this.heap[smallest], this.heap[i]]

            i = smallest;
        }
    }
}


class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums: number[], k: number): number[] {
        const count: Record<number, number> = {}

        for (let i = 0; i < nums.length; i++) {
            if (count[nums[i]] !== undefined) {
                count[nums[i]]++;
            } else {
                count[nums[i]] = 1;
            }
        }

        const maxHeap = new MyPriorityQueue<{ value: number, freq: number }>((a, b) =>  b.freq - a.freq );

        for (let [num, freq] of Object.entries(count)) {
            maxHeap.enqueue({ value: num as unknown as number, freq });
        }

        const res: number[] = []
        for (let i = 0; i < k; i++) {
            res[i] = maxHeap.dequeue().value;
        }
        return res;
    }
}

