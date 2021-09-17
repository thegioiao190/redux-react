import TodosApp from "./bindings/TodosApp"
import './App.css';
import {Provider} from 'react-redux'
import store from "./redux/store";

function App() {
  return (
    <Provider store={store} className="App">
      <TodosApp/>
    </Provider>
  );
}

export default App;
