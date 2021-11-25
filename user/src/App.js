import logo from './logo.svg';
import './App.css';
import {Route, BrowserRouter, Redirect} from 'react-router-dom'
import Login from './templates/Login';
import Signup from './templates/Signup';
import BookingCar from './templates/BookingCar';
import Home from './templates/Home';
import 'antd/dist/antd.css'
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Route path ='/' exact component={Home} />
      <Route path ='/login' exact component={Login} />
      <Route path ='/signup' exact component={Signup} />
      <Route path ='/booking/:carid' exact component={BookingCar} />

      </BrowserRouter>
    </div>
  );
}


export function protectRoute(props) {
  if (localStorage.getItem('user')) {
    return <Route {...props}/>
  } else {
    return <Redirect to='/login'/>
  }

}


export default App;
