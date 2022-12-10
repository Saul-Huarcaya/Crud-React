
import './App.css';
import ProviderData from './Context/Provider';
import Main from './Components/Main/Main';

function App() {

  return (
    <div className="App">
      <ProviderData>
        <Main/>
      </ProviderData>
    </div>
  )
}

export default App;
