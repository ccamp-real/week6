var navbar = document.getElementById("navbar");
// test
console.log(navbar);

var showcase = document.getElementById("showcase");
// test
console.log(showcase);

var footer = document.getElementById("footer");
// test
console.log(footer);

// get node list of footer variable and assign it to var footerNodes
var footerNodes = footer.childNodes;
console.log(footerNodes);


// get html collection of footer variable and assign it to var footerChildren
var footerChildren = footer.children;
console.log(footerChildren);


// store all elements with class nav-link and store to variable navLinks
var navLinks = document.getElementsByClassName("nav-link");
console.log(navLinks);

// get ul and store it to variable named ul
var ul = document.querySelector("ul");
console.log(ul);

// number 10
console.log(ul.children);
var aboutLi = ul.children[1];
console.log(aboutLi);

// idk how to get it to show the text between the li tags but if you hover over it it highlights the about part in the nav bar