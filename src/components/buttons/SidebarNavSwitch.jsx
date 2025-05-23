import basic_menu_white from "@assets/icons/basic-600-menu.svg"
import basic_close from "@assets/icons/basic-599-menu-close.svg"

const SidebarNavSwitch = ({ isHidden, setHidden }) => {
  const handleSwitch = () => {
    setHidden((value) => !value)
  }
  return (
    <button onClick={handleSwitch} type="button" className="nav-switch">
      {isHidden ? (
        <img
          src={basic_menu_white}
          alt="icons-basic-600-menu"
          className="nav-icon hide-l"
        />
      ) : ( 
        <img
          src={basic_close}
          alt="icons-basic-599-menu-close"
          className="nav-icon invert hide-l"
        />
      )}
    </button>
  )
}

export default SidebarNavSwitch
