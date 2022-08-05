import ConverterInput from "./ConverterInput/ConverterInput";
import { useState, useEffect } from "react";
import "./Converter.css";
const Converter = ({ allData, usdRate }) => {
  const [currency, setCurrency] = useState([]);
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("UAH");
  const [exchangeRate, setExchangeRate] = useState(usdRate);
  const [value, setValue] = useState(1);
  const [inputWhereValueChange, setInputWhereValueChange] = useState(true);
  let sendRequestRate = `https://v6.exchangerate-api.com/v6/d68eaa9eb07c043c11f1e0fe/pair/${fromCurrency}/${toCurrency}`;

  let fromValue, toValue;
  if (inputWhereValueChange) {
    fromValue = value;
    toValue = (value * exchangeRate).toFixed(2);
  } else {
    fromValue = (value / exchangeRate).toFixed(2);
    toValue = value;
  }

  function handleFromChangeValue(e) {
    setValue(e.target.value);
    setInputWhereValueChange(true)
  }

  function handleToChangeValue(e) {
    setValue(e.target.value);
    setInputWhereValueChange(false)
  }



  useEffect(() => {
    fetch(sendRequestRate)
      .then((response) => response.json())
      .then((data) => {
        setExchangeRate(data.conversion_rate);
      });
  }, [sendRequestRate, fromCurrency, toCurrency, exchangeRate]);

  useEffect(() => {
    if (allData !== null) {
      const allCurrency = Object.keys(allData.conversion_rates);
      setCurrency(allCurrency);
      setFromCurrency(allData.base_code);
      const ukrainianCurrency = allCurrency.filter(
        (currency) => currency === "UAH"
      );
      setToCurrency(ukrainianCurrency[0]);
      if (usdRate !== undefined) {
        setExchangeRate(usdRate);
      }
    }
  }, [allData]);

  return (
    <main className="main">
      <form className="form">
        <ConverterInput
          onChangeValue={handleFromChangeValue}
          Value={fromValue}
          currency={currency}
          selectCurrency={fromCurrency}
          onChangeCurrency={(e) => setFromCurrency(e.target.value)}
        />
        <p className="form-divider">=</p>
        <ConverterInput
          onChangeValue={handleToChangeValue}
          Value={toValue}
          currency={currency}
          selectCurrency={toCurrency}
          onChangeCurrency={(e) => setToCurrency(e.target.value)}
        />
      </form>
    </main>
  );
};

export default Converter;
