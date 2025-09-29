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
import BlogDetails from './pages/BlogDetails.jsx'   // ✅ Import BlogDetails
import Gallery from './pages/Gallery.jsx'
import Contact from './pages/Contact.jsx'
import ChatWithUs from './pages/Chatwithus.jsx'
import ImportantDates from './pages/ImportantDates.jsx'
import Contribute from './pages/Contribute.jsx'
import PrivacyPolicy from './pages/PrivacyPolicy.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: 'about', element: <About /> },
      { path: 'satsang', element: <Satsang /> },
      { path: 'bhajan', element: <Bhajan /> },
      { path: 'program', element: <Program /> },
      { path: 'blog', element: <Blog /> },
      { path: 'blog/:id', element: <BlogDetails /> },   // ✅ Details route
      { path: 'gallery', element: <Gallery /> },
      { path: 'contact', element: <Contact /> },
      { path: 'chat', element: <ChatWithUs /> },
      { path: 'important-dates', element: <ImportantDates /> },
      { path: 'contribute', element: <Contribute /> },
      { path: 'privacy-policy', element: <PrivacyPolicy /> },
    ],
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
