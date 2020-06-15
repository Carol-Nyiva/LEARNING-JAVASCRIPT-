/*John and his family went on a holiday and went to 3 different restaurants.
The bills were $124, $48 and $268.  
To tip the waiter a fair amount, John created a simple tip calculator (as a function).
He likes to tip 20% of the bill when the bill is less than $50, 15% when the bill is between
$50 and $200 and 10% if the bill is more than $200.

In the end, John would like to have 2 arrays:
1. Containing all 3 tips (one for each bill)
2. Containing all 3 final paid amounts ( Bill + tip).

Note: To calculate 20% of a value, simply multiply it with 20/100 = 0.2 */

 function CalculateBill (Bill)
{
 if (Bill<50)
 {
     var tip = Bill*0.2;
    return tip;
 }
 else if (Bill>=50 && Bill <=200)
 {
     var tip = Bill * 0.15;
     return tip;
 }
 else if (Bill>200)
 {
     var tip = Bill * 0.1;
     return tip;
 }
}



console.log('Tip is ',CalculateBill(268),'Dollars');

const TotalBill1 = CalculateBill(124) + 124;
const TotalBill2 = CalculateBill(48) + 48;
const TotalBill3 = CalculateBill(268) + 268;

let Bills = [ CalculateBill(124), CalculateBill(48),CalculateBill(268)];
console.log(Bills);
let TotalBills = [TotalBill1,TotalBill2,TotalBill3];
console.log(TotalBills);
