// Дан список интов, повторяющихся элементов в списке нет. Нужно преобразовать это множество в строку, сворачивая соседние по числовому ряду числа в диапазоны. Примеры:
// [1,4,5,2,3,9,8,11,0] => "0-5,8-9,11"
// [1,4,3,2] => "1-4"
// [1,4] => "1,4"

const findRanges = (array) => {
    array.sort((a, b) => a-b);
    let ranges = [];
    for (let i = 0; i<array.length; i++) {
        let rangeStart = array[i];
        let rangeEnd;
        while (array[i+1]-array[i] === 1) {
            rangeEnd = array[i+1];
            i++
        }
        // if it's not the last group
        if (rangeEnd) {
        ranges.push(rangeStart+'-'+rangeEnd)
        }
        else {
            ranges.push(rangeStart)
        }
    }
    console.log(ranges.join(','))
}

findRanges([1,4,5,2,3,9,8,11,0])
findRanges([1,4,3,2])
findRanges([1,4])