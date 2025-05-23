import { NextNavButton } from "../styles"

const NextNavLink = ({ children, active }) => (
  <li>
    <NextNavButton $current={active} >{children}</NextNavButton>
  </li>
)
export default NextNavLink
