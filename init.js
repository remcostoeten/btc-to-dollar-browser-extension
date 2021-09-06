(function () {
    function textBox() {
        $.getJSON("https://api.coindesk.com/v1/bpi/currentprice/usd.json",
            function (data) {
                var content = document.querySelector('.ant-table-cell span')
                var scrapedBTCValue = content.textContent;
                var btcValue = scrapedBTCValue;
                var myParent = document.querySelector('.ant-table-row-level-0')
                var box = document.createElement("div");
                var amountInBtc = scrapedBTCValue; //convert 0.005 btc to usd
                var exchangeRate = parseInt(data.bpi.USD.rate_float);
                var amount = amountInBtc * exchangeRate;
                box.id = "dollar-box";
                box.classList = "btc-dollar-wrapper wrapper";
                box.innerHTML = scrapedBTCValue + " = " + amount.toFixed(2) + "$";
                myParent.appendChild(box);
                console.log(amount.toFixed(4));
                setTimeout(() => {
                }, 3000)

            });
    }

    textBox();
})();