(function(){
  let name,
  ouline;
  name = prompt('What\'s your name');
  ouline = name.valueOf(name);
  alert('Welcome ' + ouline);
}())

function openNav() {
  document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}