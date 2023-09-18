function createSortedList() {
    let elements = [];

    let result = {
        add,
        remove,
        get,
        size: 0,
    };

    return result;

    function add(num) {
        elements.push(num);
        this.size++;
        elements.sort((a, b) => a - b);
    }

    function remove(index) {
        if (index >= 0 && index < elements.length) {
            elements.splice(index, 1);
            this.size--;
        }
    }

    function get(index) {
        if (index >= 0 && index < elements.length) {
            return elements[index];
        }
    }

}

let list = createSortedList();
list.add(5);
list.add(6);
list.add(7);
console.log(list.get(1)); 
list.remove(1);
console.log(list.get(1));
