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
import SatguruChalisa from './pages/SatguruChalisa.jsx'
import PublishedBooks from './pages/PublishedBooks.jsx'
import LatestUpdates from './pages/LatestUpdates.jsx'
import SoulTwist from './pages/SoulTwist.jsx'
import FAQ from './pages/FAQ.jsx'
import IntlCenters from './pages/IntlCenters.jsx'
import Spotlight from './pages/Spotlight.jsx'
import DailySchedule from './pages/DailySchedule.jsx'
import Feedback from './pages/Feedback.jsx'
import Testimonies from './pages/Testimonies.jsx'
import SubmitTestimony from './pages/SubmitTestimony.jsx'
import ExploreAshram from './pages/ExploreAshram.jsx'
import DailySatsang from './pages/DailySatsang.jsx'
import StayConnected from './pages/StayConnected.jsx'
import NotFound from './pages/NotFound.jsx'
import AshramRules from './pages/Beforeyouvisit.jsx'
import DivineMoments from "./pages/DivineMoments.jsx";
import QuickStart from './pages/QuickStart.jsx'
import AshramVision from './pages/AshramVision.jsx'

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
      { path: 'satguru-chalisa', element: <SatguruChalisa /> },
      { path: 'committee-members', element: <CommitteeMembers /> },
      { path: 'published-books', element: <PublishedBooks /> },
      { path: 'latest-updates', element: <LatestUpdates /> },
      { path: 'soultwist', element: <SoulTwist /> },
      { path: 'faq', element: <FAQ /> },
      { path: 'intlcenters', element: <IntlCenters /> },
      { path: 'spotlight', element: <Spotlight /> },
      { path: 'dailyschedule', element: <DailySchedule /> },
      { path: 'feedback', element: <Feedback /> },
      { path: 'testimonies', element: <Testimonies /> },
      { path: 'submit-testimony', element: <SubmitTestimony /> },
      { path: 'explore', element: <ExploreAshram /> },
      { path: 'dailysatsang', element: <DailySatsang /> },
      { path: 'stayconnected', element: <StayConnected /> },
      { path: 'beforeyouvisit', element: <AshramRules /> },
      { path: 'divine', element: <DivineMoments /> },
      { path: 'quickstart', element: <QuickStart /> },
      { path: 'ashram-vision', element: <AshramVision /> },
    ],
  },
  { path: '*', element: <NotFound /> },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
