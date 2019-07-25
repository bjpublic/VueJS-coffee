const targetObj = { a: 1, b: 2 }
const sourceObj = { b: 4, c: 3 }
const newObj = Object.assign(targetObj, sourceObj)
console.log(newObj) // { a: 1, b: 4, c: 3 }

const oldObj = { name: 'Foo' }
const notCopied = oldObj

// assign 메소드의 첫번쨰 인자로 빈 객체를 사용하여 oldObj 객체를 복사한다.
const copied = Object.assign({}, oldObj)

console.log(oldObj === notCopied) // true
console.log(oldObj === copied) // false

const oldObj1 = {
  name: 'Foo',
  props: { age: 29 }
}
const newObj1 = Object.assign({}, oldObj1)

newObj1.props.age = 19

console.log(oldObj1 === newObj1) // false
console.log(oldObj1.props.age) // 19

const oldObj2 = {
  name: 'Foo',
  props: { age: 29 }
}
const newObj2 = Object.assign({}, { name: oldObj2.name, props: Object.assign({}, oldObj2.props) })

newObj2.props.age = 19

console.log(oldObj2 === newObj2) // false
console.log(oldObj2.props.age) // 19

const oldObj3 = {
  name: 'Foo',
  props: { age: 29 }
}
const newObj3 = { ...oldObj3, props: { ...oldObj3 }}

const oldObj4 = {
  name: 'Foo',
  props: { age: 29 }
}
const stringified = JSON.stringify(oldObj4)
const newObj4 = JSON.parse(stringified)

console.log(oldObj4.props === newObj4.props) // false
