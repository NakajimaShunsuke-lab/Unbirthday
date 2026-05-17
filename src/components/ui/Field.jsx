export function Field({
  id,
  label,
  hint,
  error,
  className = '',
  children,
}) {
  const classes = ['ui-field', className].filter(Boolean).join(' ');
  const hintId = hint ? `${id}-hint` : undefined;
  const errorId = error ? `${id}-error` : undefined;

  return (
    <div className={classes}>
      <label className="ui-field__label" htmlFor={id}>
        {label}
      </label>
      {children({ hintId, errorId })}
      {hint ? (
        <p className="ui-field__hint" id={hintId}>
          {hint}
        </p>
      ) : null}
      {error ? (
        <p className="ui-field__error" id={errorId}>
          {error}
        </p>
      ) : null}
    </div>
  );
}

export function TextInput({
  id,
  label,
  hint,
  error,
  className = '',
  inputClassName = '',
  ...props
}) {
  const describedBy = [hint ? `${id}-hint` : '', error ? `${id}-error` : '']
    .filter(Boolean)
    .join(' ');

  return (
    <Field id={id} label={label} hint={hint} error={error} className={className}>
      {() => (
        <input
          id={id}
          className={['ui-input', inputClassName].filter(Boolean).join(' ')}
          aria-invalid={error ? 'true' : undefined}
          aria-describedby={describedBy || undefined}
          {...props}
        />
      )}
    </Field>
  );
}

export function TextArea({
  id,
  label,
  hint,
  error,
  className = '',
  textareaClassName = '',
  rows = 4,
  ...props
}) {
  const describedBy = [hint ? `${id}-hint` : '', error ? `${id}-error` : '']
    .filter(Boolean)
    .join(' ');

  return (
    <Field id={id} label={label} hint={hint} error={error} className={className}>
      {() => (
        <textarea
          id={id}
          rows={rows}
          className={['ui-input ui-textarea', textareaClassName].filter(Boolean).join(' ')}
          aria-invalid={error ? 'true' : undefined}
          aria-describedby={describedBy || undefined}
          {...props}
        />
      )}
    </Field>
  );
}

