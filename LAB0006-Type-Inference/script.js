function totalPrice6(n1, n2, showRes, customString) {
    if (showRes) {
        console.log(customString + " " + (Number)(n1 + n2));
    }
    else {
        return n1 + n2;
    }
}
var showRes = true;
var customString = "Choclate Shake Price :";
var itemPrice6 = 50;
var deliveryCharge6 = 15.6;
var result5 = totalPrice6(itemPrice6, deliveryCharge6, showRes, customString);
//console.log("Total price of the order is : "+result5);
