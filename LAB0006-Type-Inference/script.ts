function totalPrice6(n1:number,n2:number,showRes:boolean,customString:String){

    if(showRes){
        console.log(customString+" "+(Number)(n1+n2));
    }
    else{
        return n1+n2;
    }   
}

var showRes = true;
var customString="Choclate Shake Price :";
const itemPrice6=50;
const deliveryCharge6=15.6;
const result5=totalPrice6(itemPrice6,deliveryCharge6,showRes,customString);
//console.log("Total price of the order is : "+result5);
