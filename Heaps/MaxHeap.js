class MaxHeap {
    constructor(arr)
    {
        this.items = [];
        this.heap_length = 0;

        for(let i=0;i<arr.length;i++)
        {
            this.items[i+1] = arr[i];
            this.heap_length++
        }
        for(let i = Math.floor(this.heap_length/2);i>=1 ; i--)
        {
            this.max_heapify(i);
        }
        if(arr.length==0)
        {
            this.items.push(undefined);
        }
    }
    max_heapify(i)
    {
        let left = 2 * i;
        let right = 2 * i+1;
        let largest = i;
        if(left <= this.heap_length && this.items[left] > this.items[i])
            largest = left;
        if(right <= this.heap_length && this.items[right] > this.items[largest])
            largest = right;

        if(largest != i)
        {
            let temp = this.items[i];
            this.items[i] = this.items[largest];
            this.items[largest] = temp;
            this.max_heapify(largest);
        }
    }

    bottom_up_heapify(i)
    {
        let parent = Math.floor(i/2);
        if(this.items[parent] < this.items[i])
        {
            let temp = this.items[parent];
            this.items[parent] = this.items[i];
            this.items[i] = temp;
            this.bottom_up_heapify(parent);
        }
    }
    insert(element)
    {
        this.items.push(element);
        this.heap_length++;
        this.bottom_up_heapify(this.heap_length);
    }

    extract_max()
    {
        if(this.heap_length==0)
            return 'No elements in heap'
        let max_element = this.items[1];
        let temp = this.items[this.heap_length];
        this.items[1] = temp;
        this.heap_length--;
        this.items.pop();
        this.max_heapify(1);
        return max_element;
    }

    current_heap()
    {   let heap_items = []
        for(let i=1;i<=this.heap_length;i++)
            heap_items.push(this.items[i])

            return heap_items;
    }

}

module.exports = MaxHeap;