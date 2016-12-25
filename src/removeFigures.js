function removeFigures(str) {
    return str.toLowerCase().replace(/[^a-z,0-9,-]/g, '');
};