(function () {
    function textBox() {
        var content = document.querySelector('.tpsl-modal__tips-desc')
        var scrapedBTCValue = content.textContent.match(/[0-9].[0-9]{8}/);
        var btcValue = scrapedBTCValue[0];

        var box = document.createElement("div");
        box.classList = "btc-dollar-wrapper wrapper";
        box.innerHTML = btcValue + " = x dollar";
        document.querySelector(".test-container").appendChild(box);

        console.log(btcValue);
    }

    textBox();
})();

alert('test');