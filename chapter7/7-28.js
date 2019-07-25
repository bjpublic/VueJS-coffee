const value = [1, 2, 3].find((item, index, array) => {
  return item === 2
})
const value2 = [1, 2, 3].find((item, index, array) => {
  return item === 5
})

console.log(value) // 2
console.log(value2) // undefined

const index = [1, 2, 3].findIndex((item, index, array) => {
  return item === 2
})
const index2 = [1, 2, 3].findIndex((item, index, array) => {
  return item === 5
})

console.log(index) // 1
console.log(index2) // -1

const arr = [{ score: 100 }, { score: 30 }, { score: 75 }]

// findIndex 메소드의 경우 함수를 이용하여 원하는 원소를 바로 찾을 수 있다.
arr.findIndex(item => item.score === 100)

// indexOf 메소드의 경우 찾고자 하는 원소만으로 이루어진 배열을 사용해야 한다.
arr.map(item => item.score).indexOf(2)
