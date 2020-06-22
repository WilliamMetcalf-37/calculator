
var mathArray = []
var receiptArray = []

var eventHub = document.querySelector(".container")




const calcfunctions = () => {

  eventHub.addEventListener("click", event => {
    let [prefix, buttonValue] = event.target.id.split("--")
    if (buttonValue == "clear") {
      clear()

    }
    if (prefix == "Number") {
      //place number into the display
      var display = document.querySelector(".displayText")
      display.value += buttonValue
    }
    else if (prefix == "Button") {
      //save value from display and do what button wants to do
      if (buttonValue == "equals") {
        var number = document.querySelector(".displayText")
        receiptArray.push(number.value)
        if (number.value == "") {
          number.value = mathArray[0]
        } else {
          var reversedMathArray = mathArray.reverse()
          console.log(reversedMathArray[0])
          if (reversedMathArray[0] == "+") {
            number.value = parseInt(number.value, 10) + parseInt(mathArray[1], 10)
          } else if (reversedMathArray[0] == "-") {
            number.value = parseInt(mathArray[1], 10) - parseInt(number.value, 10)
          }
        }
        showReceipt()
      } else if (buttonValue == "plus") {
        var number = document.querySelector(".displayText")
        receiptArray.push(number.value)
        receiptArray.push("+")

        PlusMath()
        number.value = ""
        showReceipt()

      } else if (buttonValue == "minus") {
        var number = document.querySelector(".displayText")
        receiptArray.push(number.value)
        receiptArray.push("-")
        if (mathArray.length == 2) {
          const num1 = parseInt(mathArray[0], 10)

          if (mathArray[1] == "-") {
            const total = num1 - parseInt(number.value, 10)
            mathArray = []
            mathArray.push(total)
            mathArray.push("-")

          }
        } else {
          mathArray.push(number.value)
          mathArray.push("-")

        }


        number.value = ""
        showReceipt()

      } else if (buttonValue == "multiply") {
        var number = document.querySelector(".displayText")

        mathArray.push(number.value)
        mathArray.push("*")
        number.value = ""
        showReceipt()

      } else if (buttonValue == "divide") {
        var number = document.querySelector(".displayText")

        mathArray.push(number.value)
        mathArray.push("/")
        number.value = ""
        showReceipt()

      } else if (buttonValue == "squared") {


      } else if (buttonValue == "cubed") {

      }
    }

  })

  const showReceipt = () => {
    var receipt = document.querySelector(".detailText")

    receipt.value = receiptArray.join("")
  }
  const clear = () => {
    var receipt = document.querySelector(".detailText")
    var display = document.querySelector(".displayText")

    receiptArray = []
    mathArray = []
    display.value = ""
    receipt.value = ""
  }


  const PlusMath = () => {
    var number = document.querySelector(".displayText")


    if (mathArray.length == 2) {
      const num1 = parseInt(mathArray[0], 10)

      if (mathArray[1] == "+") {
        const total = num1 + parseInt(number.value, 10)
        mathArray = []
        mathArray.push(total)
        mathArray.push("+")

      }
    } else {
      mathArray.push(number.value)
      mathArray.push("+")

    }

  }
}


export default calcfunctions