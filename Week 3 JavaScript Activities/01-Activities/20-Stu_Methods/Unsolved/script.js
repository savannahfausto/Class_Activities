var constellations = ["Orion", "Scorpius", "Lyra", "Ursa Major", "Ursa Minor"];
var planets = ["Earth", "Saturn", "Mars", "Jupiter", "Uranus", "Venus"];
var star = "polaris";

// WRITE YOUR CODE BELOW

//adds string `"Canis Major"` as the first element of the `constellations` array and no elements are removed. 

constellations.unshift ("Canis Major");
console.log (constellations);

//removes `"Venus"` from the `planets` array.

planets.pop ();
console.log (planets);

//joins the arrays `constellations` and `planets` to form a new array named `galaxy`. The arrays `constellations` and `planets` should not be altered.
var galaxy = constellations.concat(planets);
console.log (galaxy);

//converts the string `"polaris"  into all capital letters and the new string is stored in a variable.
var capitalStar = star.toUpperCase();
console.log (capitalStar);