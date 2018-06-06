

function removeFromMinHeap(heap){
var min=heap[1]
var minIndx=1;
if(heap.length<3){
    console.log("only one in array")
    return heap[1];
    heap.pop()
}
else{
    for (var i=1;i<heap.length;i++){
        if(min>heap[i]){
            min=heap[i];
            minIndx=i;
            }
        }

    for(i=minIndx;i<heap.length;i++){
        heap[i]=heap[i+1]
    }
    heap.pop()

}
return min;

}    
heap=[undefined, 3, 12, 8, 17, 13, 15, 10]
console.log(heap)

console.log(removeFromMinHeap(heap));
console.log(heap)
heap=[undefined, 8]
removeFromMinHeap(heap);
console.log(heap)

