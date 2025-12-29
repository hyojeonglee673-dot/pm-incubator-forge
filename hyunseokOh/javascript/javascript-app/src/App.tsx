import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { CalculationExample } from './math_operation/CalculationExample'
import { VariableAndDataTypes } from './data_type/VariableAndDataTypes'
import { LogicalOperationExample } from './logical_operation/LogicalOperationExample'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        {/* 커스텀 컴포넌트 */}
        <CalculationExample/>
        <br />
        <VariableAndDataTypes/>
        <br />
        <LogicalOperationExample/>
      </div>
    </>
  )
}

export default App
