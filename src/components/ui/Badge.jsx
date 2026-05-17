const badgeClassByTone = {
  neutral: 'ui-badge',
  success: 'ui-badge ui-badge--success',
  warning: 'ui-badge ui-badge--warning',
  danger: 'ui-badge ui-badge--danger',
};

export function Badge({ children, tone = 'neutral', className = '' }) {
  const toneClass = badgeClassByTone[tone] ?? badgeClassByTone.neutral;
  const classes = [toneClass, className].filter(Boolean).join(' ');

  return <span className={classes}>{children}</span>;
}

