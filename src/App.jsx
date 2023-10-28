import './App.css'
import { useSelector, useDispatch } from 'react-redux'
import { increase, decrease, increaseByCustomNumber } from './features/counter/counterSlice'

function App() {
  const number = useSelector((state) => {
    return state.counter.number;
  })

  const dispatch = useDispatch()

  return (
    <div className="app">
      <h1>Number {number}</h1>
      <button onClick={() => dispatch(increase())}>increase</button>
      <button onClick={() => dispatch(decrease())}>decrease</button>
      <button onClick={() => dispatch(increaseByCustomNumber(5))}>increase by 5</button>
    </div>
  )
}

export default App
