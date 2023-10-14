document.querySelector(".menu").addEventListener("click", function(){
    let nav = document.querySelector("nav ul");
    let menu = document.querySelector(".menu");
    if (nav.classList.contains("show")){
        nav.classList.remove("show")
        menu.classList.remove("collapse")
    } else{
        nav.classList.add("show")
        menu.classList.add("collapse")
    }
})