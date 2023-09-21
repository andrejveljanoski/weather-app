import { ToastContainer } from 'react-toastify';
import './App.css';
import WeatherApp from './Components/WeatherApp/WeatherApp';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  return (
    <div className="App">
      <WeatherApp/>
      <ToastContainer />
    </div>
  );
}

export default App;
