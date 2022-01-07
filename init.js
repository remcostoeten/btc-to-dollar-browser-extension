let exchangeRateLoaded = false;
let exchangeRate = 1;


// document.getElementsByClassName('trade-assets__head-title')[0].style.color = "red";

// var strong = document.createElement('strong');
// strong.innerHTML = 'testtest';
// document.getElementsByClassName('trade-assets__head-title')[0].appendChild(strong);


//function to convert currency on individual rows, triggered by MutationObserver and after exchange rate is fetched.
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

//create observer that triggers convert code when new rows are added
const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
        mutation.addedNodes.forEach((addedNode) => {
            if(exchangeRateLoaded && addedNode.nodeName === 'TR' && addedNode.classList.contains('ant-table-row')) {
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
    if(response.status != 200) {
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

var checkExist = setInterval(function() {
    
    var btcScraped = Number.parseFloat(document.querySelector('#modal-root .tpsl-modal__tips-desc').innerText.match(/[0-9,.]+\sBTC/)[0].split(/\s/)[0])  //  Scrape btc value from class 

    if (document.querySelector('#modal-root .tpsl-modal__tips-desc') != null) {
        if ( document.querySelector('#modal-root .tpsl-modal__tips-desc').innerHTML.length ) {
            console.log( "Exists!" );
            document.getElementById("modal-root").className = "remco"

            var testTest = "test123"

            var testBox = document.createElement('div');
            testBox.innerHTML = "test123";

            var extraBox = document.createElement('div');
            extraBox.innerHTML = btcScraped + "BTC = " ;
            extraBox.classList.add('btc-to-dollar-box');
            document.getElementsByClassName('tpsl-modal__tips-desc')[0].appendChild(extraBox);

            clearInterval( checkExist );
        }
    }
}, 100); // check every 100ms

// document.getElementById("rc-tabs-0-tab-inverse").style.color = "red";
