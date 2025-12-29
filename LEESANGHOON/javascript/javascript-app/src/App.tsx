import './App.css'
import { CalculationExample } from './math_operation/CalculationExample'
import { VariableAndDataType } from './data_type/VariableAndDataType'
import { LogicalOperationExample } from './logical_operation/LogicalOperationExample'


function App() {
  return (
    <>
      <div>
      <CalculationExample/>
      <VariableAndDataType/>
      <LogicalOperationExample/>
      </div>
    </>
  )
}

export default App
