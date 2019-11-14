
function show(menuItem) {
  var pic = "";
  switch (menuItem) {
    case 'commands':
      pic = "image/commands.png"
      break;
    case 'django_structure':
      pic = "image/django_structure.png"
      break;
    case 'first_app1':
      pic = "image/first_app1.png"
      break;
    case 'temps':
      pic = "image/templates.png"
      break;
    case 'static':
      pic = "image/static.png"
      break;
    case 'toolbar':
      pic = "image/toolbar.png"
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
