import 'antd/dist/antd.css'
import CreateHealthData from './containers/CreateHealthData'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import DashBoard from './containers/DashBoard';

function App() {

  return (

    <BrowserRouter>
      <Routes>
        <Route path='create' element={<DashBoard />} />
        <Route path='/' element={< CreateHealthData />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
