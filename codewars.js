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
//проверка на четность суммы массива
function oddOrEven(array) {
  var total = 1;
  for (var i = 0; i < array.length; ++i) {
    total += array[i];
  }
  if (total%2===0){
    return "odd";
  } 
  return "even";
}
//переворот слов в строке предложении
function reverseWords(str) {
  let list = str.split(' ');
  console.log(list);
  var nameLengths = list.map(function(name) {
    return name.split("").reverse().join("");
  }); 
  console.log(nameLengths);
  list = nameLengths.join(' ');
  return list;
}
//логические переменные
function lovefunc(flower1, flower2){
  let n = 0;
  if (flower1%2===0){
     n+=1;
  }
  if (flower2%2===0){
     n+=1;
  } 
  console.log(n);
  if (n%2===0){
    return false;
  }
  return true;
}
//вычисление среднего бала и оценка
function getGrade (s1, s2, s3) {
  console.log(s1, s2, s3);
  let sum = (s1+s2+s3)/3;
  console.log(sum);
  if (sum >= 90){
   return "A" ;
  }
  if (sum >= 80) {
    return "B";
  }
  if (sum >= 70) {
    return "C";
  }
  if (sum >= 60) {
    return "D";
  }
  if (sum >= 0) {
    return "F";
  }

}
//поиск элемента в строке и его удаление(всех таких элементов)
function removeExclamationMarks(s) {
  const regExp = "!";
  
  return s.replace(/!/g, '');
}