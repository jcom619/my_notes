
function show(menuItem) {
  var pic = "";
  var demoLink = "";

  switch (menuItem) {
    case 'Scroll':
      pic = "image/scroll.png"
      demoLink = "scroll/scroll.html"
      break;
    default:
  }
  document.getElementById('thumb').src = pic.replace('90x90', '225x225');
}


//  BACK BUTTON
yes_back_button = function() {
   // Your code here
   return false;
}
