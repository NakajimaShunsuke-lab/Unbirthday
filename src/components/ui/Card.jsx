export function Card({ children, className = '', ...props }) {
  const classes = ['ui-card', className].filter(Boolean).join(' ');

  return (
    <section className={classes} {...props}>
      {children}
    </section>
  );
}

export function CardHeader({ eyebrow, title, description, children }) {
  return (
    <header className="ui-card__header">
      {eyebrow ? <p className="ui-eyebrow">{eyebrow}</p> : null}
      {title ? <h3 className="ui-card__title">{title}</h3> : null}
      {description ? <p className="ui-card__description">{description}</p> : null}
      {children}
    </header>
  );
}

export function CardBody({ children, className = '' }) {
  const classes = ['ui-card__body', className].filter(Boolean).join(' ');

  return <div className={classes}>{children}</div>;
}

export function CardFooter({ children, className = '' }) {
  const classes = ['ui-card__footer', className].filter(Boolean).join(' ');

  return <footer className={classes}>{children}</footer>;
}

