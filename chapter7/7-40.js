const obj1 = { a: 1, b: 2, c: 3 }
console.log(Object.keys(obj1)) // ['a', 'b', 'c']
console.log(Object.values(obj1)) // [1, 2, 3]

const obj2 = { a: 1, b: 2, c: 3 }
for (let key in obj2) {
  console.log(key, obj2[key])
}

Object.keys(obj2).forEach(key => console.log(key, obj2[key]))

// 두 코드 모두 결과로 나타나는 출력 값은 같다
// a 1
// b 2
// c 3



const parent = { name: 'Foo' }
// parent 객체를 프로토타입으로 가지는 새로운 객체인 child를 생성한다.
const child = Object.create(parent)
// child 객체에 새로운 속성을 추가한다.
child.age = 30

console.log(child)
// { age: 30, __proto__: { name: 'Foo' } }

for (let key in child) {
  console.log(key) // age와 name이 출력된다
}

Object.keys(child).forEach(key => console.log(key)) // age만 출력된다
