# Add Routing (React + Vite + React Router v7)

Follow these **exact** steps in your project:

1) Ensure deps are installed (already present in your project):
```bash
npm i react-router-dom
```
2) **Turn `App.jsx` into a layout** that always shows the Navbar and an `<Outlet/>` for pages.

3) **Define routes in `src/main.jsx`** using `createBrowserRouter` + `RouterProvider`.

4) **Create page files** in `src/pages/`:
`Home.jsx, About.jsx, Satsang.jsx, Bhajan.jsx, Program.jsx, Blog.jsx, Gallery.jsx, Contact.jsx, NotFound.jsx`.

5) **Wire the Navbar links** with `<NavLink>` to the routes.

6) Run the app:
```bash
npm run dev
```
Then open the link shown in the terminal.

## File changes made here (for reference)

- `src/App.jsx` — now renders `<Navbar/>` + `<Outlet/>`.
- `src/main.jsx` — defines all routes with `createBrowserRouter`.
- `src/pages/*` — new page components created.
- `src/Components/Navbar/Navbar.jsx` — uses `<NavLink>` instead of `<button>`.
- `src/Components/Navbar/Navbar.css` — optional `.btn.active` style appended.

> Tip: `NavLink` automatically adds the `active` class on the current route. You can style it in CSS.
