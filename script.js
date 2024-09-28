let elementsArray = document.querySelectorAll(".appear-on-scroll");
console.log(elementsArray);
window.addEventListener('scroll', fadeIn );
function fadeIn() {
    for (let i = 0; i < elementsArray.length; i++) {
        let elem = elementsArray[i]
        let distInView = elem.getBoundingClientRect().top - window.innerHeight + 20;
        if (distInView < 0) {
            elem.classList.add("fade-in");
        } else {
            // elem.classList.remove("fade-in");
        }
    }
}
fadeIn();

function cookieBannerSaveConsent(e) {
    document.cookie = "gdprConsent=true; path=/;"
    checkHideCookieBanner()
    // e.preventDefault();
}

function checkHideCookieBanner() {
    let cookie = document.cookie.split(";").find((cookie) => cookie.trim().startsWith("gdprConsent="))
    if (cookie !== undefined && cookie.trim() === "gdprConsent=true") {
        const banner = document.querySelector(".cookie-banner-outer");
        banner.classList.add("hidden")
    }
}

window.addEventListener('load', checkHideCookieBanner)