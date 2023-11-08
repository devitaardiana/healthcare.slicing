
  let myNavbar = document.getElementById("myNavbar");

// OnScroll event handler
function onScroll2() {
  // Get scroll value
  const scroll = document.documentElement.scrollTop;
  console.log(scroll);

  // If scroll value is more than 0 - add class
  if (scroll > 10) {
    myNavbar.classList.add("navbar-transition");
    myNavbar.classList.remove("myNavbar");
  } else {
    myNavbar.classList.remove("navbar-transition");
    myNavbar.classList.add("myNavbar");
  }
}

// Use the function

window.addEventListener("scroll", onScroll2);