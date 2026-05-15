import { useState } from 'react';

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <main className="app-shell">
      <section className="workspace">
        <p className="eyebrow">React + Vite</p>
        <h1>Unbirthday</h1>
        <p className="intro">
          Vite development is ready. Edit <code>src/App.jsx</code> and the page
          will update instantly.
        </p>
        <button type="button" onClick={() => setCount((value) => value + 1)}>
          Count: {count}
        </button>
      </section>
    </main>
  );
}
