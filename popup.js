/**
 * Created by Mark Verschuuren on 17-2-2017.
 */
$(function () {
    chrome.storage.sync.get(['limit','currentMoney'], function(money) {
        $('#currentMoney').text(money.currentMoney);
        $('#limit').text(money.limit)
    })

    $('#moneysubmit').click(function () {
        chrome.storage.sync.get(["currentMoney",'limit'],function (money) {
            var newTotal = 0;
            if (money.currentMoney) {
                newTotal += parseInt(money.currentMoney)
            }
            var amount = $('#moneyfield').val();
            if (amount) {
                newTotal += parseInt(amount)

            }
            if (money.limit > newTotal) {
                chrome.storage.sync.set({'currentMoney': newTotal})
                $('#currentMoney').text(newTotal);
            }
            else{
                alert("oh no");
            }



            $('#moneyfield').val('');


        })
    })
})

