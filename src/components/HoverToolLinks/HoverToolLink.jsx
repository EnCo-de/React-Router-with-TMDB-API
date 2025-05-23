import { HOVER_TOOL_LINKS } from "./constants"
import { HoverToolLi, HoverIcon } from "./styles"

const HoverToolLink = ({ icon, text }) => (
  <HoverToolLi>
    <HoverIcon src={icon} alt={text} />
    <span>{text}</span>
  </HoverToolLi>
)

export default HoverToolLink
