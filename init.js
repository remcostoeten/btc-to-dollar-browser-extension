function textBox() {
    var content = document.querySelector('.ant-table-cell span')
    var scrapedBTCValue = content.textContent;
    var btcValue = scrapedBTCValue;
    var myParent = document.querySelector('.ant-table-row-level-0')
    var box = document.createElement("div");
    box.id = "dollar-box";
    box.classList = "btc-dollar-wrapper wrapper";
    box.innerHTML = scrapedBTCValue + " = x dollar";
    myParent.appendChild(box);
}
setTimeout(textBox, 2000); //execute greet after 2000 milliseconds (2 seconds)

// (function () {
//     function textBox() {
//         var content = document.querySelector('.ant-table-cell span')
//         var scrapedBTCValue = content.textContent;
//         var btcValue = scrapedBTCValue;
//         var myParent = document.querySelector('.ant-table-content')
//         var box = document.createElement("div");
//         box.id = "dollar-box";
//         box.classList = "btc-dollar-wrapper wrapper";
//         box.innerHTML = scrapedBTCValue + " = x dollar";
//         myParent.appendChild(box);
//     }
//     textBox();
// })();
