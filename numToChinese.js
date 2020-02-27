const numMap = {
  '0': '零',
  '1': '一',
  '2': '二',
  '3': '三',
  '4': '四',
  '5': '五',
  '6': '六',
  '7': '七',
  '8': '八',
  '9': '九'
}

const unit = {
  '0': '千万',
  '1': '百万',
  '2': '十万',
  '3': '万',
  '4': '千',
  '5': '百',
  '6': '十'
}

const chineseNum = num => {
  const strNum = num + ''
  return strNum.split('').reduce((prev, next, index, arr) => {
    const str = numMap[next]
    if (str === '零') {
      return prev + '零'
    }
    const wei = 5 - arr.length + index
    return unit[wei] ? prev + str + unit[wei] : prev + str
  }, '')
}

const toChineseNum = num => {
  // TODO

  const chinese = chineseNum(num)
  const set = new Set([...chinese])
  const arr = [...set]
  if (arr.length !== 1) {
    if (arr[arr.length - 1] === '零') {
      arr.pop()
    }
  }
  console.log(arr.join(''))
  return arr.join('')
}

toChineseNum(10023002)
toChineseNum(10003)
toChineseNum(12345)
toChineseNum(234)
toChineseNum(1)
toChineseNum(0)
toChineseNum(10000)
