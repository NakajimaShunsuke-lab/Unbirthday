import { dailyCalendar } from './dailyCalendarData.js';
import { MiniCalendar } from './MiniCalendar.jsx';
import './daily-calendar.css';

export function DailyCalendarPage() {
  return (
    <main className="daily-calendar-page">
      <article className="daily-calendar-sheet" aria-labelledby="daily-calendar-title">
        <div className="daily-calendar-sheet__binding" aria-hidden="true">
          <span />
          <span />
          <span />
          <span />
          <span />
        </div>

        <header className="daily-calendar-sheet__header">
          <p className="ui-eyebrow">{dailyCalendar.heading}</p>
          <h1 id="daily-calendar-title">{dailyCalendar.year}</h1>
          <p className="daily-calendar-sheet__era">{dailyCalendar.era}</p>
        </header>

        <section className="daily-calendar-date" aria-label={dailyCalendar.ariaLabel}>
          <aside className="daily-calendar-date__weekday" aria-label="曜日">
            <p className="daily-calendar-date__weekday-kanji">{dailyCalendar.weekday}</p>
            <p className="daily-calendar-date__weekday-short">{dailyCalendar.weekdayShort}</p>
          </aside>

          <div className="daily-calendar-date__number" aria-label={`${dailyCalendar.date}日`}>
            {dailyCalendar.date}
          </div>

          <aside className="daily-calendar-date__month" aria-label="月と暦">
            <p className="daily-calendar-date__month-number">{dailyCalendar.month}</p>
            <p className="daily-calendar-date__month-label">月</p>
            <p className="daily-calendar-date__month-note">{dailyCalendar.monthName}</p>
            <p className="daily-calendar-date__season-note">{dailyCalendar.season}</p>
          </aside>
        </section>

        <section className="daily-calendar-details" aria-label="日々の覚え書き">
          {dailyCalendar.notes.map((note) => (
            <div className="daily-calendar-details__block" key={note.label}>
              <p className="daily-calendar-details__label">{note.label}</p>
              <p className="daily-calendar-details__text">{note.text}</p>
            </div>
          ))}
          <MiniCalendar calendar={dailyCalendar.miniCalendar} />
        </section>

        <section className="daily-calendar-memo" aria-label="メモ">
          <h2>MEMO</h2>
          <div className="daily-calendar-memo__lines" aria-hidden="true">
            <span />
            <span />
            <span />
          </div>
        </section>
      </article>
    </main>
  );
}
