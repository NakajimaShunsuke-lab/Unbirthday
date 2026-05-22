export function MiniCalendar({ calendar }) {
  return (
    <table className="daily-mini-calendar" aria-label={calendar.ariaLabel}>
      <caption>{calendar.caption}</caption>
      <thead>
        <tr>
          {calendar.weekdays.map((day) => (
            <th key={day} scope="col">
              {day}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {calendar.weeks.map((week, weekIndex) => (
          <tr key={`week-${weekIndex}`}>
            {week.map((date, dateIndex) => {
              const isSelected = date === calendar.selectedDate;

              return (
                <td key={`${weekIndex}-${dateIndex}`}>
                  {date ? (
                    <span className={isSelected ? 'is-selected' : undefined}>{date}</span>
                  ) : null}
                </td>
              );
            })}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
