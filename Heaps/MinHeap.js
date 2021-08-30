class MinHeap {
    constructor(arr)
    {
        this.items = [];
        this.heap_length = 0;

        for(let i=0;i<arr.length;i++)
        {
            this.items[i+1] = arr[i];
            this.heap_length++;
        }

        for(let i= Math.floor(this.heap_length/2);i>=1;i--)
        {
            this.min_heapify(i)
        }

        if(arr.length==0)
            this.items.push(undefined);
    }

    min_heapify(i)
    {
        let left = 2 * i;
        let right = 2 * i + 1;
        let minimum = i;
        if(left<=this.heap_length && this.items[left] < this.items[i])
            minimum = left;

        if(right<=this.heap_length && this.items[right] < this.items[minimum])
            minimum = right;

        if(minimum != i)
        {
            let temp = this.items[i];
            this.items[i] = this.items[minimum];
            this.items[minimum] = temp;
            this.min_heapify(minimum);
        }
    }

    extract_min()
    {
        if(this.heap_length==0)
            return "No elements in heap"
        let minimum = this.items[1];
        let temp = this.items[this.heap_length]
        this.heap_length--;
        this.items.pop()
        this.items[1] = temp;
        this.min_heapify(1);

        return minimum;

    }

    current_heap()
    {
        let heap_items = [];

        for(let i=1;i<=this.heap_length;i++)
        {
            heap_items.push(this.items[i])
        }

        return heap_items
    }
}

module.exports = MinHeap;