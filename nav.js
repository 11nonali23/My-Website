// When the user scrolls the page, execute myFunction
window.onscroll = function() {setSticky()};

// Get the header
var navigation = document.getElementById("nav-top");

// Get the offset position of the navbar
var sticky = navigation.offsetTop;

// Add the sticky class to the navigation when you reach its scroll position. Remove "sticky" when you leave the scroll position
function setSticky() {
  if (window.pageYOffset > sticky) {
    navigation.classList.add("navigation-sticky");
    colorLinks(true);
  } else {
    navigation.classList.remove("navigation-sticky");
    colorLinks(false);
  }
}

//This function is useful if navbar changes color, so I will change text color to make it visible
function colorLinks(isSticky) {
  var links = document.getElementsByTagName("a");
  if (isSticky) {
    for(let i=0;i<links.length;i++) 
      links[i].style.color = "var(--white)";  
  }
  else {
    for(let i=0;i<links.length;i++)
      links[i].style.color = "var(--white)";  
  }  
}