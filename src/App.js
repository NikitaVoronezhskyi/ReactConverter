import './App.css';
import Header from './components/Header/Header';
import Converter from './components/Main/Converter/Converter';
import { useEffect , useState } from 'react';

function App() {
  const URL = 'https://v6.exchangerate-api.com/v6/d68eaa9eb07c043c11f1e0fe/latest/USD'
  const USD_RATE_URL = "https://v6.exchangerate-api.com/v6/d68eaa9eb07c043c11f1e0fe/pair/USD/UAH"
  const EUR_RATE_URL = "https://v6.exchangerate-api.com/v6/d68eaa9eb07c043c11f1e0fe/pair/EUR/UAH"
  const [usdRate, setUsdRate] = useState()
  const [eurRate, setEurRate] = useState()
  useEffect(() => {
    fetch(USD_RATE_URL)
    .then(response => response.json())
    .then(data => {
      setUsdRate(data.conversion_rate)
    })
  }, [USD_RATE_URL])

 useEffect(() => {
    fetch(EUR_RATE_URL)
    .then(response => response.json())
    .then(data => {
      setEurRate(data.conversion_rate)
    })
 }, [EUR_RATE_URL])
  const [allData, setAllData] = useState(null)

  useEffect(() => {
    fetch(URL)
    .then(response => response.json())
    .then(data => {
      setAllData(data)
    })
  }, [])
  
  return (
    <div className="App">
      <Header usdRate={usdRate} eurRate={eurRate} />
      <Converter allData={allData} usdRate={usdRate} />
    </div>
  );
}

export default App;
