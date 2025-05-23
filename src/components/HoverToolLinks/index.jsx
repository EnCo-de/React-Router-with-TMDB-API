import HoverToolLink from "./HoverToolLink"
import { HOVER_TOOL_LINKS } from "./constants"
import { HoverDeck } from "./styles"

const HoverTooltip = () => {
  return (
    <HoverDeck>
      <ul>
        {HOVER_TOOL_LINKS.map(({ icon, text }, index) => (
          <HoverToolLink key={index + text} icon={icon} text={text} />
        ))}
      </ul>
    </HoverDeck>
  )
}
export default HoverTooltip
