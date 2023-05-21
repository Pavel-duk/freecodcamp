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

//Функция выводит предложение приветствия с введенным пользователе именем
function greet(name){
    const gretting = `Hello, ${name} how are you doing today?`
    return gretting
  }
  //Функция выводит предложение приветствия с введенным пользователе именем
function greet(name){
  const gretting = `Hello, ${name} how are you doing today?`
  return gretting
}
//остаток от деления и округление к меньшему числу
function litres(time) {
  var litr = Math.floor(time/2);
  return litr;
}
//true or false
function boolToWord( bool ){
  if (bool) {
    return "Yes"
  }
  return "No"
}
//true and false
function booleanToString(b){
  if (b) {
    return "true";
  }
  return "false";
}
//замена элементов в строке
function fakeBin(x){
  let arr = x.split('');
  console.log(arr);
  var newList = arr.map(function(item) {
    if(item < 5) {
      return item = 0;
    } else if (item >= 5) {
      return item = 1;
    }
  });
  let finStr = newList.join("");
  console.log(newList);
  return finStr
}
//перемножение всех элементов массива
function grow(x){
  var total = 1;

  for (var i = 0; i < x.length; ++i) {
    total *= x[i];
  }
  return total;
}