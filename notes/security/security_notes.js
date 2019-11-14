
// Dropdown
function show(menuItem) {
  var pic = "";
  switch (menuItem) {
    case 'injection':
      pic = "../../images/argyle.png"
      break;
    default:
  }
  document.getElementById('thumb').src = pic.replace('90x90', '225x225');
}

//  BACK BUTTON
yes_back_button = function() {
   return false;
}
