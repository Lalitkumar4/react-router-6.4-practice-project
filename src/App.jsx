import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom"

// pages
import Home from "./pages/Home"
import About from "./pages/About"
import Faq from "./pages/help/Faq"
import Contact, { contactAction } from "./pages/help/Contact"
import NotFound from "./pages/NotFound"
import Careers, { careersLoader } from "./pages/careers/Careers"
import CareersDetails, {
  careersDetailsLoader,
} from "./pages/careers/CareersDetails"
import CareersError from "./pages/careers/CareersError"

// layouts
import RootLayout from "./layouts/RootLayout"
import HelpLayout from "./layouts/HelpLayout"
import CareersLayout from "./layouts/CareersLayout"

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />

      <Route path="help" element={<HelpLayout />}>
        <Route path="faq" element={<Faq />} />
        <Route path="contact" element={<Contact />} action={contactAction} />
      </Route>

      <Route
        path="careers"
        element={<CareersLayout />}
        errorElement={<CareersError />}
      >
        <Route index element={<Careers />} loader={careersLoader} />
        <Route
          path=":id"
          element={<CareersDetails />}
          loader={careersDetailsLoader}
        />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Route>
  )
)

function App() {
  return <RouterProvider router={router} />
}

export default App
