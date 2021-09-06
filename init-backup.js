
(function () {
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
        });
})();

setTimeout(textBox, 2000); //execute greet after 2000 milliseconds (2 seconds)

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
        box.innerHTML = scrapedBTCValue + " = " + amount.toFixed(2)+"$";
        myParent.appendChild(box);
        console.log(amount.toFixed(4));
    });

var name = "John Doe", userName = "user58", age = 23;
document.getElementById("test").innerHTML = name + " " + userName + " " + age;

function roundNumber(number, precision) {
    precision = Math.abs(parseInt(precision)) || 0;
    var multiplier = Math.pow(10, precision);
    return (Math.round(number * multiplier) / multiplier);
}
