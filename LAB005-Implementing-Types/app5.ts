function totalPrice5(n1:number,n2:number,showRes:boolean){

    if(showRes){
        console.log(n1+n2);
    }
    else{
        return n1+n2;
    }   
}

var showRes = true;

const itemPrice5=50;
const deliveryCharge5=15.6;
const result5=totalPrice5(itemPrice5,deliveryCharge5,showRes);
//console.log("Total price of the order is : "+result5);
