// import JsxValue from './ex-1026-1/JsxValue'
// import StudentList from './ex-1026-2/StudentList'
import { examples } from './examples'
import { useState } from 'react'

function App() {
  const [displayIndex, setDisplayIndex] = useState(0)

  const selection = (
    <select
      value={displayIndex}
      onChange={(e) => {
        setDisplayIndex(Number(e.target.value))
      }}
    >
      {examples.map((v, i) => {
        return (
          <option key={i} value={i}>
            {v.name}
          </option>
        )
      })}
    </select>
  )

  // 動態元件語法，注意命名開頭英文一定要大寫
  const MyComponent = examples[displayIndex].component

  return (
    <>
      {selection}
      <p>元件檔案路徑: {examples[displayIndex].path}</p>
      <hr />
      <MyComponent />
    </>
  )
}

export default App
