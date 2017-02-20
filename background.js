/**
 * Created by Mark Verschuuren on 20-2-2017.
 */
chrome.contextMenus.create({
    id:"twitter",
    title: "Twitter this!",
    contexts:["selection"],
    onclick : myFunction


});
function notInt(value) {
    return !isNaN(value) && parseInt(Number(value))== value&& !isNaN(parseInt(value,10))
    
}

function myFunction(selectedText) {

        if(selectedText.selectionText){
            if(notInt(selectedText.selectionText)){
                chrome.storage.sync.get(["currentMoney","limit"], function (money) {
                    var newTotal = 0;
                    if(money.currentMoney){
                        newTotal += parseInt(money.currentMoney);

                    }
                    var amount = selectedText.selectionText;
                    if(amount){
                        newTotal += amount;
                    }
                    if(money.limit > newTotal){
                        chrome.storage.sync.set({"currentmoney":newTotal})
                        $("#currentMoney").text(newTotal)
                    }

                })
            }
            else{
                alert("Select an int!")
            }
        }
}






            

