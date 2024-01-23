function convertor() {
    let convert = document.getElementById('amount').value;

    if (!isNaN(convert) && convert > 0) {
        let conversionrate = 0.012;

        let usdamount = convert * conversionrate;

        document.getElementById('result').innerHTML = convert + " ₹ " + " = " + usdamount.toFixed(2) + " USD";

    }


}