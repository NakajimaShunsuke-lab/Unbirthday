import { DailyCalendarPage } from './pages/daily-calendar/DailyCalendarPage.jsx';

const routes = [
  {
    path: '/',
    label: '日めくり',
    Component: DailyCalendarPage,
  },
  {
    path: '/daily-calendar',
    label: '日めくり',
    Component: DailyCalendarPage,
  },
];

function findRoute(pathname) {
  return routes.find((route) => route.path === pathname) ?? null;
}

function NotFoundPage() {
  return (
    <main className="app-route app-route--plain" aria-labelledby="not-found-title">
      <div className="app-route__content">
        <p className="ui-eyebrow">Unbirthday</p>
        <h1 id="not-found-title" className="app-route__title">
          ページが見つかりません
        </h1>
        <p className="app-route__description">
          指定されたページはまだ用意されていません。
        </p>
        <a className="ui-button" href="/daily-calendar">
          日めくりを見る
        </a>
      </div>
    </main>
  );
}

export default function App() {
  const activeRoute = findRoute(window.location.pathname);

  if (!activeRoute) {
    return <NotFoundPage />;
  }

  const Page = activeRoute.Component;

  return <Page />;
}
