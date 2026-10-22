import './App.css'
import Battery from './components/Battery'
import Foods from './components/Foods'
import Login from './components/Login'
import Password from './components/Password'

function App() {

  return (
    <>
      <Login />
      <Password />
      <Foods />
      <Battery level={50}/>
    </>
  )
}

export default App
