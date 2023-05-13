export interface IButton extends React.ComponentPropsWithoutRef<'button'> {
  children?: React.ReactNode
  clasName?: string
}

const Button: React.FC<IButton> = ({ children, className, ...btnProps }) => {
  return (
    <button className={`notebook__btn ${className}`} {...btnProps}>
      {children}
    </button>
  )
}

export default Button
