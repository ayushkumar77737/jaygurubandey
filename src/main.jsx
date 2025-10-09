import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import AboutDetails from './pages/AboutDetails.jsx'   // ✅ Import AboutDetails
import Satsang from './pages/Satsang.jsx'
import Bhajan from './pages/Bhajan.jsx'
import Program from './pages/Program.jsx'
import Blog from './pages/Blog.jsx'
import BlogDetails from './pages/BlogDetails.jsx'
import Gallery from './pages/Gallery.jsx'
import Contact from './pages/Contact.jsx'
import ChatWithUs from './pages/Chatwithus.jsx'
import ImportantDates from './pages/ImportantDates.jsx'
import Contribute from './pages/Contribute.jsx'
import PrivacyPolicy from './pages/PrivacyPolicy.jsx'
import SatguruArti from './pages/SatguruArti.jsx'
import CommitteeMembers from './pages/CommitteeMembers.jsx'


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: 'about', element: <About /> },
      { path: 'about/:id', element: <AboutDetails /> },   // ✅ Details route for About
      { path: 'satsang', element: <Satsang /> },
      { path: 'bhajan', element: <Bhajan /> },
      { path: 'program', element: <Program /> },
      { path: 'blog', element: <Blog /> },
      { path: 'blog/:id', element: <BlogDetails /> },
      { path: 'gallery', element: <Gallery /> },
      { path: 'contact', element: <Contact /> },
      { path: 'chat', element: <ChatWithUs /> },
      { path: 'important-dates', element: <ImportantDates /> },
      { path: 'contribute', element: <Contribute /> },
      { path: 'privacy-policy', element: <PrivacyPolicy /> },
      { path: 'satguru-arti', element: <SatguruArti /> },
      { path: 'committee-members', element: <CommitteeMembers /> },
    ],
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
