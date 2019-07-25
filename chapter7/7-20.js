const isValid = [1, 2, 3].some((item, index, array) => {
  return item < 2
})
const isValid2 = [1, 2, 3].some((item, index, array) => {
  return item < 0
})

console.log(isValid) // true
console.log(isValid2) // false

const events = [
  { name: '수능 할인 이벤트!', targetAge: 19 },
  { name: '대학 새내기 할인 이벤트!', targetAge: 20 },
  { name: '취업준비생 할인 이벤트!', targetAge: 26 }
]
const user = { name: 'Evan', age: 20 }

const isEventTargetUser = events.some(event => event.targetAge === user.age)
console.log(isEventTargetUser)
