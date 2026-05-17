# Component Guide

This document is the required checklist for Codex before creating or modifying components in Unbirthday.

## 1. First Read The Context

Before writing a component:

1. Inspect the current component structure in `src/`.
2. Read nearby components, styles, and naming patterns.
3. Check `DESIGN.md` when visual decisions are needed. If that file is hard to read or conflicts with actual code, prefer the current app behavior and note the ambiguity.
4. Confirm whether the component should be local to a feature or reusable.

Do not create a broad abstraction before there are at least two clear uses or a strong product reason.

## 2. Component Shape

Use simple React function components.

Recommended pattern:

```jsx
export function ComponentName({ value, onChange, disabled = false }) {
  return (
    <div className="component-name">
      {/* UI */}
    </div>
  );
}
```

Rules:

- Use PascalCase for component names.
- Use descriptive prop names that describe behavior, not implementation.
- Keep props minimal and stable.
- Prefer composition with `children` for flexible content.
- Avoid deeply nested JSX. Extract a small subcomponent only when it improves readability.
- Keep component state as close as possible to where it is used.
- Avoid duplicating derived state. Compute it during render unless expensive.

## 3. File Organization

For a small component, keep it close to the feature that uses it.

Suggested paths:

- `src/components/ComponentName.jsx` for shared UI.
- `src/features/<feature>/ComponentName.jsx` for feature-specific UI.
- `src/lib/` only for non-UI helpers used across features.

Avoid creating barrel files, folder hierarchies, or design-system layers until the project actually needs them.

## 4. Styling

Use the existing styling approach first.

Current project notes:

- Global CSS lives in `src/styles.css`.
- Tailwind CSS is available, but do not mix many style strategies in one component without reason.
- Keep class names semantic when writing plain CSS.

Visual principles:

- Favor restrained, readable interfaces.
- Use stable spacing, alignment, and responsive constraints.
- Buttons and controls should have a minimum target size of `44px`.
- Use clear hover, active, disabled, and focus-visible states.
- Avoid layout shifts caused by dynamic text, hover styles, or loading states.
- Do not rely on color alone to communicate state.

When adding CSS:

- Scope styles by component or feature class names.
- Reuse existing spacing, color, typography, and border patterns.
- Avoid large global selector changes unless intentionally updating the whole app.
- Do not add decorative gradients, heavy shadows, or oversized rounded corners unless the existing design already uses them.

## 5. Accessibility

Every component must be keyboard and screen-reader friendly.

Checklist:

- Use semantic HTML before ARIA.
- Use `<button>` for actions and `<a>` for navigation.
- Give form controls a visible label or an accessible name.
- Preserve logical tab order.
- Add `aria-*` only when semantic HTML is not enough.
- Ensure `disabled`, `aria-disabled`, `aria-expanded`, `aria-current`, and `aria-invalid` are accurate when used.
- Ensure focus states are visible.
- Ensure interactive icons have an accessible label.
- Do not trap focus unless implementing a modal or menu pattern that correctly manages focus.

## 6. Responsive Behavior

Design the component for at least:

- Mobile width around `320px`.
- Tablet width around `768px`.
- Desktop width around `1280px`.

Rules:

- Text must not overflow its container.
- Controls must remain tappable on mobile.
- Use `min-width: 0` where flex/grid children need to shrink.
- Prefer responsive layout constraints over viewport-scaled font sizes.
- Keep fixed-format UI elements stable with explicit dimensions, `aspect-ratio`, or grid tracks.

## 7. Data And State

Keep data flow boring and obvious.

- Lift state only when multiple components need it.
- Prefer controlled components for forms when the parent owns the value.
- Prefer local state for temporary UI state such as open/closed, selected tab, or input draft.
- Use clear loading, empty, error, and success states when data can be absent or asynchronous.
- Do not mutate props or shared data.

## 8. Performance

Optimize for clarity first, but avoid obvious waste.

- Avoid expensive work inside render.
- Use `useMemo` and `useCallback` only when there is a real cost or identity-sensitive child.
- Do not create large inline arrays or objects repeatedly if they can be module constants.
- Keep effects minimal. If something can be derived during render, do not put it in an effect.
- Always clean up subscriptions, timers, and event listeners.

## 9. Testing And Verification

Before finishing component work:

1. Run the smallest relevant verification command.
2. Run `npm run build` for user-facing component changes unless there is a clear blocker.
3. For substantial UI changes, open the app in the browser and inspect at mobile and desktop sizes.
4. Check keyboard navigation for interactive components.
5. Check that the console has no new errors.

If verification cannot be run, state why in the final response.

## 10. Review Checklist

Before handing off, confirm:

- The component has a clear responsibility.
- The component name and prop names are understandable.
- Accessibility basics are covered.
- Mobile and desktop layouts work.
- Empty, loading, disabled, and error states are handled when relevant.
- Styling matches the existing app.
- No unrelated files or behavior were changed.
- The implementation is no more abstract than the current need requires.

