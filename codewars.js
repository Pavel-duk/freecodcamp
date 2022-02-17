//функция проверяет чтобы пин был 4 или 6 цифр, а также состоял только из цифр. Если все выполняется выдает true, в противном случае выдает false 
function validatePIN (pin) {
    let list = ["0","1","2","3","4","5","6","7","8","9"]
    if (pin == '') {
        return false
      }
    for(var i = 0; i < pin.length; i++) {
      if (list.indexOf(pin[i]) == -1){
        return false
      }
      if (pin.length < 4) {
        return false
      }
      if (pin.length == 5) {
        return false
      }
      if (pin.length > 6) {
        return false
      }
    }
    if (pin.length == 4){
      return true 
    }
    if (pin.length == 6){
      return true 
    }
}