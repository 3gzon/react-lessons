import './App.css'
import Checkbox from './components/Checkbox'
import Form from './components/Form'
import Input from './components/Input'
import Password from './components/Password'
import RegisterForm from './components/RegisterForm'

function App() {

  return (
    <div> 
      <Input />
      <Password />
      <Form />
      <Checkbox />
      <hr />
      <h1>Register here</h1>
      <RegisterForm/>
    </div>
  )
}

export default App
