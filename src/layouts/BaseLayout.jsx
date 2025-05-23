import { Outlet } from "react-router-dom"
import { ThemeProvider } from "styled-components"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { THEME } from "./constants"

const BaseLayout = () => {
  return (
    <ThemeProvider theme={THEME}>
      <Header />
      <Outlet />
      <Footer />
    </ThemeProvider>
  )
}
export default BaseLayout
