export function Stack({
  children,
  gap = 'm',
  direction = 'vertical',
  align = 'stretch',
  className = '',
}) {
  const classes = [
    'ui-stack',
    `ui-stack--${direction}`,
    `ui-stack--gap-${gap}`,
    `ui-stack--align-${align}`,
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return <div className={classes}>{children}</div>;
}

