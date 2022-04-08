import { HashRouter, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './reducers';
import Home from './containers/Home';

function App() {
  return (

    <Provider store={store}>
      <HashRouter>
        <Routes>
          <Route path='/' element={< Home />} />
        </Routes>
      </HashRouter >
    </Provider >
  )
}

export default App
