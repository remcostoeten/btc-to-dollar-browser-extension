(function () {
    function textBox() {
        var box = document.createElement("span");
        textBox.value = "Search Mathemafia";
        textBox.id = "btc-dollar-converter-box";
        textBox.type = "submit";
        textBox.innerHTML = "dit is een test";
        document.querySelector(".cd__main").appendChild(box);
    }

    textBox();
})();

