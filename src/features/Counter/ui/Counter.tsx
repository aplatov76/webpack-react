import { useDispatch, useSelector } from 'react-redux'
import { getCounterValue } from '../model/selectors/getCounterValue/getConterValue'
import { increment, decrement } from '../model/slice/counterSlice'

export const Counter = () => {
  const dispatch = useDispatch()
  const counterValue = useSelector(getCounterValue)
  const inc = () => {
    dispatch(increment())
  }

  const dec = () => {
    dispatch(decrement())
  }

  return (
    <div>
      <h1>Value: </h1>
      <div style={{ display: 'flex' }}>
        <span data-testid="value-title">{counterValue}</span>
        <button data-testid="increment" onClick={inc}>
          inc
        </button>
        <button data-testid="decrement" onClick={dec}>
          dec
        </button>
      </div>
    </div>
  )
}
