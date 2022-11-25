const getPossiblePass = (min, max) => {
  let possPassList = []
  for (let i = min; i <= max; i++) {
    if (isPasswordOk(i)) possPassList.push(i)
  }

  console.log(`submit ${possPassList.length}-${possPassList[55]}`)
}

const isPasswordOk = (password) => {
  let stringPass = password.toString()
  if (stringPass.length !== 5) return false

  let fiveCounter = 0
  stringPass.split('').forEach((digit) => {
    if (digit === '5') fiveCounter += 1
  })
  if (fiveCounter < 2) return false

  let current = 0
  return stringPass.split('').every((digit) => {
    if (current > digit) return false

    current = digit
    return true
  })
}

getPossiblePass(11098, 98123)

console.log('-----------')

console.log(isPasswordOk(55678)) //OK

console.log(isPasswordOk(12555)) //OK

console.log(isPasswordOk(55555)) //OK

console.log(isPasswordOk(12345)) //NO OK

console.log(isPasswordOk(57775)) //NO OK

console.log('-----------')
