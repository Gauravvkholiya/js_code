function card1(inputtxt) {
  var cardno = /^(?:3[47][0-9]{13})$/;
  if (inputtxt.value.match(cardno)) {
    return true;
  } else {
    alert("Not a valid Amercican Express credit card number!");
    return false;
  }
}
function card2(inputtxt) {
  var cardno = /^(?:3[47][0-9]{13})$/;   
  if (inputtxt.value.match(cardno)) {
    return true;
  } else {
    alert("Not a valid master  credit card number!");
    return false;
  }
}
function card3(inputtxt) {
  var cardno = /^(?:3[47][0-9]{13})$/;
  if (inputtxt.value.match(cardno)) {
    return true;
  } else {
    alert("Not a valid visa credit card number!");
    return false;
  }
}
