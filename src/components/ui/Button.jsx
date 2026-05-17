const buttonClassByVariant = {
  primary: 'ui-button ui-button--primary',
  secondary: 'ui-button ui-button--secondary',
  text: 'ui-button ui-button--text',
};

export function Button({
  children,
  variant = 'primary',
  type = 'button',
  className = '',
  ...props
}) {
  const variantClass = buttonClassByVariant[variant] ?? buttonClassByVariant.primary;
  const classes = [variantClass, className].filter(Boolean).join(' ');

  return (
    <button type={type} className={classes} {...props}>
      {children}
    </button>
  );
}

