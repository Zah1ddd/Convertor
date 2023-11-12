// const fisrtCounrty = document.querySelector(".fromCurrency")
// const secondCounrty = document.querySelector(".toCurrency")
// const firstNumber = document.querySelector(".first-num")
// const secondNumber = document.querySelector(".second-num")
// const btnConvert = document.querySelector(".convert")

// async function fecthData(){
//     const response = await fetch( "https://api.freecurrencyapi.com/v1/latest?apikey=fca_live_DRHXlHNYhRfOrqIAxLCPh2M6FUsL9FzNsrnbxJCO")
//     const data = await response.json();
//     return data
// }
// const fromCurrencValue = fisrtCounrty.value;

// const showData = async function(data){
//     const curencsy = await fecthData();
//     const toCurrencyValue = secondCounrty.value;
//     if(fromCurrencValue in curencsy.data && toCurrencyValue in curencsy.data){
//         const rate = curencsy.data[fromCurrencValue]
//         const anotherRate = curencsy.data[toCurrencyValue]
//         const amount = parseFloat(fromCurrencValue.value)
//         const converstionRate = anotherRate / rate;
//         const result = converstionRate * amount;
//         secondNumber.innerHTML = result
//     }
// }
// btnConvert.addEventListener("click", async (event) => {
//     event.preventDefault();
//     const exchangeRateData = await fecthData();
//     showData(exchangeRateData);
// });
const apiUrl =
  "https://api.freecurrencyapi.com/v1/latest?apikey=fca_live_DRHXlHNYhRfOrqIAxLCPh2M6FUsL9FzNsrnbxJCO";


const amountInput = document.getElementById("amount");
const selectFrom = document.getElementById("from");
const selectTo = document.getElementById("to");
const button = document.getElementById("button");
const rateNumber=document.querySelector(".rate-number")

async function apData() {
  const response = await fetch(
    "https://api.freecurrencyapi.com/v1/latest?apikey=fca_live_DRHXlHNYhRfOrqIAxLCPh2M6FUsL9FzNsrnbxJCO"
  );
  const data = await response.json();
  return data
}

const showData=async function(){
  const currencyData= await apData()
  const fromCheckBox=selectFrom.value
  const toCheckBox=selectTo.value
  if (fromCheckBox in currencyData.data && toCheckBox in currencyData.data) {
    const rate=currencyData.data[fromCheckBox]
    const anotherRate=currencyData.data[toCheckBox]
    const amount=parseFloat(amountInput.value)
    const converssion=anotherRate/rate
    const result=amount*converssion
    rateNumber.innerHTML=`${result}`
  }
}
const populateCurrencyOption=async function(){
  const currencyData=await apData()
  const fromCountry=selectFrom
  const toCountry=selectTo
  for(const currencyCode in currencyData.data ){
    const optionFrom=document.createElement("option")
    optionFrom.textContent=currencyCode
    selectFrom.appendChild(optionFrom)


    const optionTo=document.createElement("option")
    optionTo.textContent=currencyCode
    selectTo.appendChild(optionTo)
  }
}
button.addEventListener("click",(e)=>{
  e.preventDefault()
  showData()

})
populateCurrencyOption();
