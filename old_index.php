<!DOCTYPE html>
<html>
<body>
<div class="calculator">
<div class="calculator__inner">
    <input type="number" name="btc" class="currencyField" placeholder="BTC">
    <div class="arrow" style="margin: 0 10px";>=</div>
    <input type="number" name="usd" class="currencyField" placeholder="USD">
</div>
</div>


<script>
    $(".currencyField").keyup(function(){ //input[name='calc']
        let convFrom;
        if($(this).prop("name") == "btc") {
            convFrom = "btc";
            convTo = "usd";
        }
        else {
            convFrom = "usd";
            convTo = "btc";
        }
        $.getJSON( "https://api.coindesk.com/v1/bpi/currentprice/usd.json",
            function( data) {
                var origAmount = parseFloat($("input[name='" + convFrom + "']").val());
                var exchangeRate = parseInt(data.bpi.USD.rate_float);
                let amount;
                if(convFrom == "btc")
                    amount = parseFloat(origAmount * exchangeRate);
                else
                    amount = parseFloat(origAmount/ exchangeRate);
                $("input[name='" + convTo + "']").val(amount.toFixed(2));
            });
    });
</script>

<style>
    .calculator{
        display:flex;
        margin-top: 50px;
        justify-content: center;
    }

    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }
</style>