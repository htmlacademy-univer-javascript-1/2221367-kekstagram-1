const getNumberFromRange = (begin, end) => (begin >= 0 && end >= begin) ? Math.floor(Math.random() * (begin - end + 1)) + end : 'Error';
getNumberFromRange(0, 6)

const checkMaxLengthString = (string, maxCountSymbol) => string.length < maxCountSymbol;
checkMaxLengthString("Кекс", 7)