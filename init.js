(function () {
    function textBox() {
        var box = document.createElement("div");
        box.classList = "btc-dollar-wrapper";
        box.innerHTML = "X btc = x dollar";
        document.querySelector(".cd__main.gc-06.f-12").appendChild(box);
    }
})();

textBox();
