function solve() {
  const checkOutButtonsEvent = document.querySelector(".checkout");
  const buttonAdd = document.querySelectorAll(".add-product");
  const textAria = document.querySelector("textarea")

  let products = [];
  let result = 0;
  for (const element of buttonAdd) {
   element.addEventListener("click",addProduct)
  }

checkOutButtonsEvent.addEventListener('click',checkout);

 function addProduct(e){
     const productElement = e.target.parentNode.parentNode;
     const productTitle = productElement.querySelector(".product-title").textContent;
     const productPrice = productElement.querySelector(".product-line-price").textContent;

     printMessage(productTitle,productPrice)

     if(!products.includes(productTitle)){
      products.push(productTitle);
     }
     result+=Number(productPrice);

 }

  function printMessage(productTitle,productPrice) {
     textAria.textContent += `Added ${productTitle} for ${productPrice} to the cart.\n`;
  }

  function checkout(e) {
   textAria.textContent+= `You bought ${products.join(', ')} for ${result.toFixed(2)}.`
   const buttons = document.getElementsByTagName("button");
   for (const button of buttons) {
     button.disabled = true;
   }
  }
}