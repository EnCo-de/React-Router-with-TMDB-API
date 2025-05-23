import { useEffect, useState, useContext, useRef } from "react"
import { Link, useLocation } from "react-router-dom"

import blue_short from "@assets/logos/blue_short.svg"
import blue_square_2 from "@assets/logos/blue_square_2.svg"
import basic_plus_white from "@assets/icons/basic-371-plus-white.svg"
import basic_bell_white from "@assets/icons/basic-441-bell.svg"

import { LoadBar } from "@/components/shared/LoadBar"
import { LoadStateContext } from "@/components/shared/LoadStateContext"

import SearchField from "@/components/Header/SearchField"
import SearchFieldSwitch from "@components/buttons/SearchFieldSwitch"
import SidebarNavSwitch from "@components/buttons/SidebarNavSwitch"
import NavHoverLinks from "@/components/Header/NavHoverLinks"
import SubNav from "@/components/SubNav"
import onScroll from "@/utils/scroll"

const Header = () => {
  const { fillLoadBar, setFillLoadBar } = useContext(LoadStateContext)
  const [isSearchFieldHidden, setIsSearchFieldHidden] = useState(true)
  const [isSidebarHidden, setIsSidebarHidden] = useState(true)
  const [headerHidden, setHeaderHidden] = useState("")
  const location = useLocation()

  const navbar = useRef(null)

  useEffect(() => {
    const hideShowHeader = onScroll(navbar.current)
    const handleScroll = () => {
      hideShowHeader(setHeaderHidden)
    }
    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])
  setTimeout(() => setFillLoadBar(false), 1000)

  return (
    <header>
      {fillLoadBar && <LoadBar />}
      <div
        ref={navbar}
        className={
          "header flex space-between align-center w-full " + headerHidden
        }
      >
        <div className="header-container flex space-between align-center w-full">
          <Link to="/">
            <img
              src={blue_short}
              alt="blue short logo"
              className="logo-l hide-s"
            />
          </Link>
          <nav className={`nav sidebar fs-16 ${!isSidebarHidden && "show"}`}>
            <ul className="horizontal">
              <NavHoverLinks
                title="Movies"
                subLinks={["Popular", "Now Playing", "Upcoming", "Top Rated"]}
              />
              <NavHoverLinks
                title="TV Shows"
                subLinks={["Popular", "Airing Today", "On TV", "Top Rated"]}
              />
              <NavHoverLinks title="People" subLinks={["Popular People"]} />
              <NavHoverLinks
                title="More"
                subLinks={[
                  "Discussions",
                  "Leaderboard",
                  "Support",
                  "API Documentation",
                  "API for Business",
                ]}
                hides={true}
              />
              <NavHoverLinks
                title=""
                subLinks={[
                  "Contribution Bible",
                  "Discussions",
                  "Leaderboard",
                  "API",
                  "Support",
                  "About",
                  "Logout",
                ]}
              />
            </ul>
          </nav>

          <div className="nav-center flex align-center">
            <SidebarNavSwitch
              isHidden={isSidebarHidden}
              setHidden={setIsSidebarHidden}
            />
            <Link to="/">
              <img
                src={blue_square_2}
                alt="blue_square_logo_2"
                className="logo-s hide-l"
              />
            </Link>

            <div className="nav-droite flex align-center">
              <img
                src={basic_plus_white}
                alt="basic_plus_white icon"
                className="nav-icon hide-s"
              />
              <div className="translate hide-s">EN</div>
              <img src={basic_bell_white} alt="" className="nav-icon" />
              <div className="no_click user" title="Profile and Settings">
                U
              </div>
              <SearchFieldSwitch
                isHidden={isSearchFieldHidden}
                setHidden={setIsSearchFieldHidden}
              />
            </div>
          </div>
        </div>
        <SearchField isHidden={isSearchFieldHidden} />
      </div>
      {location.pathname.startsWith("/movie/") && <SubNav />}
    </header>
  )
}
export default Header
