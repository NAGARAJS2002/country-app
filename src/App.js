
import './App.css';
import Countries from './Components/Countries';
import SingleCountry from './Components/SingleCountry';
import {Routes,Route} from 'react-router-dom'



function App() {
  return (
    <Routes>
    <Route path='' element={<Countries/>}/>
    <Route path='/:name' element={<SingleCountry />} />
</Routes>
  );
}

export default App;
