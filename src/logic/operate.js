import BigJs from 'big.js'

export default function operate(numberOne, numberTwo, operation) {
  try {
    const numberOneBig = BigJs(parseFloat(numberOne))
    const numberTwoBig = BigJs(parseFloat(numberTwo))

    switch (operation) {
      case '/':
        return numberOneBig.div(numberTwoBig).valueOf()
      case 'X':
        return numberOneBig.times(numberTwoBig).valueOf()
      case '-':
        return numberOneBig.minus(numberTwoBig).valueOf()
      case '+':
        return numberOneBig.plus(numberTwoBig).valueOf()
      default:
        return new BigJs(0).valueOf();

    }
  }
  catch (e) {
    return e.message.substring(8);
  }
}
