function totalPrice(n1,n2){
    return n1+n2;
}

const itemPrice=50;
const deliveryCharge="15.6";
const result=totalPrice(itemPrice,deliveryCharge);

console.log("Total price of the order is : "+result);
