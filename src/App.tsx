import * as React from 'react';
import { Routes, Route, Outlet, NavLink, Link } from 'react-router-dom';

import Home from './pages/Home';
import Page404 from './pages/Page404';

export default function App() {
  return (
    <div>
      <div className="header">
        <h1>Homework</h1>
        <h3>React Router - CRUD</h3>
      </div>

      {/* Routes nest inside one another. Nested route paths build upon
            parent route paths, and nested route elements render inside
            parent route elements. See the note about <Outlet> below. */}

      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="dashboard" element={<Dashboard />} />

          {/* Using path="*"" means "match anything", so this route
                acts like a catch-all for URLs that we don't have explicit
                routes for. */}
          <Route path="*" element={<Page404 />} />
        </Route>
      </Routes>
    </div>
  );
}

function Layout() {
  return (
    <div>
      {/* A "layout route" is a good place to put markup you want to
          share across all the pages on your site, like navigation. */}
      <nav className="menu">
        <NavLink className="menu__item" to="/">
          Главная
        </NavLink>
        <NavLink className="menu__item" to="/posts/new">
          Новый пост
        </NavLink>
        <NavLink className="menu__item" to="/posts">
          Все посты
        </NavLink>
      </nav>

      <hr />

      {/* An <Outlet> renders whatever child route is currently active,
          so you can think about this <Outlet> as a placeholder for
          the child routes we defined above. */}
      <div className="page">
        <Outlet />
      </div>
    </div>
  );
}

function About() {
  return (
    <div>
      <h2>About</h2>
    </div>
  );
}

function Dashboard() {
  return (
    <div>
      <h2>Dashboard</h2>
    </div>
  );
}

function NoMatch() {
  return (
    <div>
      <h2>Nothing to see here!</h2>
      <p>
        <Link to="/">Go to the home page</Link>
      </p>
    </div>
  );
}
