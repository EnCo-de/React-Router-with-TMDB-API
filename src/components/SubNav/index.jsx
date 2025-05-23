import sub_hover_black from "@assets/icons/sub-hover-black.svg"

const SubNav = () => {
  return (
    <nav className="details-navbar">
      <ul className="details-nav flex">
        <li className="sub-nav-link flex align-center">
          <span className="details-nav-link">Overview</span>
          <img src={sub_hover_black} className="sub-hover-icon" />
        </li>
        <li className="sub-nav-link flex align-center">
          <span className="details-nav-link">Media</span>
          <img src={sub_hover_black} className="sub-hover-icon" />
        </li>
        <li className="sub-nav-link flex align-center">
          <span className="details-nav-link">Fandom</span>
          <img src={sub_hover_black} className="sub-hover-icon" />
        </li>
        <li className="sub-nav-link flex align-center">
          <span className="details-nav-link">Share</span>
          <img src={sub_hover_black} className="sub-hover-icon" />
        </li>
      </ul>
    </nav>
  )
}

export default SubNav
