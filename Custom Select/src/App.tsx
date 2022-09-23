import { useState } from "react";
import { Select, SelectOption } from "./Select";


let options = [
  {label: "First", value: 1},
  {label: "Second", value: 2},
  {label: "Third", value: 3},
  {label: "Fourth", value: 4},
  {label: "Fifth", value: 5}
]
function App() {
  const[value, setValue] = useState<SelectOption | undefined>(options[0]);

  return (
    <main>
      <Select options={ options } value={value} onChange={opt => setValue(opt)}/>
    </main>
  )
}

export default App
