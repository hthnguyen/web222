//  Student name: Nguyen Hoang Trung Hieu
//  Student ID:   142914191

function formValidate() {
  return validateAddress();
}
formValidate();
validateAddress();
showBox();
ignoreBox();
function validateAddress() {
  var passAlpha = false;
  var passNum = false;
  var alphString = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  var numString = '0123456789';
  var inputValue = document.form1.Address.value.trim();
  var error1 = document.getElementById('error1');
  if (inputValue.length === 0) {
    error1.innerHTML = 'The address is can not be empty';
    return false;
  }
  for (var i = 0; i < inputValue.length; i++) {
    if (alphString.indexOf(inputValue.substr(i, 1)) >= 0) passAlpha = true;
    if (numString.indexOf(inputValue.substr(i, 1)) >= 0) passNum = true;
  }
  if (passAlpha && passNum) {
    return true;
  }
  error1.innerHTML = 'The addres must be combined between number and letter.';

  return false;
}

function showBox() {
  var elem = document.querySelector('input[name=Order_Number]');
  var title_ = document.querySelector('.orderNo');
  elem.required = true;
  elem.disabled = false;
  title_.classList.add('active-box');
  elem.classList.add('active-box');
}

function ignoreBox() {
  var elem = document.querySelector('input[name=Order_Number]');
  var title_ = document.querySelector('.orderNo');
  elem.disabled = true;
  title_.classList.remove('active-box');
  elem.classList.remove('active-box');
}

