/**
 * Created by Mark Verschuuren on 18-2-2017.
 */
$(function() {
    $('#limit').click(function () {
        var limit = $('#limitField').val();
        if(limit){
            chrome.storage.sync.set({'limit':limit},function () {
                close();
            })
        }

    })
    $('#reset').click(function () {
        chrome.storage.sync.set({'currentMoney':0}, function () {
            var notifreset = {
                type : 'basis',
                title: 'reset',
                message: 'resetted!'
            }
            chrome.notifications.create('kaas',notifreset);
        });

    });
});