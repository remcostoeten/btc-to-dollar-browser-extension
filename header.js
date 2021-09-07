//function to convert currency on individual rows, triggered by MutationObserver and after exchange rate is fetched.
function convertBtcToUsdPerp(row) {
    const scrapedBTCValue = row.querySelector('.position__table__content .scrollbar-dark span').textContent;
    const box = document.createElement('div');
    const amountInBtc = scrapedBTCValue;
    const amount = amountInBtc * exchangeRate;

    box.setAttribute('id', 'dollar-box-trade');
    box.classList.add('btc-dollar-wrapper')
    box.classList.add('wrapper');
    box.textContent = scrapedBTCValue + ' = ' + amount.toFixed(2) + '$';

    row.appendChild(box);
    console.log(scrapedBTCValue);
}