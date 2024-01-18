//funktionen kører kun på mobilformen
function navbartoggle() {
  //variablen trækker på id'et navbar
  var navbar = document.getElementById("navbar");
  //Hvis betingelsen kan blive opfyldt, så vises navbaren ikke. Så display none bliver anvendt.
  if (navbar.style.display === "block") {
    navbar.style.display = "none";
  }
  // Hvis man ikke kan se burgermenuen (linksne i block format), sørger den for at den kommer frem når man trykker.
  else {
    navbar.style.display = "block";
  }
}
