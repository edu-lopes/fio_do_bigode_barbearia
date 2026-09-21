export default function Button({ variant = 'solid', href, icon, children, className = '', ...rest }) {
  const classes = `btn btn--${variant} ${className}`
  const content = (
    <>
      <span className="btn__label">{children}</span>
      {icon && <span className="btn__icon">{icon}</span>}
    </>
  )
  if (href) {
    return (
      <a href={href} className={classes} {...rest}>
        {content}
      </a>
    )
  }
  return (
    <button className={classes} {...rest}>
      {content}
    </button>
  )
}
