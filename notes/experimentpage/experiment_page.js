
// Dropdown
function show(menuItem) {
  var pic = "";
  switch (menuItem) {
    case 'argyle':
      pic = "../../images/argyle.png"
      break;
    case 'squares':
      pic = "../../images/squares.png"
      break;
    case 'zombie':
      pic = "../../images/icon.png"
      break;
    default:
  }
  document.getElementById('thumb').src = pic.replace('90x90', '225x225');
}

//  BACK BUTTON
yes_back_button = function() {
   return false;
}
