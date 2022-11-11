import { users } from './users.js'

const VALID_FIELDS = ['usr', 'eme', 'psw', 'age', 'loc', 'fll']

const getObjFromString = (flatstring) => {
  let obj = {}
  flatstring
    .split(' ')
    .filter((o) => o.trim())
    .forEach((attr) => {
      let attributeObj = attr.split(':')
      obj[attributeObj[0]] = attributeObj[1]
    })
  return obj
}

const getValidUsers = (input) => {
  let validUsers = []
  input.split('\n\n').forEach((line) => {
    let obj = getObjFromString(line.trim().replaceAll('\n', ' '))
    if (
      Object.keys(obj).length !== 0 &&
      VALID_FIELDS.every((field) => Object.keys(obj).includes(field))
    )
      validUsers.push(obj)
  })
  return validUsers
}

const list = getValidUsers(users)
console.log(`submit ${list.length}${list[list.length - 1].usr}`)
