import "./ConverterInput.css";

const ConverterInput = ({currency,selectCurrency,onChangeCurrency,onChangeValue,Value}) => {
 
  return (
    <div className="converter">
      <input aria-label="currency-value" className="converter-input" type="number" onChange={onChangeValue} value={Value}/>
      <select className="converter-select" name="currency" value={selectCurrency} onChange={onChangeCurrency}>
        {currency.map(currency => (
          <option key={currency} value={currency}>{currency}</option>
        ),)}
      </select>
    </div>
  );
};

export default ConverterInput;
