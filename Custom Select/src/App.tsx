import { useState } from "react";
import { Select, SelectOption } from "./Select";


let options = [
  {label: "JavaScript", value: 1},
  {label: "Ruby", value: 2},
  {label: "Java", value: 3},
  {label: "Laravel", value: 4},
  {label: "Python", value: 5},
  {label: "GoLang", value: 6},
  {label: "C++", value: 7},
  {label: "C#", value: 8},
  {label: "PHP", value: 9},
]
function App() {
  const[value, setValue] = useState<SelectOption | undefined>(options[0]);
  const[value2, setValue2] = useState<SelectOption[]>([])

  return (
    <main>
      <h1>Languages Custom Select</h1>
      <br />
      <h4>Multi Select</h4>
      <Select multiple={true} options={options} value={value2} onChange={optArr => setValue2(optArr)}/>
      <br />
      <h4>Single Select</h4>
      <Select options={ options } value={value} onChange={opt => setValue(opt)}/>
    </main>
  )
}

export default App
