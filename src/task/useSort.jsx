function useSort(data, reverse = false) {

  let sortedData = [...data];

  sortedData.sort((a, b) => a - b);

  if (reverse === true) {
    sortedData.reverse();
  }

  return sortedData;
}

export default useSort;