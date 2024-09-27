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