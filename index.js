let head = null;

function Node(value) {
    this.value = value;
    this.next = null;
}

function insertAtBeginning() {
    const value = prompt("Enter node value:");
    if (value !== null) {
        const newNode = new Node(value);
        newNode.next = head;
        head = newNode;
        renderList();
    }
}

function insertAtEnd() {
    const value = prompt("Enter node value:");
    if (value !== null) {
        const newNode = new Node(value);
        if (head === null) {
            head = newNode;
        } else {
            let current = head;
            while (current.next) {
                current = current.next;
            }
            current.next = newNode;
        }
        renderList();
    }
}

function insertAtPosition() {
    const value = prompt("Enter node value:");
    const position = parseInt(prompt("Enter position (0-indexed):"));
    if (value !== null && !isNaN(position)) {
        const newNode = new Node(value);
        if (position === 0) {
            newNode.next = head;
            head = newNode;
        } else {
            let current = head;
            for (let i = 0; i < position - 1 && current; i++) {
                current = current.next;
            }
            if (current) {
                newNode.next = current.next;
                current.next = newNode;
            } else {
                alert("Position is out of bounds.");
                return;
            }
        }
        renderList();
    }
}

function deleteFromBeginning() {
    if (head) {
        head = head.next;
        renderList();
    } else {
        alert("List is empty.");
    }
}

function deleteFromEnd() {
    if (head) {
        if (head.next === null) {
            head = null;
        } else {
            let current = head;
            while (current.next.next) {
                current = current.next;
            }
            current.next = null;
        }
        renderList();
    } else {
        alert("List is empty.");
    }
}

function deleteAtPosition() {
    const position = parseInt(prompt("Enter position (0-indexed):"));
    if (!isNaN(position) && head) {
        if (position === 0) {
            head = head.next;
        } else {
            let current = head;
            for (let i = 0; i < position - 1 && current; i++) {
                current = current.next;
            }
            if (current && current.next) {
                current.next = current.next.next;
            } else {
                alert("Position is out of bounds.");
                return;
            }
        }
        renderList();
    } else {
        alert("List is empty or invalid position.");
    }
}

function renderList() {
    const container = document.getElementById('container');
    container.innerHTML = '';
    
    let current = head;
    while (current) {
        const nodeElement = document.createElement('div');
        nodeElement.className = 'node';
        nodeElement.textContent = current.value;

        container.appendChild(nodeElement);
        
        if (current.next) {
            const arrowElement = document.createElement('div');
            arrowElement.className = 'arrow';
            container.appendChild(arrowElement);
        }

        current = current.next;
    }
}
