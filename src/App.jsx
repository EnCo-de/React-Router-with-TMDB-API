import { useState } from "react"

import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom"

import { LoadStateContext } from "@/components/shared/LoadStateContext"
import BaseLayout from "@/layouts/BaseLayout"
import IndexPage from "@/pages/discover"
import DetailsPage from "@/pages/details"
import NotFoundPage from "@/pages/NotFoundPage"
import SearchPage from "@/pages/search"

function App() {
  const [fillLoadBar, setFillLoadBar] = useState(true)
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<BaseLayout />}>
        <Route index element={<IndexPage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route
          path="/movie/:id"
          element={<DetailsPage />}
          errorElement={<NotFoundPage />}
        />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    )
  )
  return (
    <LoadStateContext.Provider
      value={{
        fillLoadBar,
        setFillLoadBar,
      }}
    >
      <RouterProvider router={router} />
    </LoadStateContext.Provider>
  )
}

export default App
