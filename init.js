let exchangeRateLoaded = false;
let exchangeRate = 1;

// function for PNL page to convert currency on individual rows, triggered by MutationObserver and after exchange rate is fetched.
function convertBtcToUsd(row) {
    const scrapedBTCValue = row.querySelector('.ant-table-cell span').textContent;
    const box = document.createElement('div');
    const amountInBtc = scrapedBTCValue;
    const amount = amountInBtc * exchangeRate;

    box.setAttribute('id', 'dollar-box');
    box.classList.add('btc-dollar-wrapper')
    box.classList.add('wrapper');
    box.textContent = scrapedBTCValue + ' = ' + amount.toFixed(2) + '$';

    if (amount < 0) {
        box.classList.add('negative');
    } else {
        box.classList.add('positive');
    }

    row.appendChild(box);
    console.log(amount.toFixed(4));
}
// function for modal popup pnl page.
const checkExist = setInterval(function () {

    const btcScraped = Number.parseFloat(document.querySelector('#modal-root .tpsl-modal__tips-desc').innerText.match(/[0-9,.]+\sBTC/)[0].split(/\s/)[0]) //  Scrape BTC value from class 

    const btcFinal = btcScraped * exchangeRate; // convert BTC to dollars

    if (document.querySelector('#modal-root .tpsl-modal__tips-desc') != null) {
        if (document.querySelector('#modal-root .tpsl-modal__tips-desc').innerHTML.length) {
            const extraBox = document.createElement('div');
            extraBox.classList.add('btc-to-dollar-box');
            extraBox.classList.add('btc-to-dollar-box');
            document.getElementsByClassName('tpsl-modal__tips-desc')[0].appendChild(extraBox);

            extraBox.innerHTML = btcScraped + "BTC = " + btcFinal.toFixed(2) + '$';
            clearInterval(checkExist);
        }
    }
}, 100); // check every 100ms

//create observer that triggers convert code when new rows are added
const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
        mutation.addedNodes.forEach((addedNode) => {
            if (exchangeRateLoaded && addedNode.nodeName === 'TR' && addedNode.classList.contains('ant-table-row')) {
                convertBtcToUsd(addedNode);
            }
        });
    });
});

observer.observe(document, {
    subtree: true, //watch all elements in document recursively
    childList: true, //trigger observer when elements are added or removed.
})

//load exchange rate from Coindesk API
fetch('https://api.coindesk.com/v1/bpi/currentprice/usd.json').then((response) => {
    if (response.status != 200) {
        console.error('Coindesk API returned non-success code')
        console.log(response);
        return;
    }

    response.json().then((data) => {
        exchangeRate = parseFloat(data.bpi.USD.rate_float);
        exchangeRateLoaded = true;
        document.querySelectorAll('tr.ant-table-row').forEach((row) => convertBtcToUsd(row)) //convert already loaded rows now that we know the exchange rate
    })
})