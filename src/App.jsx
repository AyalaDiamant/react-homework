
import { useState, useEffect } from 'react';
import { workers as Workers } from "./data/workers";
import { customers as Customers } from "./data/customers";
import { ListPepole } from './components/listPepole.component';
import { Timer } from './components/timer.component';
import './App.css';
import { Outlet, Link, useNavigate } from "react-router-dom";
import { UserService } from './data/user';

function App() {
  const [user, setUser] = useState();

  const navigate = useNavigate();

  useEffect(() => {
    const user = UserService.getUser();
    if (!user) {
      navigate('/signin')
    }
    setUser(user);
  }, []);

  return (
    <>
      <h4>Hello { user?.name}</h4>
      <Timer />
        <p><Link to="Workers">Workers</Link></p>
        <p><Link to="Customers">Customers</Link></p>
      <Outlet />
    </>
  )
}

export default App;

