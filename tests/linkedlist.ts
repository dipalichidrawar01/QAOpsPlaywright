class Node {
    value:number
    next: Node|null
    constructor(value:number) {
        this.value = value;
        this.next = null;
    }//End of constructor
}//End of Class
const first=new Node(10)
const second=new Node(20)
const third=new Node(30)
first.next=second
second.next=third
//Traverse and print
let initialval:Node|null=first
while(initialval!==null){
   const currentval=initialval.value
    console.log(currentval)
    initialval=initialval.next

}