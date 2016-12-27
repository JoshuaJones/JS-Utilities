function removeArrayItem(arr, item) {
    let i = 0;
    while (i < arr.length) {
        if (arr[i] == item) {
            arr.splice(i, 1);
        } else {
            i++;
        }
    }
};