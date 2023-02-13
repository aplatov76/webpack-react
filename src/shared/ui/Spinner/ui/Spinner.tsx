import './Spinner.sass'

interface SpinnerProps {
  className?: string
}

export const Spinner = (props: SpinnerProps) => {
  return (
    <div className="lds-default">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  )
}
