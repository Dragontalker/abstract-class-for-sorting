class Node {
  next: Node | null = null;

  constructor(public data: number) {}
}

export class LinkedList {
  head: Node | null = null;

  add(data: number) : void {
    const node = new Node(data);

    // If there is no Node in head, use it as first element in head.
    if (!this.head) {
      this.head = node;
      return;
    }

    // Loop untill the tail.next property is null.
    let tail = this.head;
    while(tail.next) {
      tail = tail.next
    }

    // Link the new Node to the end of linked list.
    tail.next = node;
  }
}