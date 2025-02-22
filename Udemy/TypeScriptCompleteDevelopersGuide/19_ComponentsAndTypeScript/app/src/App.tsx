import React from 'react';
import logo from './assets/logo.svg';
import './styles/App.css';
import { Provider } from 'react-redux';
import { store } from "./state";
import RepositoriesList from "./components/RepositoriesList";

function App() {
  return <Provider store={store}>
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <RepositoriesList />
      </header>
    </div>
  </Provider>;
}

export default App;
