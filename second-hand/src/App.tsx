import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Link } from 'react-router-dom'

function App() {
  
  return (
    <>
    <h2>Brokerage of second-hand products</h2>
    <div>
      <button><Link to={'/sign-up'}>To register</Link></button>
      <button><Link to={'/sign-in'}>To connect</Link></button>    </div>
    </>
  )
}

export default App
