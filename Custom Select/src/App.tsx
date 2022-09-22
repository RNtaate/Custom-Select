import { Select } from "./Select";

let options = [
  {label: "First", value: 1},
  {label: "Second", value: 2},
  {label: "Third", value: 3},
  {label: "Fourth", value: 4},
  {label: "Fifth", value: 5}
]
function App() {
  return (
    <main>
      <Select options={ options } />
    </main>
  )
}

export default App
