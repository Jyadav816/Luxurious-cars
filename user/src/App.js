import logo from './logo.svg';
import './App.css';
import {Route, BrowserRouter} from 'react-router-dom'
import Login from './templates/Login';
import Signup from './templates/Signup';
import BookingCar from './templates/BookingCar';
import Home from './templates/Home';
import 'antd/dist/antd.css'
import { Col, Row} from 'antd'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Route path ='/' exact component={Home} />
      <Route path ='/login' exact component={Login} />
      <Route path ='/signup' exact component={Signup} />
      <Route path ='/bookingcar' exact component={BookingCar} />

      </BrowserRouter>
    </div>
  );
}

export default App;
