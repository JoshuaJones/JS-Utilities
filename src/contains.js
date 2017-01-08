function contains(arr, item, returnIndex = false) {
    let i = arr.length;
    while (i--) {
        if (arr[i] === item) {
            return (returnIndex) ? i : true;
        }
    }
    return false;
};