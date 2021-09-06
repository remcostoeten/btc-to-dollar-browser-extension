$(document).ready(function () {
    textBox();

    function textBox() {
        $.getJSON("https://api.coindesk.com/v1/bpi/currentprice/usd.json",
            function (data) {
                $('tr.ant-table-row').each(function () {
                    var scrapedBTCValue = $(this).find('.ant-table-cell span').text();
                    var btcValue = scrapedBTCValue;
                    var box = document.createElement("div");
                    var amountInBtc = scrapedBTCValue; //convert 0.005 btc to usd
                    var exchangeRate = parseInt(data.bpi.USD.rate_float);
                    var amount = amountInBtc * exchangeRate;
                    box.id = "dollar-box";
                    box.classList = "btc-dollar-wrapper wrapper";
                    box.innerHTML = scrapedBTCValue + " = " + amount.toFixed(2) + "$";
                    $(this).append(box);
                    console.log(amount.toFixed(4));
                });
            });
    }
});
