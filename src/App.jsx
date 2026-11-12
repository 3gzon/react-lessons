import './App.css'
import { useEffect, useState } from 'react'
import User from "./components/User"

function App() {
  const [users, setUsers] = useState([])
  const [errors, setErrors] = useState("")

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((res) => {
        console.log(res);
        setUsers(res)
      }).catch((error) => {
        setErrors(error)
      })

  }, [])

  return (
    <div>
      {
        users.map((user) => (
          <div key={user.id}>
            <User user={user}/>
          </div>
        ))
      }
      <p>{errors}</p>
    </div>
  )
}

export default App
