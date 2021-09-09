const currencyEl_one = document.getElementById('currency_one');
const amountEl_one = document.getElementById('amount_one');
const currencyEl_two = document.getElementById('currency_two');
const amountEl_two = document.getElementById('amount_two');

 const rateEl = document.getElementById('rate')
 const swap = document.getElementById('swap')

// fetch Exchange Rates and update the DOM
 function calculate () {
  const currency_one = currencyEl_one.value;
  const currency_two = currencyEl_two.value;

 fetch(`https://api.exchangerate-api.com/v4/latest/${currency_one}`)
.then( res => res.json())
.then(data => {
  //  console.log(data)
  const rate = data.rates[currency_two];

  rateEl.innerText = `1 ${currency_one} = ${rate} ${currency_two}`;

  amountEl_two.value  = (amountEl_one.value* rate).toFixed(2);
});


}

 // even listerns

 currencyEl_one.addEventListener('change', calculate);
 amountEl_one.addEventListener('input', calculate);
 currencyEl_two.addEventListener('change', calculate);
 amountEl_two.addEventListener('input', calculate);

 swap.addEventListener('click', () =>  {
      const temp = currencyEl_one.value 
      currencyEl_one.value = currencyEl_two.value
      currencyEl_two.value = temp
      calculate();
 })



 calculate();
 