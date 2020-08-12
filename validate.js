//  Student name: Nguyen Hoang Trung Hieu
//  Student ID:   142914191

function formValidate(form) {
  return validateAddress() && validateComment();
}

function validateAddress() {
  var passAlpha = false;
  var passNum = false;
  var alphString = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  var numString = '0123456789';
  var inputValue = document.form1.Address.value.trim();
  var error1 = document.getElementById('error1');
  if (inputValue.length == 0) {
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
  form1.Address.focus();
  return false;
}

function validateComment() {
  var input = document.form1.Status.value.trim();
  var error3 = document.getElementById('error3');
  if (input.length > 0) {
    return true;
  }
  error3.innerHTML = 'Please enter your comment!';
  input.focus();
  return false;
}

function showBox() {
  var elem = document.querySelector('textarea[name=Reason]');
  elem.required = true;
  elem.disabled = false;
  elem.classList.add('active-box');
}

function ignoreBox() {
  var elem = document.querySelector('textarea[name=Reason]');
  elem.innerHTML = '';
  elem.disabled = true;
  elem.classList.remove('active-box');
}
