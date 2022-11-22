import { colors } from './colors.js'

const arr0 = ['red', 'blue', 'red', 'blue', 'green'] // -> 4, blue
const arr1 = ['green', 'red', 'blue', 'gray'] // -> 2, gray
const arr2 = ['blue', 'blue', 'blue', 'blue'] // -> 1, blue
const arr3 = ['red', 'green', 'red', 'green', 'red', 'green'] // -> 6, green
const arr4 = ['red', 'red', 'blue', 'red', 'red', 'red', 'green'] // -> 3, red
const arr5 = [
  'red',
  'blue',
  'green',
  'gray',
  'blue',
  'red',
  'blue',
  'blue',
  'red',
  'red',
  'green',
  'gray',
  'green',
  'red',
  'green',
  'red',
  'green',
  'red',
]

const checkZebra = (list) => {
  let answer = {}
  let currentZebraList = []
  let index = 0
  let largestListLength = 0

  list.forEach((color) => {
    if (currentZebraList.length < 2) {
      if (currentZebraList[0] === undefined || currentZebraList[0] !== color)
        currentZebraList.push(color)
    } else {
      index = (currentZebraList.length + 1) % 2 == 0 ? 1 : 0
      if (currentZebraList[index] !== color) {
        let prevColor = currentZebraList[currentZebraList.length - 1]
        currentZebraList = []
        currentZebraList.push(prevColor)
      }
      currentZebraList.push(color)
    }

    if (currentZebraList.length >= largestListLength) {
      answer = { zebraCounter: currentZebraList.length, lastColor: color }
      largestListLength = currentZebraList.length
    }
  })
  console.log(answer)
}

checkZebra(arr0)
console.log('-----------')
checkZebra(arr1)
console.log('-----------')

checkZebra(arr2)
console.log('-----------')

checkZebra(arr3)
console.log('-----------')

checkZebra(arr4)
console.log('-----------')

checkZebra(arr5)
console.log('-----------')

checkZebra(colors)
console.log('-----------')
