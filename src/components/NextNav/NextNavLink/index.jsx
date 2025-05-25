import { NextNavButton } from "../styles"

const NextNavLink = ({
  children,
  handleClick,
  args,
  active,
  disabled,
  dots,
}) => (
  <li>
    <NextNavButton
      as={dots && "span"}
      onClick={handleClick ? () => handleClick(...args) : undefined}
      $current={active}
      disabled={disabled}
    >
      {children}
    </NextNavButton>
  </li>
)
export default NextNavLink
