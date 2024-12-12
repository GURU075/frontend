const BASE_URL =
  "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies";


  const dropdown =document.querySelectorAll(".dropdown select");
  const btn = document.querySelector("form button");
  const fromCurr =document.querySelector(".from select");
  const toCurr =document.querySelector(".to select");

  for(let select of dropdown){
    for(currCode in countryList){
    let newOption =document.createElement("option");
    newOption.innerText=currCode;
    newOption.value =currCode;
    select.append(newOption);
   }
   select.addEventListener("change", (evt) =>{
    updateFlag(evt.target);
   })
  }
 

  const updateFlag=(element)=>{
       let currCode =element.value;
       let countryCode=countryList[currCode];
       let newSrc =`https://flagsapi.com/${countryCode}/flat/64.png`; 
       let img = element.parentElement.querySelector("img");
       img.src = newSrc;
  };

  btn.addEventListener("click",async (evt)=>{
    evt.preventDefault();
    let amount = document.getElementById("amount");
   //console.log(amount.value);
//    console.log(fromCurr.value+" "+toCurr.value);
   const URL = `${BASE_URL}/${fromCurr.value.toLowerCase()}.json`;
   let response =await fetch(URL);
   const data = await response.json();
   let conversionRate = data[fromCurr.value.toLowerCase()][toCurr.value.toLowerCase()];
//    console.log(response);
console.log(conversionRate);

let reuslt = amount.value * conversionRate;
console.log(reuslt);
let res = document.getElementById("output");
let output = fromCurr.value+" "+amount.value+"  =          "+toCurr.value+""+reuslt;
res.innerHTML = output;
  });