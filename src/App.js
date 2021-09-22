import Login from "./bindings/Login"
import './App.css';
import {Provider} from 'react-redux'
import store from "./redux/store";
import { PersistGate } from 'redux-persist/integration/react'
import { persistor } from "./redux/store";

function App() {
  return (
    <Provider store={store} className="App">
      <PersistGate loading={null} persistor={persistor}>
        <Login/>
      </PersistGate>
    </Provider>
  );
}

export default App;
