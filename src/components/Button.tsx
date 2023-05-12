export interface IButton extends React.ComponentPropsWithoutRef<'button'> {
  ramdomData: () => void
}

const Button: React.FC<IButton> = ({ ramdomData, ...btnProps }) => {
  return (
    <button {...btnProps} onClick={ramdomData}>
      Button
    </button>
  )
}

export default Button
