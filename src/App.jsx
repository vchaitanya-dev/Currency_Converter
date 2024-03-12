import { useSelector, useDispatch } from "react-redux";
import { setAmount, setCurrencies ,setList} from "./reducers/CurrencyReducer";
import { useEffect, useState } from "react";
import { HiSwitchHorizontal } from "react-icons/hi";
function App() {
  const [toCurrency, setToCurrency] = useState("usd");
  const [fromCurrency, setFromCurrency] = useState("eur");
  const dispatch = useDispatch();
  const currencies = useSelector((state) => state.currency.currencies);
  const amount = useSelector((state) => state.currency.amount);
  const list = useSelector((state) => state.currency.list)
  useEffect(() => {
    // fetch the currency from from input
  fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${fromCurrency}.json`)
    .then((res) => res.json())
    .then((data) => dispatch(setCurrencies(data[fromCurrency])))

    // fetch the currency list 
  fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies.json`)
  .then((res) => res.json())
  .then((data) => dispatch(setList(data)))
}, [dispatch, fromCurrency,]);

  const handleAmount = (e) => {
    dispatch(setAmount(e.target.value));
  };
  const handleSwap = () => {
    let temp = toCurrency;
    setFromCurrency(temp);
    setToCurrency(fromCurrency);
  };
 
  return (
    < >
        <h1 className="header">Currency Converter</h1>
      <div className="container">
        <div>
          <h4>Amount</h4>
          <input
            className="input_container"
            type="number"
            placeholder="Enter the amount"
            onChange={handleAmount}
            value={amount}
          />
        </div>
        <div>
          <h4>From</h4>
          <select onChange={(e) => setFromCurrency(e.target.value)} value={fromCurrency}>
            {Object.keys(currencies).map((item) => {
              return <option key={item}>{item}</option>;
            })}
          </select>       
        </div>
        <div>
          <HiSwitchHorizontal onClick={handleSwap} className="icon" />
        </div>
        <div>
          <h4>To</h4>
          <select onChange={(e) => setToCurrency(e.target.value)} value={toCurrency}>
            {Object.keys(currencies).map((item) => {
              return <option key={item}>{item}</option>;
            })}
          </select>
        </div>
      </div>
      <div style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'start',marginTop:'2%',marginLeft:'8%'}}>
          <h3 className="currencyheader">Converted Amount:</h3>
          <h4 className="converter">
            {amount} {list[fromCurrency]} :{amount * currencies[toCurrency]} {list[toCurrency]}
          </h4>
      </div>
    </>
  );
}

export default App;
