const customerName = "mustafa";
console.log(customerName);

const customerAge = 21;
console.log(customerAge);

const availableBalance = 100;
console.log(availableBalance);



console.log("1 . Burger . 10$");
console.log("2 . Pizza . 15$");
console.log("3 . sandwich . 8$");
console.log("4 . pasta . 12$");
console.log("5 . exit . 0$");


let choice = 1 ;
switch(choice){
case 1 : 
console.log("you selected burger . price 10$");
break;
case 2 :
console.log("you selected pizza . price 15$");
break;
case 3 :
console.log("you selected sandwich . price 8$");
break;
case 4 :
console.log("you selected pasta . price 12$");
break;
case 5 :
console.log("you selected exit . 0$");
break;
default:
console.log("your choice is wrong");
}



let price = 10;
let quantity = 2;
let totalPrice = price * quantity;
console.log(totalPrice);

price = 15;
quantity = 3;
totalPrice = price * quantity;
console.log(totalPrice);

price = 8;
quantity = 4;
totalPrice = price * quantity;
console.log(totalPrice);

price = 12;
quantity = 3;
totalPrice = price * quantity;
console.log(totalPrice);

price = 0;
qauntity = 0;
totalPrice = price * quantity;
console.log(totalPrice);



totalPrice = 133;
let remainingBalance = availableBalance - totalPrice;
console.log(remainingBalance);

let additionalTotal =133 + (15 * 3);
console.log(additionalTotal);




 console.log(customerAge >= 18 );
 console.log(totalPrice > additionalTotal);
 console.log(quantity > 1);
 console.log(additionalTotal = 0);
 console.log(remainingBalance >= 0);





 if (customerAge < 18 ) {
console.log("you are underage.");
 }

 
if(availableBalance < totalPrice ) {
console.log("Insufficient balance.")
}

else {
console.log("your order has been placed successfully!");
}




let paymentMethod = 1 ;

switch(paymentMethod) {
  case 1 : 
    console.log("Cash");
    break;
  case 2 :
    console.log("Credit Card");
    break;
  case 3 :
    console.log("Bank Transfer");
    break;
  default : 
    console.log("Invalid payment method!");
}












