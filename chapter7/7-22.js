const sum = [1, 2, 3].reduce((acc, current, index) => {
  console.log(`이전 결과는 ${acc}, 현재 원소인 ${index}번 원소는 ${current}입니다.`)
  return acc + current;
})

console.log(sum) // 6

const sum2 = [1, 2, 3].reduce((acc, current, index) => {
  console.log(`이전 결과는 ${acc}, 현재 원소인 ${index}번 원소는 ${current}입니다.`)
  return acc + current;
}, 0)

console.log(sum2) // 6

const arr = [12, 1, 100, 30]
let max = 0;
arr.forEach(item => {
  max = Math.max(max, item)
})

console.log(max) // 100

const uniqueElements = [1, 1, 2, 3, 5, 3].reduce((acc, current) => {
  if(acc.indexOf(current) < 0) {
    acc.push(current);
  }
  return acc;
}, [])

console.log(uniqueElements) // [1, 2, 3, 5]

const people = ['John', 'John', 'Evan', 'Martin', 'Martin'];
const count = people.reduce((acc, current) => {
  if (acc.hasOwnProperty(current)) {
    acc[current]++
  }
  else {
    acc[current] = 1
  }
  return acc;
}, {})

console.log(count)
