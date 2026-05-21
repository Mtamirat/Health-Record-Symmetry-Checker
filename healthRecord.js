class HealthMetricNode {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

function isHealthRecordSymmetric(head) {
    if (!head || !head.next) return true;

    let slow = head;
    let fast = head;

    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }

    let prev = null;

    while (slow) {
        let nextTemp = slow.next;
        slow.next = prev;
        prev = slow;
        slow = nextTemp;
    }

    let first = head;
    let second = prev;

    while (second) {
        if (first.value !== second.value) {
            return false;
        }

        first = first.next;
        second = second.next;
    }

    return true;
}

function createList(arr) {
    if (arr.length === 0) return null;

    let head = new HealthMetricNode(arr[0]);
    let current = head;

    for (let i = 1; i < arr.length; i++) {
        current.next = new HealthMetricNode(arr[i]);
        current = current.next;
    }

    return head;
}

// TEST CASES

console.log(
    isHealthRecordSymmetric(
        createList([90,120,140,120,90])
    )
);

console.log(
    isHealthRecordSymmetric(
        createList([80,100,120,110])
    )
);

console.log(
    isHealthRecordSymmetric(
        createList([70,85,85,70])
    )
);

console.log(
    isHealthRecordSymmetric(
        createList([])
    )
);

console.log(
    isHealthRecordSymmetric(
        createList([95])
    )
);

console.log(
    isHealthRecordSymmetric(
        createList([88,99])
    )
);