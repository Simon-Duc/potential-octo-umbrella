function getValue() {
    alert (Math.random() < 0.5);
}

if (window.matchMedia("(min-width: 1024px)").matches) {

    document.querySelectorAll(".courses-details").forEach(
        (coursesDetail) => {
            coursesDetail.setAttribute("open", "")
        }
    );
}