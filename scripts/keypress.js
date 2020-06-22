var eventHub = document.querySelector(".container")

const keypress = () => {
  eventHub.addEventListener("keypress", event => {
    var display = document.querySelector(".displayText")
    if (event.key == "0" || event.key == "96") {
      display.value += "0"
    } else if (event.key == "1" || event.key == "97") {
      display.value += "1"
    } else if (event.key == "2" || event.key == "98") {
      display.value += "2"
    } else if (event.key == "3" || event.key == "99") {
      display.value += "3"
    } else if (event.key == "4" || event.key == "100") {
      display.value += "4"
    } else if (event.key == "5" || event.key == "101") {
      display.value += "5"
    } else if (event.key == "6" || event.key == "102") {
      display.value += "6"
    } else if (event.key == "7" || event.key == "103") {
      display.value += "7"
    } else if (event.key == "8" || event.key == "104") {
      display.value += "8"
    } else if (event.key == "9" || event.key == "105") {
      display.value += "9"
    }
  })

}
export default keypress