const arr = [1, 2, 3].map((item, index, array) => {
  return item + 1
});

console.log(arr) // [2, 3, 4]
const arr2 = [1, 2, 3].map((item, index, array) => {
  if (item !== 2) {
    return item
  }
})

console.log(arr2) // [1, undefined, 3]
