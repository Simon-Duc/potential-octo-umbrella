function getValue() {
    let random = Math.floor(Math.random() * 2)
    console.log(random)
    if (random === 0){
        alert ("Vrai ! 	✅")
        }
    else alert ("Faux ! ❌")     
    }

if (window.matchMedia("(min-width: 1024px)").matches) {

    document.querySelectorAll(".courses-details").forEach(
        (coursesDetail) => {
            coursesDetail.setAttribute("open", "")
        }
    );
}