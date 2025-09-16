import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Satsang from './pages/Satsang.jsx'
import Bhajan from './pages/Bhajan.jsx'
import Program from './pages/Program.jsx'
import Blog from './pages/Blog.jsx'
import Gallery from './pages/Gallery.jsx'
import Contact from './pages/Contact.jsx'
import ChatWithUs from './pages/Chatwithus.jsx'
import ImportantDates from './pages/ImportantDates.jsx'   // ✅ Add import

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    children: [
      { index: true, element: <Home/> },
      { path: 'about', element: <About/> },
      { path: 'satsang', element: <Satsang/> },
      { path: 'bhajan', element: <Bhajan/> },
      { path: 'program', element: <Program/> },
      { path: 'blog', element: <Blog/> },
      { path: 'gallery', element: <Gallery/> },
      { path: 'contact', element: <Contact/> },
      { path: 'chat', element: <ChatWithUs /> },
      { path: 'important-dates', element: <ImportantDates /> }, // ✅ Add route
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
