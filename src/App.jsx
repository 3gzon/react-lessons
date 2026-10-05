import ConditionalRendering from "./components/ConditionalRendering";
import ObjectList from "./components/ObjectList";


function App() {
  const students = ["zana", "xhenis", "hana"];
  return (
    <div>
      <h1>this is the list of my students</h1>
      <ul>
        {
          students.map((student) => (
            <li key={student}>{student}</li>
          ))
        }
      </ul>
      <ObjectList />
      <ConditionalRendering/>
    </div>
  )
}

export default App
