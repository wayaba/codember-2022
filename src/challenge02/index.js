const CODE = `11610497110107115 102111114 11210897121105110103 9911110010110998101114 11210810197115101 11510497114101`

const getSentence = (code) => {
  const words = code.split(' ')

  let sentence = ''
  let toDecode = ''
  words.forEach((word) => {
    word.split('').forEach((letter) => {
      toDecode += letter
      if (toDecode !== '' && Number(toDecode) >= 97) {
        sentence += String.fromCharCode(toDecode)
        toDecode = ''
      }
    })
    toDecode = ''
    sentence += ' '
  })

  return sentence
}

console.log(`submit ${getSentence(CODE)}`)
