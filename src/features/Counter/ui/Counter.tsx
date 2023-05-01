import { useCounterValue } from '../model/selectors/getCounterValue/getConterValue'
import { useCounterActions } from '../model/slice/counterSlice'

export const Counter = () => {
  const counterValue = useCounterValue()

  const { increment, decrement } = useCounterActions()
  const inc = () => increment()
  const dec = () => decrement()

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
