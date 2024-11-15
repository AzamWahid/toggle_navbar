let menuShow = false;

function toggleMenu() {

    menuShow = !menuShow;

    if (menuShow) {
        document.querySelector('.mobMenuItems').classList.toggle('showMobNavItems')
    }
    else {
        document.querySelector('.mobMenuItems').classList.toggle('showMobNavItems')
    }
}