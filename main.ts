import { binarySearch } from './src/search/binary-search';

const array = [1, 2, 3, 4, 5, 6, 7, 8, 10];
const valueToSearch = 8;
const foundedIndex = binarySearch(array, 8);

console.log({ array, valueToSearch, foundedIndex });
