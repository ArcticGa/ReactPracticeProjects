import './index.scss'
import { useState } from 'react'

function App() {
  const [value, setValue] = useState(0)

  return (
    <div className="App">
      <div>
        <h2>Счетчик:</h2>
        <h1>{value}</h1>
        <button className="minus" onClick={() => setValue(value - 1)}>
          - Минус
        </button>
        <button className="plus" onClick={() => setValue(value + 1)}>
          Плюс +
        </button>
      </div>
    </div>
  )
}

export default App
