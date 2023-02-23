// Time to search log(n)
function binarySearch(array: number[], valueToSearch: number): number {
  let lowIndex = 0;
  let highIndex = array.length - 1;

  while (lowIndex < highIndex) {
    const middleIndex = Math.floor((lowIndex + highIndex) / 2);
    const value = array[middleIndex];

    if (value === valueToSearch) {
      return middleIndex;
    }

    if (value > valueToSearch) {
      highIndex = middleIndex - 1;
    } else {
      lowIndex = middleIndex + 1;
    }
  }

  return -1;
}

export { binarySearch };
