import { frameworks } from './frameworks.js'

const findWinnerFramework = (list) => {
  const filterList = (newList, firstTime) => {
    const partialList = []
    newList.forEach((item, index) => {
      if (index % 2 === 0) {
        firstTime
          ? partialList.push(`${item}-${index}`)
          : partialList.push(item)

        if (newList[index + 1] === undefined && newList.length % 2 !== 0) {
          partialList.splice(0, 1)
        }
      }
    })

    return partialList.length === 1
      ? partialList
      : filterList(partialList, false)
  }

  return `submit ${filterList(list, true)}`
}

const exampleList = ['a0', 'b1', 'c2', 'd3', 'e4', 'f5', 'g6', 'h7', 'i8', 'j9']
console.log(findWinnerFramework(exampleList)) // submit e4-4

console.log(findWinnerFramework(frameworks)) // submit Diana-100
