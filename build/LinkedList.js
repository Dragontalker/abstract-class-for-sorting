"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LinkedList = void 0;
var Node = /** @class */ (function () {
    function Node(data) {
        this.data = data;
        this.next = null;
    }
    return Node;
}());
var LinkedList = /** @class */ (function () {
    function LinkedList() {
        this.head = null;
    }
    LinkedList.prototype.add = function (data) {
        var node = new Node(data);
        // If there is no Node in head, use it as first element in head.
        if (!this.head) {
            this.head = node;
            return;
        }
        // Loop untill the tail.next property is null.
        var tail = this.head;
        while (tail.next) {
            tail = tail.next;
        }
        // Link the new Node to the end of linked list.
        tail.next = node;
    };
    return LinkedList;
}());
exports.LinkedList = LinkedList;
