let accordeon = document.querySelectorAll(".accordeon")

accordeon.forEach(function (accordeon) {
    accordeon.addEventListener("click", function () {
        this.classList.toggle("open")
    })
})