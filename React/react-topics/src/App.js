import logo from './logo.svg';
import './App.css';
import Debouncing_eg_1 from './debouncing/Debouncing_eg_1';
// import A from './useMemo/A';
import A from './memo/A';
import Example1 from './bootstrap/Example1';
// import Key from './key/Key';
// import Routing_Parent from './router/Routing_Parent';

function App() {

  console.log('App comp re-rendered')
  
  return (
    <div className="App">

      {/* <h1>This is App component</h1> */}

      <Example1 />

      {/* <Routing_Parent />  */}

      {/* <Key /> */}

      {/* <A /> */}

      {/* <A /> */}

      

      {/* <Debouncing_eg_1 /> */}
    </div>
  );
}

export default App;
