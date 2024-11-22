function toggleArrowVisibility() {
  if (window.scrollY & gt; 100) {
    arrow.style.opacity = "1";
    arrow.style.visibility = "visible";
  } else {
    arrow.style.opacity = "0";
    arrow.style.visibility = "hidden";
  }
}