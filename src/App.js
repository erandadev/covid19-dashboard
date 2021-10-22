import React, {useEffect, useState} from 'react';
import Header from './components/layouts/Header'
import Figures from './components/Figures'
import Loading from './components/layouts/Loading'
import './App.css';
import MainChart from './MainChart'
import axios from 'axios';
import Footer from './components/layouts/Footer'

function App() {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true);
  
  // eslint-disable-next-line
  useEffect(async () => {
    const res = await axios.all([
      axios.get("https://hpb.health.gov.lk/api/get-statistical-history-data"),
      axios.get("https://hpb.health.gov.lk/api/get-current-statistical")
    ])

    setData(res)
    setLoading(false)
  }, [])


  if(loading) {
    return <Loading />
  }

  return (
    <div className="App">
      <a href="https://covid19-dashboard.arimac.digital/" rel="noreferrer" target="_blank" className="copyright">
        This is a clone site
      </a>
      <Header />
      
      <div className="d-grid column-3 grid-gap-25 mt-5">
      <Figures title="Total Figures (SL)" data={data}/>
      <MainChart data={data[0].data.data} />
      <Figures title="Daily Figures (SL)" data={data} />
      </div>
      <Footer />
    </div>
  );
}

export default App;
