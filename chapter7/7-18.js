const isValid = [1, 2, 3].every((item, index, array) => {
  return item < 3
})
const isValid2 = [1, 2, 3].every((item, index, array) => {
  return item > 0
})

// 스크립트 태그가 포함된 부적절한 메세지가 포함되어있다.
const inputValues = ['안녕하세요!', '테스트 메세지 입니다', '<script>alert(1)</script>']
// 모든 메세지들을 검사하여 script 태그가 포함된 메세지가 존재하는 지 검사한다.
const isValid1 = inputValues.every(item => !item.includes('<script>'))

if (isValid1) {
  console.log('올바른 메세지들 입니다')
}
else {
  console.log('올바르지 않은 메세지가 포함되어 있습니다')
}
