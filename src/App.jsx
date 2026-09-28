
const technologies = ["react", "html", "js"];
const students = [
  {
    id: 1,
    firstName: "student 1",
    age:16
  },
  {
    id: 2,
    firstName: "student 2",
    age:16
  }, {
    id: 3,
    firstName: "student 3",
    age:17
  }
]
function App() {

  return (
    <div>
      {
        technologies.map((techlogoy) => (
          <p key={techlogoy}>{techlogoy}</p>
        ))
      }
      {
        students.map((student) => (
          <h1 key={student.id}>{student.firstName}</h1>
        ))
      }
    </div>
  )
}

export default App
