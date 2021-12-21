// i phone function plus- minus button function
function iphone(isIncrease){
    const phoneInput = document.getElementById('phoneInput');
    let phoneInputText = phoneInput.value;
    if(isIncrease == true){
        phoneInputText = parseInt(phoneInputText)+1;
    }
    else if(phoneInputText > 0){
        phoneInputText = parseInt(phoneInputText)-1;
    }
    phoneInput.value = phoneInputText;
    // update total phone
    const phoneTotal = document.getElementById('phoneTotal');
    phoneTotal.innerText =  phoneInputText * 1219; 
}
// phone case plus- minus button function
function phoneCase(phoneIncrease){
    const caseInput = document.getElementById('caseNo');
    let caseInputText = caseInput.value ;
    if(phoneIncrease == true){
        caseInputText = parseInt(caseInputText)+1;
    }
    else if(caseInputText > 0){
        caseInputText = parseInt(caseInputText)-1;
    }
    caseInput.value = caseInputText;
    // update total case
    const caseTotal = document.getElementById('updateTotal');
    caseTotal.innerText = caseInputText * 59;
}
// calculation total function
function totalcalculation(){
    // phone total calculation 
    const phoneIn = document.getElementById('phoneInput');
    const phoneInText = phoneIn.value;
    const phoneInAmount = parseInt(phoneInText);
    const phoneTotalPrice = phoneInAmount * 1219;
    // case total calculation
    const caseIn = document.getElementById('caseNo');
    const caseInText = caseIn.value ; 
    const caseInAmount = parseInt(caseInText);
    const caseTotalPrice = caseInAmount*59 ;
    // subtotal, tax , total price calculation
    const subtotal = phoneTotalPrice + caseTotalPrice;
    const tax = subtotal * 0.05 ;
    const grandTotal = subtotal + tax;
    // update on html
    document.getElementById('subTotal').innerText = subtotal ;
    document.getElementById('tax').innerText = tax;
    document.getElementById('gTotal').innerText = grandTotal;
}
// iphone plus button
document.getElementById('iplus').addEventListener('click',function(){
   iphone(true);
   totalcalculation();
})
// iphone minus button
document.getElementById('iminus').addEventListener('click',function(){
    iphone(false);
    totalcalculation();
})
// phone case plus button 
document.getElementById('plusbtn').addEventListener('click', function(){
    phoneCase(true);
    totalcalculation()
})
// phone case minus button 
document.getElementById('minusbtn').addEventListener('click', function(){
   phoneCase(false);
   totalcalculation();
})