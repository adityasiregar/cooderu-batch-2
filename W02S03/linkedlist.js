
class Node  {
    constructor(number) {
        this.number = number 
        this.next = null
    }

    add(number) {
        let current = this
        while(current.next != null) {
            current = current.next
        }
        current.next = new Node(number)
    }

    insertAt(index, number) {
        let currIdx = 1 
        let current = this
        while(current.next != null) {
            current = current.next
            currIdx++
            if(currIdx == index - 1 ) {
                let newNode = new Node(number)
                newNode.next = current.next
                current.next = newNode
                break;
            }
        }
    }
}

node1 = new Node(1)
node1.add(2)
node1.add(3)
node1.add(5)

node1.insertAt(4, 4)

console.log(node1.next.next)