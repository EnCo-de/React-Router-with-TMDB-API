import { useState } from "react"

const NavHoverLinks = ({ title = "", subLinks = [], hides = false }) => {
  const [isSubHidden, setIsSubHidden] = useState(true)
  const showSubLinks = () => {
    title.trim().length === 0
      ? setIsSubHidden(false)
      : setIsSubHidden((value) => !value)
  }
  return (
    <li
      key={title + title.length}
      className={"nav-sub" + (hides ? " hide-s" : "")  + (title.trim().length === 0 ? " nav-sub-s" : "")}
      onClick={showSubLinks}
    >
      {title.length > 0 && <div className="nav-sub-cat">{title}</div>}
      {subLinks.length > 0 && (
        <div className={`nav-sub-hover ${title.trim().length > 0 && isSubHidden && "hide-s"}`}>
          <ul className="nav-sub-links">
            {subLinks.map((link, index) => (
              <li key={index + link} className="nav-link">
                {link}
              </li>
            ))}
          </ul>
        </div>
      )}
    </li>
  )
}
export default NavHoverLinks
