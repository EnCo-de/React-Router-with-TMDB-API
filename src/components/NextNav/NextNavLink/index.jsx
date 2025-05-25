import { NextNavButton } from "../styles"

const NextNavLink = ({ children, active, dots, disabled }) => (
  <li>
    <NextNavButton
      as={dots && "span"}
      $current={active}
      disabled={disabled || active}
    >
      {children}
    </NextNavButton>
  </li>
)
export default NextNavLink
