function totalPrice7(n1, n2, showRes, customString) {
    if (showRes) {
        console.log(customString + " " + (Number)(n1 + n2) + " " + "including Rs." + deliveryCharge7 + " as a delivery charge");
    }
    else {
        return n1 + n2;
    }
}
var showRes = true;
var customString = "Choclate Shake Price :";
var itemPrice7 = 50;
var deliveryCharge7 = 15.6;
var result7 = totalPrice7(itemPrice7, deliveryCharge7, showRes, customString);
//console.log("Total price of the order is : "+result5);
