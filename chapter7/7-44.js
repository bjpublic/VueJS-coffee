const john = { age: 13 }

Object.freeze(john) // 객체를 동결한다

john.age = 10 // 속성의 갱신
john.name = 'John' // 속성의 추가
delete john.age // 속성의 삭제

console.log(Object.isFrozen(john)) // true
console.log(john) // { age: 13 }

Object.freeze(john)

function updateProp () {
  'use strict';
  john.age = 10
}

updateProp()
