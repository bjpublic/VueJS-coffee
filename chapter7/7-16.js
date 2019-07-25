const arr = [1, 2, 3].filter((item, index, array) => {
  return item < 3
})

console.log(arr) // [1, 2]
const users = [{name: 'John'}, {name: 'Boss'}, {message: 'Hi!'}];
const arr2 = users.filter(item => {
  return item.name;
})

console.log(arr2) // [{ name: 'John' }, { name: 'Boss' }]
