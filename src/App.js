import Login from "./bindings/Login"
import './App.css';
import {Provider} from 'react-redux'
import store from "./redux/store";

function App() {
  return (
    <Provider store={store} className="App">
      <Login/>
    </Provider>
  );
}

export default App;
