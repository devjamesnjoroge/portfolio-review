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

let logo = document.querySelector(".logo")

logo.addEventListener("click", ()=>{
    location.reload()
})

function deleteAndRewrite() {
    var outputElement = document.getElementById('output');
    var text = outputElement.textContent;
    var length = text.length;

    // Delete one letter at a time
    for (let i = length; i >= 0; i--) {
        setTimeout(function () {
            outputElement.innerHTML = text.substring(0, i);
        }, (length - i) * 1000); // 3 seconds for each letter
    }

    // Rewrite one letter at a time
    for (let i = 0; i <= length; i++) {
        setTimeout(function () {
            outputElement.innerHTML = text.substring(0, i);
        }, (length + i) * 1000); // 3 seconds for each letter
    }
}


setTimeout(()=>{
    deleteAndRewrite()
}, 15000)
