const CleanText = ({text}) => {
  const stringChanged = text
    ?.replace(/,/g, ' ')
    ?.replace(/\//g, '')
    ?.replace(/%/g, '')
    ?.toLowerCase()
  const words = stringChanged ? stringChanged.split(' ') : undefined

  for (let i = 0; i < words.length; i++) {
    if (words[i][0] == undefined) {
    } else {
      words[i] = words[i][0].toUpperCase() + words[i].substr(1) + ' '
    }
  }
  return words
}

export default CleanText
