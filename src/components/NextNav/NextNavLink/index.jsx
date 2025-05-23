import { NextNavButton } from "../styles"

const NextNavLink = ({ children, active }) => (
  <li>
    <NextNavButton as={dots && "span"} $current={active}>{children}</NextNavButton>
  </li>
)
export default NextNavLink
