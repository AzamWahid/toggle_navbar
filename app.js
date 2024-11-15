let menuShow = false;

function toggleMenu() {

    menuShow = !menuShow;

    if (menuShow) {
        document.querySelector('.mobMenuItems').classList.toggle('showMobNavItems')
    }
    else {
        document.querySelector('.mobMenuItems').classList.toggle('showMobNavItems')
    }
    // menuShow = false;
    console.log(menuShow);
}

function myFunction(x) {
    if (x.matches) { // If media query matches
        document.querySelector('.mobMenuItems').classList.remove('showMobNavItems')
    } else {
    }
}

// Create a MediaQueryList object
var x = window.matchMedia("(max-width: 769px)")

// Call listener function at run time
myFunction(x);

// Attach listener function on state changes
x.addEventListener("change", function () {
    myFunction(x);
});