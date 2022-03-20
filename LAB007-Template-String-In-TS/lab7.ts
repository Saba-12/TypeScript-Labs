function totalPrice7(n1:number,n2:number,showRes:boolean,customString:String){

    if(showRes){
        console.log(customString+" "+(Number)(n1+n2)+" "+"including Rs."+deliveryCharge7+" as a delivery charge");
    }
    else{
        return n1+n2;
    }   
}

var showRes = true;
var customString="Choclate Shake Price :";
const itemPrice7=50;
const deliveryCharge7=15.6;
const result7=totalPrice7(itemPrice7,deliveryCharge7,showRes,customString);
//console.log("Total price of the order is : "+result5);
